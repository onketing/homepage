import { siteConfig } from "@/config/site";

// 페이지 경로(빵부스러기) 구조화 데이터. path는 siteConfig.url 기준 상대경로("" = 홈).
type Crumb = { name: string; path: string };

export const BreadcrumbJsonLd = ({ items }: { items: Crumb[] }) => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((c, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: c.name,
			item: `${siteConfig.url}${c.path}`,
		})),
	};
	return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};
