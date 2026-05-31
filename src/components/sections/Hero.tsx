"use client";

import { motion } from "motion/react";
import { ConstellationBackground } from "@/components/shared/ConstellationBackground";

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1220] pt-16 md:pt-20">
			{/* 리드-플로우 컨스텔레이션 배경 */}
			<ConstellationBackground />

			{/* 가독성 비네트 */}
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(11,18,32,0.35)_0%,_rgba(11,18,32,0.78)_100%)]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-bold text-[44px] leading-[1.15] tracking-[-0.03em] sm:text-[60px] md:text-[80px] md:leading-[1.1] lg:text-[100px]"
				>
					<span className="gradient-text">전문직 마케팅</span>
					<span className="text-white">은</span>
					<br />
					<span className="gradient-text">달라야</span>
					<span className="text-white"> 합니다</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-medium text-slate-300 text-xl leading-relaxed md:text-3xl"
				>
					조회수는 터졌는데, 매출은 그대로이신가요?
				</motion.p>
			</div>
		</section>
	);
};
