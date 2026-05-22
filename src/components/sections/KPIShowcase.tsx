"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { KPI_SHOWCASE } from "@/data/kpi-showcase";

const LiveResponseValue = ({ numClass }: { numClass: string }) => {
	return (
		<p className="font-extrabold leading-none tracking-tighter">
			<span className={`text-[44px] sm:text-[52px] md:text-[60px] lg:text-[72px] ${numClass}`}>
				실시간
			</span>
			<span className="ml-2 inline-flex size-2.5 animate-pulse rounded-full bg-emerald-400 align-middle" />
		</p>
	);
};

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

// Tailwind 정적 분석을 위해 풀 클래스명 사용
const CELL_META = [
	{
		numClass: "gradient-text",
		borderClass: "border-b border-slate-100 md:border-b-0",
		direction: "up" as const,
		delay: 0,
	},
	{
		numClass: "text-[#0a0a0a]",
		borderClass: "border-l border-b border-slate-100 md:border-b-0",
		direction: "up" as const,
		delay: 0.08,
	},
	{
		numClass: "gradient-text",
		borderClass: "md:border-l md:border-slate-100",
		direction: "up" as const,
		delay: 0.16,
	},
	{
		numClass: "text-[#0a0a0a]",
		borderClass: "border-l border-slate-100",
		direction: "up" as const,
		delay: 0.24,
	},
] as const;

export const KPIShowcase = () => {
	return (
		<section className="bg-white py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 md:px-8">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-bold text-[#58d68d] text-xl md:text-2xl">저희는</p>
					<h2 className="font-bold text-5xl text-[#0a0a0a] tracking-tight md:text-6xl lg:text-7xl">
						숫자로 증명합니다.
					</h2>
				</Reveal>

				<div className="grid grid-cols-2 md:grid-cols-4">
					{KPI_SHOWCASE.map((item, i) => {
						const meta = CELL_META[i];
						return (
							<Reveal
								key={item.index}
								delay={meta.delay}
								direction={meta.direction}
								className={meta.borderClass}
							>
								<div className="flex flex-col px-5 py-8 md:px-8 md:py-10">
									<span className="mb-3 font-mono text-[10px] text-slate-400 tracking-[0.3em]">
										{item.index}
									</span>

									{i === 3 ? (
										<LiveResponseValue numClass={meta.numClass} />
									) : (
										<p className="font-extrabold leading-none tracking-tighter">
											<span
												className={`text-[52px] sm:text-[60px] md:text-[68px] lg:text-[80px] ${meta.numClass}`}
											>
												<CountUp to={item.value} />
											</span>
											<span
												className={`ml-0.5 align-top text-xl md:text-2xl lg:text-3xl ${meta.numClass}`}
											>
												{item.suffix}
											</span>
										</p>
									)}

									<h3 className="mt-3 break-keep font-bold text-[#0a0a0a] text-base tracking-tight md:text-lg">
										{item.label}
									</h3>

									<p className="mt-1.5 break-keep text-slate-500 text-xs leading-relaxed md:text-sm">
										{item.description}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
