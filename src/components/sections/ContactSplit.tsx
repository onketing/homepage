import { BarChart2, Mail, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

const REASONS = [
	{
		id: "regulation",
		Icon: ShieldCheck,
		title: "광고 규정 직접 검토",
		desc: "변호사법·의료법 등 12개 직군 규정을 발행 전 항목별로 체크합니다.",
	},
	{
		id: "data",
		Icon: BarChart2,
		title: "노출이 아닌 상담 수 보고",
		desc: "매월 실제 상담 신청 수를 기준으로 결과를 공유합니다.",
	},
	{
		id: "field",
		Icon: Users,
		title: "직군 전담 팀",
		desc: "12개 전문직 직군에 특화된 키워드·콘텐츠 데이터베이스를 운영합니다.",
	},
] as const;

export const ContactSplit = () => {
	return (
		<section id="contact-form" className="bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_520px] lg:gap-16 xl:gap-20">
					{/* ── Left: Why Us + Direct Contact ── */}
					<div className="flex flex-col justify-start lg:pt-10">
						{/* Why Us */}
						<p className="mb-4 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.2em]">
							Why us
						</p>
						<h2 className="mb-10 font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
							왜 그로스웨이브에
							<br />
							의뢰하나
						</h2>

						<div className="mb-10 space-y-7">
							{REASONS.map((r) => (
								<div key={r.id} className="flex items-start gap-4">
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe]">
										<r.Icon className="h-5 w-5 text-[#58d68d]" aria-hidden="true" />
									</div>
									<div>
										<p className="mb-1 font-bold text-[#0a0a0a] text-[15px]">{r.title}</p>
										<p className="break-keep text-slate-600 text-sm leading-relaxed">{r.desc}</p>
									</div>
								</div>
							))}
						</div>

						{/* Divider */}
						<div className="mb-8 h-px bg-slate-200" />

						{/* Direct Contact */}
						<p className="mb-4 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.2em]">
							Direct Contact
						</p>
						<div className="space-y-3">
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-[#58d68d]/40 hover:bg-[#58d68d]/3"
							>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEE500]">
									<MessageCircle className="h-5 w-5 text-[#0a0a0a]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-bold text-[#0a0a0a] text-sm">카카오톡 1:1 문의</p>
									<p className="text-slate-500 text-xs">바로 답변</p>
								</div>
							</a>

							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-[#58d68d]/40 hover:bg-[#58d68d]/3"
							>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe]">
									<Mail className="h-5 w-5 text-[#58d68d]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-bold text-[#0a0a0a] text-sm">이메일</p>
									<p className="text-slate-500 text-xs">{siteConfig.contact.email}</p>
								</div>
							</a>
						</div>
					</div>

					{/* ── Right: Form ── */}
					<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_16px_64px_rgba(15,23,42,0.1)] sm:p-8 lg:p-10">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};
