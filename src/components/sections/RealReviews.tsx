"use client";

import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { ReviewCardBubble } from "@/components/shared/ReviewCardBubble";
import { ReviewCardPhone } from "@/components/shared/ReviewCardPhone";
import { ReviewCardThumb } from "@/components/shared/ReviewCardThumb";
import { REAL_REVIEWS_ROW1, REAL_REVIEWS_ROW2 } from "@/data/real-reviews";

const renderCard = (review: (typeof REAL_REVIEWS_ROW1)[number]) => {
	if (review.type === "phone") return <ReviewCardPhone key={review.id} review={review} />;
	if (review.type === "bubble") return <ReviewCardBubble key={review.id} review={review} />;
	return <ReviewCardThumb key={review.id} review={review} />;
};

export const RealReviews = () => {
	return (
		<section id="real-reviews" className="overflow-hidden bg-white py-24 md:py-32">
			{/* Header */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-3xl px-4 text-center">
					<p className="mb-4 font-semibold text-[#58d68d] text-lg uppercase tracking-[0.25em] md:text-xl">
						실제 후기
					</p>
					<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						직접 겪은 <span className="gradient-text">이야기입니다</span>
					</h2>
				</div>
			</Reveal>

			{/* Marquee rows */}
			<div className="flex flex-col gap-6">
				<Marquee speed={40} gradient={false}>
					{REAL_REVIEWS_ROW1.map((review) => (
						<div key={review.id} className="mr-6 flex items-end">
							{renderCard(review)}
						</div>
					))}
				</Marquee>
				<Marquee speed={30} direction="right" gradient={false}>
					{REAL_REVIEWS_ROW2.map((review) => (
						<div key={review.id} className="mr-6 flex items-start">
							{renderCard(review)}
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
};
