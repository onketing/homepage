export type ProcessStep = {
	step: string;
	title: string;
	description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		step: "01",
		title: "상담",
		description: "현재 운영 현황과 목표를 파악합니다. 직군별 맞춤 전략 방향을 제시합니다.",
	},
	{
		step: "02",
		title: "키워드 분석",
		description: "실제 고객이 검색하는 키워드를 데이터로 추출합니다. 경쟁 환경을 분석합니다.",
	},
	{
		step: "03",
		title: "콘텐츠 설계",
		description: "광고 규정 검토 후 전환 목표에 맞는 콘텐츠 구조를 설계합니다.",
	},
	{
		step: "04",
		title: "제작·발행",
		description: "블로그·숏폼 콘텐츠를 제작하고 최적 채널에 발행합니다.",
	},
	{
		step: "05",
		title: "성과 보고",
		description: "매월 노출·상담 전환 데이터를 보고하고 전략을 개선합니다.",
	},
];
