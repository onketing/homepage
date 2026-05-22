import type { Metadata } from "next";
import { AboutCaseHighlight } from "@/components/sections/AboutCaseHighlight";
import { AboutCEOMessage } from "@/components/sections/AboutCEOMessage";
import { AboutCEOTimeline } from "@/components/sections/AboutCEOTimeline";
import { AboutClientStrip } from "@/components/sections/AboutClientStrip";
import { AboutFoundingStory } from "@/components/sections/AboutFoundingStory";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutHowWeWork } from "@/components/sections/AboutHowWeWork";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutSignature } from "@/components/sections/AboutSignature";
import { AboutTrustCounter } from "@/components/sections/AboutTrustCounter";
import { AESlogan } from "@/components/sections/AESlogan";
import { Comparison } from "@/components/sections/Comparison";
import { OrgChart } from "@/components/sections/OrgChart";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "회사소개 | Onketing",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 온케팅. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
};

export const AboutPage = () => {
	return (
		<>
			{/* 1. 풀스크린 다크 Hero */}
			<AboutHero />

			{/* 2. 창업 스토리 + 팀 사진 */}
			<AboutFoundingStory />

			{/* 3. 신뢰 카운터 — 4축 숫자 */}
			<AboutTrustCounter />

			{/* 4. 5단계 프로세스 */}
			<AboutHowWeWork />

			{/* 5. 직군 Marquee */}
			<AboutClientStrip />

			{/* 6. 슬로건 (다크) */}
			<AESlogan />

			{/* 7. 시그니처 방법론 */}
			<AboutSignature />

			{/* 8. 직군별 성과 케이스 */}
			<AboutCaseHighlight />

			{/* 9. CEO 메시지 */}
			<AboutCEOMessage />

			{/* 10. CEO 타임라인 */}
			<AboutCEOTimeline />

			{/* 11. 미션 */}
			<AboutMission />

			{/* 12. 조직도 */}
			<OrgChart />

			{/* 13. 비교 */}
			<Comparison />

			{/* 14. 중간 CTA (다채널) */}
			<AboutMidCTA />

			{/* 15. 최종 CTA */}
			<CTACard
				variant="gradient"
				headline="전문직 마케팅, 우리에게 맡기세요."
				sub="광고 규정 위반 항목 즉시 확인"
				buttonText="마케팅 컨설팅"
			/>
		</>
	);
};

export default AboutPage;
