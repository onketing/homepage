import { Reveal } from "@/components/shared/Reveal";

const REEL_SLOTS = ["reel-1", "reel-2", "reel-3", "reel-4", "reel-5", "reel-6"] as const;

export const ShortformPortfolio = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Portfolio
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						저희가 만든 <span className="gradient-text">작업물들</span>
					</h2>
					<p className="mx-auto mt-3 max-w-md break-keep text-base text-slate-500 leading-relaxed">
						실제 제작된 릴스·쇼츠를 준비 중입니다. 상담 시 포트폴리오를 직접 보여드립니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
					{REEL_SLOTS.map((id, i) => (
						<Reveal key={id} delay={i * 0.06}>
							<div className="flex aspect-9/16 flex-col items-center justify-center rounded-2xl bg-slate-100">
								<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#58d68d]/15">
									<span className="font-bold text-[#58d68d] text-lg">▶</span>
								</div>
								<span className="text-slate-400 text-sm">준비 중</span>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
