"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";

type Pillar = {
	num: string;
	title: string;
	body: string;
};

type Props = {
	items: readonly Pillar[];
};

const DIRS = ["left", "scale", "right"] as const;

export const ServiceWhatWeDo = ({ items }: Props) => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						What We Do
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						3가지로 <span className="gradient-text">구분합니다</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{items.map((item, i) => (
						<Reveal key={item.num} direction={DIRS[i]} delay={i * 0.12}>
							<motion.div
								className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-8"
								whileHover={{
									y: -8,
									boxShadow: "0 24px 48px rgba(88,214,141,0.12)",
									borderColor: "rgba(88,214,141,0.35)",
								}}
							>
								<span className="mb-4 font-bold font-mono text-[#58d68d] text-sm tracking-[0.15em]">
									{item.num}
								</span>
								<h3 className="mb-3 font-bold text-[#0a0a0a] text-xl">{item.title}</h3>
								<p className="break-keep text-slate-500 text-sm leading-relaxed">{item.body}</p>
							</motion.div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
