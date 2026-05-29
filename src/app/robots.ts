import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const robots = (): MetadataRoute.Robots => {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/"],
			},
			// AI 검색 엔진 크롤러 명시적 허용
			{ userAgent: "OAI-SearchBot", allow: "/" },
			{ userAgent: "ChatGPT-User", allow: "/" },
			{ userAgent: "GPTBot", allow: "/" },
			{ userAgent: "PerplexityBot", allow: "/" },
			{ userAgent: "Claude-Web", allow: "/" },
			{ userAgent: "anthropic-ai", allow: "/" },
			{ userAgent: "Googlebot", allow: "/" },
			{ userAgent: "Google-Extended", allow: "/" },
			{ userAgent: "Applebot", allow: "/" },
			{ userAgent: "cohere-ai", allow: "/" },
		],
		sitemap: `${siteConfig.url}/sitemap.xml`,
	};
};

export default robots;
