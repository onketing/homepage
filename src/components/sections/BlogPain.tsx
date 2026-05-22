"use client";

import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
	{
		keyword: "변호사 이혼 상담 블로그",
		result: "키워드 1위. 의뢰 0건.",
	},
	{
		keyword: "한의사 다이어트 관련 글",
		result: "구독자 +300. 내원 변화 없음.",
	},
	{
		keyword: "세무사 절세 방법 콘텐츠",
		result: "광고 중단 즉시 트래픽 0.",
	},
	{
		keyword: "치과 임플란트 비용 상위",
		result: "노출 달성. 의뢰 직군 불일치.",
	},
] as const;

export const BlogPain = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-4xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Pain Points
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
						노출이 아닌, 의뢰가 목표입니다.
					</h2>
				</Reveal>

				<div className="flex flex-col gap-3">
					{ITEMS.map((item, i) => (
						<Reveal key={item.keyword} delay={i * 0.08} direction="up">
							<div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center">
								{/* 검색창 mockup */}
								<div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
									<svg
										className="h-3.5 w-3.5 shrink-0 text-slate-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
										aria-hidden="true"
									>
										<circle cx="11" cy="11" r="8" />
										<path d="m21 21-4.35-4.35" />
									</svg>
									<span className="text-slate-500 text-sm">{item.keyword}</span>
								</div>
								{/* 화살표 */}
								<span className="hidden text-slate-300 text-sm sm:block" aria-hidden="true">
									→
								</span>
								{/* 결과 */}
								<span className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-500 text-xs">
									{item.result}
								</span>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
