"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";
import { FOUNDING_STORY } from "@/data/founding-story";

const TEAM_PHOTO_READY = false; // /public/images/about/team-work.jpg 준비 시 true로 변경

export const AboutFoundingStory = () => {
	return (
		<section className="bg-slate-50 px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Why we started
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						왜 온케팅가 만들어졌나
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
					{/* 좌측: 창업 스토리 */}
					<Reveal direction="left" className="md:col-span-7">
						<motion.div
							className="mb-6 select-none font-serif text-[#58d68d]/15 text-[96px] leading-none"
							initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
							whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
							viewport={{ once: false, margin: "-80px" }}
							transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
						>
							&ldquo;
						</motion.div>

						<div className="space-y-5">
							{FOUNDING_STORY.paragraphs.map((para) => (
								<p
									key={para}
									className="break-keep text-base text-slate-700 leading-relaxed md:text-lg"
								>
									{para}
								</p>
							))}
						</div>

						<blockquote className="mt-8 border-[#58d68d]/30 border-l-2 pl-5">
							<p className="break-keep font-semibold text-[#0a0a0a] text-lg leading-snug md:text-xl">
								&ldquo;{FOUNDING_STORY.quote}&rdquo;
							</p>
							<footer className="mt-2 font-mono text-slate-500 text-xs">
								— {FOUNDING_STORY.quoteAuthor}
							</footer>
						</blockquote>
					</Reveal>

					{/* 우측: 팀 사진 + 핵심 숫자 3개 */}
					<div className="flex flex-col justify-center gap-5 md:col-span-5">
						{/* 팀 사진 — 준비 시 노출 */}
						{TEAM_PHOTO_READY && (
							<div className="relative hidden aspect-video overflow-hidden rounded-2xl md:block">
								<Image
									src="/images/about/team-work.jpg"
									alt="팀 작업 모습"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 0vw, 40vw"
								/>
							</div>
						)}

						{FOUNDING_STORY.stats.map((stat, i) => (
							<Reveal key={stat.id} delay={i * 0.12} direction="right">
								<div className="rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
									<p className="mb-1 font-mono text-[10px] text-slate-400 uppercase tracking-[0.25em]">
										{stat.label}
									</p>
									<p className="font-extrabold text-[52px] leading-none tracking-tighter">
										<span className={stat.value === 0 ? "text-emerald-500" : "gradient-text"}>
											<CountUp to={stat.value} suffix={stat.suffix} />
										</span>
									</p>
									<p className="mt-1.5 break-keep text-slate-500 text-sm">{stat.description}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
