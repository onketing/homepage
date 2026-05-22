import { BarChart3, BookText, Layers } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

type Principle = {
	num: string;
	icon: typeof BookText;
	title: string;
	body: string;
	anecdote: string;
	// TODO: 실제 수치 확인 — placeholder 측정 기준
	meta: string;
};

const PRINCIPLES: Principle[] = [
	{
		num: "01",
		icon: BookText,
		title: "규정을 모르면 손대지 않습니다.",
		body: "변호사법·의료법·세무사법을 발행 전 직접 검토합니다. 직군 규정 통과 후에만 콘텐츠가 나갑니다.",
		anecdote: "발행 전 법령 체크리스트를 항목별로 확인하고 기록합니다.",
		meta: "검토 기준: 변호사·의료·세무사 광고 규정",
	},
	{
		num: "02",
		icon: BarChart3,
		title: "조회수는 시작, 상담이 결과입니다.",
		body: "월 보고서의 KPI는 상담 신청 수입니다. 조회수가 늘어도 의뢰가 없으면 원인부터 다시 봅니다.",
		// TODO: 실제 수치 확인 — 임의값
		anecdote: "콘텐츠 보고에서 조회수는 보조 지표입니다.\n상담 건수가 메인입니다.",
		meta: "측정 기준: 월간 상담 신청 수",
	},
	{
		num: "03",
		icon: Layers,
		title: "기획자가 직접 씁니다.",
		body: "콘텐츠 기획·초안·검수를 외주에 맡기지 않습니다. 직군을 아는 기획자가 처음부터 끝까지 씁니다.",
		// TODO: 실제 수치 확인 — 임의값
		anecdote: "브리핑한 내용이 콘텐츠에 그대로 반영됩니다.\n중간 전달 오류가 없습니다.",
		meta: "직군을 아는 기획자가 초안부터 직접 작성",
	},
];

export const TeamPrinciples = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Our Principles
					</p>
					<h2 className="font-bold text-3xl text-slate-900 tracking-tight md:text-5xl">
						이렇게 일합니다.
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{PRINCIPLES.map((p, i) => {
						const Icon = p.icon;
						return (
							<Reveal key={p.num} delay={i * 0.1} direction="up">
								<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
									<div className="mb-5 flex items-center justify-between">
										<span className="font-bold font-mono text-[#58d68d] text-sm tracking-[0.2em]">
											{p.num}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#052e16]">
											<Icon className="h-4 w-4 text-white" aria-hidden="true" />
										</div>
									</div>

									<h3 className="mb-3 break-keep font-bold text-lg text-slate-900 leading-snug tracking-tight md:text-xl">
										{p.title}
									</h3>
									<p className="mb-5 break-keep text-slate-600 text-sm leading-relaxed">{p.body}</p>

									<div className="mt-auto">
										<div className="rounded-lg bg-slate-50 px-4 py-3">
											<p className="whitespace-pre-line break-keep text-slate-700 text-sm leading-relaxed">
												{p.anecdote}
											</p>
										</div>
										<p className="mt-3 font-mono text-slate-500 text-xs tracking-[0.12em]">
											{p.meta}
										</p>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
