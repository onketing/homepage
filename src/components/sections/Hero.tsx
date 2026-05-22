"use client";

import { motion } from "motion/react";

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16 md:pt-20">
			{/* Background video */}
			<video
				autoPlay
				muted
				loop
				playsInline
				poster="/hero-bg-poster.jpg"
				tabIndex={-1}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover"
			>
				<source src="/hero-bg.webm" type="video/webm" />
				<source src="/hero-bg.mp4" type="video/mp4" />
			</video>

			{/* Overlay — 이전보다 진하게 (가독성) */}
			<div
				className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/75 via-white/80 to-white/70"
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
					<span className="text-[#0a0a0a]">은</span>
					<br />
					<span className="gradient-text">달라야</span>
					<span className="text-[#0a0a0a]"> 합니다</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-medium text-slate-700 text-xl leading-relaxed md:text-3xl"
				>
					조회수는 터졌는데, 매출은 그대로이신가요?
				</motion.p>
			</div>
		</section>
	);
};
