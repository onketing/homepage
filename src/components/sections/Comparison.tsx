import { CheckIcon, XIcon } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { COMPARISON_ROWS } from "@/data/comparison";

export const Comparison = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<SectionHeading title="일반 대행사 vs 그로스웨이브" className="mb-16" />
				</Reveal>

				<Reveal delay={0.1}>
					<div className="grid gap-4 md:grid-cols-2">
						{/* General */}
						<div className="rounded-md border border-slate-200 bg-white p-5 md:p-7">
							<p className="mb-6 font-semibold text-base text-slate-400">일반 대행사</p>
							<ul className="space-y-3">
								{COMPARISON_ROWS.map((row) => (
									<li key={row.general} className="flex items-start gap-3">
										<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50">
											<XIcon className="h-3 w-3 text-red-400" />
										</div>
										<span className="text-slate-500 text-sm">{row.general}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Growth Wave */}
						<div className="rounded-md border border-slate-200 bg-white p-7">
							<p className="mb-6 font-semibold text-[#0a0a0a] text-base">그로스웨이브</p>
							<ul className="space-y-3">
								{COMPARISON_ROWS.map((row) => (
									<li key={row.growthwave} className="flex items-start gap-3">
										<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#052e16]">
											<CheckIcon className="h-3 w-3 text-white" />
										</div>
										<span className="font-medium text-foreground text-sm">{row.growthwave}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>

				{/* Selection message */}
				<Reveal delay={0.2}>
					<div className="mt-6 rounded-md border border-slate-200 bg-white p-6 text-center">
						<p className="mb-1.5 font-semibold text-foreground text-sm">
							이런 분들은 정중히 거절하고 있습니다
						</p>
						<p className="text-muted-foreground text-sm">
							단기간 1위만 원하시는 분 · 컨펌 없이 전체 위임 원하시는 분 · 노출 수만 보시는 분
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
