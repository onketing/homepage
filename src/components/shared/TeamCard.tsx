import Image from "next/image";
import type { TeamMember } from "@/types";

export const TeamCard = ({ member }: { member: TeamMember }) => {
	return (
		<div className="card-hover flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white">
			<div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
				{member.photo ? (
					<Image
						src={member.photo}
						alt={member.nameKo}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#052e16] font-bold text-2xl text-white">
							{member.nameKo.charAt(0)}
						</div>
					</div>
				)}
			</div>
			<div className="p-5">
				<p className="font-bold text-base text-foreground">
					{member.nameKo}{" "}
					<span className="font-normal text-muted-foreground text-sm">{member.nameEn}</span>
				</p>
				<p className="mt-0.5 font-medium text-[#0a0a0a]/60 text-sm">{member.role}</p>
				<p className="mt-2 text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
				{member.careers && member.careers.length > 0 && (
					<ul className="mt-3 space-y-1 border-slate-100 border-t pt-3">
						{member.careers.map((career) => (
							<li key={career} className="flex items-start gap-1.5 text-slate-500 text-xs">
								<span className="mt-0.5 shrink-0 text-[#58d68d]/50">—</span>
								<span className="leading-snug">{career}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
