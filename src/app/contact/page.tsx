import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactSplit } from "@/components/sections/ContactSplit";

export const metadata: Metadata = {
	title: "마케팅 컨설팅 문의 | 온세상이마케팅이다",
	description:
		"온세상이마케팅이다에 전문직 마케팅을 문의하세요. 첫 상담 무료, 계약 압박 없음, 영업일 1일 내 회신드립니다.",
	keywords: [
		"전문직 마케팅 문의",
		"마케팅 무료 상담",
		"변호사 마케팅 상담",
		"의사 마케팅 상담",
		"마케팅 대행사 문의",
	],
};

const contactPageSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "온세상이마케팅이다 마케팅 컨설팅 문의",
	url: "https://onketing.kr/contact",
	description:
		"전문직 마케팅 무료 상담. 첫 상담 비용 없음, 계약 압박 없음, 영업일 1일 내 회신.",
	mainEntity: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		email: "onketing.3kim@gmail.com",
		url: "https://onketing.kr",
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "마케팅 상담",
			availableLanguage: "Korean",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "18:00",
			},
		},
	},
};

export const ContactPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
			<ContactHero />
			<ContactSplit />
		</>
	);
};

export default ContactPage;
