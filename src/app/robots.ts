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
		],
		sitemap: `${siteConfig.url}/sitemap.xml`,
	};
};

export default robots;
