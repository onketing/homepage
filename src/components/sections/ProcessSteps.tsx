"use client";

import { BarChart2, CalendarDays, MessageSquare, PenLine } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS_STEPS } from "@/data/process-steps";

const ICON_MAP: Record<string, React.ElementType> = {
	MessageSquare,
	CalendarDays,
	PenLine,
	BarChart2,
};

export const ProcessSteps = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(gridRef, { once: false, margin: "0px 0px -150px 0px" });
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			scrollDirRef.current = y > lastY ? "down" : "up";
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Reveal.tsx와 동일한 패턴 — ref는 렌더 중 읽어도 안전하나 eslint-disable 필요
	// eslint-disable-next-line react-hooks/refs
	const shouldAnimate = isInView && scrollDirRef.current === "down" && !prefersReducedMotion;

	return (
		<section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto max-w-[1440px]">
				<Reveal>
					<div className="mb-14 text-center md:mb-16">
						<p className="mb-4 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:text-xl">
							진행방식
						</p>
						<h2 className="font-bold text-5xl text-foreground leading-tight tracking-tight md:text-6xl lg:text-7xl">
							이렇게 진행합니다.
						</h2>
						<p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-xl leading-relaxed md:text-2xl">
							상담 → 전략 수립 → 발행 → 성과점검, 4단계면 끝!
						</p>
					</div>
				</Reveal>

				<div ref={gridRef} className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
					{/* 연결선 — 왼쪽에서 오른쪽으로 드로우 */}
					<motion.div
						className="absolute top-10 hidden h-px bg-slate-200 md:block"
						style={{ left: "12.5%", right: "12.5%", transformOrigin: "left" }}
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={
							shouldAnimate
								? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
								: { duration: 0, delay: 0 }
						}
						aria-hidden="true"
					/>

					{PROCESS_STEPS.map((step, i) => {
						const Icon = ICON_MAP[step.icon] ?? MessageSquare;
						const delay = 0.1 + i * 0.18;

						return (
							<motion.div
								key={step.title}
								className="relative flex flex-col items-center text-center"
								initial={{ opacity: 0, x: -40 }}
								animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
								transition={
									shouldAnimate
										? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
										: { duration: 0, delay: 0 }
								}
							>
								<div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_8px_rgba(88,214,141,0.06)]">
									<span className="font-bold font-mono text-[#58d68d] text-xl">
										{String(i + 1).padStart(2, "0")}
									</span>
								</div>

								<Icon className="mb-3 h-6 w-6 text-[#58d68d]" aria-hidden="true" />
								<h3 className="mb-3 font-bold text-foreground text-xl tracking-tight md:text-2xl">
									{step.title}
								</h3>
								<p className="max-w-[260px] break-keep text-[15px] text-slate-500 leading-relaxed md:text-base">
									{step.description}
								</p>
								{step.badge && (
									<span className="mt-4 inline-block w-fit rounded-full bg-[#58d68d]/10 px-3 py-1 font-semibold text-[#58d68d] text-xs">
										{step.badge}
									</span>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
