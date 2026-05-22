// PLACEHOLDER: 아래 수치 및 사례는 가상입니다. 실데이터 확정 후 교체 필요.
export const CASE_HIGHLIGHTS = [
	{
		label: "사례 1.",
		client: "K 법무법인",
		multiplier: 6,
		beforeValue: 3,
		afterValue: 18,
		afterUnit: "건",
		quote: "숏폼으로도 상담이 들어올 줄 몰랐어요.",
		quoteAuthor: "K 법무법인 대표",
		adSavingAmount: 650,
		adCostBefore: 1000,
		adCostAfter: 350,
	},
	{
		label: "사례 2.",
		client: "D 피부과",
		multiplier: 4,
		beforeValue: 4,
		afterValue: 16,
		afterUnit: "건",
		quote: "3개월 전에 작성해 둔 블로그에서도 상담 문의가 오더라고요.",
		quoteAuthor: "D 피부과 원장",
		adSavingAmount: 520,
		adCostBefore: 800,
		adCostAfter: 280,
	},
] as const;

export const CASE_HIGHLIGHTS_SINGLE = [
	{
		label: "사례 3.",
		client: "H 법률사무소",
		multiplier: 3,
		beforeValue: 5,
		afterValue: 17,
		afterUnit: "건",
		period: "6개월",
		quote: "사람들이 이렇게 법률 콘텐츠를 많이 볼 줄 몰랐어요.",
		quoteAuthor: "H 법률사무소 대표",
	},
	{
		label: "사례 4.",
		client: "S 세무사무소",
		multiplier: 4,
		beforeValue: 3,
		afterValue: 12,
		afterUnit: "건",
		period: "6개월",
		quote: "다들 왜 숏폼~ 숏폼 하는지 알겠더라고요.",
		quoteAuthor: "S 세무사무소 대표",
	},
] as const;
