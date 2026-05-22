"use client";

import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { CLIENT_DISCIPLINES } from "@/data/client-disciplines";

const DisciplineChip = ({ name, caption }: { name: string; caption: string }) => (
	<div className="mx-4 flex flex-col items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-10 py-6 transition-colors duration-200 hover:border-[#58d68d]/50 hover:bg-[#58d68d]/[0.03]">
		<span className="font-bold text-[#0a0a0a] text-lg">{name}</span>
		<span className="font-mono text-[11px] text-slate-500 tracking-wide">{caption}</span>
	</div>
);

export const AboutClientStrip = () => {
	return (
		<section className="overflow-hidden bg-slate-50 py-20 md:py-24">
			<div className="mb-12 px-4">
				<Reveal className="text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Disciplines
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						<span className="gradient-text">12개</span> 전문직 직군
					</h2>
					<p className="mx-auto mt-4 max-w-md break-keep text-slate-500 leading-relaxed">
						각 직군의 검색 의도를 직접 학습한 팀
					</p>
				</Reveal>
			</div>

			<Marquee speed={25} gradient={false}>
				{CLIENT_DISCIPLINES.map((d) => (
					<DisciplineChip key={d.name} name={d.name} caption={d.caption} />
				))}
			</Marquee>
		</section>
	);
};
