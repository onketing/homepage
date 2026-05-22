"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

type TeamStat = {
	id: string;
	value: number;
	suffix: string;
	prefix?: string;
	label: string;
	source: string;
	numClass: string;
};

const TEAM_STATS: TeamStat[] = [
	{
		id: "reviews",
		value: 200,
		suffix: "+",
		label: "누적 검토 건",
		source: "발행 전 직접 검토",
		numClass: "text-emerald-400",
	},
	{
		id: "violation",
		value: 0,
		suffix: "건",
		label: "위반 적발",
		source: "2026.05 기준",
		numClass: "text-rose-400",
	},
	{
		id: "career",
		value: 8,
		suffix: "년",
		label: "대표 광고 검토 경력",
		source: "변호사·의료 광고 심의",
		numClass: "text-[#86efac]",
	},
];

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView || to === 0) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

export const TeamStats = () => {
	return (
		<section className="bg-[#021009] py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				<Reveal className="mb-12">
					<p className="mb-3 font-semibold text-[#86efac] text-sm uppercase tracking-[0.25em]">
						Why us
					</p>
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-5xl">
						숫자가 증명합니다.
					</h2>
					<p className="mt-4 max-w-xl break-keep text-sm text-white/75 leading-relaxed md:text-base">
						발행 전 직접 검토합니다. 규정 위반, 단 한 건도 없었습니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-1 border-white/10 border-t border-l sm:grid-cols-3">
					{TEAM_STATS.map((item, i) => (
						<Reveal
							key={item.id}
							delay={i * 0.08}
							direction="up"
							className="border-white/10 border-r border-b"
						>
							<div className="flex h-full flex-col px-5 py-8 md:px-6 md:py-10">
								<p className="font-extrabold leading-none tracking-tighter">
									<span className={`text-[44px] sm:text-[52px] md:text-[60px] ${item.numClass}`}>
										<CountUp to={item.value} />
									</span>
									<span className={`ml-0.5 align-top text-xl md:text-2xl ${item.numClass}`}>
										{item.suffix}
									</span>
								</p>
								<h3 className="mt-3 break-keep font-bold text-sm text-white tracking-tight md:text-base">
									{item.label}
								</h3>
								<p className="mt-1.5 font-mono text-white/70 text-xs tracking-[0.12em]">
									{item.source}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
