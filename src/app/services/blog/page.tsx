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
	title: "블로그 마케팅 | Onketing",
	description:
		"전문직을 위한 블로그 마케팅. 의뢰로 이어지는 검색 의도를 분석하고 광고 규정을 통과한 콘텐츠를 발행합니다.",
};

export const BlogServicePage = () => {
	return (
		<>
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
