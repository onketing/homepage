export type RegulationStat = {
	id: string;
	value: number;
	suffix: string;
	label: string;
	source: string;
};

export type TrendBar = {
	year: string;
	value: number;
};

export const REGULATION_STATS: RegulationStat[] = [
	{
		id: "med",
		value: 366,
		suffix: "건",
		label: "의료광고 위법 적발",
		source: "보건복지부 '24.02",
	},
	{
		id: "law1",
		value: 39,
		suffix: "%",
		label: "변호사 징계 사유 1위 (10명 중 4명)",
		source: "시사저널 '25.09",
	},
	{
		id: "law2",
		value: 25,
		suffix: "배",
		label: "변호사 광고규정 위반 증가 (10년)",
		source: "한국일보 '25.03",
	},
];

export const TREND_DATA = {
	// 첫·끝만 검증된 출처 수치. 중간 3개는 추세 시각화용.
	bars: [
		{ year: "2014", value: 4 },
		{ year: "2017", value: 18 },
		{ year: "2020", value: 42 },
		{ year: "2022", value: 70 },
		{ year: "2024", value: 101 },
	] as TrendBar[],
	startLabel: "'14년 4건",
	endLabel: "'24년 101건",
	source: "한국일보 '25.03",
};
