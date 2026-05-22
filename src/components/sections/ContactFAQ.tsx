import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const MINI_FAQS = [
	{
		q: "비용은 어떻게 되나요?",
		a: "직군·채널·목표에 따라 맞춤 책정됩니다. 상담에서 예산 범위를 말씀주시면 가능한 범위를 안내드립니다.",
		href: "/faq#faq-cost",
	},
	{
		q: "계약하지 않아도 상담을 받을 수 있나요?",
		a: "네. 마케팅 컨설팅은 계약과 무관합니다. 컨설팅 이후 계약 여부를 자유롭게 결정하시면 됩니다.",
		href: "/faq",
	},
	{
		q: "성과까지 얼마나 걸리나요?",
		a: "블로그 상위 노출은 평균 2-3개월, 숏폼 채널 성장은 3-6개월을 기준으로 합니다. 상담에서 직군별 기대치를 안내드립니다.",
		href: "/faq#faq-contract",
	},
];

export const ContactFAQ = () => {
	return (
		<section className="bg-slate-50 px-4 py-14 md:py-16">
			<div className="mx-auto max-w-3xl">
				<Reveal className="mb-8">
					<p className="font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Quick FAQ
					</p>
				</Reveal>
				<div className="space-y-3">
					{MINI_FAQS.map((faq, i) => (
						<Reveal key={faq.q} delay={i * 0.08}>
							<div className="rounded-xl bg-white p-5 shadow-[0_1px_8px_rgba(15,23,42,0.04)]">
								<p className="mb-2 font-semibold text-[#0a0a0a] text-sm">{faq.q}</p>
								<p className="mb-3 break-keep text-slate-500 text-sm leading-relaxed">{faq.a}</p>
								<Link
									href={faq.href}
									className="inline-flex items-center gap-1 font-medium text-[#58d68d] text-xs hover:underline"
								>
									FAQ에서 자세히 보기
									<ArrowRight className="h-3 w-3" aria-hidden="true" />
								</Link>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
