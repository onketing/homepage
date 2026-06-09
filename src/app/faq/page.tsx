import type { Metadata } from "next";
import { FAQContact } from "@/components/sections/FAQContact";
import { FaqDirectory } from "@/components/sections/FaqDirectory";
import { FaqHero } from "@/components/sections/FaqHero";
import { FaqSpotlight } from "@/components/sections/FaqSpotlight";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
	title: "자주 묻는 질문 | 온세상이마케팅이다",
	alternates: { canonical: "/faq" },
	description:
		"온세상이마케팅이다 전문직 마케팅 자주 묻는 질문. 비용·진행절차·광고규정·운영보고·성과·해지환불 — 여섯 카테고리 직접 답변합니다.",
	keywords: [
		"전문직 마케팅 FAQ",
		"변호사 광고 FAQ",
		"의료광고 FAQ",
		"마케팅 비용 FAQ",
		"광고 규정 FAQ",
		"마케팅 대행사 자주묻는질문",
	],
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ_ITEMS.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

export const FaqPage = () => (
	<>
		<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
		<FaqHero />
		<FaqSpotlight />
		<FaqDirectory />
		<FAQContact />
	</>
);

export default FaqPage;
