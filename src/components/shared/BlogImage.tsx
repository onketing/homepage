"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 본문 이미지: 로딩 동안 스켈레톤(펄스) → 로드되면 페이드인.
// 빈 박스에 이미지가 갑자기 뜨는 어색함 제거. width/height로 공간 예약(CLS 방지).
export const BlogImage = ({
	src,
	alt,
	width,
	height,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	const [loaded, setLoaded] = useState(false);
	const ref = useRef<HTMLImageElement>(null);

	useEffect(() => {
		// 하이드레이션 전에 이미 로드된(캐시·상단) 경우 보정 — 다음 프레임으로 지연(연쇄 렌더 방지)
		if (!ref.current?.complete) return;
		const id = requestAnimationFrame(() => setLoaded(true));
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<span className="relative mx-auto my-7 block w-full max-w-[560px]">
			{!loaded ? (
				<span
					className="absolute inset-0 animate-pulse rounded-sm bg-slate-100"
					aria-hidden="true"
				/>
			) : null}
			<Image
				ref={ref}
				src={src}
				alt={alt}
				width={width}
				height={height}
				unoptimized
				sizes="(max-width: 768px) 100vw, 560px"
				onLoad={() => setLoaded(true)}
				className={`relative h-auto w-full transition-opacity duration-500 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
			/>
		</span>
	);
};
