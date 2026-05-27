import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onketing.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "온세상이마케팅이다",
	nameKo: "온세상이마케팅이다",
	title: "온세상이마케팅이다 | 전문직 마케팅 대행사",
	description:
		"변호사·의사·한의사 등 12개 전문직 전담 마케팅 대행사. 처음 맡은 팀이 끝까지 가는 네이버 블로그·숏폼·SNS 콘텐츠로 의뢰를 만듭니다.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
		"전문직 블로그",
		"온세상이마케팅이다",
		"네이버 블로그 마케팅",
		"숏폼 마케팅",
		"전문직 광고",
		"수임 마케팅",
	],
	url,
	ogImage: `${url}/og-image.png`,
	locale: "ko_KR",
	authors: [{ name: "온세상이마케팅이다", url }],
	creator: "온세상이마케팅이다",
	contact: {
		tel: "010-4667-6460",
		email: "onketing.3kim@gmail.com",
		address: "경기도 화성시 동탄구 동탄중심상가1길 36, 8층",
		businessName: "온세상이마케팅이다",
		businessNumber: "112-31-25690",
		kakaoOpenChat: "https://pf.kakao.com/_FwExjX",
		naverBlog: "https://blog.naver.com/onketing-",
		businessHours: "24시간 문의 접수 · 연중무휴",
	},
	nav: [
		{ label: "회사소개", href: "/about" },
		{
			label: "마케팅",
			href: "/services/professional",
			matchPrefix: "/services",
			children: [
				{
					label: "터지는 숏폼",
					href: "/services/shortform",
					icon: "Zap",
				},
				{
					label: "쌓이는 팬층",
					href: "/services/professional",
					icon: "Users",
				},
				{
					label: "찾아오는 블로그",
					href: "/services/blog",
					icon: "Search",
				},
			],
		},
		{ label: "팀", href: "/team" },
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
