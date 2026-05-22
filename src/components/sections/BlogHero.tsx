"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export const BlogHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 md:px-10 md:py-32">
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: "radial-gradient(ellipse at 20% 50%, #f3e8ff 0%, transparent 60%)",
				}}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div>
					<motion.p
						className="mb-4 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Blog Marketing
					</motion.p>
					<motion.h1
						className="mb-4 font-bold text-5xl text-[#0a0a0a] leading-none tracking-tight md:text-7xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						검색이 <span className="gradient-text">전화</span>가 됩니다.
					</motion.h1>
					<motion.p
						className="mb-8 max-w-xl break-keep text-base text-slate-500 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						의뢰 직전 키워드만 선별해 씁니다.
					</motion.p>
				</div>

				<motion.div
					className="relative"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
						<div className="flex items-center gap-2 border-slate-100 border-b bg-slate-50 px-4 py-3">
							<span className="h-3 w-3 rounded-full bg-red-400" />
							<span className="h-3 w-3 rounded-full bg-yellow-400" />
							<span className="h-3 w-3 rounded-full bg-green-400" />
							<div
								className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-slate-500 text-xs"
								aria-hidden="true"
							>
								search.naver.com
							</div>
						</div>

						<div className="border-slate-100 border-b px-5 py-4">
							<div className="flex items-center gap-2 rounded-lg border border-[#58d68d]/30 bg-[#f0fdf4] px-4 py-2.5">
								<svg
									className="h-4 w-4 shrink-0 text-[#58d68d]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<title>검색</title>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.35-4.35" />
								</svg>
								<motion.span
									className="font-medium text-[#0a0a0a] text-sm"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
								>
									변호사 이혼 의뢰 방법
								</motion.span>
							</div>
						</div>

						<div className="divide-y divide-slate-50 px-5 py-2">
							{[
								{
									title: "[변호사 직접 운영] 이혼 절차와 의뢰 전 꼭 확인할 3가지",
									highlight: true,
									delay: 0.6,
								},
								{
									title: "협의이혼 vs 재판이혼 — 어떤 경우에 변호사가 필요한가",
									highlight: false,
									delay: 0.75,
								},
								{
									title: "이혼 위자료 청구 가능 여부 자가 체크리스트",
									highlight: false,
									delay: 0.9,
								},
							].map((result) => (
								<motion.div
									key={result.title}
									className="py-3"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: result.delay }}
								>
									<div className="mb-1 flex items-center gap-2">
										<span
											className={`rounded px-1.5 py-0.5 font-semibold text-[10px] ${
												result.highlight ? "bg-[#58d68d] text-white" : "bg-slate-100 text-slate-700"
											}`}
										>
											블로그
										</span>
									</div>
									<p
										className={`text-sm leading-snug ${
											result.highlight ? "font-semibold text-[#58d68d]" : "text-[#0a0a0a]"
										}`}
									>
										{result.title}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div
							className="border-slate-100 border-t bg-[#f0fdf4] px-5 py-3"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.1 }}
						>
							<p className="font-medium text-[#58d68d] text-xs">
								→ 1번 결과에서 상담 문의 클릭율 +3배
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-600"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				aria-label="더 알아보기"
			>
				<motion.div
					className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300"
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
