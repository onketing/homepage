export type RealReviewType = "phone" | "bubble" | "thumb";

export type BubbleMsg = {
	side: "them" | "me";
	text: string;
};

export type RealReview = {
	id: string;
	type: RealReviewType;
	authorLabel: string;
	fieldLabel: string;
	imageUrl?: string;
	bubbles?: BubbleMsg[];
	excerpt?: string;
};

export const REAL_REVIEWS_ROW1: RealReview[] = [
	{
		id: "r1-1",
		type: "bubble",
		authorLabel: "변호사 A",
		fieldLabel: "가사",
		bubbles: [
			{ side: "them", text: "이번 달에 5건 수임됐어요. 진짜 신기하네요 ㅎㅎ" },
			{ side: "me", text: "어떤 채널 통해서 들어오셨어요?" },
			{ side: "them", text: "거의 다 블로그 보고 연락 주신대요" },
		],
	},
	{
		id: "r1-3",
		type: "bubble",
		authorLabel: "변호사 C",
		fieldLabel: "민사",
		bubbles: [
			{ side: "them", text: "광고 규정 미리 검토해주셔서 진짜 안심됐습니다" },
			{ side: "me", text: "네, 업로드 전 규정 체크는 항상 진행해요" },
			{ side: "them", text: "전 대행사는 그냥 올렸거든요 ㅠ" },
		],
	},
	{
		id: "r1-4",
		type: "thumb",
		authorLabel: "원장 D",
		fieldLabel: "한의원",
		imageUrl: "https://placehold.co/300x180/FEE500/0a0a0a?text=Review",
		excerpt: "의사 입장이 아닌 환자 입장에서 쓴 글이라는 게 차이가 컸어요.",
	},
	{
		id: "r1-5",
		type: "bubble",
		authorLabel: "세무사 E",
		fieldLabel: "법인세무",
		bubbles: [
			{ side: "them", text: "재계약 진행하겠습니다. 잘 부탁드려요" },
			{ side: "me", text: "감사합니다, 다음 달 일정 조율할게요" },
		],
	},
];

export const REAL_REVIEWS_ROW2: RealReview[] = [
	{
		id: "r2-1",
		type: "thumb",
		authorLabel: "원장 J",
		fieldLabel: "내과",
		imageUrl: "https://placehold.co/300x180/FEE500/0a0a0a?text=Review",
		excerpt: "대행사 바뀌어도 톤이 흔들리지 않는 첫 번째 회사입니다.",
	},
	{
		id: "r2-2",
		type: "bubble",
		authorLabel: "변호사 K",
		fieldLabel: "교통사고",
		bubbles: [
			{ side: "them", text: "블로그 보고 연락 주시는 분들이 늘었어요" },
			{ side: "me", text: "어떤 키워드로 들어오시는지 알 수 있을까요?" },
			{ side: "them", text: "교통사고 과실 관련 글이 제일 많이 보인대요" },
		],
	},
	{
		id: "r2-5",
		type: "thumb",
		authorLabel: "원장 N",
		fieldLabel: "치과",
		imageUrl: "https://placehold.co/300x180/FEE500/0a0a0a?text=Review",
		excerpt: "광고 규정 검토 후 발행한다는 점이 가장 안심됐어요.",
	},
	{
		id: "r2-6",
		type: "bubble",
		authorLabel: "노무사 O",
		fieldLabel: "노동·인사",
		bubbles: [
			{ side: "them", text: "전 대행사보다 콘텐츠 톤이 훨씬 정확해요" },
			{ side: "me", text: "실제로 검색하는 분들 의도에 맞춰 쓰거든요" },
		],
	},
];
