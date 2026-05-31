"use client";

import { useEffect, useRef } from "react";

// 리드-플로우 컨스텔레이션 — 떠다니는 노드 + 근접 연결선 + 중앙 허브(의뢰)로 수렴하는 흐름.
// 캔버스 1개, 의존성 0. prefers-reduced-motion 시 정지 프레임만 렌더.

type Node = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	r: number;
	pulse: number; // 0~1, 노드→허브로 흐르는 패킷 위치
	pulseSpeed: number;
	hubLinked: boolean;
};

const GREEN = "88, 214, 141";

export const ConstellationBackground = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduce =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		let width = 0;
		let height = 0;
		let dpr = 1;
		let nodes: Node[] = [];
		const mouse = { x: 0, y: 0, active: false };
		let raf = 0;

		const LINK_DIST = 150; // 노드끼리 연결되는 최대 거리
		const HUB_DIST = 320; // 허브로 연결되는 최대 거리

		const build = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			mouse.x = width / 2;
			mouse.y = height / 2;

			const count = Math.min(72, Math.max(28, Math.floor((width * height) / 22000)));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.25,
				vy: (Math.random() - 0.5) * 0.25,
				r: Math.random() * 1.6 + 0.8,
				pulse: Math.random(),
				pulseSpeed: Math.random() * 0.004 + 0.0015,
				hubLinked: false,
			}));
		};

		const draw = () => {
			const hubX = width / 2;
			const hubY = height * 0.46;
			// 커서 시차 — 전체를 살짝 이동
			const px = mouse.active ? (mouse.x - width / 2) * 0.02 : 0;
			const py = mouse.active ? (mouse.y - height / 2) * 0.02 : 0;

			ctx.clearRect(0, 0, width, height);

			// 노드 위치 갱신
			for (const n of nodes) {
				if (!reduce) {
					n.x += n.vx;
					n.y += n.vy;
					if (n.x < 0) n.x = width;
					if (n.x > width) n.x = 0;
					if (n.y < 0) n.y = height;
					if (n.y > height) n.y = 0;
				}
				const dHub = Math.hypot(n.x - hubX, n.y - hubY);
				n.hubLinked = dHub < HUB_DIST;
			}

			// 노드끼리 연결선
			for (let i = 0; i < nodes.length; i++) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length; j++) {
					const b = nodes[j];
					const d = Math.hypot(a.x - b.x, a.y - b.y);
					if (d < LINK_DIST) {
						const alpha = (1 - d / LINK_DIST) * 0.18;
						ctx.strokeStyle = `rgba(${GREEN}, ${alpha})`;
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(a.x + px, a.y + py);
						ctx.lineTo(b.x + px, b.y + py);
						ctx.stroke();
					}
				}
			}

			// 허브 연결선 + 흐르는 패킷
			for (const n of nodes) {
				if (!n.hubLinked) continue;
				const d = Math.hypot(n.x - hubX, n.y - hubY);
				const alpha = (1 - d / HUB_DIST) * 0.4;
				ctx.strokeStyle = `rgba(${GREEN}, ${alpha})`;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(n.x + px, n.y + py);
				ctx.lineTo(hubX + px, hubY + py);
				ctx.stroke();

				// 패킷 (노드 → 허브)
				if (!reduce) {
					n.pulse += n.pulseSpeed;
					if (n.pulse > 1) n.pulse -= 1;
				}
				const t = n.pulse;
				const pxp = n.x + (hubX - n.x) * t + px;
				const pyp = n.y + (hubY - n.y) * t + py;
				ctx.fillStyle = `rgba(${GREEN}, ${(1 - t) * 0.7})`;
				ctx.beginPath();
				ctx.arc(pxp, pyp, 1.6, 0, Math.PI * 2);
				ctx.fill();
			}

			// 노드 점
			for (const n of nodes) {
				ctx.fillStyle = `rgba(${GREEN}, ${n.hubLinked ? 0.85 : 0.5})`;
				ctx.beginPath();
				ctx.arc(n.x + px, n.y + py, n.r, 0, Math.PI * 2);
				ctx.fill();
			}

			// 허브 글로우
			const glow = ctx.createRadialGradient(hubX + px, hubY + py, 0, hubX + px, hubY + py, 90);
			glow.addColorStop(0, `rgba(${GREEN}, 0.5)`);
			glow.addColorStop(0.4, `rgba(${GREEN}, 0.12)`);
			glow.addColorStop(1, `rgba(${GREEN}, 0)`);
			ctx.fillStyle = glow;
			ctx.beginPath();
			ctx.arc(hubX + px, hubY + py, 90, 0, Math.PI * 2);
			ctx.fill();

			ctx.fillStyle = `rgba(${GREEN}, 0.95)`;
			ctx.beginPath();
			ctx.arc(hubX + px, hubY + py, 3.5, 0, Math.PI * 2);
			ctx.fill();

			if (!reduce) raf = requestAnimationFrame(draw);
		};

		const onMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
			mouse.active = true;
		};
		const onResize = () => {
			build();
			if (reduce) draw();
		};

		build();
		draw();
		window.addEventListener("mousemove", onMove, { passive: true });
		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
		/>
	);
};
