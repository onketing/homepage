"use client";

import { motion } from "motion/react";
import { ConstellationBackground } from "@/components/shared/ConstellationBackground";

export const HeroIntro = () => {
	return (
		<section className="relative flex min-h-[calc(100svh-4rem-56.25vw)] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,#ffffff_0%,#eef2f7_60%,#e2e8f0_100%)] md:h-screen md:min-h-0">
			{/* 리드-플로우 컨스텔레이션 배경 */}
			<ConstellationBackground variant="light" />

			{/* 가독성 와시 — 텍스트 뒤를 밝게 */}
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(248,250,252,0.6)_0%,rgba(248,250,252,0)_65%)]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-120px" }}
					transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-bold text-[44px] leading-[1.15] tracking-[-0.03em] sm:text-[60px] md:text-[80px] md:leading-[1.1] lg:text-[100px]"
				>
					<span className="gradient-text">전문직 마케팅</span>
					<span className="text-slate-900">은</span>
					<br />
					<span className="gradient-text">달라야</span>
					<span className="text-slate-900"> 합니다</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-120px" }}
					transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-medium text-slate-600 text-xl leading-relaxed md:text-3xl"
				>
					조회수는 터졌는데, 매출은 그대로이신가요?
				</motion.p>
			</div>
		</section>
	);
};
