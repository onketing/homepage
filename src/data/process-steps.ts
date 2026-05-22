export type ProcessStep = {
	title: string;
	description: string;
	icon: string;
	badge?: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		title: "마케팅 컨설팅",
		description: "궁금한 점은 무엇이든 물어보세요. 모두 직접 답변해 드립니다.",
		icon: "MessageSquare",
	},
	{
		title: "전략 수립",
		description: "블로그·숏폼 등 업태에 맞춘 마케팅 전략을 제안합니다.",
		icon: "CalendarDays",
	},
	{
		title: "발행",
		description: "알고리즘에 최적화된 콘텐츠를 발행하고, 계정을 직접 관리합니다.",
		icon: "PenLine",
	},
	{
		title: "성과 점검",
		description: "리포트를 제공하고, 결과에 따라 맞춤 전략을 다시 세웁니다.",
		icon: "BarChart2",
	},
];
