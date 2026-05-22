import type { Case } from "@/types";

// TODO: 실 데이터로 교체 — 수치·기간·직군은 클라이언트 검수 후 업데이트
export const CASES: Case[] = [
	{
		field: "법인",
		anonymous: "강남 OO 법인",
		period: "4개월",
		metric: "수임 문의 증가",
		quote: "검색으로 들어오는 비율이 체감될 만큼 늘었습니다.",
	},
	{
		field: "정형외과",
		anonymous: "서울 OO 정형외과",
		period: "3개월",
		metric: "신환 유입 증가",
		quote: "광고 규정 검토 후 발행이라 처음부터 안심됐습니다.",
	},
	{
		field: "세무법인",
		anonymous: "부산 OO 세무법인",
		period: "6개월",
		metric: "검색 노출 확대",
		quote: "세무 키워드 1페이지에 콘텐츠가 올라가기 시작했습니다.",
	},
	{
		field: "노무법인",
		anonymous: "인천 OO 노무법인",
		period: "2개월",
		metric: "1페이지 노출 달성",
		quote: "노무 분야 콘텐츠 경험이 있는 대행사가 처음입니다.",
	},
];
