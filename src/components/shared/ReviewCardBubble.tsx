import type { RealReview } from "@/data/real-reviews";
import { cn } from "@/lib/utils";

type Props = {
	review: RealReview;
};

export const ReviewCardBubble = ({ review }: Props) => {
	return (
		<div className="relative flex w-[280px] shrink-0 flex-col rounded-md border border-slate-200 bg-white p-5 shadow-none transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(88,214,141,0.10)] md:w-[320px]">
			{/* Header meta */}
			<div className="mb-4 flex items-center gap-2">
				<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600 text-xs">
					{review.authorLabel.slice(-1)}
				</div>
				<span className="font-semibold text-[#0a0a0a] text-xs">{review.authorLabel}</span>
			</div>

			{/* Bubbles */}
			<div className="flex flex-col gap-2">
				{review.bubbles?.map((bubble) => (
					<div
						key={`${review.id}-bubble-${bubble.text}`}
						className={cn("flex", bubble.side === "me" ? "justify-end" : "justify-start")}
					>
						<span
							className={cn(
								"max-w-[85%] rounded-[16px] px-3.5 py-2.5 text-[13px] leading-snug",
								bubble.side === "them"
									? "rounded-tl-sm bg-[#FEE500] text-[#0a0a0a]"
									: "rounded-tr-sm bg-slate-100 text-slate-600",
							)}
						>
							{bubble.text}
						</span>
					</div>
				))}
			</div>

			{/* Footer */}
			<p className="mt-4 text-slate-500 text-xs">
				{review.fieldLabel} | {review.authorLabel.split(" ")[0]}
			</p>
		</div>
	);
};
