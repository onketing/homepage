import type { Metadata } from "next";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { ShortformAccumulation } from "@/components/sections/ShortformAccumulation";
import { ShortformFinalCTA } from "@/components/sections/ShortformFinalCTA";
import { ShortformGallery } from "@/components/sections/ShortformGallery";
import { ShortformHero } from "@/components/sections/ShortformHero";
import { ShortformPain } from "@/components/sections/ShortformPain";
import { ShortformPortfolio } from "@/components/sections/ShortformPortfolio";
import { SHORTFORM_CASES, SHORTFORM_PILLARS, SHORTFORM_PROCESS } from "@/data/service-shortform";

export const metadata: Metadata = {
	title: "숏폼 마케팅 | Onketing",
	description:
		"전문직을 위한 숏폼 마케팅. 릴스·쇼츠·틱톡 3채널 동시 운영으로 채널 자산을 누적합니다.",
};

export const ShortformServicePage = () => {
	return (
		<>
			<ShortformHero />
			<ShortformPain />
			<ServiceWhatWeDo
				items={SHORTFORM_PILLARS}
				heading="걱정하지 마세요. 몸만 오세요!"
				sub="숏폼은 세가지면 됩니다."
			/>
			<ShortformAccumulation />
			<ServiceProcess steps={SHORTFORM_PROCESS} />
			<ShortformPortfolio />
			<ShortformGallery />
			<CaseTestimonial cases={SHORTFORM_CASES} />
			<ShortformFinalCTA />
		</>
	);
};

export default ShortformServicePage;
