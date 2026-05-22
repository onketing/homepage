export const BLOG_PROOF = [
	{ value: 200, suffix: "+", label: "누적 콘텐츠", caption: "전문직 특화 발행 완료" },
	{ value: 3, suffix: "만+", label: "평균 조회수 증가", caption: "운영 3개월 기준" },
	{ value: 5, suffix: "배+", label: "평균 문의 증가", caption: "블로그 운영 전 대비" },
	{ value: 90, suffix: "%+", label: "재계약율", caption: "운영 6개월 이후 기준" },
] as const;

export const BLOG_PAIN = [
	"키워드 상위노출은 됐는데, 트래픽이 의뢰로 안 옵니다.",
	"구독자만 늘고, 실제 수임은 그대로입니다.",
	"광고비 줄였더니, 트래픽도 같이 사라졌습니다.",
	"타깃이 아닌 무관한 키워드만 잡혀있습니다.",
] as const;

export const BLOG_PILLARS = [
	{
		num: "01",
		title: "검색량 기반 키워드 분석",
		body: "단순 검색량이 아닌 고객이 실제로 찾는 키워드를 분석하여, 문의 가능성이 높은 키워드 중심으로 설계합니다.",
	},
	{
		num: "02",
		title: "신뢰를 만드는 콘텐츠 기획 및 발행",
		body: "광고처럼 보이는 문구보다, 전문성과 신뢰가 전달되는 콘텐츠와 검색 엔진에 맞춰진 원고를 제작합니다.",
	},
	{
		num: "03",
		title: "블로그 상위노출",
		body: "발행된 콘텐츠들의 키워드 노출 현황을 체크하여, 키워드를 지속적으로 점검합니다.",
	},
] as const;

export const BLOG_PROCESS = [
	{
		step: "01",
		title: "검색량 기반 키워드 분석",
		desc: "실제 의뢰인이 검색할만한 키워드로 구분합니다.",
	},
	{
		step: "02",
		title: "콘텐츠 원고 작성",
		desc: "광고주님의 업태에 맞춰진 원고를 작성하여 1차 컨펌이 진행됩니다.",
	},
	{
		step: "03",
		title: "콘텐츠 발행",
		desc: "1차 컨펌이 완료된 원고를 2차 가공하여 업로드합니다.",
	},
	{
		step: "04",
		title: "상위노출 체크",
		desc: "발행된 콘텐츠들의 키워드 노출 현황을 체크하여, 키워드를 지속적으로 점검합니다.",
	},
] as const;

export const BLOG_VS_ADS = [
	{ axis: "효과 시작", ads: "빠름 (즉시 유입)", blog: "점진적 증가" },
	{ axis: "비용", ads: "고예산 소진형", blog: "저예산 장기 효율형" },
	{ axis: "유지력", ads: "중단 시 즉시 종료", blog: "게시 후 지속 노출" },
	{ axis: "고객 반응", ads: "광고로 인식", blog: "후기/정보로 신뢰 확보" },
	{ axis: "검색 노출", ads: "광고 영역", blog: "자연 검색 상위 가능" },
	{ axis: "결과", ads: "단기 유입 확보", blog: "장기 매출 자산화" },
] as const;

export const BLOG_ENGAGEMENT_POLICY = {
	heading: "이런 분들은 함께 할 수 없습니다.",
	items: [
		{
			title: "단기간 즉각적인 결과만을 기대하는 경우",
			body: "블로그는 누적형 채널로, 일정 기간의 운영이 필요합니다.",
		},
		{
			title: "동일 채널을 여러 업체가 동시에 운영 중인 경우",
			body: "일관된 브랜딩과 성과 관리를 위해 단독 운영을 원칙으로 합니다.",
		},
		{
			title: "월 단위 테스트만 원하는 경우",
			body: "안정적인 성과 분석을 위해 최소 운영 기간이 필요합니다.",
		},
		{
			title: "경쟁사와 동일한 방식의 콘텐츠만 원하는 경우",
			body: "차별화 없는 운영은 장기 성과로 이어지기 어렵습니다.",
		},
	],
} as const;

export const BLOG_SIGNATURE_POINTS = [
	{
		num: "01",
		title: "끝까지 책임집니다",
		body: "기획부터 발행, 성과 관리까지 직접 운영합니다.",
	},
	{
		num: "02",
		title: "모든 과정은 투명하게 공유합니다",
		body: "운영 현황과 성과는 정기적으로 전달하며 숫자로 확인할 수 있도록 관리합니다.",
	},
	{
		num: "03",
		title: "노출보다 문의를 우선합니다",
		body: "조회수/방문자 중심이 아닌 실제 전환 가능성이 높은 키워드를 설계합니다.",
	},
	{
		num: "04",
		title: "성과가 날 때까지 개선합니다",
		body: "초기 전략에 머무르지 않고 데이터를 기반으로 지속 보완합니다.",
	},
] as const;

// TODO: 치과·세무사 수치는 실수치로 교체 필요
export const BLOG_CASES = [
	{
		discipline: "변호사",
		metric: "키워드 상위노출",
		before: "월 0건",
		after: "2개월 내 5개 키워드 1페이지",
		caption: "검색 의도 기반 콘텐츠 8편 발행",
		testimonial:
			"올린 글이 의뢰로 이어지는 경험은 처음이었습니다. 키워드 방향이 달라지니 문의 질이 달라졌어요.", // TODO: 실제 후기로 교체
		author: "변호사 H",
	},
	{
		discipline: "치과",
		metric: "신규 내원",
		before: "월 12건",
		after: "3개월간 +175%",
		caption: "의료광고 사전심의 통과 콘텐츠 12편",
		testimonial: "심의 걱정 없이 발행되니까 마음이 편합니다. 내원 수치가 눈에 띄게 달라졌어요.", // TODO: 실제 후기로 교체
		author: "치과 원장 J",
	},
	{
		discipline: "세무사",
		metric: "상담 의뢰",
		before: "월 8건",
		after: "4개월간 +210%",
		caption: "기장·신고 분리 키워드 전략",
		testimonial:
			"기장 의뢰와 신고 의뢰가 분리되니 훨씬 일하기 편해졌습니다. 의뢰 수도 많이 늘었고요.", // TODO: 실제 후기로 교체
		author: "세무사 C",
	},
] as const;
