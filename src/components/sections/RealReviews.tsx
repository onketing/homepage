"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { REVIEW_UNITS, type ReviewImage, type ReviewUnit } from "@/data/review-images";

const BAND = "h-[280px] sm:h-[340px] md:h-[440px]";
const HOLD_MS = 2000;
const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type FrameProps = {
	img: ReviewImage;
	className?: string;
	onOpen: (img: ReviewImage) => void;
};

const Frame = ({ img, className, onOpen }: FrameProps) => {
	const [progress, setProgress] = useState(0);
	const rafRef = useRef<number | null>(null);
	const startTimeRef = useRef<number | null>(null);

	const startTimer = useCallback(() => {
		startTimeRef.current = Date.now();
		const tick = () => {
			if (!startTimeRef.current) return;
			const p = Math.min((Date.now() - startTimeRef.current) / HOLD_MS, 1);
			setProgress(p);
			if (p < 1) {
				rafRef.current = requestAnimationFrame(tick);
			} else {
				setProgress(0);
				startTimeRef.current = null;
				onOpen(img);
			}
		};
		rafRef.current = requestAnimationFrame(tick);
	}, [img, onOpen]);

	const cancelTimer = useCallback(() => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		startTimeRef.current = null;
		setProgress(0);
	}, []);

	useEffect(
		() => () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		},
		[],
	);

	const dashOffset = CIRCUMFERENCE * (1 - progress);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: hover-only visual effect
		<div
			className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5 ${className ?? ""}`}
			style={{ aspectRatio: `${img.w} / ${img.h}` }}
			onMouseEnter={startTimer}
			onMouseLeave={cancelTimer}
		>
			<Image
				src={img.src}
				alt={img.alt}
				fill
				sizes="(max-width: 768px) 60vw, 440px"
				className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
			/>

			{/* 원형 로딩 인디케이터 */}
			{progress > 0 && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<svg
						width={RADIUS * 2 + 8}
						height={RADIUS * 2 + 8}
						style={{ transform: "rotate(-90deg)" }}
						aria-hidden="true"
					>
						<circle
							cx={RADIUS + 4}
							cy={RADIUS + 4}
							r={RADIUS}
							fill="rgba(0,0,0,0.45)"
							stroke="rgba(255,255,255,0.15)"
							strokeWidth={2}
						/>
						<circle
							cx={RADIUS + 4}
							cy={RADIUS + 4}
							r={RADIUS}
							fill="none"
							stroke="white"
							strokeWidth={3.5}
							strokeDasharray={CIRCUMFERENCE}
							strokeDashoffset={dashOffset}
							strokeLinecap="round"
						/>
					</svg>
				</div>
			)}
		</div>
	);
};

type UnitProps = {
	unit: ReviewUnit;
	onOpen: (img: ReviewImage) => void;
};

const Unit = ({ unit, onOpen }: UnitProps) => {
	if (unit.type === "single") {
		return <Frame img={unit.img} className={`mr-4 shrink-0 ${BAND}`} onOpen={onOpen} />;
	}
	return (
		<div className={`mr-4 flex shrink-0 flex-col gap-4 ${BAND}`}>
			<Frame img={unit.imgs[0]} className="min-h-0 flex-1" onOpen={onOpen} />
			<Frame img={unit.imgs[1]} className="min-h-0 flex-1" onOpen={onOpen} />
		</div>
	);
};

export const RealReviews = () => {
	const [enlargedImg, setEnlargedImg] = useState<ReviewImage | null>(null);
	const lastMouseRef = useRef<{ x: number; y: number } | null>(null);

	const handleOpen = useCallback((img: ReviewImage) => {
		setEnlargedImg(img);
		lastMouseRef.current = null; // 열리는 순간 기준점 초기화
	}, []);

	// 확대된 이미지가 떠 있을 때만 마우스 이동 감지 → 닫기
	useEffect(() => {
		if (!enlargedImg) return;
		const THRESHOLD = 6;
		const handleMove = (e: MouseEvent) => {
			if (!lastMouseRef.current) {
				lastMouseRef.current = { x: e.clientX, y: e.clientY };
				return;
			}
			const dx = Math.abs(e.clientX - lastMouseRef.current.x);
			const dy = Math.abs(e.clientY - lastMouseRef.current.y);
			if (dx + dy > THRESHOLD) {
				setEnlargedImg(null);
			}
		};
		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	}, [enlargedImg]);

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

			{/* 마퀴 — 계속 스크롤 */}
			<div className="[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
				<Marquee speed={30} gradient={false}>
					{REVIEW_UNITS.map((unit) => (
						<Unit
							key={unit.type === "single" ? unit.img.src : unit.imgs[0].src}
							unit={unit}
							onOpen={handleOpen}
						/>
					))}
				</Marquee>
			</div>

			{/* 확대 이미지 — 뷰포트 중앙 고정 */}
			<AnimatePresence>
				{enlargedImg && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
						className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center"
					>
						<div className="absolute inset-0 bg-black/55" />
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
