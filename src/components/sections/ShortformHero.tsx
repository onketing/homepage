"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const PHONES = [
	{ platform: "릴스", color: "#E1306C", delay: 0.35, rotate: -8, marginLeft: 0 },
	{ platform: "쇼츠", color: "#FF0000", delay: 0.2, rotate: 0, marginLeft: -36 },
	{ platform: "틱톡", color: "#010101", delay: 0.5, rotate: 8, marginLeft: -36 },
] as const;

export const ShortformHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[#052e16] px-6 py-24 md:px-10 md:py-32">
			<motion.div
				className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#58d68d] opacity-[0.15] blur-[120px]"
				style={{ top: "-80px", right: "-80px" }}
				animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
				transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div>
					<motion.p
						className="mb-4 font-semibold text-[#86efac] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Shortform Marketing
					</motion.p>
					<motion.h1
						className="mb-4 font-bold text-5xl text-white leading-none tracking-tight md:text-7xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						대본부터 <span className="gradient-text">손동작</span>까지 알려드립니다.
					</motion.h1>
					<motion.p
						className="mb-8 max-w-xl break-keep text-base text-white/60 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						한 번 촬영으로 여러 채널에 동시 발행합니다.
					</motion.p>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="relative flex items-end justify-center">
						{PHONES.map((phone) => (
							<motion.div
								key={phone.platform}
								className="relative flex h-72 w-36 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
								style={{
									marginLeft: phone.marginLeft,
									zIndex: phone.rotate === 0 ? 10 : 0,
									rotate: phone.rotate,
								}}
								initial={{ opacity: 0, y: 60, rotate: phone.rotate }}
								animate={{ opacity: 1, y: 0, rotate: phone.rotate }}
								transition={{
									delay: phone.delay,
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-white/20" />
								<div className="flex flex-1 flex-col items-center justify-center gap-2 px-3">
									<div
										className="flex h-12 w-12 items-center justify-center rounded-full"
										style={{ backgroundColor: phone.color }}
									>
										<span className="font-bold text-lg text-white">▶</span>
									</div>
									<p className="font-semibold text-sm text-white">{phone.platform}</p>
									<div className="mt-1 space-y-1.5">
										<div className="h-1.5 w-20 rounded-full bg-white/10" />
										<div className="h-1.5 w-16 rounded-full bg-white/10" />
										<div className="h-1.5 w-14 rounded-full bg-white/10" />
									</div>
								</div>
								<div className="pb-4 text-center">
									<div className="mx-auto h-1 w-10 rounded-full bg-white/30" />
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				aria-label="더 알아보기"
			>
				<motion.div
					className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<ChevronDown className="h-5 w-5" />
				</motion.div>
				<span className="font-semibold text-xs tracking-[0.15em]">더 알아보기</span>
			</motion.button>
		</section>
	);
};
