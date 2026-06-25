import { Instagram, Play } from "lucide-react";
import Image from "next/image";
import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";

// 실제 운영 릴스 1편의 조회수. 병원명은 이니셜로 익명 처리한다.
type Result = {
	initial: string;
	label: string;
	category: string;
	views: number;
};

const RESULTS: Result[] = [
	{ initial: "P", label: "P 성형외과", category: "성형 케이스 릴스", views: 100 },
	{ initial: "R", label: "R 의원", category: "스킨케어 정보 릴스", views: 90 },
	{ initial: "O", label: "O 의원", category: "피부 습관 릴스", views: 72 },
	{ initial: "B", label: "B 의원", category: "건강 정보 릴스", views: 70 },
	{ initial: "K", label: "K 의원", category: "스킨케어 정보 릴스", views: 17 },
];

// 그대로 노출 가능한 변호사 릴스 1편.
const LAWYER_REEL = {
	href: "https://www.instagram.com/reel/DYCAsVXR0He/",
	src: "/images/shortform/shortform-3.png",
	alt: "온세상이마케팅이다 제작 변호사 노동법 릴스",
};

export const ShortformPortfolio = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						포트폴리오
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						조회수로 <span className="gradient-text">증명합니다</span>
					</h2>
					<p className="mx-auto mt-3 max-w-md break-keep text-base text-slate-500 leading-relaxed">
						실제 운영한 릴스의 조회수입니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
					{RESULTS.map((r, i) => (
						<Reveal key={r.label} delay={i * 0.06}>
							<div className="card-hover flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center">
								<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#58d68d]/12 font-bold text-[#16a34a] text-lg">
									{r.initial}
								</span>
								<p className="mt-4 font-bold text-foreground">{r.label}</p>
								<p className="mt-1 text-slate-400 text-xs">{r.category}</p>
								<p className="mt-4 font-bold text-3xl tracking-tight md:text-4xl">
									<span className="gradient-text">
										<CountUp to={r.views} suffix="만" />
									</span>
								</p>
								<p className="mt-0.5 text-slate-400 text-xs">터진 숏폼</p>
							</div>
						</Reveal>
					))}
				</div>

				<p className="mt-6 text-center text-slate-400 text-xs">
					인스타그램 릴스 1편 조회수 기준 · 병원명은 익명 처리했습니다.
				</p>

				{/* 그대로 노출 가능한 변호사 릴스 1편 */}
				<div className="mt-14 border-slate-200 border-t pt-12">
					<Reveal>
						<div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
							<a
								href={LAWYER_REEL.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${LAWYER_REEL.alt} — 인스타그램에서 보기`}
								className="group relative block aspect-9/16 w-40 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5"
							>
								<Image
									src={LAWYER_REEL.src}
									alt={LAWYER_REEL.alt}
									fill
									sizes="160px"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="relative h-14 w-14 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
										<span className="absolute inset-0 rounded-full bg-white/30 group-hover:animate-ping" />
										<div className="relative flex h-full w-full items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
											<Play className="h-6 w-6 translate-x-0.5 fill-[#0a0a0a] text-[#0a0a0a]" />
										</div>
									</div>
								</div>
								<div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
									<Instagram className="h-4 w-4 text-white" />
								</div>
							</a>
							<div>
								<p className="font-semibold text-[#58d68d] text-xs uppercase tracking-[0.25em]">
									실제 제작 릴스
								</p>
								<h3 className="mt-2 font-bold text-foreground text-xl tracking-tight">
									변호사 노동법 릴스
								</h3>
								<p className="mt-2 break-keep text-slate-500 text-sm leading-relaxed">
									근로계약서 무효 조항을 짚어주는 변호사 콘텐츠입니다.
								</p>
								<a
									href={LAWYER_REEL.href}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-3 inline-flex font-semibold text-[#16a34a] text-sm hover:underline"
								>
									인스타그램에서 보기 →
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
