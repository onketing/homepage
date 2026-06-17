import type { MDXComponents } from "mdx/types";
import { BlogImage } from "@/components/shared/BlogImage";
import { BLOG_IMAGE_META } from "@/content/blog/_imageMeta";

// @next/mdx + App Router 필수 파일.
// 본문(MDX)의 기본 요소 타이포그래피는 글로벌 `.prose`(globals.css)가 담당하고,
// 여기서는 이미지·링크만 보강한다.
export function useMDXComponents(): MDXComponents {
	return {
		img: ({ src, alt }) => {
			const s = typeof src === "string" ? src : "";
			const meta = BLOG_IMAGE_META[s] ?? { w: 1600, h: 1200 };
			// 로딩 스켈레톤 + 페이드인 (BlogImage). width/height로 공간 예약(CLS 방지).
			return <BlogImage src={s} alt={alt ?? ""} width={meta.w} height={meta.h} />;
		},
		table: (props) => (
			// 모바일에서 표가 넘칠 때 가로 스크롤
			<div className="my-6 overflow-x-auto">
				<table {...props} />
			</div>
		),
		a: ({ href, children, ...rest }) => {
			const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
			return (
				<a
					href={href}
					{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
					{...rest}
				>
					{children}
				</a>
			);
		},
	};
}
