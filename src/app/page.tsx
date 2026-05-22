import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { KPIShowcase } from "@/components/sections/KPIShowcase";
import { PainPoints } from "@/components/sections/PainPoints";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProfessionRotator } from "@/components/sections/ProfessionRotator";
import { RealReviews } from "@/components/sections/RealReviews";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { TeamPreview } from "@/components/sections/TeamPreview";

export const HomePage = () => {
	return (
		<>
			<Hero />
			<PainPoints />
			<ProfessionRotator />
			<KPIShowcase />
			<CaseHighlight />
			<ServiceCards />
			<ProcessSteps />
			<RealReviews />
			<TeamPreview />
			<FinalCTA />
		</>
	);
};

export default HomePage;
