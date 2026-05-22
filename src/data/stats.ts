export type Stat = {
	title: string;
	description: string;
	value: string;
	suffix: string;
	label?: string;
	asOf?: string;
};

export const STATS: Stat[] = [
	{
		title: "전담하는 전문직 직군",
		description:
			"의료·법률·세무·노무 등 전문직만 다룹니다.\n규정이 까다로울수록 저희가 더 유리합니다.",
		value: "12",
		suffix: "개",
		label: "현재 전담 운영 직군",
		asOf: "2026.05",
	},
	{
		title: "장기 파트너십의 증거",
		description:
			"성과가 나오면 떠날 이유가 없습니다.\n함께한 고객 10명 중 9명이 다음 계약을 이어갑니다.",
		value: "90",
		suffix: "%+",
		label: "재계약율",
		asOf: "누적",
	},
	{
		title: "규정 리스크 없는 콘텐츠",
		description:
			"의료법·변호사법·세무사법 기준으로 전수 검토합니다.\n규정에 걸릴 콘텐츠는 처음부터 만들지 않습니다.",
		value: "100",
		suffix: "%",
		label: "발행 전 규정 검토 완료율",
		asOf: "누적",
	},
	{
		title: "검색에서 먼저 발견됩니다",
		description:
			"전문직 핵심 키워드로 검색 1페이지에 올립니다.\n노출이 아닌 의뢰로 이어지는 콘텐츠를 만듭니다.",
		value: "92",
		suffix: "%",
		label: "콘텐츠 검색 상위 노출 달성율",
		asOf: "블로그",
	},
];
