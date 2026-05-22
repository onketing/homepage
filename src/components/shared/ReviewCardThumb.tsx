import Image from "next/image";
import type { RealReview } from "@/data/real-reviews";

type Props = {
	review: RealReview;
};

export const ReviewCardThumb = ({ review }: Props) => {
	return (
		<div className="flex w-[260px] shrink-0 flex-col overflow-hidden rounded-md border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(88,214,141,0.10)] md:w-[290px]">
			{/* Image area */}
			<div className="relative h-[160px] w-full overflow-hidden">
				<Image
					src={review.imageUrl ?? "https://placehold.co/290x160/FEE500/0a0a0a?text=Review"}
					alt={`${review.authorLabel} 후기`}
					fill
					className="object-cover grayscale-[30%]"
					unoptimized
				/>
				{/* Badge */}
				<span className="absolute top-2.5 right-2.5 rounded-sm bg-white/90 px-2 py-1 text-[10px] text-slate-500">
					📷 원본 캡처
				</span>
			</div>

			{/* Text area */}
			<div className="flex flex-1 flex-col p-5">
				{/* Quote icon */}
				<svg
					className="mb-2 h-5 w-5 text-slate-200"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="M14.017 21v-7.391C14.017 10.214 16.418 7.145 21 6l.39 1.5C18.44 8.5 17.017 10.5 17.017 13H21v8h-6.983zM3 21v-7.391C3 10.214 5.418 7.145 10 6l.39 1.5C7.44 8.5 6.017 10.5 6.017 13H9.983v8H3z" />
				</svg>
				<p className="flex-1 font-medium text-[#0a0a0a] text-sm leading-snug">{review.excerpt}</p>
				<p className="mt-3 text-slate-500 text-xs">
					{review.authorLabel} · {review.fieldLabel}
				</p>
			</div>
		</div>
	);
};
