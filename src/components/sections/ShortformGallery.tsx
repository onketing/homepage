import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { EDIT_PHOTOS, VIDEO_PHOTOS } from "@/data/team-photos";

const PHOTOS = [...VIDEO_PHOTOS.slice(0, 3), ...EDIT_PHOTOS.slice(0, 3)];

export const ShortformGallery = () => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Behind the Scenes
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						현장 <span className="gradient-text">그대로</span>
					</h2>
					<p className="mx-auto mt-3 max-w-md break-keep text-base text-slate-500 leading-relaxed">
						촬영부터 편집까지 한 팀이 같은 공간에서 진행합니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
					{PHOTOS.map((photo, i) => (
						<Reveal key={photo.src} delay={i * 0.06}>
							<div className="relative aspect-4/3 overflow-hidden rounded-xl">
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									sizes="(max-width: 768px) 45vw, 30vw"
									className="object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
