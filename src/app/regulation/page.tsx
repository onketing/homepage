import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { RegulationBeforeAfter } from "@/components/sections/RegulationBeforeAfter";
import { RegulationChecklist } from "@/components/sections/RegulationChecklist";
import { RegulationHero } from "@/components/sections/RegulationHero";
import { RegulationLawSwitcher } from "@/components/sections/RegulationLawSwitcher";
import { RegulationPledge } from "@/components/sections/RegulationPledge";
import { RegulationStats } from "@/components/sections/RegulationStats";

export const metadata: Metadata = {
	title: "광고 규정 가이드 | Onketing",
	description:
		"12개 직군 광고 규정을 발행 전 직접 검토합니다. 위반 카피와 통과 카피를 항목별로 확인하세요.",
	keywords: [
		"전문직 광고 규정",
		"변호사 광고 규정",
		"의료광고 심의",
		"세무사 광고",
		"노무사 광고",
		"수의사법 광고",
		"약사법 광고",
	],
};

export const RegulationPage = () => (
	<>
		<RegulationHero />
		<RegulationStats />
		<RegulationLawSwitcher />
		<RegulationBeforeAfter />
		<RegulationChecklist />
		<RegulationPledge />
		<AboutMidCTA />
	</>
);

export default RegulationPage;
