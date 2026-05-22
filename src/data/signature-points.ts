type SignaturePoint = {
	num: string;
	title: string;
	body: string;
};

export const SIGNATURE_POINTS: SignaturePoint[] = [
	{
		num: "01",
		title: "끝까지 직접 봅니다",
		body: "외주 없이 한 팀이 기획부터 발행까지 책임집니다.",
	},
	{
		num: "02",
		title: "노출이 아닌 의뢰를 봅니다",
		body: "키워드 1위가 아니라, 의뢰로 이어지는 검색 의도를 봅니다.",
	},
	{
		num: "03",
		title: "대표가 직접 보고합니다",
		body: "자동화 보고서가 아닙니다. 매월 1회, 대표가 직접 측정해 전합니다.",
	},
	{
		num: "04",
		title: "담당자가 바뀌지 않습니다",
		body: "월 단위 교체 없는 전담제. 직군 학습이 누적됩니다.",
	},
];
