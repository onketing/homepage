import type { Metadata } from "next";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { ShortformAccumulation } from "@/components/sections/ShortformAccumulation";
import { ShortformFinalCTA } from "@/components/sections/ShortformFinalCTA";
import { ShortformGallery } from "@/components/sections/ShortformGallery";
import { ShortformHero } from "@/components/sections/ShortformHero";
import { ShortformPain } from "@/components/sections/ShortformPain";
import { ShortformPortfolio } from "@/components/sections/ShortformPortfolio";
import { SHORTFORM_CASES, SHORTFORM_PILLARS, SHORTFORM_PROCESS } from "@/data/service-shortform";

export const metadata: Metadata = {
	title: "숏폼 마케팅 | 온세상이마케팅이다",
	description:
		"전문직을 위한 숏폼 마케팅. 릴스·쇼츠·틱톡 3채널 동시 운영으로 채널 자산을 누적합니다.",
	keywords: [
		"전문직 숏폼 마케팅",
		"변호사 릴스",
		"의사 유튜브 쇼츠",
		"전문직 틱톡",
		"숏폼 영상 대행",
		"인스타그램 릴스 대행",
		"전문직 영상 마케팅",
	],
};

const shortformServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 숏폼 마케팅",
	url: "https://onketing.kr/services/shortform",
	provider: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사 등 전문직을 위한 숏폼 마케팅. 인스타그램 릴스·유튜브 쇼츠·틱톡 3채널을 동시 운영합니다. 대본·촬영·편집·업로드를 인하우스 팀이 전담합니다.",
	areaServed: "KR",
	serviceType: "숏폼 영상 마케팅 대행",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "숏폼 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "대본 기획 및 촬영 디렉팅" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "영상 편집 및 3채널 동시 업로드" } },
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "채널 분석 및 월간 리포트" } },
		],
	},
};

export const ShortformServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(shortformServiceSchema)}</script>
			<ShortformHero />
			<ShortformPain />
			<ServiceWhatWeDo
				items={SHORTFORM_PILLARS}
				heading="걱정하지 마세요. 몸만 오세요!"
				sub="숏폼은 세가지면 됩니다."
			/>
			<ShortformAccumulation />
			<ServiceProcess steps={SHORTFORM_PROCESS} />
			<ShortformPortfolio />
			<ShortformGallery />
			<CaseTestimonial cases={SHORTFORM_CASES} />
			<ShortformFinalCTA />
		</>
	);
};

export default ShortformServicePage;
