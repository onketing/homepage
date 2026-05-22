export type ProfessionSlug =
	| "lawyer"
	| "doctor"
	| "oriental"
	| "vet"
	| "labor"
	| "tax"
	| "pharmacist";

export type Profession = {
	slug: ProfessionSlug;
	label: string;
	icon: string;
	adRule: boolean;
	description: string;
	keyPoints: string[];
	strength: string;
	tag: string;
};

export const PROFESSIONS: Profession[] = [
	{
		slug: "lawyer",
		label: "변호사",
		icon: "Scale",
		adRule: true,
		description: "대한변호사협회 광고 규정을 준수하면서 상담 전환을 높이는 콘텐츠를 설계합니다.",
		keyPoints: [
			"광고 규정 검토 후 전 콘텐츠 발행",
			"형사·이혼·상속 등 분야별 키워드 DB 보유",
			"수임 전환 목표 월 보고 제공",
		],
		strength: "광고심사위원회 통과 콘텐츠만",
		tag: "법무법인 · 개인변호사",
	},
	{
		slug: "doctor",
		label: "의사",
		icon: "HeartPulse",
		adRule: true,
		description: "의료광고 심의를 통과하는 범위에서 환자가 안심하고 선택하는 콘텐츠를 제작합니다.",
		keyPoints: [
			"의료광고 심의 기준 준수",
			"진료과목별 환자 검색 키워드 분석",
			"내원·예약 전환 중심 콘텐츠 설계",
		],
		strength: "의료광고 심의 규정 준수 발행",
		tag: "의원 · 병원 · 개원의",
	},
	{
		slug: "oriental",
		label: "한의사",
		icon: "Stethoscope",
		adRule: true,
		description: "의료광고심의를 통과하는 범위 내에서 환자의 신뢰를 얻는 콘텐츠를 제작합니다.",
		keyPoints: [
			"의료광고 심의 기준 준수",
			"진료과목별 환자 검색 키워드 분석",
			"예약 전환 중심 콘텐츠 설계",
		],
		strength: "의료광고 심의 규정 준수 발행",
		tag: "한방병원 · 개원의",
	},
	{
		slug: "vet",
		label: "수의사",
		icon: "PawPrint",
		adRule: false,
		description:
			"반려동물 보호자가 믿고 찾는 동물병원이 되도록 진료 신뢰도와 전문성을 담은 콘텐츠를 설계합니다.",
		keyPoints: [
			"동물병원 키워드 분석 및 지역 검색 최적화",
			"반려동물 증상별 정보 콘텐츠 기획",
			"진료 예약·상담 전환 유도 설계",
		],
		strength: "반려동물 검색 키워드 DB",
		tag: "동물병원 · 개원 수의사",
	},
	{
		slug: "labor",
		label: "노무사",
		icon: "Briefcase",
		adRule: false,
		description: "노동법 이슈가 생긴 기업과 근로자가 찾는 순간, 검색 결과에 노출되도록 설계합니다.",
		keyPoints: [
			"근로기준법·해고·산재 등 실검 키워드 분석",
			"기업·근로자 이중 타깃 콘텐츠 전략",
			"상담 신청 전환 최적화",
		],
		strength: "기업·근로자 이중 타겟 설계",
		tag: "법인 노무사 · 사무소",
	},
	{
		slug: "tax",
		label: "세무사",
		icon: "Calculator",
		adRule: false,
		description: "절세·신고 시즌을 활용해 의뢰인이 직접 검색하고 찾아오는 구조를 만듭니다.",
		keyPoints: [
			"종합소득세·양도세 등 시즌별 키워드 공략",
			"개인·법인 타깃별 맞춤 콘텐츠",
			"기장 의뢰 전환 설계",
		],
		strength: "종소세·양도세 시즌 공략",
		tag: "개인 세무사 · 세무법인",
	},
	{
		slug: "pharmacist",
		label: "약사",
		icon: "Pill",
		adRule: true,
		description: "약사법 광고 규정을 검토하고 환자가 먼저 찾는 약국으로 포지셔닝합니다.",
		keyPoints: [
			"약사법 광고 규정 사전 검토 발행",
			"복약 지도·건강기능식품 키워드 분석",
			"내방 전환 중심 콘텐츠 설계",
		],
		strength: "약사법 광고 규정 준수 발행",
		tag: "약국 · 개국 약사",
	},
];
