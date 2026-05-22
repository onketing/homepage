"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const HERO_PHOTO_READY = false; // /public/images/about/office-main.jpg 준비 시 true로 변경

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden">
			<div className="absolute inset-0 bg-[#052e16]">
				{HERO_PHOTO_READY ? (
					<Image
						src="/images/about/office-main.jpg"
						alt="온케팅 사무실"
						fill
						className="object-cover object-center"
						priority
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center opacity-10">
						<div className="text-center text-white">
							<svg
								className="mx-auto mb-3 h-12 w-12"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
								/>
							</svg>
							<p className="font-mono text-xs tracking-widest">images/about/office-main.jpg</p>
						</div>
					</div>
				)}
			</div>

			{/* Floating gradient orbs */}
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[#58d68d] opacity-[0.18] blur-[130px]"
				style={{ top: "-200px", left: "-200px" }}
				animate={{ x: [0, 60, -30, 0], y: [0, -50, 80, 0] }}
				transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#15803d] opacity-[0.10] blur-[110px]"
				style={{ bottom: "-100px", right: "-100px" }}
				animate={{ x: [0, -50, 30, 0], y: [0, 40, -60, 0] }}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
			/>

			{/* 대각선 보라 오버레이 (isanghan 대각 분할 패턴) */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: "linear-gradient(135deg, #052e16 0%, #15803d 60%, #58d68d 100%)",
					clipPath: "polygon(0 0, 62% 0, 44% 100%, 0 100%)",
				}}
			/>

			{/* 우측 어두운 오버레이 — 사진 위 가독성 */}
			<div className="pointer-events-none absolute inset-0 bg-black/40" />

			{/* 콘텐츠 */}
			<div className="relative z-10 mx-auto w-full max-w-6xl px-8 py-32 md:px-12">
				<div className="max-w-xl">
					<motion.p
						className="mb-6 font-semibold text-sm text-white/70 uppercase tracking-[0.5em]"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease }}
					>
						회 사 소 개
					</motion.p>

					<motion.h1
						className="mb-8 font-bold text-[52px] text-white leading-[1.08] tracking-tight md:text-[72px] lg:text-[88px]"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.1, ease }}
					>
						노출이 아니라,
						<br />
						<span className="gradient-text">의뢰를</span>
						<br />
						만듭니다.
					</motion.h1>

					<motion.p
						className="mb-10 max-w-sm break-keep text-lg text-white/75 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.2, ease }}
					>
						대부분의 대행사는 노출 수를 보고합니다.
						<br />
						우리는 8년간 의뢰로 이어지는 콘텐츠만 만들었습니다.
					</motion.p>

					<motion.p
						className="font-mono text-white/40 text-xs tracking-[0.2em]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3, ease }}
					>
						전문직 12개 직군 · 누적 200+ 콘텐츠 · 재계약율 90%+
					</motion.p>
				</div>
			</div>

			{/* 스크롤 인디케이터 */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8, ease }}
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
