"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { REVIEW_UNITS, type ReviewImage, type ReviewUnit } from "@/data/review-images";

// 밴드 높이 — 모든 카드의 기준 높이. 폭은 aspect-ratio로 자동 산출(왜곡·크롭 없음).
const BAND = "h-[280px] sm:h-[340px] md:h-[440px]";
const HOLD_MS = 3000;
const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Frame = ({ img, className }: { img: ReviewImage; className?: string }) => {
	const [progress, setProgress] = useState(0);
	const [open, setOpen] = useState(false);
	const rafRef = useRef<number | null>(null);
	const startRef = useRef<number | null>(null);

	const startHold = useCallback(() => {
		startRef.current = Date.now();
		const tick = () => {
			if (!startRef.current) return;
			const p = Math.min((Date.now() - startRef.current) / HOLD_MS, 1);
			setProgress(p);
			if (p < 1) {
				rafRef.current = requestAnimationFrame(tick);
			} else {
				setOpen(true);
				setProgress(0);
				startRef.current = null;
			}
		};
		rafRef.current = requestAnimationFrame(tick);
	}, []);

	const cancelHold = useCallback(() => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		startRef.current = null;
		setProgress(0);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	const dashOffset = CIRCUMFERENCE * (1 - progress);

	return (
		<>
			<div
				role="button"
				tabIndex={0}
				className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5 ${className ?? ""}`}
				style={{ aspectRatio: `${img.w} / ${img.h}` }}
				onMouseEnter={startHold}
				onMouseLeave={cancelHold}
				onKeyDown={(e) => {
					if (e.key === "Enter") setOpen(true);
				}}
			>
				<Image
					src={img.src}
					alt={img.alt}
					fill
					sizes="(max-width: 768px) 60vw, 440px"
					className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				/>

				{/* 원형 카운트다운 */}
				{progress > 0 && (
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
						<svg
							width={RADIUS * 2 + 8}
							height={RADIUS * 2 + 8}
							style={{ transform: "rotate(-90deg)" }}
							className="opacity-90 drop-shadow-lg"
							aria-hidden="true"
						>
							<circle
								cx={RADIUS + 4}
								cy={RADIUS + 4}
								r={RADIUS}
								fill="rgba(0,0,0,0.35)"
								stroke="rgba(255,255,255,0.2)"
								strokeWidth={2}
							/>
							<circle
								cx={RADIUS + 4}
								cy={RADIUS + 4}
								r={RADIUS}
								fill="none"
								stroke="white"
								strokeWidth={3}
								strokeDasharray={CIRCUMFERENCE}
								strokeDashoffset={dashOffset}
								strokeLinecap="round"
							/>
						</svg>
					</div>
				)}
			</div>

			{/* 라이트박스 */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
						onClick={() => setOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.85, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.85, opacity: 0 }}
							transition={{ type: "spring", stiffness: 280, damping: 22 }}
							className="relative"
							onClick={(e) => e.stopPropagation()}
						>
							<Image
								src={img.src}
								alt={img.alt}
								width={img.w}
								height={img.h}
								className="max-h-[88vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
							/>
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg hover:bg-slate-100"
							>
								<X size={16} />
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

const Unit = ({ unit }: { unit: ReviewUnit }) => {
	if (unit.type === "single") {
		return <Frame img={unit.img} className={`mr-4 shrink-0 ${BAND}`} />;
	}
	return (
		<div className={`mr-4 flex shrink-0 flex-col gap-4 ${BAND}`}>
			<Frame img={unit.imgs[0]} className="min-h-0 flex-1" />
			<Frame img={unit.imgs[1]} className="min-h-0 flex-1" />
		</div>
	);
};

export const RealReviews = () => {
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

			{/* Image marquee — 양 끝 페이드 */}
			<div className="[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
				<Marquee speed={30} gradient={false} pauseOnHover>
					{REVIEW_UNITS.map((unit) => (
						<Unit key={unit.type === "single" ? unit.img.src : unit.imgs[0].src} unit={unit} />
					))}
				</Marquee>
			</div>
		</section>
	);
};
