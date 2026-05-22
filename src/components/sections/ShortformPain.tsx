"use client";

import { Reveal } from "@/components/shared/Reveal";

const BUBBLES = [
	{ initial: "L", role: "변호사", text: "출연자가 부담스러워해서 1회로 끝납니다." },
	{ initial: "K", role: "치과 원장", text: "조회수는 떴는데, 상담 전화는 없습니다." },
	{ initial: "M", role: "한의사", text: "릴스만 만들었더니, 유튜브·틱톡은 비어있습니다." },
	{ initial: "P", role: "세무사", text: "후반 작업이 늦어져 발행이 자꾸 미뤄집니다." },
] as const;

export const ShortformPain = () => {
	return (
		<section className="bg-[#052e16] px-4 py-16 md:py-20">
			<div className="mx-auto max-w-3xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#86efac] text-sm uppercase tracking-[0.25em]">
						Pain Points
					</p>
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-4xl">
						이런 말, 들어보셨나요.
					</h2>
				</Reveal>

				<div className="flex flex-col gap-5">
					{BUBBLES.map((b, i) => (
						<Reveal key={b.text} delay={i * 0.1} direction="up">
							<div className="flex items-start gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#58d68d]/20">
									<span className="font-bold text-[#86efac] text-sm">{b.initial}</span>
								</div>
								<div>
									<p className="mb-1.5 font-medium text-white/30 text-xs">{b.role}</p>
									<div className="rounded-2xl rounded-tl-none border border-white/[0.06] bg-[#1a1a1a] px-5 py-4">
										<p className="break-keep text-sm text-white/75 leading-relaxed">{b.text}</p>
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
