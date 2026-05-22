export const SHORTFORM_PROOF = [
	{ value: 200, suffix: "+", label: "누적 콘텐츠", caption: "전문직 특화 제작 완료" },
	{ value: 3, suffix: "종", label: "채널 동시 운영", caption: "릴스·쇼츠·틱톡" },
	{ value: 100, suffix: "%", label: "광고 심의 통과율", caption: "전문직 광고 기준 통과" },
	{ value: 90, suffix: "%+", label: "재계약율", caption: "운영 6개월 이후 기준" },
] as const;

export const SHORTFORM_PAIN = [
	"조회수는 떴는데, 상담 전화는 없습니다.",
	"출연자가 부담스러워해서 1회로 끝납니다.",
	"릴스만 만들었더니, 유튜브·틱톡은 비어있습니다.",
	"후반 작업이 늦어져 발행이 미뤄집니다.",
] as const;

export const SHORTFORM_PILLARS = [
	{
		num: "01",
		title: "출연자 디렉팅",
		body: "의사·변호사가 어색하지 않은 톤으로 말합니다. 직군별 말하기 가이드를 제공합니다.",
	},
	{
		num: "02",
		title: "채널 3종 분산",
		body: "릴스·쇼츠·틱톡 동시 운영합니다. 채널마다 최적화된 편집으로 배포합니다.",
	},
	{
		num: "03",
		title: "누적 알고리즘",
		body: "한 편이 6-12개월 작동합니다. 광고비 0원으로 의뢰가 옵니다.",
	},
] as const;

export const SHORTFORM_PROCESS = [
	{ step: "01", title: "콘텐츠 기획", desc: "후크·메시지·주제를 사전 설계합니다." },
	{ step: "02", title: "촬영·디렉팅", desc: "출연자 코칭과 현장 촬영을 진행합니다." },
	{ step: "03", title: "편집", desc: "릴스·쇼츠·틱톡 규격으로 편집합니다." },
	{ step: "04", title: "자막·썸네일", desc: "클릭을 유도하는 후반 작업을 완성합니다." },
	{ step: "05", title: "발행·분석", desc: "3채널 동시 배포 후 의뢰 추적합니다." },
] as const;

export const SHORTFORM_ACCUMULATION = [
	{ period: "발행", shortform: 10, ads: 100 },
	{ period: "1개월", shortform: 25, ads: 80 },
	{ period: "3개월", shortform: 55, ads: 30 },
	{ period: "6개월", shortform: 80, ads: 0 },
	{ period: "8개월+", shortform: 100, ads: 0 },
] as const;

// TODO: 치과·한의사 수치는 실수치로 교체 필요
export const SHORTFORM_CASES = [
	{
		discipline: "변호사",
		metric: "영상 누적 조회",
		before: "채널 0개",
		after: "3개월 5편 누적 1만 조회",
		caption: "법률 Q&A 시리즈 — 의뢰 직접 연결",
		testimonial:
			"촬영이 어색할 줄 알았는데 디렉팅이 있으니 자연스럽게 됐습니다. 영상에서 의뢰가 직접 들어옵니다.", // TODO: 실제 후기로 교체
		author: "변호사 S",
	},
	{
		discipline: "치과",
		metric: "신규 내원",
		before: "릴스 0개",
		after: "3개월 운영 +140%",
		caption: "원장 출연 케이스토크 12편",
		testimonial: "릴스 하나로 끝날 줄 알았는데 3채널에 동시 올라가니 노출이 전혀 달랐습니다.", // TODO: 실제 후기로 교체
		author: "치과 원장 M",
	},
	{
		discipline: "한의사",
		metric: "채널 누적",
		before: "쇼츠 0개",
		after: "4개월 20편 발행",
		caption: "출연자 디렉팅 전담 진행",
		testimonial: "카메라 앞에 서는 게 가장 걱정이었는데 매번 코칭해줘서 갈수록 편해졌습니다.", // TODO: 실제 후기로 교체
		author: "한의사 Y",
	},
] as const;
