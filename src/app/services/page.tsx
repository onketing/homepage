import type { Metadata } from "next";
import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { ServiceComparison } from "@/components/sections/ServiceComparison";
import { ServiceMatrix } from "@/components/sections/ServiceMatrix";
import { WhyUsBold } from "@/components/sections/WhyUsBold";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "서비스 | 온세상이마케팅이다",
	description:
		"블로그·숏폼·전문직 통합 — 원하는 결과부터 정해주세요. 온세상이마케팅이다의 3가지 마케팅 채널을 비교하고 선택하세요.",
};

export const ServicesPage = () => {
	return (
		<>
			<PageHero
				eyebrow="서비스"
				title="원하는 결과부터"
				titleHighlight="정해주세요"
				sub="검색에서 발견되는 글, 신뢰가 쌓이는 영상, 직군에 맞춘 통합 운영. 채널마다 다릅니다."
				ctaText="마케팅 컨설팅"
				ctaHref="/contact"
			>
				<p className="font-mono text-slate-500 text-xs tracking-[0.2em]">
					블로그 · 숏폼 · 전문직 통합 — 3가지 채널
				</p>
			</PageHero>

			<ServiceMatrix />
			<ServiceComparison />
			<WhyUsBold />
			<CaseHighlight />
			<CTACard
				variant="gradient"
				headline="어떤 채널이 맞는지 모르겠다면."
				sub="직군에 맞는 채널을 찾아드립니다."
				buttonText="마케팅 컨설팅"
			/>
		</>
	);
};

export default ServicesPage;
