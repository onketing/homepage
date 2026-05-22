import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { ServiceEngagementPolicy } from "@/components/sections/ServiceEngagementPolicy";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { ShortformAccumulation } from "@/components/sections/ShortformAccumulation";
import { ShortformHero } from "@/components/sections/ShortformHero";
import { ShortformPain } from "@/components/sections/ShortformPain";
import {
	SHORTFORM_CASES,
	SHORTFORM_PILLARS,
	SHORTFORM_PROCESS,
	SHORTFORM_PROOF,
} from "@/data/service-shortform";

export const metadata: Metadata = {
	title: "숏폼 마케팅 | Growth Wave",
	description:
		"전문직을 위한 숏폼 마케팅. 릴스·쇼츠·틱톡 3채널 동시 운영으로 채널 자산을 누적합니다.",
};

export const ShortformServicePage = () => {
	return (
		<>
			<ShortformHero />
			<ShortformAccumulation />
			<ServiceProofStrip items={SHORTFORM_PROOF} />
			<ShortformPain />
			<ServiceWhatWeDo items={SHORTFORM_PILLARS} />
			<CaseTestimonial cases={SHORTFORM_CASES} dark />
			<ServiceProcess steps={SHORTFORM_PROCESS} footnote="5단계 모두 대표가 직접 검수합니다." />
			<ServiceEngagementPolicy />
			<AboutMidCTA />
		</>
	);
};

export default ShortformServicePage;
