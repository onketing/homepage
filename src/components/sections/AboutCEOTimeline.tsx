import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const MILESTONES = [
	{
		year: "졸업",
		title: "한신대학교 정보통신학부",
		desc: "학사 졸업",
		done: true,
	},
	{
		year: "2023",
		title: "T사 퍼포먼스 마케터",
		desc: "CPC·CPM 광고 집행과 ROAS 최적화 실무 — 퍼포먼스 마케팅 실전 경험",
		done: true,
	},
	{
		year: "2024",
		title: "마케팅 플랫폼 '그룸힘' 창업",
		desc: "화장품 브랜드 대상 마케팅 플랫폼 대표 / 중소벤처기업부 예비창업 패키지 우수 기업 · 강원창조경제혁신센터 G스타트업 최우수 선정",
		done: true,
	},
	{
		year: "2025",
		title: "중앙대학교 캠퍼스타운 입주",
		desc: "세무·노무 등 전문직 마케팅 실 사례 다수 진행",
		done: true,
	},
	{
		year: "2026",
		title: "온케팅 정식 운영",
		desc: "변호사·의사·세무사 등 12개 직군 전문 콘텐츠 마케팅",
		done: true,
	},
];

export const AboutCEOTimeline = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
							Career
						</p>
						<h2 className="font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
							지나온 길
						</h2>
					</div>
				</Reveal>

				<div className="relative">
					{/* Vertical line */}
					<div
						className="absolute top-0 bottom-0 left-[88px] w-px bg-slate-200 md:left-[104px]"
						aria-hidden="true"
					/>

					<div className="space-y-8">
						{MILESTONES.map((m, i) => (
							<Reveal key={m.year} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
								<div className="flex items-start gap-6 md:gap-8">
									{/* Year */}
									<div className="w-20 shrink-0 pt-1 text-right md:w-24">
										<span className="font-bold text-[#0a0a0a] text-sm">{m.year}</span>
									</div>

									{/* Dot */}
									<div className="relative z-10 mt-1.5 shrink-0">
										<div
											className={cn(
												"h-3.5 w-3.5 rounded-full border-2",
												m.done ? "border-[#58d68d] bg-[#58d68d]" : "border-[#58d68d] bg-white",
											)}
										/>
									</div>

									{/* Content */}
									<div className="pb-2">
										<p className="font-semibold text-foreground">{m.title}</p>
										<p className="mt-0.5 text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
