import type { Metadata } from "next";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactProcess } from "@/components/sections/ContactProcess";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "마케팅 컨설팅 | Onketing",
	description: "온케팅에 전문직 마케팅을 문의하세요. 영업일 1일 내 회신드립니다.",
};

export const ContactPage = () => {
	return (
		<>
			<ContactHero />
			<ContactProcess />
			<ContactSplit />
			<ContactFAQ />
			<CTACard
				variant="gradient"
				eyebrow="온케팅의 약속"
				headline={
					<>
						처음 맡은 팀이
						<br />
						끝까지 갑니다.
					</>
				}
				sub="규정 검수부터 성과 보고까지, 외주 없이 한 팀이 담당합니다."
			/>
		</>
	);
};

export default ContactPage;
