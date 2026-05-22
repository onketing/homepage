"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export const FloatingActions = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowScrollTop(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:right-8 md:flex">
			{/* 네이버 블로그 */}
			<a
				href={siteConfig.contact.naverBlog}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="네이버 블로그"
				className="flex h-14 w-14 items-center justify-center rounded-full bg-[#03c75a] shadow-lg transition-transform duration-300 hover:scale-110"
			>
				<span className="sr-only">네이버 블로그</span>
				<span className="font-bold text-sm text-white" aria-hidden="true">
					blog
				</span>
			</a>

			{/* 카카오톡 */}
			<a
				href={siteConfig.contact.kakaoOpenChat}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="카카오톡 채널"
				className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fee500] shadow-lg transition-transform duration-300 hover:scale-110"
			>
				<span className="sr-only">카카오톡 채널</span>
				<span className="font-bold text-[#3c1e1e] text-sm" aria-hidden="true">
					TALK
				</span>
			</a>

			{/* 위로가기 */}
			{showScrollTop && (
				<button
					type="button"
					onClick={scrollToTop}
					aria-label="맨 위로 이동"
					className="flex h-14 w-14 items-center justify-center rounded-full bg-[#052e16] text-white shadow-lg transition-transform duration-300 hover:scale-110"
				>
					<ChevronUp className="h-6 w-6" />
				</button>
			)}
		</div>
	);
};
