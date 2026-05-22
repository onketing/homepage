export type SubTeam = {
	name: string;
	desc: string;
};

export type Department = {
	name: string;
	desc: string;
	subs: SubTeam[];
};

export const DEPARTMENTS: Department[] = [
	{
		name: "마케팅팀",
		desc: "키워드 분석 · SNS 채널 운영",
		subs: [
			{ name: "브랜드 마케팅팀", desc: "콘텐츠 기획 · 광고 소재 제작" },
			{ name: "퍼포먼스 마케팅팀", desc: "CPC·CPM 광고 집행 · 성과 분석" },
		],
	},
	{
		name: "영상팀",
		desc: "숏폼 촬영 · 출연자 디렉팅",
		subs: [
			{ name: "콘텐츠 기획팀", desc: "각본·스토리 구성 · 레퍼런스 리서치" },
			{ name: "촬영·디렉팅팀", desc: "현장 촬영 · 출연자 코칭" },
		],
	},
	{
		name: "편집팀",
		desc: "릴스·쇼츠 편집 · 자막·후반 작업",
		subs: [
			{ name: "영상 편집팀", desc: "릴스·쇼츠 편집 · 컬러 그레이딩" },
			{ name: "후반 작업팀", desc: "자막 작업 · 썸네일 제작" },
		],
	},
];
