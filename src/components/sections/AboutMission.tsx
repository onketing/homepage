import { Reveal } from "@/components/shared/Reveal";

export const AboutMission = () => {
	return (
		<section className="bg-white px-4 py-16">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal direction="scale">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Mission
					</p>
					<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
						노출이 아니라 의뢰로 평가하는 마케팅 팀
					</h2>
					<p className="break-keep text-muted-foreground leading-relaxed">
						변호사·의사·세무사 등 12개 직군의 검색 의도를 직접 학습합니다.
						<br className="hidden sm:block" />
						의뢰인이 먼저 찾아오는 구조를 만듭니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
