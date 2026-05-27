# 01. 프로젝트 개요

## 스택

| 항목 | 값 |
|------|-----|
| Next.js | 16.2.1 |
| React | 19.2.4 |
| 라우팅 | App Router |
| TypeScript | strict mode |
| Tailwind CSS | v4 (PostCSS 기반, tailwind.config.js 없음 — `@theme` inline in globals.css) |
| 모션 | motion@12.38.0 (패키지명 `motion`, import from `"motion/react"`) |
| 폰트 | Pretendard Variable (로컬 woff2, `node_modules/pretendard/dist/web/variable/woff2/`) + Inter (Google Fonts) |
| 패키지 매니저 | pnpm@10.33.0 |
| Node | >=22 |
| 기타 라이브러리 | lucide-react, @base-ui/react, react-fast-marquee, class-variance-authority, clsx, tailwind-merge, pretendard, shadcn, tw-animate-css |

## 경로 alias

```
@/* → ./src/*   (tsconfig.json paths)
```

## 디렉토리 구조

```
src/
├── app/                        # App Router — 라우트·레이아웃·글로벌 스타일
│   ├── layout.tsx              # RootLayout: Header·Footer·StickyCTA·FloatingActions·PageTransition 마운트, Metadata, JSON-LD
│   ├── globals.css             # Tailwind import + :root CSS 변수 + @theme inline + @layer
│   ├── page.tsx                # / 홈
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── team/page.tsx
│   ├── regulation/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── professional/page.tsx
│   │   ├── blog/page.tsx
│   │   └── shortform/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
├── components/
│   ├── layout/                 # Header, Footer, MobileMenu
│   ├── sections/               # 페이지 섹션 컴포넌트 (named export)
│   ├── shared/                 # 재사용 공용 컴포넌트 (Reveal, CTACard, PageHero, SectionHeading, StickyCTA, FloatingActions, PageTransition, CountUp, WaveDivider, Logo, TeamCard, ReviewCard* 등)
│   └── ui/                     # shadcn/ui 기반 컴포넌트
├── data/                       # 정적 콘텐츠 데이터 (named export TS 파일)
├── lib/
│   └── utils.ts                # cn() — clsx + tailwind-merge
├── config/
│   └── site.ts                 # siteConfig (nav, contact, metadata 기반값)
└── types/
    └── index.ts                # 도메인 타입 정의 (type alias 위주)
```

## 빌드 & 스크립트

```bash
pnpm dev          # next dev (개발)
pnpm build        # next build (프로덕션 빌드)
pnpm start        # next start
pnpm lint         # biome check . && eslint
pnpm lint:fix     # biome check --fix --unsafe . && eslint --fix
pnpm format       # biome format --fix .
pnpm check-types  # tsc --noEmit
pnpm prepare      # lefthook install (git hooks)
```

## 포매팅 & 린트

- **Biome**: tab indent, line width 100, `cn()/clsx()/cva()` 클래스 자동 정렬 (`nursery.useSortedClasses`)
- **ESLint**: Next.js core rules만 (`eslint-config-next`)
- **commitlint**: conventional commits (`@commitlint/config-conventional`)
- **lefthook**: git hooks (pre-commit 등)
- **검증 명령**: 작업 후 반드시 `pnpm lint && pnpm check-types` 통과 확인

## 환경변수

```
NEXT_PUBLIC_SITE_URL   # 기본: https://onketing.kr (trailing slash 없음)
```

## next.config.ts 핵심 설정

- **이미지**: `remotePatterns: [{ protocol: "https", hostname: "**" }]` (모든 https 허용)
- **보안 헤더** (production only): X-Frame-Options SAMEORIGIN, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy, HSTS, CSP
  - `script-src`: self + `https://www.googletagmanager.com` + `https://va.vercel-scripts.com` + `https://t1.daumcdn.net`
  - `frame-src`: self + `https://www.youtube.com`
- 개발환경(dev)에서는 CSP 비활성화 (`process.env.NODE_ENV !== "production"` → 빈 배열 반환)
- 신규 외부 도메인(지도·영상 등) 추가 시 CSP `script-src`/`frame-src` 업데이트 필요

## 폰트 설정 (src/app/layout.tsx)

```ts
// Pretendard — 로컬 woff2
const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
  adjustFontFallback: "Arial",
});

// Inter — next/font/google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// HTML className: `${pretendard.variable} ${inter.variable} h-full`
// CSS: font-family: var(--font-pretendard), "Pretendard Variable", ...
```
