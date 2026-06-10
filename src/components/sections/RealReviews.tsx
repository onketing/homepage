"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { REVIEW_UNITS, type ReviewImage, type ReviewUnit } from "@/data/review-images";

const BAND = "h-[280px] sm:h-[340px] md:h-[440px]";
const HOLD_MS = 2000;
const MOVE_THRESHOLD = 8;

type FrameProps = {
	img: ReviewImage;
	className?: string;
	onEnter: (img: ReviewImage) => void;
};

const Frame = ({ img, className, onEnter }: FrameProps) => (
	// biome-ignore lint/a11y/noStaticElementInteractions: hover-only visual effect
	<div
		className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5 ${className ?? ""}`}
		style={{ aspectRatio: `${img.w} / ${img.h}` }}
		onMouseEnter={() => onEnter(img)}
	>
		<Image
			src={img.src}
			alt={img.alt}
			fill
			sizes="(max-width: 768px) 60vw, 440px"
			className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
		/>
	</div>
);

type UnitProps = {
	unit: ReviewUnit;
	onEnter: (img: ReviewImage) => void;
};

const Unit = ({ unit, onEnter }: UnitProps) => {
	if (unit.type === "single") {
		return <Frame img={unit.img} className={`mr-4 shrink-0 ${BAND}`} onEnter={onEnter} />;
	}
	return (
		<div className={`mr-4 flex shrink-0 flex-col gap-4 ${BAND}`}>
			<Frame img={unit.imgs[0]} className="min-h-0 flex-1" onEnter={onEnter} />
			<Frame img={unit.imgs[1]} className="min-h-0 flex-1" onEnter={onEnter} />
		</div>
	);
};

export const RealReviews = () => {
	const [enlargedImg, setEnlargedImg] = useState<ReviewImage | null>(null);
	const pendingImgRef = useRef<ReviewImage | null>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const lastMouseRef = useRef<{ x: number; y: number } | null>(null);

	const handleEnter = useCallback((img: ReviewImage) => {
		pendingImgRef.current = img;
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setEnlargedImg(pendingImgRef.current);
		}, HOLD_MS);
	}, []);

	// 전역 마우스 이동 감지 — 움직이면 타이머 취소 + 확대 닫기
	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			const pos = { x: e.clientX, y: e.clientY };
			if (lastMouseRef.current) {
				const dx = Math.abs(pos.x - lastMouseRef.current.x);
				const dy = Math.abs(pos.y - lastMouseRef.current.y);
				if (dx + dy > MOVE_THRESHOLD) {
					if (timerRef.current) clearTimeout(timerRef.current);
					setEnlargedImg(null);
				}
			}
			lastMouseRef.current = pos;
		};
		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	}, []);

	useEffect(
		() => () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		},
		[],
	);

	return (
		<section id="real-reviews" className="overflow-hidden bg-white py-24 md:py-32">
			{/* Header */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-3xl px-4 text-center md:mb-16">
					<p className="mb-4 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:text-xl">
						실제 후기
					</p>
					<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						직접 겪은 <span className="gradient-text">이야기입니다</span>
					</h2>
				</div>
			</Reveal>

			{/* 마퀴 — pauseOnHover 없음, 계속 스크롤 */}
			<div className="[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
				<Marquee speed={30} gradient={false}>
					{REVIEW_UNITS.map((unit) => (
						<Unit
							key={unit.type === "single" ? unit.img.src : unit.imgs[0].src}
							unit={unit}
							onEnter={handleEnter}
						/>
					))}
				</Marquee>
			</div>

			{/* 확대 이미지 — 뷰포트 중앙 고정, 마퀴와 독립 */}
			<AnimatePresence>
				{enlargedImg && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
						className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center"
					>
						<div className="absolute inset-0 bg-black/50" />
						<motion.div
							initial={{ scale: 0.88, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.88, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 26 }}
							className="relative z-10"
						>
							<Image
								src={enlargedImg.src}
								alt={enlargedImg.alt}
								width={enlargedImg.w}
								height={enlargedImg.h}
								className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
