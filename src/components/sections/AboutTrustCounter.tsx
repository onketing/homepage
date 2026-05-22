"use client";

import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";
import { ABOUT_TRUST } from "@/data/about-trust";

export const AboutTrustCounter = () => {
	return (
		<section className="bg-white px-4 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Numbers
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						숫자로 <span className="gradient-text">증명합니다</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-2 divide-x divide-y divide-slate-100 border border-slate-100 md:grid-cols-4">
					{ABOUT_TRUST.map((item, i) => (
						<Reveal
							key={item.label}
							direction={(["left", "scale", "scale", "right"] as const)[i]}
							delay={i * 0.12}
						>
							<div className="flex flex-col px-8 py-10">
								<p className="mb-2 font-bold text-[56px] leading-none tracking-tight md:text-[64px]">
									<span className="gradient-text">
										<CountUp to={item.value} suffix={item.suffix} />
									</span>
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
