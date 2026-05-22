import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { TeamCard } from "@/components/shared/TeamCard";
import { TEAM_MEMBERS } from "@/data/team";

export const TeamPreview = () => {
	return (
		<section className="bg-white px-4 py-28 md:py-32">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:mb-4 md:text-xl">
							팀 소개
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl lg:text-[48px]">
							누가 만드느냐가, 결과를 가릅니다.
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed md:mt-4 md:text-lg">
							기획·촬영·편집까지, 외주 없이 한 팀이 끝까지 봅니다.
						</p>
					</div>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-3">
					{TEAM_MEMBERS.map((member, i) => {
						const directions = ["scale", "up", "scale"] as const;
						return (
							<Reveal key={member.nameEn} delay={i * 0.08} direction={directions[i % 3]}>
								<TeamCard member={member} />
							</Reveal>
						);
					})}
				</div>

				<Reveal>
					<div className="mt-10 text-center">
						<Link
							href="/team"
							className="inline-flex items-center gap-2 border-current border-b pb-0.5 font-semibold text-[#0a0a0a] text-sm hover:opacity-70"
						>
							팀 전체 보기 →
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
