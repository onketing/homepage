export type PricingFactor = {
	title: string;
	description: string;
};

export const PRICING_FACTORS: PricingFactor[] = [
	{
		title: "직군별 복잡도",
		description:
			"변호사 광고 규정 준수 콘텐츠와 세무사 정보성 콘텐츠는 제작 난이도가 다릅니다. 직군에 따라 필요한 사전 검토 범위가 달라집니다.",
	},
	{
		title: "운영 채널",
		description: "블로그 단독 / 숏폼 포함 / 멀티채널 여부에 따라 월 작업 규모가 달라집니다.",
	},
	{
		title: "성과 목표 KPI",
		description:
			"월 상담 문의 수 목표 / 키워드 상위노출 수 / 브랜드 신뢰 누적 등 목표에 맞게 설계합니다.",
	},
];
