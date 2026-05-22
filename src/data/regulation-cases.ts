export type RegulationCase = {
	id: string;
	field: string;
	law: string;
	before: string;
	after: string;
	reason: string;
};

export const REGULATION_CASES: RegulationCase[] = [
	{
		id: "law",
		field: "법무법인",
		law: "변호사법 제23조",
		before: "승소율 98%! 최고의 변호사가 당신을 도와드립니다.",
		after: "형사·민사 사건 담당 변호사가 직접 상담합니다.",
		reason: "승소율 수치 표시 및 '최고' 등 과장 표현 금지",
	},
	{
		id: "medical",
		field: "의원·병원",
		law: "의료법 제56조",
		before: "국내 최고 피부과! 시술 후 만족 100% 보장.",
		after: "레이저·필러 시술 안내 — 부작용·주의사항은 상담에서 확인하세요.",
		reason: "'최고', '보장' 등 절대적·단정적 표현 일체 금지",
	},
	{
		id: "tax",
		field: "세무사",
		law: "세무사법 시행령",
		before: "세금 환급 100% 성공 보장 세무사.",
		after: "환급 가능 여부, 세무 상담에서 검토해드립니다.",
		reason: "성과·결과 보장 광고 금지",
	},
	{
		id: "labor",
		field: "노무사",
		law: "공인노무사법",
		before: "노무 분쟁 무조건 이깁니다! 합의금 최대화.",
		after: "부당해고·임금체불 상담 — 사건별 검토 후 방향 안내.",
		reason: "결과 보장 및 과장 표현, 합의금 언급 금지",
	},
];
