# 05. 데이터·SEO·폼

## 콘텐츠 수정 원칙

> **텍스트·이미지·수치 수정 = `src/data/*.ts` 파일 수정**  
> 컴포넌트 코드를 건드리지 않는다.

| 수정하고 싶은 것 | 파일 |
|----------------|------|
| 홈 Hero 카피 | `src/components/sections/Hero.tsx` (하드코딩) |
| FAQ 항목 | `src/data/faq.ts` |
| 팀원 정보 | `src/data/team.ts` |
| 리뷰 카드 | `src/data/real-reviews.ts` |
| 전문직 직군 상세 페이지 데이터 | `src/data/professions.ts` |
| 전문직 직군 로테이터 목록 | `src/data/client-disciplines.ts` |
| 서비스 소개 (홈) | `src/data/services.ts` |
| 서비스 카드 | `src/data/service-cards.ts` |
| 블로그 마케팅 페이지 데이터 | `src/data/service-blog.ts` |
| 숏폼 마케팅 페이지 데이터 | `src/data/service-shortform.ts` |
| 전문직 마케팅 페이지 데이터 | `src/data/service-professional.ts` |
| 채널별 비교 매트릭스 | `src/data/service-comparison.ts`, `src/data/service-matrix.ts` |
| 일반 대행사 vs 온세상이마케팅이다 비교 | `src/data/comparison.ts` |
| 통계 수치 (12개 직군 · 재계약율 등) | `src/data/stats.ts` |
| KPI 쇼케이스 수치 | `src/data/kpi-showcase.ts` |
| 페인 포인트 | `src/data/pain-points.ts` |
| 프로세스 단계 (서비스 플로우) | `src/data/process.ts` |
| 프로세스 단계 (컨설팅 → 발행 → 보고) | `src/data/process-steps.ts` |
| 업무 프로세스 (규정 검토 흐름) | `src/data/work-process.ts` |
| 사례 카드 (홈) | `src/data/cases.ts` |
| 사례 그리드 | `src/data/case-grid.ts` |
| 사례 하이라이트 | `src/data/case-highlight.ts` |
| About 페이지 사례 | `src/data/about-cases.ts` |
| About 신뢰 지표 | `src/data/about-trust.ts` |
| 광고 규정 목록 | `src/data/regulations.ts` |
| 광고 규정 위반 사례 | `src/data/regulation-cases.ts` |
| 광고 규정 통계 | `src/data/regulation-stats.ts` |
| 조직 구조 | `src/data/org-structure.ts` |
| 팀 사진 목록 | `src/data/team-photos.ts` |
| 후기 (Testimonial, 현재 비어 있음) | `src/data/testimonials.ts` |
| 왜 온세상이마케팅이다인가 카드 | `src/data/why-us.ts` |
| 시그니처 포인트 | `src/data/signature-points.ts` |
| 의뢰 수락 기준 | `src/data/selection-policy.ts` |
| 진행하지 않는 의뢰 | `src/data/engagement-policy.ts` |
| 창업 스토리 단락 | `src/data/founding-story.ts` |
| CEO 메시지 단락 | `src/data/ceo-message.ts` |
| 요금 결정 요소 | `src/data/pricing.ts` |
| 사이트 전화번호·이메일·주소 | `src/config/site.ts` → `siteConfig.contact` |
| 네비게이션 메뉴 | `src/config/site.ts` → `siteConfig.nav` |

---

## src/data/ 파일 카탈로그

| 파일 | Export 이름 | 타입 | 비고 |
|------|------------|------|------|
| `about-cases.ts` | `ABOUT_CASES` | `AboutCase[]` | About 페이지 사례 비교 (before/after) |
| `about-trust.ts` | `ABOUT_TRUST` | 인라인 배열 | About 신뢰 지표 수치 |
| `case-grid.ts` | `CASE_GRID` | 인라인 배열 | 사례 그리드 카드 (PLACEHOLDER) |
| `case-highlight.ts` | `CASE_HIGHLIGHT` | 인라인 객체 | 사례 하이라이트 단일 (PLACEHOLDER) |
| `cases.ts` | `CASES` | `Case[]` | 홈 사례 카드 (TODO: 실데이터 교체) |
| `ceo-message.ts` | `MESSAGE_PARAGRAPHS`, `EXPERTISE` | `string[]` | CEO 창업 스토리 단락 |
| `client-disciplines.ts` | `CLIENT_DISCIPLINES` | `readonly` 배열 | 직군 로테이터용 12개 직군 + 광고 근거법 |
| `comparison.ts` | `COMPARISON_ROWS` | `ComparisonRow[]` | 일반 대행사 vs 온세상이마케팅이다 비교 행 |
| `engagement-policy.ts` | `ENGAGEMENT_POLICY` | `const` 객체 | 진행하지 않는 의뢰 3가지 조건 |
| `faq.ts` | `FAQ_ITEMS` | `FaqItem[]` | FAQ 전체 목록, category + featured 포함 |
| `founding-story.ts` | `FOUNDING_STORY` | 객체 (paragraphs + stats) | About 창업 스토리 |
| `kpi-showcase.ts` | `KPI_SHOWCASE` | 인라인 배열 | 재계약율 등 KPI 수치 (PLACEHOLDER) |
| `org-structure.ts` | `DEPARTMENTS` 등 | `Department[]` | 조직 구조 |
| `pain-points.ts` | `PAIN_POINTS` | `PainPoint[]` | 고객 페인 포인트 목록 |
| `pricing.ts` | `PRICING_FACTORS` | `PricingFactor[]` | 요금 결정 요소 |
| `process-steps.ts` | `PROCESS_STEPS` | `ProcessStep[]` | 컨설팅→발행→보고 플로우 (icon, badge 포함) |
| `process.ts` | `PROCESS_STEPS` | `ProcessStep[]` | 상담→키워드→콘텐츠→보고 단계 (step 번호 기반) |
| `professions.ts` | `PROFESSIONS` | `Profession[]` | 직군별 상세 데이터 (6개: 변호사·의사·한의사·수의사·노무사·세무사) |
| `real-reviews.ts` | `REAL_REVIEWS_ROW1`, `REAL_REVIEWS_ROW2` | `RealReview[]` | 실제 리뷰 카드 (phone/bubble/thumb 타입) |
| `regulation-cases.ts` | `REGULATION_CASES` | `RegulationCase[]` | 광고 규정 위반→수정 사례 |
| `regulation-stats.ts` | `REGULATION_STATS` 등 | `RegulationStat[]` | 광고 규정 통계 + 연도별 트렌드 |
| `regulations.ts` | `REGULATIONS` | `Regulation[]` | 직군별 규정 (허용/금지 항목) |
| `selection-policy.ts` | `SELECTION_POLICY` | `const` 객체 | 의뢰 수락 기준 |
| `service-blog.ts` | `BLOG_PROOF`, `BLOG_PAIN` | `readonly` 배열 | 블로그 마케팅 페이지 증거 수치 + 페인 포인트 |
| `service-cards.ts` | (타입 정의만) | `ServiceCard` 타입 | 서비스 카드 타입 정의 파일 |
| `service-comparison.ts` | — | `ComparisonRow` (채널별) | 블로그/숏폼/전문직 채널 비교 점수 |
| `service-matrix.ts` | — | `ServiceMatrixCard[]` | 서비스 매트릭스 카드 |
| `service-professional.ts` | `PROFESSIONAL_PROOF`, `PROFESSIONAL_PAIN` | `readonly` 배열 | 전문직 마케팅 페이지 증거 수치 + 페인 포인트 |
| `service-shortform.ts` | `SHORTFORM_PROOF`, `SHORTFORM_PAIN` | `readonly` 배열 | 숏폼 마케팅 페이지 증거 수치 + 페인 포인트 |
| `services.ts` | `SERVICES` | `Service[]` | 홈 서비스 소개 (블로그·숏폼·전문직) |
| `signature-points.ts` | `SIGNATURE_POINTS` | `SignaturePoint[]` | 온세상이마케팅이다 차별화 포인트 |
| `stats.ts` | `STATS` | `Stat[]` | 홈 주요 수치 4개 (12개 직군·재계약율·규정검토·상위노출) |
| `team-photos.ts` | `VIDEO_PHOTOS`, `EDIT_PHOTOS` | `TeamPhoto[]` | 팀 촬영 현장 사진 목록 |
| `team.ts` | `TEAM_MEMBERS` | `TeamMember[]` | 팀원 3명 전체 데이터 |
| `testimonials.ts` | `TESTIMONIALS` | `Testimonial[]` | 현재 비어 있음 (`[]`) |
| `why-us.ts` | `WHY_US_CARDS` 등 | `WhyUsCard[]`, `WhyUsBoldCard[]` | 왜 온세상이마케팅이다인가 카드 |
| `work-process.ts` | `WORK_PROCESS` | `WorkStep[]` | 규정 검토 기반 업무 플로우 |

> **주의**: `process.ts`와 `process-steps.ts`는 둘 다 `PROCESS_STEPS`를 export한다. import 시 alias 필수.  
> `service-comparison.ts`의 `ComparisonRow`는 `src/types/index.ts`의 `ComparisonRow`와 **별개** 타입이다 (채널 점수 구조).

---

## 타입 정의 (src/types/index.ts)

```ts
// 신규 데이터 파일 작성 시 이 타입들을 import해서 사용

export type PainPoint = {
  id: string;
  text: string;
};

export type WhyUsCard = {
  icon: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  general: string;
  onketing: string;
};

export type ServiceStep = {
  step: number;
  label: string;
};

export type Service = {
  index: string;
  category: string;
  title: string;
  description: string;
  steps: ServiceStep[];
};

export type Case = {
  field: string;
  quote: string;
  metric: string;
  period: string;
  anonymous: string;
  profession?: string;
};

export type Testimonial = {
  text: string;
  author: string;
  role: string;
  profession?: string;
};

export type TeamMember = {
  nameEn: string;
  nameKo: string;
  role: string;
  bio: string;
  quote?: string;
  careers?: string[];
  photo?: string;
};

export type FaqCategory = "비용" | "진행 안내" | "광고규정" | "운영보고" | "성과" | "해지환불";

export type FaqItem = {
  question: string;
  answer: string;
  category: FaqCategory;
  featured?: boolean;
};

export type NavChild = {
  label: string;
  href: string;
  description: string;
  icon: string;        // lucide-react 아이콘 이름 문자열
  flagship?: boolean;
};

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; matchPrefix?: string; children: NavChild[] };
```

`real-reviews.ts`는 파일 내에서 직접 타입을 정의한다 (`RealReviewType`, `BubbleMsg`, `RealReview`).  
`professions.ts`도 마찬가지 (`ProfessionSlug`, `Profession`).

---

## siteConfig (src/config/site.ts)

```ts
export const siteConfig = {
  name: "온세상이마케팅이다",
  nameKo: "온세상이마케팅이다",
  title: "온세상이마케팅이다 | 전문직 마케팅 대행사",
  description: "변호사·의사·한의사·수의사·노무사 등 전문직을 위한 네이버 블로그·숏폼 콘텐츠 마케팅. 광고 규정을 이해하는 온세상이마케팅이다.",
  keywords: [...],  // 14개 키워드
  url,              // NEXT_PUBLIC_SITE_URL 환경변수, 기본값 "https://onketing.kr"
  ogImage: `${url}/og-image.png`,
  locale: "ko_KR",
  authors: [{ name: "온세상이마케팅이다", url }],
  creator: "온세상이마케팅이다",
  contact: {
    tel: "010-4048-6460",
    email: "onketing.3kim@gmail.com",
    address: "경기도 화성시 동탄구 동탄중심상가1길 36, 8층",
    businessName: "온세상이마케팅이다",
    businessNumber: "112-31-25690",
    kakaoOpenChat: "https://pf.kakao.com/_FwExjX",
    naverBlog: "https://blog.naver.com/onketing-",
    businessHours: "월–금 09:00–18:00",
  },
  nav: NavItem[],
}
```

### nav 구조 (실제 5개 항목)

| label | href | 비고 |
|-------|------|------|
| 회사소개 | `/about` | 단순 링크 |
| 마케팅 | `/services/professional` | 드롭다운 (matchPrefix: `/services`) |
| └ 전문직 마케팅 | `/services/professional` | flagship: true |
| └ 블로그 마케팅 | `/services/blog` | |
| └ 숏폼 마케팅 | `/services/shortform` | |
| 광고 규정 | `/regulation` | 단순 링크 |
| 팀 | `/team` | 단순 링크 |
| FAQ | `/faq` | 단순 링크 |

---

## SEO & Metadata

### RootLayout 기본 메타 (src/app/layout.tsx)

```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),  // "https://onketing.kr"
  title: "온세상이마케팅이다 | 전문직 마케팅 대행사",
  description: "변호사·의사·한의사·수의사·노무사 등 전문직을 위한 네이버 블로그·숏폼 콘텐츠 마케팅. 광고 규정을 이해하는 온세상이마케팅이다.",
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/og-image.png", width: 1200, height: 1200, alt: "온세상이마케팅이다" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  alternates: { canonical: siteConfig.url },
  verification: {
    google: "UWjs_RkjrB3REQAKEWuywkJi3_X6bphhaIyz1_cnulU",
    other: { "naver-site-verification": "269c8d8086205fbe30edc1db42f7623790ec544e" },
  },
}
```

### 페이지별 메타 오버라이드 방법

```ts
// src/app/{slug}/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "페이지 제목 | 온세상이마케팅이다",
  description: "페이지 설명",
}

export const MyPage = () => { ... }
export default MyPage
```

페이지 `metadata`는 RootLayout `metadata`와 **깊은 병합**된다. `title`만 선언하면 나머지(openGraph, verification 등)는 layout 값이 그대로 유지된다.

### JSON-LD 구조화 데이터

- 위치: `src/app/layout.tsx` 내 `const jsonLd` 객체 → `<script type="application/ld+json">`
- 스키마: `ProfessionalService`
- 포함 필드: `name`, `description`, `url`, `telephone`, `email`, `address` (PostalAddress), `serviceType` 배열
- 수정: `jsonLd` 객체 직접 편집
- `telephone`은 `siteConfig.contact.tel`이 `"02-000-0000"` (DUMMY_TEL)이면 포함하지 않는 가드가 있다

### sitemap (src/app/sitemap.ts)

신규 라우트 추가 시 `routes` 배열에 함께 추가해야 한다.

| path | priority | changeFrequency |
|------|----------|----------------|
| `/` | 1.0 | weekly |
| `/about` | 0.8 | monthly |
| `/services` | 0.8 | weekly |
| `/services/professional` | 0.9 | weekly |
| `/services/blog` | 0.9 | weekly |
| `/services/shortform` | 0.9 | weekly |
| `/regulation` | 0.7 | monthly |
| `/team` | 0.8 | monthly |
| `/faq` | 0.7 | monthly |
| `/contact` | 0.8 | monthly |

### robots (src/app/robots.ts)

```
Allow: /
Disallow: /api/
Sitemap: https://onketing.kr/sitemap.xml
```

---

## 이미지 & 정적 자산 (public/)

```
public/
├── og-image.png                    # OG 메타 이미지 (1200×1200)
├── hero-bg.gif                     # Hero 배경 (GIF fallback)
├── hero-bg.webm                    # Hero 배경 (WebM)
├── hero-bg.mp4                     # Hero 배경 (MP4)
├── hero-bg-poster.jpg              # Hero 배경 poster 이미지
├── onketing-brochure.pdf         # 회사소개서 다운로드
├── downloads/                      # 기타 다운로드 파일
└── images/
    └── team/
        ├── taehoon-kim.png
        ├── seongmin-kim.png
        ├── dohyun-kim.png
        ├── video-01.jpg ~ video-07.jpg   # 촬영 현장 사진
        └── edit-01.jpg ~ edit-03.jpg     # 편집 작업 사진
```

`next/image` 사용 패턴:

```tsx
import Image from "next/image"

<Image
  src="/images/team/taehoon-kim.png"
  alt="김태훈"
  width={400}
  height={400}
/>
```

---

## ContactForm (src/components/sections/ContactForm.tsx)

### 동작 방식

- 라이브러리: 없음 (HTML5 `required` 속성 + React state)
- 제출 방식: `handleSubmit`에서 `FormData`를 조합해 `mailto:` URL 생성 → `window.location.href`로 기본 메일 클라이언트 실행
- 서버 액션 / API 라우트 없음
- 제출 후 `setSent(true)` → 성공 화면으로 전환

### 폼 필드

| name | 타입 | required | 설명 |
|------|------|----------|------|
| `company` | text Input | ✅ | 회사/소속명 |
| `profession` | hidden Input (커스텀 드롭다운) | — | 직군 (선택 옵션 아래 참조) |
| `name` | text Input | ✅ | 담당자 이름 |
| `tel` | tel Input | ✅ | 연락처 |
| `email` | email Input | — | 이메일 |
| `message` | Textarea | — | 문의 내용 |
| `privacy` | checkbox | ✅ | 개인정보 수집·이용 동의 |
| `source` | React state (버튼 선택) | — | 유입 경로 (FormData 미포함, 직접 body 조합) |

Enter 키 기본 제출 방지: `Textarea` 외 요소에서 Enter 누르면 `e.preventDefault()`.

### 직군 옵션 (PROFESSION_OPTIONS)

변호사 / 의사 / 한의사 / 수의사 / 노무사 / 세무사 / 기타

### 유입 경로 옵션 (SOURCE_OPTIONS)

인스타그램 / 네이버 검색 / 지인 소개 / 블로그 / 기타

### 이메일 본문 구조

```
회사/소속명: {company}
직군: {profession}
담당자: {name}
연락처: {tel}
이메일: {email}
유입 경로: {source | "미선택"}

문의 내용:
{message}
```

제목: `[상담 신청] {company} · {name}`

### 수신 이메일

`siteConfig.contact.email` → `onketing.3kim@gmail.com`

### 성공 화면

- 헤드라인: **신청이 완료되었습니다**
- 서브: 영업일 1일 내로 직접 연락드리겠습니다.
- CTA 버튼: **카카오로 바로 연락하기** → `siteConfig.contact.kakaoOpenChat` (`https://pf.kakao.com/_FwExjX`) 새 탭 오픈
