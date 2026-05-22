import { Reveal } from "@/components/shared/Reveal";
import { ABOUT_CASES } from "@/data/about-cases";

export const AboutCaseHighlight = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Case Studies
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						직군별 <span className="gradient-text">결과</span>입니다.
					</h2>
					<p className="mx-auto mt-4 max-w-sm break-keep text-slate-500 leading-relaxed">
						광고비 줄이는 동안, 의뢰가 늘었습니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{ABOUT_CASES.map((c, i) => (
						<Reveal
							key={c.discipline}
							delay={i * 0.1}
							direction={(["left", "scale", "right"] as const)[i]}
						>
							<div className="rounded-2xl border border-slate-200 border-l-4 border-l-[#58d68d] bg-white p-6">
								<div className="mb-4 flex items-center gap-3">
									<span className="rounded-full bg-[#58d68d]/10 px-3 py-1 font-semibold text-[#58d68d] text-xs">
										{c.discipline}
									</span>
									<span className="text-slate-500 text-xs">{c.metric}</span>
								</div>

								<div className="mb-4">
									<p className="text-slate-400 text-sm line-through">{c.before}</p>
									<p className="mt-1 font-bold text-2xl leading-tight">
										<span className="gradient-text">{c.after}</span>
									</p>
								</div>

								<p className="border-slate-100 border-t pt-4 text-slate-500 text-sm leading-relaxed">
									{c.caption}
								</p>
							</div>
						</Reveal>
					))}
				</div>

				<Reveal className="mt-10 text-center">
					<p className="font-mono text-slate-500 text-xs tracking-[0.2em]">
						클라이언트 정보는 익명 처리합니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
