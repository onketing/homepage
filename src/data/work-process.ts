type WorkStep = {
	step: string;
	title: string;
	desc: string;
};

export const WORK_PROCESS: WorkStep[] = [
	{
		step: "01",
		title: "규정 검토",
		desc: "변호사법·의료법·세무사법 조항을 먼저 매칭합니다.",
	},
	{
		step: "02",
		title: "검색 의도 분석",
		desc: "고객이 실제로 검색하는 키워드만 봅니다.",
	},
	{
		step: "03",
		title: "콘텐츠 설계",
		desc: "규정 통과와 전환을 동시에 설계합니다.",
	},
	{
		step: "04",
		title: "전담 운영",
		desc: "담당자는 바뀌지 않습니다.",
	},
	{
		step: "05",
		title: "직접 보고",
		desc: "수임·내원·의뢰 단위로 대표가 매월 보고합니다.",
	},
];
