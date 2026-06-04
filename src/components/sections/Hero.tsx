"use client";

import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);
	const [showHint, setShowHint] = useState(true);

	// 음소거로 즉시 자동재생 → 아무 동작(스크롤·클릭·터치·키)에서 소리를 켠다.
	// unmute가 막혀도 영상은 음소거 상태로 계속 재생되게 보장한다.
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const events: (keyof WindowEventMap)[] = [
			"pointerdown",
			"keydown",
			"touchstart",
			"scroll",
			"wheel",
		];

		const removeListeners = () => {
			for (const e of events) window.removeEventListener(e, onInteract);
		};

		const onInteract = () => {
			setShowHint(false);
			if (!video.muted) {
				removeListeners();
				return;
			}
			video.muted = false;
			video
				.play()
				.then(() => {
					// 브라우저가 unmute를 막고 강제 음소거했을 수 있음
					if (video.muted) {
						video.play().catch(() => {}); // 멈추지 않게 재생 유지
						return;
					}
					setMuted(false);
					removeListeners();
				})
				.catch(() => {
					// unmute 차단 → 음소거로 되돌려 재생 유지 (영상 멈춤 방지)
					video.muted = true;
					video.play().catch(() => {});
				});
		};

		// 음소거 즉시 자동재생 — state 초기값이 muted=true
		video.muted = true;
		video.play().catch(() => {});

		for (const e of events) {
			window.addEventListener(e, onInteract, { passive: true });
		}

		// 힌트 자동 숨김 — 등장(1s) 후 약 3초 노출 뒤 사라짐
		const hintTimer = window.setTimeout(() => setShowHint(false), 4000);

		return () => {
			window.clearTimeout(hintTimer);
			removeListeners();
		};
	}, []);

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;

		setShowHint(false);
		const next = !video.muted;
		video.muted = next;
		setMuted(next);
		if (!next) video.play().catch(() => {});
	};

	return (
		<section className="relative w-full overflow-hidden bg-[#0b1220] pt-16 md:flex md:min-h-screen md:items-center md:justify-center md:pt-0">
			{/* 모바일: 헤더 아래 16:9 블록 / 데스크톱: 풀스크린 풀블리드 */}
			<div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
				<video
					ref={videoRef}
					className="absolute inset-0 h-full w-full object-cover"
					autoPlay
					loop
					playsInline
					preload="auto"
				>
					{/* H.264 — 전 브라우저 호환 (Chrome·Firefox 포함) */}
					<source src="/home-hero-video-h264.mp4" type="video/mp4; codecs=avc1" />
					{/* HEVC 원본 — Safari 폴백 */}
					<source src="/home-hero-video.mp4" type="video/mp4; codecs=hvc1" />
					<track kind="captions" />
				</video>
			</div>

			{/* 상단 스크림 — 헤더(흰 글자) 가독성 (데스크톱 풀스크린 전용) */}
			<div
				className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 bg-[linear-gradient(180deg,rgba(11,18,32,0.55)_0%,rgba(11,18,32,0)_100%)] md:block"
				aria-hidden="true"
			/>

			{/* 하단 비네팅 — 컨트롤 가독성 (데스크톱 풀스크린 전용) */}
			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-[linear-gradient(180deg,rgba(11,18,32,0)_0%,rgba(11,18,32,0.55)_100%)] md:block"
				aria-hidden="true"
			/>

			{/* 소리 재생 힌트 — 첫 진입 시 살짝, 소리 켜지면 사라짐 */}
			<AnimatePresence>
				{showHint && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96 }}
						transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
						className="pointer-events-none absolute top-20 left-1/2 z-30 -translate-x-1/2 md:top-28"
						aria-hidden="true"
					>
						<motion.div
							animate={{ opacity: [1, 0.55, 1] }}
							transition={{
								duration: 2.4,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
							className="flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
						>
							<Volume2 className="h-4 w-4" />
							<span className="font-medium">화면을 클릭하면 소리가 재생됩니다</span>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* 음소거 토글 버튼 */}
			<button
				type="button"
				onClick={toggleMute}
				aria-label={muted ? "소리 켜기" : "소리 끄기"}
				className="absolute top-18 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 md:top-24 md:right-8"
			>
				{muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
			</button>
		</section>
	);
};
