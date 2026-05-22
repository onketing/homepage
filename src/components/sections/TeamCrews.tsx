import { Clapperboard, MonitorPlay } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { TeamPhoto } from "@/data/team-photos";
import { EDIT_PHOTOS, VIDEO_PHOTOS } from "@/data/team-photos";

type CrewBlockProps = {
	icon: React.ReactNode;
	label: string;
	heading: React.ReactNode;
	body: string;
	photos: TeamPhoto[];
	reverse?: boolean;
	gridCols?: string;
};

const CrewBlock = ({
	icon,
	label,
	heading,
	body,
	photos,
	reverse = false,
	gridCols = "grid-cols-2 sm:grid-cols-3",
}: CrewBlockProps) => {
	return (
		<div
			className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}
		>
			<Reveal className="w-full lg:w-80 lg:shrink-0" direction={reverse ? "right" : "left"}>
				<div className="rounded-md border border-slate-100 bg-white p-8 shadow-sm">
					<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#052e16]">
						{icon}
					</div>
					<p className="mb-1 font-semibold text-[#0a0a0a] text-xs uppercase tracking-[0.2em]">
						{label}
					</p>
					<h3 className="mb-3 font-bold text-foreground text-xl leading-snug">{heading}</h3>
					<p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
				</div>
			</Reveal>

			<div className={`grid flex-1 gap-3 ${gridCols}`}>
				{photos.map((photo, i) => (
					<Reveal key={photo.src} delay={i * 0.04}>
						<div className="relative aspect-[4/3] overflow-hidden rounded-xl">
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
								className="object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
};

export const TeamCrews = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="Crews"
						title="현장과 편집실 모두 직접 운영"
						sub="촬영부터 발행까지 외주 없이 한 팀이 책임합니다."
						className="mb-16"
					/>
				</Reveal>

				<div className="flex flex-col gap-10 lg:gap-16">
					<CrewBlock
						icon={<Clapperboard className="h-5 w-5 text-white" aria-hidden="true" />}
						label="영상팀"
						heading={
							<>
								현장 촬영부터 편집까지
								<br />
								직접 갑니다
							</>
						}
						body="의뢰인이 카메라 앞에서 편안하게 말할 수 있도록 촬영팀이 직접 현장에 갑니다. 조명·사운드·디렉팅을 한 팀이 책임집니다."
						photos={VIDEO_PHOTOS}
					/>
					<CrewBlock
						icon={<MonitorPlay className="h-5 w-5 text-white" aria-hidden="true" />}
						label="편집팀"
						heading="초안부터 발행까지 한 팀에서"
						body="숏폼·릴스의 호흡과 블로그 비주얼을 함께 책임지는 인하우스 편집팀이 컷·자막·썸네일을 일관된 톤으로 다듬습니다."
						photos={EDIT_PHOTOS}
						gridCols="grid-cols-2 sm:grid-cols-3"
						reverse
					/>
				</div>
			</div>
		</section>
	);
};
