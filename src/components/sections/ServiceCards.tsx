"use client";

import { ArrowRight, BookOpen, Clapperboard, Share2, Users } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { SERVICE_CARDS } from "@/data/service-cards";

const ICON_MAP: Record<string, React.ElementType> = {
	Users,
	BookOpen,
	Clapperboard,
	Share2,
};

type FlipCardProps = {
	children: React.ReactNode;
	delay: number;
};

const FlipCard = ({ children, delay }: FlipCardProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(ref, { once: false, margin: "-200px" });
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

	const initial = prefersReducedMotion ? { opacity: 0, rotateY: 0 } : { opacity: 0, rotateY: -90 };

	const animate = visible ? { opacity: 1, rotateY: 0 } : initial;

	const transition = shouldAnimate
		? { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] as const }
		: { duration: 0, delay: 0 };

	return (
		<div style={{ perspective: "800px" }}>
			<motion.div
				ref={ref}
				initial={initial}
				animate={animate}
				transition={transition}
				style={{ transformOrigin: "center" }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export const ServiceCards = () => {
	return (
		<section className="relative overflow-hidden bg-white px-4 pt-20 pb-24 md:pb-28">
			{/* 옅은 보라 틴트 */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,rgba(88,214,141,0.06),transparent_70%)]" />

			<div className="relative mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-14 text-center">
						<p className="mb-3 font-bold text-2xl text-[#58d68d] md:text-3xl">어떻게?</p>
						<h2 className="font-extrabold text-4xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							전문직 마케팅, <span className="gradient-text">세 가지</span>면 끝납니다.
						</h2>
					</div>
				</Reveal>

				<div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
					{SERVICE_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? Users;
						return (
							<FlipCard key={card.href} delay={i * 0.12}>
								<SpotlightCard className="h-full rounded-2xl" glow="rgba(88,214,141,0.22)">
									<Link
										href={card.href}
										className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#052e16] to-[#021009] p-8 shadow-[0_20px_50px_-20px_rgba(88,214,141,0.30)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#58d68d]/40 hover:shadow-[0_28px_70px_-20px_rgba(88,214,141,0.50)]"
									>
										{/* 상단 엣지 하이라이트 */}
										<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

										{/* 코너 블룸 */}
										<div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[#58d68d] opacity-[0.12] blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

										{/* 번호 + 아이콘 */}
										<div className="relative mb-8 flex items-center justify-between">
											<span className="font-mono text-slate-500 text-xs tracking-[0.3em]">
												0{i + 1}
											</span>
											<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#58d68d]/25 bg-[#58d68d]/15">
												<Icon className="h-5 w-5 text-[#86efac]" aria-hidden="true" />
											</div>
										</div>

										{/* 큰 타이틀 */}
										<p className="relative mb-3 font-bold text-3xl text-white leading-tight tracking-tight">
											{card.eyebrow}
										</p>

										{/* 구분선 */}
										<div className="relative mb-4 h-px w-10 bg-gradient-to-r from-[#58d68d] to-transparent" />

										{/* 설명 */}
										<p className="relative min-h-12 text-slate-300 text-sm leading-relaxed">
											{card.description}
										</p>

										{/* 포인트 리스트 */}
										{card.points && (
											<ul className="relative mt-5 flex-1 space-y-2.5">
												{card.points.map((point) => (
													<li
														key={point}
														className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed"
													>
														<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#86efac]" />
														{point}
													</li>
												))}
											</ul>
										)}

										{/* CTA */}
										<span className="relative mt-8 flex items-center gap-1.5 self-start font-semibold text-[#86efac] text-sm transition-colors group-hover:text-white">
											{card.cta}
											<ArrowRight
												className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
												aria-hidden="true"
											/>
										</span>
									</Link>
								</SpotlightCard>
							</FlipCard>
						);
					})}
				</div>
			</div>
		</section>
	);
};
