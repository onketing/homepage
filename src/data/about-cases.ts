type AboutCase = {
	discipline: string;
	metric: string;
	before: string;
	after: string;
	caption: string;
};

// TODO: 아래 치과·세무사 수치는 실수치로 교체 필요
export const ABOUT_CASES: AboutCase[] = [
	{
		discipline: "변호사",
		metric: "키워드 상위노출",
		before: "월 0건",
		after: "2개월 내 5개 키워드 1페이지",
		caption: "사건 분야 3개 직접 수임 연결",
	},
	{
		discipline: "치과",
		metric: "신규 내원",
		before: "월 12건",
		after: "3개월간 +175%",
		caption: "의료광고 사전심의 통과 콘텐츠 12편",
	},
	{
		discipline: "세무사",
		metric: "상담 의뢰",
		before: "월 8건",
		after: "4개월간 +210%",
		caption: "기장·신고 분리 페르소나 콘텐츠",
	},
];
