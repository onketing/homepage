"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { EXPERTISE, MESSAGE_PARAGRAPHS } from "@/data/ceo-message";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutCEOMessage = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-5xl">
				<div className="flex flex-col items-start gap-6 md:flex-row md:gap-16">
					{/* Photo */}
					<Reveal direction="left" className="shrink-0">
						<motion.div
							className="relative h-48 w-40 overflow-hidden rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:h-80 md:w-64"
							whileHover={{ scale: 1.03 }}
							transition={{ type: "spring", stiffness: 200, damping: 22 }}
						>
							<Image
								src="/images/team/taehoon-kim.png"
								alt="김태훈 대표"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 208px, 256px"
							/>
						</motion.div>
					</Reveal>

					{/* Message */}
					<Reveal direction="right" className="flex flex-col">
						<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
							CEO Message
						</p>
						<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
							퍼포먼스 마케팅으로 시작했습니다.
						</h2>
						<div className="mb-8 flex flex-wrap gap-2">
							{EXPERTISE.map((tag, i) => (
								<motion.span
									key={tag}
									className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 font-semibold text-slate-600 text-xs"
									initial={{ opacity: 0, scale: 0.7 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: false, margin: "-80px" }}
									transition={{ duration: 0.3, delay: 0.25 + i * 0.07, ease }}
								>
									{tag}
								</motion.span>
							))}
						</div>
						<div className="space-y-4">
							{MESSAGE_PARAGRAPHS.map((para, i) => (
								<motion.p
									key={para}
									className="text-slate-700 leading-relaxed"
									initial={{ opacity: 0, y: 18 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: false, margin: "-60px" }}
									transition={{ duration: 0.45, delay: 0.35 + i * 0.09, ease }}
								>
									{para}
								</motion.p>
							))}
						</div>
						<p className="mt-8 font-semibold text-slate-500 text-sm tracking-wide">
							― 김태훈 / 그로스웨이브 대표
						</p>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
