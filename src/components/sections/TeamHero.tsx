"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const MOSAIC_PHOTOS = [
	{ src: "/images/team/video-01.jpg", alt: "촬영 현장" },
	{ src: "/images/team/video-02.jpg", alt: "촬영 현장" },
	{ src: "/images/team/video-05.jpg", alt: "촬영 현장" },
	{ src: "/images/team/video-07.jpg", alt: "촬영 현장" },
	{ src: "/images/team/edit-01.jpg", alt: "편집실" },
	{ src: "/images/team/edit-02.jpg", alt: "편집실" },
] as const;

export const TeamHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen overflow-hidden bg-[#eef2f7]">
			{/* ── Left text area ── */}
			<div className="relative z-10 flex w-full flex-col justify-center px-6 py-28 md:px-14 md:py-36 lg:w-[58%] lg:py-40 lg:pr-16 lg:pl-20 xl:pl-28">
				<motion.p
					className="mb-6 font-mono text-[#58d68d] text-xs uppercase tracking-[0.35em]"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Our Team
				</motion.p>

				<motion.h1
					className="mb-8 font-bold text-[42px] text-slate-900 leading-[1.08] tracking-[-0.02em] sm:text-[56px] md:text-[70px] lg:text-[84px] xl:text-[100px]"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
				>
					처음 맡은 팀이,
					<br />
					끝까지 <span className="gradient-text">갑니다.</span>
				</motion.h1>

				<motion.p
					className="mb-10 max-w-md break-keep text-base text-slate-600 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.25 }}
				>
					규정 검수부터 발행까지, 외주 없이 한 공간에서.
				</motion.p>
			</div>

			{/* ── Right photo mosaic (desktop only) ── */}
			<div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
				{/* Left fade */}
				<div
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
					style={{
						background:
							"linear-gradient(to right, #eef2f7 0%, rgba(248,250,252,0.6) 50%, transparent 100%)",
					}}
				/>
				{/* Top fade */}
				<div
					className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
					style={{ background: "linear-gradient(to bottom, #eef2f7 0%, transparent 100%)" }}
				/>
				{/* Bottom fade */}
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
					style={{ background: "linear-gradient(to top, #eef2f7 0%, transparent 100%)" }}
				/>

				{/* Subtle violet orb */}
				<div
					className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#58d68d] opacity-[0.06] blur-[130px]"
					aria-hidden="true"
				/>

				{/* 3×2 photo grid */}
				<div className="grid h-full grid-cols-3 grid-rows-2 gap-1 p-1">
					{MOSAIC_PHOTOS.map((photo, i) => (
						<motion.div
							key={photo.src}
							className="relative overflow-hidden"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
						>
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								className="object-cover brightness-[0.75] grayscale-[0.2] transition-transform duration-700 hover:scale-[1.04]"
								sizes="15vw"
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute right-6 bottom-10 z-20 flex flex-col items-center gap-2 text-slate-600 transition-colors hover:text-slate-700 md:right-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.7 }}
				aria-label="scroll"
			>
				<span className="font-mono text-[10px] uppercase tracking-[0.25em]">scroll</span>
				<motion.div
					className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<ChevronDown className="h-4 w-4" />
				</motion.div>
			</motion.button>
		</section>
	);
};
