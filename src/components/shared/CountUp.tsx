"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
	to: number;
	suffix?: string;
	duration?: number;
};

export const CountUp = ({ to, suffix = "", duration = 1.4 }: CountUpProps) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView || to === 0) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return (
		<span ref={ref}>
			{val}
			{suffix}
		</span>
	);
};
