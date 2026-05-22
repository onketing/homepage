"use client";

import { ArrowDown, Clock } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

const TRUST_STATS = [
	{ value: "1일", label: "영업일 내 회신" },
	{ value: "0원", label: "컨설팅 비용" },
	{ value: "100%", label: "광고 규정 검토" },
] as const;

export const ContactHero = () => {
	const scrollToForm = () => {
		const el = document.getElementById("contact-form");
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 80;
		window.scrollTo({ top, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-28 md:px-10 md:py-36">
			{/* Purple orb — top-left */}
			<div
				className="pointer-events-none absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#58d68d] opacity-[0.06] blur-[160px]"
				aria-hidden="true"
			/>
			{/* Cyan orb — bottom-right */}
			<div
				className="pointer-events-none absolute -right-[8%] -bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#86efac] opacity-[0.04] blur-[140px]"
				aria-hidden="true"
			/>

			{/* Fine grid */}
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse at center, black 15%, transparent 78%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 78%)",
				}}
			/>

			{/* Top hairline */}
			<div className="absolute top-24 right-0 left-0 z-10 mx-auto flex max-w-4xl items-center gap-3 px-6 md:top-32 md:px-10">
				<div className="h-px flex-1 bg-slate-200" />
				<p className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.3em]">
					{siteConfig.nameKo} · Consultation — 2026
				</p>
				<div className="h-px flex-1 bg-slate-200" />
			</div>

			{/* Center content */}
			<div className="relative z-10 mx-auto w-full max-w-4xl text-center">
				<motion.p
					className="mb-6 font-mono text-[#58d68d] text-xs uppercase tracking-[0.35em]"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Marketing Consultation
				</motion.p>

				<motion.h1
					className="mb-6 font-bold text-[#0a0a0a] text-[40px] leading-[1.08] tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[92px]"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
				>
					결정 전에
					<br />
					<span className="gradient-text">먼저 물어보세요.</span>
				</motion.h1>

				<motion.p
					className="mx-auto mb-10 max-w-lg break-keep text-base text-slate-600 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.25 }}
				>
					묻는 것만으로 충분합니다. 결정은 나중에 하세요.
				</motion.p>

				{/* Trust stats */}
				<motion.div
					className="mb-10 flex items-center justify-center"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.35 }}
				>
					{TRUST_STATS.map((stat, i) => (
						<div key={stat.value} className="flex items-center">
							{i > 0 && <div className="mx-6 h-10 w-px bg-slate-200 sm:mx-10" aria-hidden="true" />}
							<div className="flex flex-col items-center gap-1">
								<span className="font-bold text-2xl text-[#0a0a0a] sm:text-3xl">{stat.value}</span>
								<span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.15em]">
									{stat.label}
								</span>
							</div>
						</div>
					))}
				</motion.div>

				{/* CTA */}
				<motion.button
					type="button"
					onClick={scrollToForm}
					className="gradient-brand relative inline-flex items-center gap-2 overflow-hidden rounded-md px-8 py-3.5 font-semibold text-base text-white shadow-[0_4px_28px_rgba(88,214,141,0.45)]"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{ scale: 1.03 }}
				>
					{/* Shimmer sweep */}
					<motion.span
						aria-hidden="true"
						className="pointer-events-none absolute top-0 h-full w-10"
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent)",
							transform: "skewX(-15deg)",
						}}
						animate={{ left: ["-15%", "115%"] }}
						transition={{
							duration: 0.85,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 3.2,
							ease: "easeInOut",
							delay: 2,
						}}
					/>
					지금 물어보기
					<ArrowDown className="h-4 w-4" aria-hidden="true" />
				</motion.button>
			</div>

			{/* Bottom stat line */}
			<motion.div
				className="absolute right-0 bottom-24 left-0 z-10 mx-auto flex max-w-4xl items-center gap-3 px-6 md:bottom-32 md:px-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7, delay: 0.6 }}
			>
				<div className="h-px flex-1 bg-slate-200" />
				<div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-[0.3em]">
					<Clock className="h-3 w-3" aria-hidden="true" />
					<span>{siteConfig.contact.businessHours}</span>
				</div>
				<div className="h-px flex-1 bg-slate-200" />
			</motion.div>
		</section>
	);
};
