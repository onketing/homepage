import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
	{ num: "01", title: "폼 작성", desc: "3분이면 작성 완료. 현황·직군·목표만 간단히 적어주세요." },
	{ num: "02", title: "영업일 1일 내 회신", desc: "담당자가 직접 확인하고 연락드립니다." },
	{ num: "03", title: "마케팅 컨설팅", desc: "영상·전화·대면 중 편한 방식으로 진행합니다." },
	{
		num: "04",
		title: "규정 검토 리포트",
		desc: "현재 채널의 광고 규정 위반 항목을 즉시 정리해 드립니다.",
	},
];

export const ContactProcess = () => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-20">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-10 text-center">
					<p className="mb-2 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Process
					</p>
					<h2 className="font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
						이렇게 진행됩니다
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
					{STEPS.map((step, i) => (
						<Reveal key={step.num} delay={i * 0.08} direction="up">
							<div className="relative flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
								{i < STEPS.length - 1 && (
									<div
										className="absolute top-[38px] right-0 hidden h-px w-3 bg-slate-200 md:block"
										style={{ right: "-12px" }}
										aria-hidden="true"
									/>
								)}
								<span className="mb-3 font-bold font-mono text-[#58d68d] text-lg">{step.num}</span>
								<p className="mb-1.5 font-bold text-[#0a0a0a] text-sm">{step.title}</p>
								<p className="break-keep text-slate-500 text-xs leading-relaxed">{step.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
