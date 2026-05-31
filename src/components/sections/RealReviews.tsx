"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { REVIEW_UNITS, type ReviewImage, type ReviewUnit } from "@/data/review-images";

// 밴드 높이 — 모든 카드의 기준 높이. 폭은 aspect-ratio로 자동 산출(왜곡·크롭 없음).
const BAND = "h-[280px] sm:h-[340px] md:h-[440px]";

const Frame = ({ img, className }: { img: ReviewImage; className?: string }) => (
	<div
		className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5 ${className ?? ""}`}
		style={{ aspectRatio: `${img.w} / ${img.h}` }}
	>
		<Image
			src={img.src}
			alt={img.alt}
			fill
			sizes="(max-width: 768px) 60vw, 440px"
			className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
		/>
	</div>
);

const Unit = ({ unit }: { unit: ReviewUnit }) => {
	if (unit.type === "single") {
		return <Frame img={unit.img} className={`mr-4 shrink-0 ${BAND}`} />;
	}
	// 짧은 컷 2장 — 위아래 스택. 각 셀은 밴드의 절반 높이.
	return (
		<div className={`mr-4 flex shrink-0 flex-col gap-4 ${BAND}`}>
			<Frame img={unit.imgs[0]} className="min-h-0 flex-1" />
			<Frame img={unit.imgs[1]} className="min-h-0 flex-1" />
		</div>
	);
};

export const RealReviews = () => {
	return (
		<section id="real-reviews" className="overflow-hidden bg-white py-24 md:py-32">
			{/* Header */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-3xl px-4 text-center md:mb-16">
					<p className="mb-4 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:text-xl">
						실제 후기
					</p>
					<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						직접 겪은 <span className="gradient-text">이야기입니다</span>
					</h2>
				</div>
			</Reveal>

			{/* Image marquee — 양 끝 페이드 */}
			<div className="[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
				<Marquee speed={30} gradient={false}>
					{REVIEW_UNITS.map((unit) => (
						<Unit key={unit.type === "single" ? unit.img.src : unit.imgs[0].src} unit={unit} />
					))}
				</Marquee>
			</div>
		</section>
	);
};
