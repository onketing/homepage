import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

type ScenePhoto = {
	src: string;
	alt: string;
	className: string;
};

const SCENE_PHOTOS: ScenePhoto[] = [
	{
		src: "/images/onsite/onsite-1.jpg",
		alt: "전문직 인터뷰 촬영 현장",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		src: "/images/onsite/onsite-2.jpg",
		alt: "콘텐츠 기획 미팅",
		className: "md:col-span-2",
	},
	{
		src: "/images/onsite/onsite-3.jpg",
		alt: "텔레프롬프터·카메라 촬영 셋업",
		className: "",
	},
	{
		src: "/images/onsite/onsite-4.jpg",
		alt: "스튜디오 촬영·편집 작업",
		className: "",
	},
];

export const OneTeamScene = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center md:mb-16">
						<p className="mb-3 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:mb-4 md:text-xl">
							One Team
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl lg:text-[48px]">
							기획·촬영·편집까지,
							<br />
							외주 없이 <span className="gradient-text">한 팀이 끝까지</span> 봅니다.
						</h2>
					</div>
				</Reveal>

				{/* Bento mosaic — 4 현장 photos */}
				<div className="grid grid-cols-2 gap-3 md:auto-rows-[208px] md:grid-cols-4 md:gap-4">
					{SCENE_PHOTOS.map((photo, i) => {
						const isFeature = i === 0;
						return (
							<Reveal
								key={photo.src}
								delay={i * 0.08}
								direction="scale"
								className={photo.className}
							>
								<div
									className={`group relative h-full overflow-hidden rounded-2xl ${
										isFeature ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3] md:aspect-auto"
									}`}
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										fill
										sizes={
											isFeature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"
										}
										className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
									/>
									<div className="absolute inset-0 ring-1 ring-black/5 ring-inset" />
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
