import Image from "next/image";
import type { RealReview } from "@/data/real-reviews";

type Props = {
	review: RealReview;
};

export const ReviewCardPhone = ({ review }: Props) => {
	return (
		<div className="relative flex shrink-0 flex-col items-center">
			{/* Phone outer frame */}
			<div className="relative h-[420px] w-[200px] rounded-[36px] border-[#0a0a0a] border-[7px] bg-[#052e16] p-1 md:h-[480px] md:w-[230px]">
				{/* Notch */}
				<div className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-[#052e16]" />

				{/* Screen */}
				<div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#abc1d1]">
					{/* Chat header */}
					<div className="flex items-center gap-2 bg-white px-3 py-2">
						<div className="h-7 w-7 rounded-full bg-slate-200" />
						<span className="font-semibold text-[#0a0a0a] text-xs">{review.authorLabel}</span>
					</div>

					{/* Screenshot image */}
					<div className="relative flex-1">
						<Image
							src={review.imageUrl ?? "https://placehold.co/230x380/abc1d1/334155?text=KakaoTalk"}
							alt={`${review.authorLabel} 카카오톡 대화`}
							fill
							className="object-cover"
							unoptimized
						/>
					</div>
				</div>
			</div>

			{/* Footer label */}
			<div className="mt-3 text-center">
				<p className="font-medium text-[#0a0a0a] text-xs">{review.authorLabel}</p>
				<p className="text-slate-500 text-xs">{review.fieldLabel}</p>
			</div>
		</div>
	);
};
