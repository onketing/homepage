import type { Metadata } from "next";
import { BlogCaseChart } from "@/components/sections/BlogCaseChart";
import { BlogEngagementPolicy } from "@/components/sections/BlogEngagementPolicy";
import { BlogFinalCTA } from "@/components/sections/BlogFinalCTA";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogHomepageSection } from "@/components/sections/BlogHomepageSection";
import { BlogVsAds } from "@/components/sections/BlogVsAds";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { BLOG_PILLARS, BLOG_PROCESS, BLOG_PROOF } from "@/data/service-blog";

export const metadata: Metadata = {
	title: "블로그 마케팅 | 온세상이마케팅이다",
	description:
		"전문직을 위한 블로그 마케팅. 의뢰로 이어지는 검색 의도를 분석하고 광고 규정을 통과한 콘텐츠를 발행합니다.",
	keywords: [
		"전문직 블로그 마케팅",
		"변호사 블로그",
		"의사 블로그",
		"네이버 블로그 대행",
		"전문직 콘텐츠 마케팅",
		"블로그 상위노출",
		"검색 의도 기반 블로그",
	],
};

const blogServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 블로그 마케팅",
	url: "https://onketing.kr/services/blog",
	provider: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사 등 전문직을 위한 네이버 블로그 콘텐츠 마케팅. 의뢰 직전 키워드를 선별하고 광고 규정을 검토한 뒤 발행합니다. 보고는 노출 수가 아닌 상담 신청 수로 합니다.",
	areaServed: "KR",
	serviceType: "블로그 마케팅 대행",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "블로그 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "검색 의도 기반 키워드 분석" } },
			{
				"@type": "Offer",
				itemOffered: { "@type": "Service", name: "광고 규정 검토 후 콘텐츠 발행" },
			},
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "월간 상담 신청 수 리포트" } },
		],
	},
};

export const BlogServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(blogServiceSchema)}</script>
			<BlogHero />
			<BlogVsAds />
			<BlogHomepageSection />
			<ServiceProofStrip items={BLOG_PROOF} />
			<ServiceWhatWeDo items={BLOG_PILLARS} />
			<BlogCaseChart />
			<ServiceProcess steps={BLOG_PROCESS} />
			<BlogEngagementPolicy />
			<BlogFinalCTA />
		</>
	);
};

export default BlogServicePage;
