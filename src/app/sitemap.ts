import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
	{ path: "", priority: 1.0, changeFrequency: "weekly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/services/professional", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/blog", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/shortform", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/regulation", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/team", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

export const sitemap = (): MetadataRoute.Sitemap => {
	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: new Date(),
		changeFrequency,
		priority,
	}));
};

export default sitemap;
