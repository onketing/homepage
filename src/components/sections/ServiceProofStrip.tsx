"use client";

import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";

type ProofItem = {
	value: number;
	suffix: string;
	label: string;
	caption: string;
};

type Props = {
	items: readonly ProofItem[];
};

export const ServiceProofStrip = ({ items }: Props) => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 divide-x divide-y divide-slate-100 border border-slate-100 md:grid-cols-4">
					{items.map((item, i) => (
						<Reveal
							key={item.label}
							direction={(["left", "scale", "scale", "right"] as const)[i]}
							delay={i * 0.1}
						>
							<div className="flex flex-col px-8 py-10">
								<p className="mb-2 whitespace-nowrap font-bold text-[48px] leading-none tracking-tight md:text-[56px]">
									{item.value === 0 ? (
										<span className="text-[#0a0a0a]">
											{item.value}
											{item.suffix}
										</span>
									) : (
										<span className="gradient-text">
											<CountUp to={item.value} suffix={item.suffix} />
										</span>
									)}
								</p>
								<p className="mb-1 font-semibold text-[#0a0a0a] text-base">{item.label}</p>
								<p className="break-keep text-slate-500 text-xs leading-relaxed">{item.caption}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
