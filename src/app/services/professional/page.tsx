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
	title: "전문직 마케팅 | Growth Wave",
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 전문직을 위한 마케팅. 광고 규정을 이해하고 수임·의뢰 전환을 설계합니다.",
};

export const ProfessionalServicePage = () => {
	return (
		<>
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
