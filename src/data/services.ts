import type { Service } from "@/types";

export const SERVICES: Service[] = [
	{
		index: "01",
		category: "Blog Marketing",
		title: "검색하는 고객과 가장 먼저 만나는 자리",
		description:
			"고객은 문제를 마주쳤을 때 가장 먼저 검색합니다. 그 순간 당신의 이름이 보여야 합니다. 전문직 특화 키워드 분석과 검색 의도 기반 콘텐츠로 상위 노출을 설계합니다.",
		steps: [
			{ step: 1, label: "키워드 분석" },
			{ step: 2, label: "콘텐츠 기획" },
			{ step: 3, label: "발행" },
			{ step: 4, label: "상위노출" },
			{ step: 5, label: "상담 전환" },
		],
	},
	{
		index: "02",
		category: "Short-form Marketing",
		title: "전문직도 콘텐츠 시대입니다",
		description:
			"인스타그램 릴스, 유튜브 쇼츠, 틱톡으로 전문가의 신뢰도를 콘텐츠로 쌓습니다. 멀티 채널 배포로 더 많은 고객에게 닿고, 전문가 채널을 키웁니다.",
		steps: [
			{ step: 1, label: "기획" },
			{ step: 2, label: "촬영" },
			{ step: 3, label: "편집" },
			{ step: 4, label: "업로드" },
			{ step: 5, label: "분석" },
		],
	},
];
