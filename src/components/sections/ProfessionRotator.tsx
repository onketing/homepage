"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useReducer } from "react";
import { PROFESSIONS } from "@/data/professions";

const labels = PROFESSIONS.map((p) => p.label);
const INTERVAL = 2400;

export const ProfessionRotator = () => {
	const [index, tick] = useReducer((i: number) => (i + 1) % labels.length, 0);
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) return;
		const id = setInterval(tick, INTERVAL);
		return () => clearInterval(id);
	}, [prefersReducedMotion]);

	return (
		<section className="bg-slate-50 px-4 py-28 md:py-36">
			<div className="mx-auto max-w-6xl text-center">
				<div className="mb-8 flex flex-col items-center gap-2">
					<p className="mb-4 font-bold text-2xl text-[#58d68d] md:text-3xl">그래서 저희는</p>
					<h2 className="font-extrabold text-[26px] text-foreground leading-[1.15] tracking-tight sm:text-[36px] md:text-[52px] lg:text-[68px]">
						오직 <span className="text-[#58d68d]/40">[</span>
						{/* 텍스트만 움직이는 고정 너비 컨테이너 */}
						<span className="relative inline-grid h-[1.1em] w-[2.9em] overflow-hidden align-bottom">
							<AnimatePresence mode="wait" initial={false}>
								<motion.span
									key={labels[index]}
									initial={{ y: "-100%", opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: "100%", opacity: 0 }}
									transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
									className="gradient-text col-start-1 row-start-1 text-center"
								>
									{labels[index]}
								</motion.span>
							</AnimatePresence>
						</span>
						<span className="text-[#58d68d]/40">]</span>를 위해
						<br />
						만들어졌습니다.
					</h2>
				</div>
			</div>
		</section>
	);
};
