"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_HIGHLIGHTS, CASE_HIGHLIGHTS_SINGLE } from "@/data/case-highlight";

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

// ── 차트 상수 ──────────────────────────────────────────────────
const BC = {
	W: 320,
	H: 260,
	PL: 8,
	PR: 8,
	PT: 52,
	PB: 32,
	BAR_W: 96,
	BAR_MAX_H: 150,
} as const;

const BC_CW = BC.W - BC.PL - BC.PR;
const BC_Y_BASE = BC.PT + (BC.H - BC.PT - BC.PB);
const BC_GAP = (BC_CW - 2 * BC.BAR_W) / 3;
const BC_LEFT_X = Math.round(BC.PL + BC_GAP);
const BC_RIGHT_X = Math.round(BC.PL + BC_GAP + BC.BAR_W + BC_GAP);
const BC_LEFT_CX = BC_LEFT_X + BC.BAR_W / 2;
const BC_RIGHT_CX = BC_RIGHT_X + BC.BAR_W / 2;

type ImpactBarProps = {
	before: number;
	after: number;
	unit: string;
	annotation: string;
	gradId: string;
	inView: boolean;
	delay?: number;
	decrease?: boolean;
	xLabels?: [string, string];
};

const ImpactBar = ({
	before,
	after,
	unit,
	annotation,
	gradId,
	inView,
	delay = 0,
	decrease = false,
	xLabels = ["시작 전", "6개월 후"],
}: ImpactBarProps) => {
	const leftH = decrease ? BC.BAR_MAX_H : Math.max(10, Math.round((before / after) * BC.BAR_MAX_H));
	const rightH = decrease
		? Math.max(10, Math.round((after / before) * BC.BAR_MAX_H))
		: BC.BAR_MAX_H;

	const afterTopY = BC_Y_BASE - rightH;
	const annoColor = decrease ? "#58d68d" : "#58d68d";
	const gradStart = decrease ? "#86efac" : "#58d68d";
	const gradEnd = decrease ? "#15803d" : "#052e16";
	const afterTextFill = decrease ? "#58d68d" : "white";
	const afterTextY = decrease ? BC_Y_BASE - rightH - 7 : afterTopY + 28;

	return (
		<svg viewBox={`0 0 ${BC.W} ${BC.H}`} className="w-full" aria-hidden="true">
			<defs>
				<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor={gradStart} />
					<stop offset="100%" stopColor={gradEnd} stopOpacity="0.85" />
				</linearGradient>
			</defs>

			{/* 그리드·기준선 */}
			<line
				x1={BC.PL}
				y1={BC_Y_BASE - BC.BAR_MAX_H / 2}
				x2={BC.W - BC.PR}
				y2={BC_Y_BASE - BC.BAR_MAX_H / 2}
				stroke="#f1f5f9"
				strokeWidth="1"
			/>
			<line
				x1={BC.PL}
				y1={BC_Y_BASE}
				x2={BC.W - BC.PR}
				y2={BC_Y_BASE}
				stroke="#e2e8f0"
				strokeWidth="1.5"
			/>

			{/* 어노테이션 */}
			<motion.g
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: delay + 1.0, duration: 0.35 }}
			>
				<motion.text
					x={BC_RIGHT_CX}
					y={28}
					textAnchor="middle"
					fontSize="24"
					fontWeight="800"
					fill={annoColor}
					style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
					animate={inView ? { scale: [1, 1.14, 0.96, 1.06, 1] } : {}}
					transition={{
						delay: delay + 1.35,
						duration: 2.0,
						times: [0, 0.22, 0.52, 0.76, 1.0],
						repeat: Number.POSITIVE_INFINITY,
						repeatDelay: 2.0,
					}}
				>
					{annotation} {decrease ? "절감!" : "증가!"}
				</motion.text>
			</motion.g>

			{/* Before 막대 (회색) */}
			<motion.rect
				x={BC_LEFT_X}
				width={BC.BAR_W}
				rx="5"
				fill="#e2e8f0"
				initial={{ y: BC_Y_BASE, height: 0 }}
				animate={inView ? { y: BC_Y_BASE - leftH, height: leftH } : { y: BC_Y_BASE, height: 0 }}
				transition={{ duration: 0.6, delay, ease: "easeOut" }}
			/>
			<motion.text
				x={BC_LEFT_CX}
				y={BC_Y_BASE - leftH - 7}
				textAnchor="middle"
				fontSize="14"
				fontWeight="700"
				fill="#94a3b8"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: delay + 0.55 }}
			>
				{before}
				{unit}
			</motion.text>

			{/* After 막대 (그라디언트) */}
			<motion.rect
				x={BC_RIGHT_X}
				width={BC.BAR_W}
				rx="5"
				fill={`url(#${gradId})`}
				initial={{ y: BC_Y_BASE, height: 0 }}
				animate={inView ? { y: afterTopY, height: rightH } : { y: BC_Y_BASE, height: 0 }}
				transition={{ duration: 0.95, delay: delay + 0.1, ease: "easeOut" }}
			/>
			<motion.g
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: delay + 0.85, duration: 0.3 }}
			>
				<motion.text
					x={BC_RIGHT_CX}
					y={afterTextY}
					textAnchor="middle"
					fontSize={decrease ? 14 : 20}
					fontWeight="800"
					fill={afterTextFill}
					animate={inView ? { opacity: [1, 0.38, 1] } : {}}
					transition={{
						delay: delay + 1.35,
						duration: 1.3,
						repeat: Number.POSITIVE_INFINITY,
						repeatDelay: 2.3,
					}}
				>
					{after}
					{unit}
				</motion.text>
			</motion.g>

			{/* X축 라벨 */}
			<text x={BC_LEFT_CX} y={BC_Y_BASE + 18} textAnchor="middle" fontSize="11" fill="#94a3b8">
				{xLabels[0]}
			</text>
			<text
				x={BC_RIGHT_CX}
				y={BC_Y_BASE + 18}
				textAnchor="middle"
				fontSize="11"
				fontWeight="600"
				fill={annoColor}
			>
				{xLabels[1]}
			</text>
		</svg>
	);
};

// ── 사례 카드 ──────────────────────────────────────────────────
type CaseItem = (typeof CASE_HIGHLIGHTS)[number];

const CaseCard = ({ item, index }: { item: CaseItem; index: number }) => {
	const chartsRef = useRef<HTMLDivElement>(null);
	const chartsInView = useInView(chartsRef, { once: false, margin: "-60px" });
	const consultGradId = `grad-ch-consult-${index}`;
	const savingsGradId = `grad-ch-savings-${index}`;

	return (
		<Reveal>
			<div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_32px_rgba(15,23,42,0.06)]">
				<div className="p-6 md:p-10">
					{/* 사례 라벨 */}
					<div className="mb-5 flex items-center gap-2">
						<span className="font-bold text-slate-800 text-sm">{item.label}</span>
						<span className="font-medium text-slate-500 text-sm">{item.client}</span>
					</div>

					{/* 한마디 */}
					<blockquote className="mb-5 border-[#58d68d]/30 border-l-[3px] pl-5">
						<p className="break-keep font-bold text-[#0a0a0a] text-xl leading-snug md:text-2xl">
							&ldquo;{item.quote}&rdquo;
						</p>
						<footer className="mt-2 font-mono text-slate-500 text-xs">— {item.quoteAuthor}</footer>
					</blockquote>

					{/* 결과 요약 */}
					<p className="mb-8 break-keep text-lg text-slate-600 leading-relaxed md:text-xl">
						온세상이마케팅이다 마케팅 후 6개월, 월 상담{" "}
						<span className="font-extrabold text-2xl text-[#58d68d] md:text-3xl">
							<CountUp to={item.multiplier} />배
						</span>{" "}
						증가, 광고비{" "}
						<span className="font-extrabold text-2xl text-emerald-600 md:text-3xl">
							{item.adSavingAmount}만원
						</span>{" "}
						절감!
					</p>

					{/* 차트 2개 */}
					<div ref={chartsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="rounded-xl bg-slate-50 p-4">
							<p className="mb-1 font-semibold text-[#0a0a0a] text-xs tracking-wide">
								월 상담 건수
							</p>
							<ImpactBar
								before={item.beforeValue}
								after={item.afterValue}
								unit={item.afterUnit}
								annotation={`${item.multiplier}배`}
								gradId={consultGradId}
								inView={chartsInView}
								decrease={false}
								xLabels={["시작 전", "6개월 후"]}
							/>
						</div>
						<div className="rounded-xl bg-slate-50 p-4">
							<p className="mb-1 font-semibold text-[#0a0a0a] text-xs tracking-wide">광고비 절감</p>
							<ImpactBar
								before={item.adCostBefore}
								after={item.adCostAfter}
								unit="만원"
								annotation={`${item.adSavingAmount}만원`}
								gradId={savingsGradId}
								inView={chartsInView}
								decrease={true}
								delay={0.1}
								xLabels={["시작 전", "현재"]}
							/>
						</div>
					</div>
				</div>
			</div>
		</Reveal>
	);
};

// ── 단일 차트 사례 카드 (사례 3, 4) ──────────────────────────
type SingleCaseItem = (typeof CASE_HIGHLIGHTS_SINGLE)[number];

const SingleCaseCard = ({ item, index }: { item: SingleCaseItem; index: number }) => {
	const chartRef = useRef<HTMLDivElement>(null);
	const chartInView = useInView(chartRef, { once: false, margin: "-60px" });
	const gradId = `grad-ch-single-${index}`;

	return (
		<Reveal delay={index * 0.1}>
			<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_32px_rgba(15,23,42,0.06)]">
				<div className="flex flex-1 flex-col p-6 md:p-8">
					{/* 사례 라벨 */}
					<div className="mb-4 flex items-center gap-2">
						<span className="font-bold text-slate-800 text-sm">{item.label}</span>
						<span className="font-medium text-slate-500 text-sm">{item.client}</span>
					</div>

					{/* 한마디 */}
					<blockquote className="mb-4 border-[#58d68d]/30 border-l-[3px] pl-4">
						<p className="break-keep font-bold text-[#0a0a0a] text-lg leading-snug">
							&ldquo;{item.quote}&rdquo;
						</p>
						<footer className="mt-1.5 font-mono text-slate-500 text-xs">
							— {item.quoteAuthor}
						</footer>
					</blockquote>

					{/* 결과 요약 */}
					<p className="mb-5 break-keep text-base text-slate-600 leading-relaxed">
						{item.period} 후 월 상담{" "}
						<span className="font-extrabold text-[#58d68d] text-xl">
							<CountUp to={item.multiplier} />배
						</span>{" "}
						증가!
					</p>

					{/* 차트 1개 */}
					<div ref={chartRef} className="mt-auto rounded-xl bg-slate-50 p-4">
						<p className="mb-1 font-semibold text-[#0a0a0a] text-xs tracking-wide">월 상담 건수</p>
						<ImpactBar
							before={item.beforeValue}
							after={item.afterValue}
							unit={item.afterUnit}
							annotation={`${item.multiplier}배`}
							gradId={gradId}
							inView={chartInView}
							decrease={false}
							xLabels={["시작 전", `${item.period} 후`]}
						/>
					</div>
				</div>
			</div>
		</Reveal>
	);
};

// ── 메인 컴포넌트 ─────────────────────────────────────────────
export const CaseHighlight = () => {
	return (
		<section className="bg-slate-50 py-20 md:py-28">
			<div className="mx-auto max-w-5xl px-4 md:px-8">
				{/* 섹션 헤더 */}
				<Reveal className="mb-10">
					<p className="mb-3 font-bold text-[#58d68d] text-xl md:text-2xl">성공 사례</p>
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
						실제 운영 결과입니다.
					</h2>
				</Reveal>

				{/* 사례 1, 2 — 더블 차트 */}
				<div className="mb-6 flex flex-col gap-6">
					{CASE_HIGHLIGHTS.map((item, i) => (
						<CaseCard key={item.label} item={item} index={i} />
					))}
				</div>

				{/* 사례 3, 4 — 싱글 차트 2열 */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{CASE_HIGHLIGHTS_SINGLE.map((item, i) => (
						<SingleCaseCard key={item.label} item={item} index={i} />
					))}
				</div>
			</div>
		</section>
	);
};
