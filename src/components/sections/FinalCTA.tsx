import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#100d18] px-4 py-28 md:py-36">
			{/* 보라 오로라 글로우 */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute top-1/2 left-1/2 h-[620px] w-[960px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(88,214,141,0.34),transparent_68%)]" />
				<div className="absolute top-1/2 left-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.16),transparent_70%)]" />
				<div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#86efac] opacity-[0.06] blur-[120px]" />
			</div>

			{/* 파인 그리드 */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.14]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 75%)",
					WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 75%)",
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-3xl text-center">
				<Reveal>
					<p className="mb-5 font-mono text-[#86efac] text-xs uppercase tracking-[0.35em]">
						문의하기
					</p>
					<h2 className="mb-6 break-keep font-extrabold text-[40px] text-white leading-[1.35] tracking-tight md:text-[60px]">
						고민하고 있는 이 순간에도 뒤쳐지고 있습니다.
					</h2>
					<p className="mb-12 break-keep text-lg text-white/55 leading-relaxed md:text-xl">
						매출로 전환되는 마케팅, 경험해보세요.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="/contact"
							className="gradient-brand w-full rounded-xl px-8 py-4 font-bold text-base text-white shadow-[0_8px_32px_rgba(88,214,141,0.45)] transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(88,214,141,0.6)] sm:w-auto"
						>
							문의하기
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 font-semibold text-base text-white/75 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white sm:w-auto"
						>
							<MessageCircle className="h-4 w-4" />
							카카오톡 1:1 문의
						</a>
					</div>
					<p className="mt-7 font-mono text-white/35 text-xs tracking-wider">영업일 1일 내 회신</p>
				</Reveal>
			</div>
		</section>
	);
};
