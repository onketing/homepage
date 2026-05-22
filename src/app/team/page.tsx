import type { Metadata } from "next";
import { TeamCrews } from "@/components/sections/TeamCrews";
import { TeamHero } from "@/components/sections/TeamHero";
import { TeamProblemSolution } from "@/components/sections/TeamProblemSolution";
import { TeamScene } from "@/components/sections/TeamScene";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "팀 | Onketing",
	description:
		"규정·전략·기획·발행을 한 팀이 끝까지 책임집니다. 200건 이상 검토, 위반 0건의 인하우스 팀을 소개합니다.",
	keywords: [
		"온케팅 팀",
		"전문직 마케팅 팀",
		"인하우스 콘텐츠 팀",
		"광고 규정 검수",
		"변호사 마케팅 팀",
		"의료 마케팅 팀",
	],
};

export const TeamPage = () => (
	<>
		<TeamHero />
		<TeamCrews />
		<TeamScene />
		<TeamProblemSolution />
		<CTACard
			variant="gradient"
			headline="최고의 팀과 함께해 보세요"
			sub="왜 다른지 알게 되실 거예요."
			buttonText="문의하기"
			hideEyebrow
			hideTrustStats
			showButton
		/>
	</>
);

export default TeamPage;
