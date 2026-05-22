"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { WORK_PROCESS } from "@/data/work-process";

export const AboutHowWeWork = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(gridRef, { once: false, margin: "0px 0px -150px 0px" });
	const prefersReducedMotion = useReducedMotion();
	const [animState, setAnimState] = useState({ inView: false, shouldAnimate: false });

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

	useEffect(() => {
		if (isInView) {
			setAnimState({ inView: true, shouldAnimate: scrollDirRef.current === "down" });
		} else if (scrollDirRef.current === "up") {
			setAnimState({ inView: false, shouldAnimate: false });
		}
	}, [isInView]);

	const shouldAnimate = animState.shouldAnimate && !prefersReducedMotion;

	return (
		<section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-14 text-center">
						<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
							Process
						</p>
						<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
							콘텐츠 한 편, <span className="gradient-text">이렇게</span> 만듭니다.
						</h2>
						<p className="mx-auto mt-4 max-w-sm break-keep text-slate-500 leading-relaxed">
							검수를 통과한 콘텐츠만 발행합니다.
						</p>
					</div>
				</Reveal>

				<div ref={gridRef} className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
					{/* 연결선 — 좌→우 드로우 */}
					<motion.div
						className="absolute top-10 hidden h-px bg-slate-200 md:block"
						style={{ left: "10%", right: "10%", transformOrigin: "left" }}
						initial={{ scaleX: 0 }}
						animate={animState.inView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={
							shouldAnimate
								? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
								: { duration: 0, delay: 0 }
						}
						aria-hidden="true"
					/>

					{WORK_PROCESS.map((item, i) => {
						const delay = 0.1 + i * 0.15;
						return (
							<motion.div
								key={item.step}
								className="relative flex flex-col items-center text-center"
								initial={{ opacity: 0, x: -30 }}
								animate={animState.inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
								transition={
									shouldAnimate
										? { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
										: { duration: 0, delay: 0 }
								}
							>
								<div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_8px_rgba(88,214,141,0.06)]">
									<span className="font-bold font-mono text-[#58d68d] text-xl">{item.step}</span>
								</div>
								<h3 className="mb-2 font-bold text-[#0a0a0a] text-base">{item.title}</h3>
								<p className="max-w-[180px] break-keep text-slate-500 text-sm leading-relaxed">
									{item.desc}
								</p>
							</motion.div>
						);
					})}
				</div>

				<Reveal className="mt-12 text-center">
					<p className="font-mono text-slate-500 text-xs tracking-[0.2em]">
						5단계 모두 대표가 직접 검수합니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
