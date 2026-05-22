"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none" | "scale";
	duration?: number;
};

export const Reveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 1.1,
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(ref, { once: false, margin: "-120px" });
	const prefersReducedMotion = useReducedMotion();
	const [{ visible, enteredDown }, setAnimState] = useState({
		visible: false,
		enteredDown: false,
	});

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			scrollDirRef.current = y > lastY ? "down" : "up";
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (isInView) {
			setAnimState({ visible: true, enteredDown: scrollDirRef.current === "down" });
		} else if (scrollDirRef.current === "up") {
			setAnimState({ visible: false, enteredDown: false });
		}
	}, [isInView]);

	const shouldAnimate = visible && enteredDown && !prefersReducedMotion;

	const directionMap = {
		up: { y: 90, x: 0 },
		down: { y: -90, x: 0 },
		left: { x: 90, y: 0 },
		right: { x: -90, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initial = prefersReducedMotion
		? { opacity: 0 }
		: direction === "scale"
			? { opacity: 0, scale: 0.78 }
			: { opacity: 0, ...directionMap[direction] };

	const animate = visible
		? direction === "scale"
			? { opacity: 1, scale: 1, x: 0, y: 0 }
			: { opacity: 1, x: 0, y: 0 }
		: initial;

	const transition = shouldAnimate
		? { duration, delay, ease: [0.22, 1, 0.36, 1] as const }
		: { duration: 0, delay: 0 };

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
};
