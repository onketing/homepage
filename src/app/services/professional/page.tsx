import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { DisciplineGrid } from "@/components/sections/DisciplineGrid";
import { ProfessionalHero } from "@/components/sections/ProfessionalHero";
import { ServiceEngagementPolicy } from "@/components/sections/ServiceEngagementPolicy";
import { ServicePainPoints } from "@/components/sections/ServicePainPoints";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import {
	PROFESSIONAL_CASES,
	PROFESSIONAL_PAIN,
	PROFESSIONAL_PILLARS,
	PROFESSIONAL_PROOF,
} from "@/data/service-professional";
import { WORK_PROCESS } from "@/data/work-process";

export const metadata: Metadata = {
	title: "전문직 마케팅 | 온세상이마케팅이다",
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 전문직을 위한 마케팅. 광고 규정을 이해하고 수임·의뢰 전환을 설계합니다.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
		"전문직 광고 대행",
	],
};

const professionalServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 마케팅",
	alternateName: "전문직 통합 마케팅",
	url: "https://onketing.kr/services/professional",
	provider: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 직군 전용 마케팅. 직군별 광고 규정을 직접 검토하고 블로그·숏폼 콘텐츠를 발행합니다. 수임·의뢰 전환을 목표로 설계합니다.",
	areaServed: "KR",
	serviceType: "전문직 마케팅 대행",
	audience: {
		"@type": "Audience",
		audienceType: "변호사, 의사, 한의사, 수의사, 노무사, 세무사",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "전문직 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "키워드 분석 및 콘텐츠 기획" } },
			{
				"@type": "Offer",
				itemOffered: { "@type": "Service", name: "광고 규정 검토 및 콘텐츠 발행" },
			},
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "월간 상담 신청 수 보고" } },
		],
	},
};

export const ProfessionalServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
			<ProfessionalHero />
			<ServiceProofStrip items={PROFESSIONAL_PROOF} />
			<DisciplineGrid />
			<ServicePainPoints items={PROFESSIONAL_PAIN} />
			<ServiceWhatWeDo items={PROFESSIONAL_PILLARS} />
			<CaseTestimonial cases={PROFESSIONAL_CASES} />
			<ServiceProcess steps={WORK_PROCESS} footnote="5단계 모두 대표가 직접 검수합니다." />
			<ServiceEngagementPolicy />
			<AboutMidCTA />
		</>
	);
};

export default ProfessionalServicePage;
