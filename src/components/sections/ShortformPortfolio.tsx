import { Instagram, Play } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

type Reel = {
	href: string;
	src: string;
	alt: string;
};

// 실제 제작된 릴스. 클릭 시 인스타그램 릴스로 이동.
const REELS: Reel[] = [
	{
		href: "https://www.instagram.com/reel/DYRL-n3zvb4/",
		src: "/images/shortform/shortform-1.png",
		alt: "온세상이마케팅이다 제작 릴스 1",
	},
	{
		href: "https://www.instagram.com/reel/DYUDXdop7zi/",
		src: "/images/shortform/shortform-2.png",
		alt: "온세상이마케팅이다 제작 릴스 2",
	},
	{
		href: "https://www.instagram.com/reel/DYCAsVXR0He/",
		src: "/images/shortform/shortform-3.png",
		alt: "온세상이마케팅이다 제작 릴스 3",
	},
	{
		href: "https://www.instagram.com/reel/DYo_j-HyJmp/",
		src: "/images/shortform/shortform-4.png",
		alt: "온세상이마케팅이다 제작 릴스 4",
	},
	{
		href: "https://www.instagram.com/reel/DY1aGa1TZzq/",
		src: "/images/shortform/shortform-5.png",
		alt: "온세상이마케팅이다 제작 릴스 5",
	},
	{
		href: "https://www.instagram.com/reel/DYoMDp3uyXD/",
		src: "/images/shortform/shortform-6.png",
		alt: "온세상이마케팅이다 제작 릴스 6",
	},
];

export const ShortformPortfolio = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						포트폴리오
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						저희가 만든 <span className="gradient-text">작업물들</span>
					</h2>
					<p className="mx-auto mt-3 max-w-md break-keep text-base text-slate-500 leading-relaxed">
						실제 제작된 릴스·쇼츠입니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					{REELS.map((reel, i) => (
						<Reveal key={reel.href} delay={i * 0.06}>
							<a
								href={reel.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${reel.alt} — 인스타그램에서 보기`}
								className="group relative block aspect-9/16 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5"
							>
								<Image
									src={reel.src}
									alt={reel.alt}
									fill
									sizes="(max-width: 768px) 45vw, 30vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								{/* 호버 오버레이 */}
								<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
								{/* 재생 아이콘 */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:h-16 md:w-16">
										<Play className="h-6 w-6 translate-x-0.5 fill-[#0a0a0a] text-[#0a0a0a] md:h-7 md:w-7" />
									</div>
								</div>
								{/* 인스타그램 배지 */}
								<div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
									<Instagram className="h-4 w-4 text-white" />
								</div>
							</a>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
