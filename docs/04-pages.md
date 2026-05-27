# 04 — Pages Reference

Claude Code용 참조 문서. 각 페이지의 섹션 순서·카피(verbatim)·애니메이션·데이터 출처를 담는다.
이 파일 하나로 모든 현재 텍스트·구조·애니메이션을 파악할 수 있어야 한다.

**표기 규칙**
- 카피는 코드에 적힌 문자열 그대로 (verbatim)
- `\n` = h1/h2 내 `<br />` 줄바꿈
- *(highlight: "word")* = `gradient-text` 클래스 span
- `{siteConfig.xxx}` = 런타임 주입값 (src/config/site.ts)
- `[DATA: path]` = 외부 데이터 파일 출처

---

## / — 홈

**metadata:** siteConfig 기본값 사용 (별도 `export const metadata` 없음)

**섹션 순서:**
Hero → PainPoints → ProfessionRotator → KPIShowcase → CaseHighlight → CaseGrid → WhyUsBold → ServiceCards → ProcessSteps → RealReviews → TeamPreview → FinalCTA

---

### 1. Hero
**file:** `src/components/sections/Hero.tsx`  
**background:** `bg-white` + purple orb top-left (`bg-[#7c3aed] opacity-[0.06] blur-[160px]`) + cyan orb bottom-right (`bg-[#06b6d4] opacity-[0.04] blur-[140px]`) + fine grid with radial mask  
**layout:** `min-h-screen` center, 좌우 split (text left, visual right on lg+)

**copy:**
- eyebrow (mono, violet): `"전문직 12개 직군 · 광고 위반 0건"`
- h1: `"전문직 마케팅은\n"` + *(highlight: "달라야")* + `" 합니다"`
- sub: `"고객이 먼저 찾아옵니다"`
- proof strip (3 items): `"누적 200+ 콘텐츠"` / `"재계약율 90%+"` / `"의료광고 심의 통과 100%"`
- cta button: `"마케팅 컨설팅"` → `/contact`

**visual (right):** browser mockup with naver search bar, search term `"변호사 이혼 의뢰"`, 3 result cards  
**animations:** `motion/react` — eyebrow `{opacity:0,y:16}→{1,0}` delay 0, h1 delay 0.1, sub delay 0.25, proof delay 0.4, cta delay 0.5, visual delay 0.3 (ease `[0.22,1,0.36,1]`)

---

### 2. PainPoints
**file:** `src/components/sections/PainPoints.tsx`  
**background:** `bg-slate-50`  
**layout:** center, grid 2-col on md+

**copy:**
- eyebrow: `"이런 경험 있으신가요?"`
- h2: *(highlight: "일반 대행사")* + `"에 맡겨봤지만..."`
- 6 items `[DATA: src/data/painPoints.ts → PAIN_POINTS]`:
  1. `"노출 수는 많은데, 정작 상담 문의는 없어요."`
  2. `"광고 규정을 모르는 담당자가 콘텐츠를 만들어요."`
  3. `"매달 비슷한 글만 반복해서 올라와요."`
  4. `"계약 전엔 적극적이었는데, 계약 후엔 연락이 뜸해요."`
  5. `"담당자가 바뀔 때마다 처음으로 돌아가요."`
  6. `"계획서는 그럴싸한데, 막상 진행하면 얘기가 달라져요."`

**animations:** `Reveal` (scroll-triggered entrance)

---

### 3. ProfessionRotator
**file:** `src/components/sections/ProfessionRotator.tsx`  
**background:** `bg-white`  
**layout:** center, rotating label in h2

**copy:**
- eyebrow (mono): `"Specialized"`
- h2: `"오직 ["` + *rotating_label* + `"]를 위해\n만들어졌습니다."`
- rotating labels `[DATA: src/data/professions.ts → PROFESSIONS]`: `"변호사"` / `"의사"` / `"한의사"` / `"수의사"` / `"노무사"` / `"세무사"`
- sub: `"직군의 언어와 광고 규정 위에서 시작합니다."`

**animations:** label swap — `AnimatePresence` with `{opacity:0,y:12}→{1,0}` exit `{opacity:0,y:-12}`, interval 2000ms

---

### 4. KPIShowcase
**file:** `src/components/sections/KPIShowcase.tsx`  
**background:** `bg-[#0a0a0a]` (dark)  
**layout:** center, 4-col grid

**copy:**
- eyebrow (mono, white/40): `"운영 데이터"`
- h2: `"숫자가 증명합니다."`
- 4 KPI items (inline data):
  - `[01]` label `"재계약율"`, value `"90%+"` (CountUp)
  - `[02]` label `"평균 월 상담 증가"`, value `"3배+"` (CountUp)
  - `[03]` label `"광고 심의 통과율"`, value `"100%"` (CountUp)
  - `[04]` label `"전담 직군"`, value `"12개"` (CountUp)

**animations:** `CountUp` component (animated number), `Reveal` scroll entrance

---

### 5. CaseHighlight
**file:** `src/components/sections/CaseHighlight.tsx`  
**background:** `bg-white`  
**layout:** featured case left (chart) + quote right

**copy:**
- eyebrow: `"성공 사례"`
- h2: `"직군별 실제 운영 결과입니다."`
- featured case name: `"사례 1. K 법무법인"`
- chart label: `"월 상담 건수 (6개월)"`
- before value: `3건`, after value: `18건`, multiplier badge: `"6배"`
- h3: `"광고비 줄이는 동안,\n상담은 "` + *(highlight: "6배")* + `" 늘었습니다"`
- ad saving badge label: `"광고비 절감율"` / value: `"65% 절감"`
- quote: `"광고비 줄이면서 상담이 늘 수 있다는 게 처음엔 이해가 안 됐어요. 근데 지금은 설명이 되네요."` — `"K 법무법인 대표"`

**animations:** `Reveal`, bar chart CountUp

---

### 6. CaseGrid
**file:** `src/components/sections/CaseGrid.tsx`  
**background:** `bg-slate-50`  
**layout:** 2×2 grid

**copy:**
- eyebrow: `"운영 사례"`
- h2: `"6개월이면 달라집니다."`
- sub: `"직군별 실제 운영 데이터입니다. 숫자는 가상이며 실데이터로 교체 예정입니다."`
- 4 cases (inline):
  1. `"K법무법인"` → `"6배"` 상담 증가
  2. `"D정형외과"` → `"3.4배"` 상담 증가
  3. `"J한방병원"` → `"3.3배"` 상담 증가
  4. `"S세무사무소"` → `"3.8배"` 상담 증가

**animations:** `Reveal` per card

---

### 7. WhyUsBold
**file:** `src/components/sections/WhyUsBold.tsx`  
**background:** `bg-white`  
**layout:** center, 3-card comparison grid

**copy:**
- eyebrow: `"Why Us"`
- h2: `"대부분의 대행사는 노출 수에 집착합니다."`
- sub: `"수임 전환, 그것만 봅니다."`
- 3 cards with before/after comparison table `[DATA: src/data/whyUs.ts]`

**animations:** `Reveal`

---

### 8. ServiceCards
**file:** `src/components/sections/ServiceCards.tsx`  
**background:** `bg-slate-50`  
**layout:** 3-card grid

**copy:**
- eyebrow: `"Services"`
- h2: `"전문직 마케팅, "` + *(highlight: "세 가지")* + `"로 합니다."`
- 3 service cards `[DATA: src/data/services.ts → SERVICE_CARDS]`

**animations:** `Reveal` per card

---

### 9. ProcessSteps
**file:** `src/components/sections/ProcessSteps.tsx`  
**background:** `bg-white`  
**layout:** vertical numbered steps

**copy:**
- eyebrow: `"Process"`
- h2: `"이렇게 함께합니다."`
- sub: `"상담부터 발행까지, 규정 검토가 모든 단계에 있습니다."`
- 4 steps `[DATA: src/data/process.ts → PROCESS_STEPS]`

**animations:** `Reveal` staggered

---

### 10. RealReviews
**file:** `src/components/sections/RealReviews.tsx`  
**background:** `bg-slate-50`  
**layout:** review cards (Marquee)

**copy:**
- eyebrow: `"Real Voices"`
- h2: `"직접 겪은 "` + *(highlight: "이야기입니다")*
- sub: `"상담 문의가 늘어난 전문직 대표들의 실제 후기입니다."`
- bottom link: `"마케팅 컨설팅 받기 →"` → `/contact`
- reviews `[DATA: src/data/reviews.ts → REVIEWS]`

**animations:** `Marquee` (react-fast-marquee) scrolling strip, `Reveal`

---

### 11. TeamPreview
**file:** `src/components/sections/TeamPreview.tsx`  
**background:** `bg-white`  
**layout:** center, team photo mosaic

**copy:**
- eyebrow: `"Team"`
- h2: `"규정을 아는 사람들이 직접 만듭니다."`
- sub: `"운영팀이 아니라 기획자가 콘텐츠를 씁니다."`
- bottom link: `"팀 전체 보기 →"` → `/team`

**animations:** `Reveal`, photo hover scale

---

### 12. FinalCTA
**file:** `src/components/sections/FinalCTA.tsx`  
**background:** `bg-[#0a0a0a]` (dark) + violet/cyan orbs  
**layout:** center

**copy:**
- eyebrow (mono): `"마케팅 컨설팅"`
- h2: `"광고비, 더 태우기 전에."`
- sub: `"3분이면 컨설팅 요청이 끝납니다.\n24시간 안으로 답변드립니다."`
- btn1: `"마케팅 컨설팅"` → `/contact`
- btn2: `"카카오톡 1:1 문의"` → `{siteConfig.contact.kakaoOpenChat}` (external `target="_blank"`)
- note (mono): `"영업일 1일 내 회신 · 광고 규정 위반 항목 즉시 확인"`

**animations:** `Reveal`

---

## /about — 회사소개

**metadata:** `title: "회사소개 | 온세상이마케팅이다"`

**섹션 순서:**
AboutHero → AboutFoundingStory → AboutTrustCounter → AboutHowWeWork → AboutClientStrip → AESlogan → AboutSignature → AboutCaseHighlight → AboutCEOMessage → AboutCEOTimeline → AboutMission → OrgChart → Comparison → AboutMidCTA → CTACard(gradient)

---

### 1. AboutHero
**file:** `src/components/sections/AboutHero.tsx`  
**background:** `bg-slate-900` (dark) + diagonal violet overlay + floating orbs  
**layout:** `min-h-screen` center

**copy:**
- eyebrow (mono, white/40, letter-spaced): `"회 사 소 개"`
- h1: `"규정을 모르면,\n"` + *(highlight: "마케팅이")* + `"\n아닙니다."`
- sub: `"대부분의 대행사는 변호사법·의료법·세무사법을 검토하지 않습니다.\n8년간 그걸 처음부터 당연한 일로 했습니다."`
- proof strip (hairline): `"전문직 12개 직군 · 광고 위반 0건 · 재계약율 90%+"`

**animations:** `motion/react` — h1 `{opacity:0,y:28}→{1,0}` delay 0.1, eyebrow delay 0, sub delay 0.25, strip delay 0.6

---

### 2. AboutFoundingStory
**file:** `src/components/sections/AboutFoundingStory.tsx`  
**background:** `bg-white`  
**layout:** prose left + stat cards right

**copy:**
- eyebrow: `"Why we started"`
- h2: `"왜 온세상이마케팅이다가 만들어졌나"`
- 3 paragraphs `[DATA: src/data/about.ts → FOUNDING_STORY.paragraphs]`
- blockquote: `"규정을 모르면 콘텐츠가 아니라 위험을 만듭니다."` — `"김태훈 / 온세상이마케팅이다 대표"`
- 3 stat cards (inline):
  - `"8년"` / `"규정 검토 경력"`
  - `"12개"` / `"전문직 직군"`
  - `"0건"` / `"광고 규정 위반"`

**animations:** `Reveal`

---

### 3. AboutTrustCounter
**file:** `src/components/sections/AboutTrustCounter.tsx`  
**background:** `bg-slate-50`  
**layout:** 4-col stat grid

**copy:**
- eyebrow: `"Numbers"`
- h2: `"숫자로 "` + *(highlight: "증명합니다")*
- 4 stats (inline):
  - `"200+"` / `"누적 콘텐츠"` (CountUp)
  - `"12"` / `"전담 직군"` (CountUp)
  - `"90%+"` / `"재계약율"` (CountUp)
  - `"0"` / `"광고 규정 위반"` (CountUp)

**animations:** `CountUp`, `Reveal`

---

### 4. AboutHowWeWork
**file:** `src/components/sections/AboutHowWeWork.tsx`  
**background:** `bg-white`  
**layout:** vertical numbered steps

**copy:**
- eyebrow: `"Process"`
- h2: `"콘텐츠 한 편, "` + *(highlight: "이렇게")* + `" 만듭니다."`
- sub: `"규정 검토 없는 콘텐츠는 발행하지 않습니다."`
- 5 steps `[DATA: src/data/process.ts → WORK_PROCESS]`
- footnote: `"5단계 모두 대표가 직접 검수합니다."`

**animations:** `Reveal` staggered

---

### 5. AboutClientStrip
**file:** `src/components/sections/AboutClientStrip.tsx`  
**background:** `bg-slate-50`  
**layout:** Marquee strip

**copy:**
- eyebrow: `"Disciplines"`
- h2: *(highlight: "12개")* + `" 전문직 직군"`
- sub: `"각 직군의 광고 규정과 검색 의도를 직접 학습한 팀"`
- 12 discipline chips `[DATA: src/data/disciplines.ts → CLIENT_DISCIPLINES]`

**animations:** `Marquee` (react-fast-marquee)

---

### 6. AESlogan
**file:** `src/components/sections/AESlogan.tsx`  
**background:** `bg-[#0a0a0a]` (dark full-bleed)  
**layout:** center, large text

**copy:**
- line1: `"노출은 만들 수 있습니다. 상담을 만드는 건 다릅니다."`
- line2: `"광고 규정을 모르는 콘텐츠는 발행하지 않습니다."`
- footer (mono): `"온세상이마케팅이다 / Since 2026"`

**animations:** `Reveal` with stagger, text clip reveal

---

### 7. AboutSignature
**file:** `src/components/sections/AboutSignature.tsx`  
**background:** `bg-white`  
**layout:** 4-card grid

**copy:**
- eyebrow: `"Our Method"`
- h2: `"처음부터 "` + *(highlight: "달랐습니다.")*
- sub: `"8년간 전문직 광고 규정만 봤습니다."`
- 4 cards `[DATA: src/data/about.ts → SIGNATURE_POINTS]`:
  1. `"규정부터 봅니다"`
  2. `"노출이 아닌 의뢰를 봅니다"`
  3. `"대표가 직접 보고합니다"`
  4. `"담당자가 바뀌지 않습니다"`

**animations:** `Reveal`

---

### 8. AboutCaseHighlight
**file:** `src/components/sections/AboutCaseHighlight.tsx`  
**background:** `bg-slate-50`  
**layout:** 3-case card grid

**copy:**
- eyebrow: `"Case Studies"`
- h2: `"직군별 "` + *(highlight: "결과")* + `"입니다."`
- sub: `"광고비 줄이는 동안, 의뢰가 늘었습니다."`
- 3 cases `[DATA: src/data/about.ts → ABOUT_CASES]`
- disclaimer: `"클라이언트 정보는 익명 처리합니다."`

**animations:** `Reveal`

---

### 9. AboutCEOMessage
**file:** `src/components/sections/AboutCEOMessage.tsx`  
**background:** `bg-white`  
**layout:** photo left + text right (split)

**copy:**
- eyebrow: `"CEO Message"`
- h2: `"퍼포먼스 마케팅으로 시작했습니다."`
- expertise tags (inline): `"퍼포먼스 마케팅"` / `"AI 영상 활용"` / `"브랜드 마케팅"`
- 6 paragraphs `[DATA: src/data/about.ts → MESSAGE_PARAGRAPHS]`
- signature: `"― 김태훈 / 온세상이마케팅이다 대표"`
- photo: `/images/team/taehoon-kim.png`

**animations:** `Reveal`

---

### 10. AboutCEOTimeline
**file:** `src/components/sections/AboutCEOTimeline.tsx`  
**background:** `bg-slate-50`  
**layout:** vertical timeline

**copy:**
- eyebrow: `"Career"`
- h2: `"지나온 길"`
- 5 milestones (inline):
  1. `"졸업"` / `"한신대학교 정보통신학부"`
  2. `"2023"` / `"T사 퍼포먼스 마케터"`
  3. `"2024"` / `"마케팅 플랫폼 '그룸힘' 창업"`
  4. `"2025"` / `"중앙대학교 캠퍼스타운 입주"`
  5. `"2026"` / `"온세상이마케팅이다 정식 운영"`

**animations:** `Reveal` staggered

---

### 11. AboutMission
**file:** `src/components/sections/AboutMission.tsx`  
**background:** `bg-white`  
**layout:** center prose block

**copy:**
- eyebrow: `"Mission"`
- h2: `"전문직 광고 규정을 직접 검토하는 마케팅 팀"`
- body: `"변호사·의사·세무사 등 12개 직군 각각의 광고 허용 범위를 직접 검토합니다.\n규정을 통과한 콘텐츠로, 의뢰인이 먼저 찾아오는 구조를 만듭니다."`

**animations:** `Reveal`

---

### 12. OrgChart
**file:** `src/components/sections/OrgChart.tsx`  
**background:** `bg-slate-50`  
**layout:** org tree (CEO → 3 depts)

**copy:**
- eyebrow: `"Organization"`, title: `"조직도"`
- CEO box: `"대표"` / `"전문직 마케팅 전략 총괄"`
- 3 departments `[DATA: src/data/about.ts → DEPARTMENTS]`:
  - `"마케팅팀"` with sub-teams
  - `"영상팀"` with sub-teams
  - `"편집팀"` with sub-teams

**animations:** `Reveal`

---

### 13. Comparison
**file:** `src/components/sections/Comparison.tsx`  
**background:** `bg-white`  
**layout:** comparison table + rejection note

**copy:**
- title: `"일반 대행사 vs 온세상이마케팅이다"`
- 6 rows `[DATA: src/data/about.ts → COMPARISON_ROWS]`
- rejection note heading: `"이런 분들은 정중히 거절하고 있습니다"`
- rejection items (inline): `"단기간 1위만 원하시는 분"` / `"컨펌 없이 전체 위임 원하시는 분"` / `"광고 규정을 무시하시는 분"`

**animations:** `Reveal`

---

### 14. AboutMidCTA
**file:** `src/components/sections/AboutMidCTA.tsx`  
**background:** `bg-[#0a0a0a]` (dark)  
**layout:** center, 3 CTA buttons

**copy:**
- eyebrow (mono): `"Direct Contact"`
- h2: `"마케팅 컨설팅"`
- sub: `"광고비 더 태우기 전에, 위반 항목부터 점검하세요."`
- btn1: `"마케팅 컨설팅"` → `/contact`
- btn2: `"카카오톡 1:1 문의"` → `https://pf.kakao.com/_FwExjX` (external)
- btn3: `"회사소개서 PDF"` → `/onketing-brochure.pdf` (download)
- note (mono): `"영업일 1일 내 회신 · 24시간 카카오 응답 · 즉시 다운로드"`

**animations:** `Reveal`

---

### 15. CTACard (gradient)
**file:** `src/components/shared/CTACard.tsx`  
**variant:** `"gradient"`  
**props:**
- `headline`: `"전문직 마케팅, 우리에게 맡기세요."`
- `sub`: `"광고 규정 위반 항목 즉시 확인"`
- `buttonText`: `"마케팅 컨설팅"`
- `eyebrow`: (default) `"{siteConfig.nameKo} · 마케팅 컨설팅"`

**trust stats (hardcoded in CTACard):**
- `"1일"` / `"영업일 내 회신"`
- `"0원"` / `"컨설팅 비용"`
- `"없음"` / `"계약 의무"`

---

## /team — 팀

**metadata:** `title: "팀 | 온세상이마케팅이다"`

**섹션 순서:**
TeamHero → TeamStats → TeamMemberFeature → TeamPrinciples → TeamCrews → TeamScene → CTACard(gradient)

---

### 1. TeamHero
**file:** `src/components/sections/TeamHero.tsx`  
**background:** `bg-[#eef2f7]`  
**layout:** left text (lg: 58%) + right photo mosaic (lg: 44%, desktop only)

**copy:**
- eyebrow (mono, violet): `"Our Team"`
- h1: `"처음 맡은 팀이,\n끝까지 "` + *(highlight: "갑니다.")*
- sub: `"규정 검수부터 발행까지, 외주 없이 한 공간에서."`
- btn: `"팀 소개 보기"` (scrolls `window.scrollTo({top: window.innerHeight})`)
- scroll indicator: `"scroll"` + bouncing ArrowDown

**visual (right mosaic, 3×2 grid):**
- `/images/team/video-01.jpg` (촬영 현장)
- `/images/team/video-02.jpg` (촬영 현장)
- `/images/team/video-05.jpg` (촬영 현장)
- `/images/team/video-07.jpg` (촬영 현장)
- `/images/team/edit-01.jpg` (편집실)
- `/images/team/edit-02.jpg` (편집실)

**animations:** `motion/react` — eyebrow delay 0, h1 delay 0.1, sub delay 0.25, btn delay 0.35, photos stagger `0.15 + i*0.09`

---

### 2. TeamStats
**file:** `src/components/sections/TeamStats.tsx`  
**background:** `bg-white`  
**layout:** 3-stat grid

**copy:**
- eyebrow: `"Why us"`
- h2: `"숫자가 증명합니다."`
- sub: `"발행 전 직접 검토합니다. 규정 위반, 단 한 건도 없었습니다."`
- 3 stats (inline):
  - `"200+"` / `"누적 검토 건"` (color: emerald)
  - `"0건"` / `"위반 적발"` (color: rose)
  - `"8년"` / `"대표 광고 검토 경력"` (color: purple)

**animations:** `CountUp`, `Reveal`

---

### 3. TeamMemberFeature
**file:** `src/components/sections/TeamMemberFeature.tsx`  
**background:** alternating `bg-white` / `bg-slate-50`  
**layout:** alternating left/right image+text per member

**copy — 3 members `[DATA: src/data/team.ts → TEAM_MEMBERS]`:**

**김태훈 (대표)**
- quote: `"심의 통과가 먼저, 성과는 그 다음입니다."`
- careers: 3개

**김성민 (블로그 마케터)**
- quote: `"제가 쓴 글이 전화 한 통을 만들면 됩니다."`
- careers: 5개

**김도현 (퍼포먼스 마케터)**
- quote: `"같은 예산으로 상담이 더 나와야 합니다."`
- careers: 4개

**animations:** `Reveal` direction alternates left/right

---

### 4. TeamPrinciples
**file:** `src/components/sections/TeamPrinciples.tsx`  
**background:** `bg-[#0a0a0a]` (dark)  
**layout:** 3 numbered principle blocks

**copy (inline data):**

**01**
- title: `"규정을 모르면 손대지 않습니다."`
- body, anecdote, meta (verbatim in data)

**02**
- title: `"조회수는 시작, 상담이 결과입니다."`
- body, anecdote, meta

**03**
- title: `"기획자가 직접 씁니다."`
- body, anecdote, meta

**animations:** `Reveal` staggered

---

### 5. TeamCrews
**file:** `src/components/sections/TeamCrews.tsx`  
**background:** `bg-white`  
**layout:** 2-col crew cards

**copy:**
- eyebrow: `"Crews"`
- title: `"현장과 편집실 모두 직접 운영"`
- sub: `"촬영부터 발행까지 외주 없이 한 팀이 책임합니다."`

- **영상팀** card:
  - h3: `"현장 촬영부터 편집까지\n직접 갑니다"`
  - body: `"의뢰인이 카메라 앞에서 편안하게 말할 수 있도록 촬영팀이 직접 현장에 갑니다. 조명·사운드·디렉팅을 한 팀이 책임집니다."`

- **편집팀** card:
  - h3: `"초안부터 발행까지 한 팀에서"`
  - body: `"숏폼·릴스의 호흡과 블로그 비주얼을 함께 책임지는 인하우스 편집팀이 컷·자막·썸네일을 일관된 톤으로 다듬습니다."`

**animations:** `Reveal`

---

### 6. TeamScene
**file:** `src/components/sections/TeamScene.tsx`  
**background:** dark full-bleed image  
**layout:** full-width image with overlay text

**copy:**
- eyebrow (mono): `"Studio"`
- h2: `"같은 공간에서 같이 만듭니다."`
- sub: `"촬영·편집·발행이 한 팀, 한 공간에서 끝납니다."`
- feature overlay: `"@onketing"` / `"스튜디오"`

**animations:** `Reveal`

---

### 7. CTACard (gradient)
**file:** `src/components/shared/CTACard.tsx`  
**variant:** `"gradient"`  
**props:**
- `headline`: `"팀이 직접 검토합니다."`
- `sub`: `"첫 미팅에서 직군·채널·법령 조항까지 같이 봅니다."`
- `buttonText`: `"마케팅 컨설팅"`
- `eyebrow`: (default) `"{siteConfig.nameKo} · 마케팅 컨설팅"`

---

## /contact — 마케팅 컨설팅

**metadata:** `title: "마케팅 컨설팅 | 온세상이마케팅이다"`, `description: "온세상이마케팅이다에 전문직 마케팅을 문의하세요. 영업일 1일 내 회신드립니다."`

**섹션 순서:**
ContactHero → ContactProcess → ContactSplit → ContactFAQ → CTACard(gradient)

---

### 1. ContactHero
**file:** `src/components/sections/ContactHero.tsx`  
**background:** `bg-white` + purple orb top-left + cyan orb bottom-right + fine grid with radial mask  
**layout:** `min-h-screen` center

**copy:**
- eyebrow (mono, violet): `"Marketing Consultation"`
- h1: `"결정 전에\n"` + *(highlight: "먼저 물어보세요.")*
- sub: `"묻는 것만으로 충분합니다. 결정은 나중에 하세요."`
- trust stats (3):
  - `"1일"` / `"영업일 내 회신"`
  - `"0원"` / `"컨설팅 비용"`
  - `"100%"` / `"광고 규정 검토"`
- cta button: `"문의 작성하기"` (scrolls to `#contact-form`, offset 80px)
- top hairline: `"{siteConfig.nameKo} · Consultation — 2026"`
- bottom hairline: `{siteConfig.contact.businessHours}` (with Clock icon)
- scroll indicator: `"scroll"` + bouncing ArrowDown

**animations:** `motion/react` — eyebrow delay 0, h1 delay 0.1, sub delay 0.25, stats delay 0.35, btn delay 0.45, bottom delay 0.6, scroll delay 0.8

---

### 2. ContactProcess
**file:** `src/components/sections/ContactProcess.tsx`  
**background:** `bg-white`  
**layout:** 4-step horizontal/vertical flow

**copy (inline):**
- **01 폼 작성:** `"3분이면 작성 완료. 현황·직군·목표만 간단히 적어주세요."`
- **02 영업일 1일 내 회신:** `"담당자가 직접 확인하고 연락드립니다."`
- **03 마케팅 컨설팅:** `"영상·전화·대면 중 편한 방식으로 진행합니다."`
- **04 규정 검토 리포트:** `"현재 채널의 광고 규정 위반 항목을 즉시 정리해 드립니다."`

**animations:** `Reveal` staggered

---

### 3. ContactSplit
**file:** `src/components/sections/ContactSplit.tsx`  
**background:** `bg-slate-50`  
**layout:** left (Why us reasons + direct contact) + right (ContactForm)

**copy — Left:**
- eyebrow: `"Why us"`
- h2: `"왜 온세상이마케팅이다에\n의뢰하나"`
- 3 reasons (inline):
  1. `"광고 규정 직접 검토"`
  2. `"노출이 아닌 상담 수 보고"`
  3. `"직군 전담 팀"`
- Direct Contact label: `"카카오톡 1:1 문의"` + `"이메일"` (`{siteConfig.contact.email}`)

**right:** ContactForm component (see below)

**animations:** `Reveal`

---

### 3a. ContactForm
**file:** `src/components/sections/ContactForm.tsx`  
**id:** `"contact-form"` (anchor target from ContactHero CTA)  
**layout:** form card, white bg, violet accent

**form header:**
- eyebrow (mono, violet): `"마케팅 컨설팅"`
- h2: `"자세히 알려주세요"`

**fields:**
- `"회사/소속명"` (required) — placeholder: `"예: OO 한의원, 홍길동 변호사"`
- `"직군"` (custom dropdown) — options: `"변호사"` / `"의사"` / `"한의사"` / `"수의사"` / `"노무사"` / `"세무사"` / `"기타"`; placeholder: `"선택해주세요"`
- `"담당자 이름"` (required) — placeholder: `"홍길동"`
- `"연락처"` (required, tel) — placeholder: `"010-0000-0000"`
- `"이메일"` (optional, email) — placeholder: `"name@example.com"`
- `"유입 경로"` (chip toggle) — options: `"인스타그램"` / `"네이버 검색"` / `"지인 소개"` / `"블로그"` / `"기타"`
- `"문의 내용"` (textarea, 4 rows) — placeholder: `"현재 마케팅 상황이나 궁금한 점을 자유롭게 적어주세요."`
- privacy checkbox: `"개인정보 수집·이용에 동의합니다. 수집된 정보는 컨설팅 목적으로만 사용됩니다."`
- submit button: `"마케팅 컨설팅 신청"` (gradient-brand)

**success state (after submit):**
- h2: `"신청이 완료되었습니다"`
- p: `"영업일 1일 내로 직접 연락드리겠습니다."`
- kakao btn: `"카카오로 바로 연락하기"` → `{siteConfig.contact.kakaoOpenChat}` (external)

**submit behavior:** `mailto:{siteConfig.contact.email}` with subject `[상담 신청] {company} · {name}` and pre-filled body; then `setSent(true)`

**animations:** `AnimatePresence` form→success `{opacity:0,scale:0.96}→{1,1}`, profession dropdown `{opacity:0,y:-6}→{1,0}`

---

### 4. ContactFAQ
**file:** `src/components/sections/ContactFAQ.tsx`  
**background:** `bg-white`  
**layout:** 3-item accordion

**copy (inline):**
1. Q: `"비용은 어떻게 되나요?"` — A: (verbatim in component)
2. Q: `"계약하지 않아도 상담을 받을 수 있나요?"` — A: (verbatim in component)
3. Q: `"성과까지 얼마나 걸리나요?"` — A: (verbatim in component)

**animations:** `AnimatePresence` accordion expand/collapse

---

### 5. CTACard (gradient)
**file:** `src/components/shared/CTACard.tsx`  
**variant:** `"gradient"`  
**props:**
- `eyebrow`: `"온세상이마케팅이다의 약속"`
- `headline`: `"처음 맡은 팀이\n끝까지 갑니다."`
- `sub`: `"규정 검수부터 성과 보고까지, 외주 없이 한 팀이 담당합니다."`
- `buttonText`: (default) `"마케팅 컨설팅"`

---

## /faq — FAQ

**metadata:** `title: "FAQ | 온세상이마케팅이다"`  
**JSON-LD schema:** uses `FAQ_ITEMS` from `[DATA: src/data/faq.ts]`

**섹션 순서:**
FaqHero → FaqSpotlight → FaqDirectory → FAQContact

---

### 1. FaqHero
**file:** `src/components/sections/FaqHero.tsx`  
**background:** `bg-[#fafbfc]` + purple blob top-left + cyan blob bottom-right + fine grid + SVG noise (`mix-blend-multiply opacity-[0.18]`)  
**layout:** `min-h-screen` center

**copy:**
- top hairline: `"온세상이마케팅이다 · Knowledge — 2026"`
- eyebrow (semibold, violet): `"FAQ"`
- h1: `"묻기 전에,\n"` + *(highlight: "답")* + `"을 봅니다."`
- sub: `"자주 묻는 질문을 여섯 카테고리로 정리했습니다."`
- category chips (6): `"비용"` / `"진행 안내"` / `"광고규정"` / `"운영보고"` / `"성과"` / `"해지환불"` (each scrolls to `#faq-{slug}`)
- bottom hairline: `"6 Categories · 25 Q&A"`
- scroll indicator: `"scroll"` + bouncing ChevronDown

**animations:** `motion/react` — eyebrow delay 0, h1 delay 0.1, sub delay 0.25, chips stagger `0.4 + i*0.05`, hairline delay 0.6, scroll delay 0.8

---

### 2. FaqSpotlight
**file:** `src/components/sections/FaqSpotlight.tsx`  
**background:** `bg-white`  
**layout:** 5-item featured FAQ list

**copy:**
- eyebrow: `"Most asked"`
- h2: `"이런 질문을 가장 많이 받습니다."`
- sub: `"자주 묻는 항목은 미리 정리했습니다."`
- 5 items where `featured: true` `[DATA: src/data/faq.ts → FAQ_ITEMS]`

**animations:** `Reveal`

---

### 3. FaqDirectory
**file:** `src/components/sections/FaqDirectory.tsx`  
**background:** `bg-slate-50`  
**layout:** sticky sidebar (categories) + main content (grouped Q&A)

**copy:**
- All FAQ items grouped by category `[DATA: src/data/faq.ts → FAQ_ITEMS, FAQ_CATEGORIES]`
- Category icons (Lucide) per category
- Section anchor IDs: `faq-{slug}`

**animations:** `AnimatePresence` accordion per item, sticky category highlight on scroll

---

### 4. FAQContact
**file:** `src/components/sections/FAQContact.tsx`  
**background:** `bg-white`  
**layout:** center, 4 CTA tiles

**copy:**
- eyebrow: `"Contact"`
- h2: `"답을 못 찾으셨나요?"`
- sub: `"직접 물어보시면 영업일 1일 내로 답변드립니다."`
- 4 CTAs (inline):
  1. `"카카오톡 1:1"` — `{siteConfig.contact.kakaoOpenChat}` (external)
  2. `"전화 문의"` — sub: `"평일 09:00–18:00"`
  3. `"이메일"` — `{siteConfig.contact.email}`
  4. `"마케팅 컨설팅"` → `/contact`

**animations:** `Reveal`

---

## /regulation — 광고 규정 가이드

**metadata:** `title: "광고 규정 가이드 | 온세상이마케팅이다"`

**섹션 순서:**
RegulationHero → RegulationStats → RegulationLawSwitcher → RegulationBeforeAfter → RegulationChecklist → RegulationPledge → AboutMidCTA

---

### 1. RegulationHero
**file:** `src/components/sections/RegulationHero.tsx`  
**background:** dark (similar to AboutHero) + orbs  
**layout:** left text + right document visual

**copy:**
- eyebrow (mono): `"Ad Regulation Compliance"`
- h1: *(highlight: "규정")* + `"에\n걸리지 않습니다."`
- sub: `"12개 직군 법령을 발행 전 직접 검토합니다."`
- trust strip (3): `"12개 직군"` / `"200+ 검토 누적"` / `"0건 위반"`

**visual (right):** 3 document cards with stamps:
- `"위반"` (rose) — law label `"변호사법§23"`
- `"통과"` (emerald) — law label `"의료법§56"`
- `"보완"` (amber) — law label `"세무사법§22"`

**animations:** `motion/react`

---

### 2. RegulationStats
**file:** `src/components/sections/RegulationStats.tsx`  
**background:** `bg-white`  
**layout:** 3-stat grid + trend chart

**copy:**
- eyebrow: `"Why it matters"`
- h2: `"규정 위반, 생각보다 "` + *(rose text: "가깝습니다")*
- sub: `"광고 위반은 행정처분·징계·형사처벌로 이어집니다. 아래 수치는 모두 공식 출처입니다."`
- 3 stats `[DATA: src/data/regulation.ts → REGULATION_STATS]`:
  1. `"366건"` / `"의료광고 위법 적발"`
  2. `"39%"` / `"변호사 징계 사유 1위"`
  3. `"25배"` / `"변호사 광고규정 위반 증가(10년)"`
- trend chart label: `"10년 새 25배 증가"` / `"위반 광고 적발 건수"`

**animations:** `CountUp`, `Reveal`

---

### 3. RegulationLawSwitcher
**file:** `src/components/sections/RegulationLawSwitcher.tsx`  
**background:** `bg-slate-50`  
**layout:** tab bar (12 professions) + content panel (allowed/prohibited)

**copy:**
- eyebrow: `"Regulation"`
- h2: `"12개 직군, 항목별 점검 기준입니다."`
- sub: `"직군을 누르면 가능한 표현과 금지된 표현을 확인할 수 있습니다."`
- 12 profession tabs + per-tab allowed/prohibited lists `[DATA: src/data/regulation.ts → REGULATIONS]`

**animations:** `AnimatePresence` tab content swap

---

### 4. RegulationBeforeAfter
**file:** `src/components/sections/RegulationBeforeAfter.tsx`  
**background:** `bg-white`  
**layout:** 4 side-by-side before/after cards

**copy:**
- eyebrow: `"Before / After"`
- h2: `"이런 카피는 "` + *(rose text: "위반")* + `"입니다"`
- sub: `"실제 위반 사례와 수정 카피를 직접 비교합니다."`
- 4 cases `[DATA: src/data/regulation.ts → REGULATION_CASES]`

**animations:** `Reveal`

---

### 5. RegulationChecklist
**file:** `src/components/sections/RegulationChecklist.tsx`  
**background:** `bg-slate-50`  
**layout:** 12-item checklist grid

**copy:**
- eyebrow: `"Checklist"`
- h2: `"발행 전, 항목별로 점검합니다."`
- sub: `"콘텐츠 한 편마다 12개 항목을 확인합니다. 직군·채널에 따라 추가 항목을 적용합니다."`
- 12 items (inline data in component)
- footer: `"온세상이마케팅이다 자체 체크리스트 — 직군별 항목 보강"`

**animations:** `Reveal` staggered per item

---

### 6. RegulationPledge
**file:** `src/components/sections/RegulationPledge.tsx`  
**background:** `bg-[#0a0a0a]` (dark)  
**layout:** center, pledge list

**copy:**
- h2: `"이런 카피는 쓰지 않습니다."`
- sub tag: `"온세상이마케팅이다 약속"`
- 5 pledges `[DATA: src/data/regulation.ts → PLEDGES]`
- footer: `"대표 검수 — 김도현"`

**animations:** `Reveal`

---

### 7. AboutMidCTA
(same as /about section 14 — see above)

---

## /services — 서비스

**metadata:** `title: "서비스 | 온세상이마케팅이다"`

**섹션 순서:**
PageHero → ServiceMatrix → ServiceComparison → WhyUsBold → CaseHighlight → CTACard(gradient)

---

### 1. PageHero
**file:** `src/components/shared/PageHero.tsx`  
**props:**
- `eyebrow`: `"서비스"`
- `title`: `"원하는 결과부터"`
- `titleHighlight`: `"정해주세요"`
- `sub`: `"검색에서 발견되는 글, 신뢰가 쌓이는 영상, 직군에 맞춘 통합 운영. 채널마다 다릅니다."`
- `ctaText`: `"마케팅 컨설팅"`

---

### 2. ServiceMatrix
**file:** `src/components/sections/ServiceMatrix.tsx`  
**background:** `bg-white`  
**layout:** 3-card grid

**copy:**
- eyebrow: `"Channels"`
- h2: `"어떤 결과를 "` + *(highlight: "원하세요?")*
- sub: `"채널마다 강점이 다릅니다. 원하는 결과부터 선택하세요."`
- 3 cards `[DATA: src/data/services.ts → SERVICE_MATRIX]`

**animations:** `Reveal`

---

### 3. ServiceComparison
**file:** `src/components/sections/ServiceComparison.tsx`  
**background:** `bg-slate-50`  
**layout:** table (3 channels × 5 rows)

**copy:**
- eyebrow: `"Comparison"`
- h2: `"채널별 "` + *(highlight: "비교")*
- columns: `"블로그"` / `"숏폼"` / `"전문직 통합"`
- 5 rows `[DATA: src/data/services.ts → SERVICE_COMPARISON]`

**animations:** `Reveal`

---

### 4. WhyUsBold
(same component as home page section 7)

---

### 5. CaseHighlight
(same component as home page section 5)

---

### 6. CTACard (gradient)
**variant:** `"gradient"`  
**props:**
- `headline`: `"어떤 채널이 맞는지 모르겠다면."`
- `sub`: `"직군에 맞는 채널을 찾아드립니다."`
- `buttonText`: `"마케팅 컨설팅"`

---

## /services/professional — 전문직 마케팅

**metadata:** `title: "전문직 마케팅 | 온세상이마케팅이다"`

**섹션 순서:**
ProfessionalHero → ServiceProofStrip(PROFESSIONAL_PROOF) → DisciplineGrid → ServicePainPoints(PROFESSIONAL_PAIN) → ServiceWhatWeDo(PROFESSIONAL_PILLARS) → CaseTestimonial(PROFESSIONAL_CASES) → ServiceProcess(WORK_PROCESS) → ServiceEngagementPolicy → AboutMidCTA

---

### 1. ProfessionalHero
**file:** `src/components/sections/ProfessionalHero.tsx`  
**background:** dark + orbs  
**layout:** left text + right discipline chips visual

**copy:**
- eyebrow: `"Professional Marketing"`
- h1: `"전문직 마케팅으로 "` + *(highlight: "의뢰")* + `"가 옵니다."`
- sub: `"12개 직군 법령을 직접 검토합니다."`
- visual: 12 discipline chips grid `[DATA: src/data/disciplines.ts → CLIENT_DISCIPLINES]`

**animations:** `motion/react`

---

### 2. ServiceProofStrip
**file:** `src/components/sections/ServiceProofStrip.tsx`  
**data:** `PROFESSIONAL_PROOF` `[DATA: src/data/services.ts]`  
**layout:** 4-stat strip (dark or light variant)

---

### 3. DisciplineGrid
**file:** `src/components/sections/DisciplineGrid.tsx`  
**background:** `bg-white`  
**layout:** 12-chip grid

**copy:**
- eyebrow: `"Coverage"`
- h2: `"12개 직군, "` + *(highlight: "규정별로 구분합니다")*
- sub: `"직군마다 적용되는 법령이 다릅니다. 섞지 않습니다."`
- 12 discipline items `[DATA: src/data/disciplines.ts → CLIENT_DISCIPLINES]`

---

### 4. ServicePainPoints
**file:** `src/components/sections/ServicePainPoints.tsx`  
**data:** `PROFESSIONAL_PAIN` `[DATA: src/data/services.ts]`

**copy:**
- eyebrow: `"Pain Points"`
- h2: `"이런 경험, "` + *(highlight: "있으시죠.")*

---

### 5. ServiceWhatWeDo
**file:** `src/components/sections/ServiceWhatWeDo.tsx`  
**data:** `PROFESSIONAL_PILLARS` `[DATA: src/data/services.ts]`

**copy:**
- eyebrow: `"What We Do"`
- h2: `"3가지로 "` + *(highlight: "구분합니다")*

---

### 6. CaseTestimonial
**file:** `src/components/sections/CaseTestimonial.tsx`  
**data:** `PROFESSIONAL_CASES` `[DATA: src/data/services.ts]`

**copy:**
- eyebrow: `"성공 사례"`
- h2: `"직접 확인한 결과입니다."`

---

### 7. ServiceProcess
**file:** `src/components/sections/ServiceProcess.tsx`  
**data:** `WORK_PROCESS` `[DATA: src/data/process.ts]`

**copy:**
- eyebrow: `"Process"`
- h2: `"이렇게 "` + *(highlight: "진행합니다")*
- footnote: `"5단계 모두 대표가 직접 검수합니다."`

---

### 8. ServiceEngagementPolicy
**file:** `src/components/sections/ServiceEngagementPolicy.tsx`  
**background:** `bg-slate-50`  
**layout:** left (rejection policy) + right (signature)

**copy — Left:**
- eyebrow: `"Engagement Policy"`
- h2 `[DATA: src/data/services.ts → ENGAGEMENT_POLICY.heading]`: `"진행하지 않는 의뢰"`
- sub: `"시작 전에 미리 알려드립니다."`
- 3 rejection items `[DATA: src/data/services.ts → ENGAGEMENT_POLICY.items]`

**copy — Right:**
- eyebrow: `"Our Signature"`
- h2: `"대신, 이것은 반드시 합니다."`
- 4 cards `[DATA: src/data/about.ts → SIGNATURE_POINTS]`

---

### 9. AboutMidCTA
(same as /about section 14 — see above)

---

## /services/blog — 블로그 마케팅

**metadata:** `title: "블로그 마케팅 | 온세상이마케팅이다"`

**섹션 순서:**
BlogHero → BlogVsAds → BlogPain → ServiceProofStrip(BLOG_PROOF) → ServiceWhatWeDo(BLOG_PILLARS) → CaseTestimonial(BLOG_CASES) → ServiceProcess(BLOG_PROCESS) → ServiceEngagementPolicy → AboutMidCTA

---

### 1. BlogHero
**file:** `src/components/sections/BlogHero.tsx`  
**background:** `bg-white` + orbs  
**layout:** left text + right browser mockup

**copy:**
- eyebrow: `"Blog Marketing"`
- h1: `"검색이 "` + *(highlight: "전화")* + `"가 됩니다."`
- sub: `"의뢰 직전 키워드만 선별해 씁니다."`

**visual (right):** browser mockup with:
- naver search bar, query: `"변호사 이혼 의뢰 방법"`
- 3 search result cards
- bottom stat badge: `"+3배"`

**animations:** `motion/react`

---

### 2. BlogVsAds
**file:** `src/components/sections/BlogVsAds.tsx`  
**background:** `bg-slate-50`  
**layout:** comparison table (blog vs ads)

**copy:**
- eyebrow: `"Blog vs Ads"`
- h2: `"광고비와 블로그의 "` + *(highlight: "차이")*
- 5 rows `[DATA: src/data/services.ts → BLOG_VS_ADS]`

---

### 3. BlogPain
**file:** `src/components/sections/BlogPain.tsx`  
**background:** `bg-white`  
**layout:** 4-item grid (keyword → result pairs)

**copy:**
- eyebrow: `"Pain Points"`
- h2: `"노출이 아닌, 의뢰가 목표입니다."`
- 4 items (inline in component, keyword/result format)

---

### 4–8. (same pattern as /services/professional sections 2–8)
- ServiceProofStrip: `BLOG_PROOF`
- ServiceWhatWeDo: `BLOG_PILLARS`
- CaseTestimonial: `BLOG_CASES`
- ServiceProcess: `BLOG_PROCESS` (no footnote)
- ServiceEngagementPolicy: same
- AboutMidCTA: same

---

## /services/shortform — 숏폼 마케팅

**metadata:** `title: "숏폼 마케팅 | 온세상이마케팅이다"`

**섹션 순서:**
ShortformHero → ShortformAccumulation → ServiceProofStrip(SHORTFORM_PROOF) → ShortformPain → ServiceWhatWeDo(SHORTFORM_PILLARS) → CaseTestimonial(SHORTFORM_CASES, dark) → ServiceProcess(SHORTFORM_PROCESS) → ServiceEngagementPolicy → AboutMidCTA

---

### 1. ShortformHero
**file:** `src/components/sections/ShortformHero.tsx`  
**background:** dark  
**layout:** left text + right 3 phone mockups

**copy:**
- eyebrow: `"Shortform Marketing"`
- h1: `"대본부터 "` + *(highlight: "손동작")* + `"까지 알려드립니다."`
- sub: `"한 번 촬영으로 여러 채널에 동시 발행합니다."`

**visual (right):** 3 phone mockups labeled `"릴스"` / `"쇼츠"` / `"틱톡"`

---

### 2. ShortformAccumulation
**file:** `src/components/sections/ShortformAccumulation.tsx`  
**background:** `bg-white`  
**layout:** bar chart visualization

**copy:**
- eyebrow: `"Accumulation"`
- h2: `"광고는 멈추면 0, "` + *(highlight: "숏폼은 누적됩니다")*
- sub: `"한 편이 6-12개월 동안 검색에서 발견됩니다."`
- chart data `[DATA: src/data/services.ts → SHORTFORM_ACCUMULATION]`:
  - x-axis labels: `"발행"` / `"1개월"` / `"3개월"` / `"6개월"` / `"8개월+"`
  - with percentage bars

---

### 3. ServiceProofStrip
**data:** `SHORTFORM_PROOF` `[DATA: src/data/services.ts]`

---

### 4. ShortformPain
**file:** `src/components/sections/ShortformPain.tsx`  
**background:** `bg-slate-50`  
**layout:** 4 chat bubble cards

**copy:**
- eyebrow: `"Pain Points"`
- h2: `"이런 말, 들어보셨나요."`
- 4 chat bubbles `[DATA: src/data/services.ts → BUBBLES]`:
  - `"K치과원장"` quote
  - `"L변호사"` quote
  - `"M한의사"` quote
  - `"P세무사"` quote

---

### 5–8. (same pattern as /services/professional)
- ServiceWhatWeDo: `SHORTFORM_PILLARS`
- CaseTestimonial: `SHORTFORM_CASES` (variant: `dark`)
- ServiceProcess: `SHORTFORM_PROCESS`, footnote: `"5단계 모두 대표가 직접 검수합니다."`
- ServiceEngagementPolicy: same
- AboutMidCTA: same

---

## 공통 컴포넌트 — CTACard

**file:** `src/components/shared/CTACard.tsx`

### variant: "dark" (default)
**background:** `bg-[#0a0a0a]` rounded card inside `px-4 py-24` section  
**layout:** center text + single CTA button

**default props:**
- `headline`: `"마케팅 컨설팅으로 시작하세요"`
- `sub`: `"진행 의무 없음 · 영업일 1일 내 회신"`
- `buttonText`: `"마케팅 컨설팅"`

**button:** → `/contact` (white bg, dark text)

### variant: "gradient"
**background:** `gradient-brand` full-section with radial glow + subtle grid + SVG noise  
**layout:** center text + trust stats + (no button rendered — button passed via `buttonText` but not currently rendered in gradient variant; trust stats always shown)

**default eyebrow:** `"{siteConfig.nameKo} · 마케팅 컨설팅"`

**hardcoded trust stats (always shown in gradient variant):**
- `"1일"` / `"영업일 내 회신"`
- `"0원"` / `"컨설팅 비용"`
- `"없음"` / `"계약 의무"`

**animations:** `Reveal`

---

## 공통 컴포넌트 — AboutMidCTA (재사용)

Used on: `/about`, `/regulation`, `/services/professional`, `/services/blog`, `/services/shortform`

**file:** `src/components/sections/AboutMidCTA.tsx`  
**background:** `bg-[#0a0a0a]` (dark)

**copy:**
- eyebrow (mono): `"Direct Contact"`
- h2: `"마케팅 컨설팅"`
- sub: `"광고비 더 태우기 전에, 위반 항목부터 점검하세요."`
- btn1: `"마케팅 컨설팅"` → `/contact`
- btn2: `"카카오톡 1:1 문의"` → `https://pf.kakao.com/_FwExjX` (external)
- btn3: `"회사소개서 PDF"` → `/onketing-brochure.pdf` (download)
- note (mono): `"영업일 1일 내 회신 · 24시간 카카오 응답 · 즉시 다운로드"`

---

## 데이터 파일 색인

| 파일 | Export | 사용처 |
|------|--------|--------|
| `src/data/painPoints.ts` | `PAIN_POINTS` | `/` PainPoints |
| `src/data/professions.ts` | `PROFESSIONS` | `/` ProfessionRotator |
| `src/data/process.ts` | `PROCESS_STEPS`, `WORK_PROCESS` | `/` ProcessSteps, `/about` AboutHowWeWork, `/services/professional` ServiceProcess |
| `src/data/services.ts` | `SERVICE_CARDS`, `SERVICE_MATRIX`, `SERVICE_COMPARISON`, `PROFESSIONAL_PROOF/PAIN/PILLARS/CASES`, `BLOG_PROOF/PILLARS/CASES/PROCESS`, `BLOG_VS_ADS`, `SHORTFORM_PROOF/PILLARS/CASES/PROCESS/ACCUMULATION`, `BUBBLES`, `ENGAGEMENT_POLICY` | 각 서비스 페이지 |
| `src/data/about.ts` | `FOUNDING_STORY`, `SIGNATURE_POINTS`, `ABOUT_CASES`, `MESSAGE_PARAGRAPHS`, `DEPARTMENTS`, `COMPARISON_ROWS` | `/about` |
| `src/data/team.ts` | `TEAM_MEMBERS` | `/team` TeamMemberFeature |
| `src/data/disciplines.ts` | `CLIENT_DISCIPLINES` | `/about` AboutClientStrip, `/services/professional` |
| `src/data/regulation.ts` | `REGULATIONS`, `REGULATION_STATS`, `REGULATION_CASES`, `PLEDGES` | `/regulation` |
| `src/data/faq.ts` | `FAQ_ITEMS`, `FAQ_CATEGORIES` | `/faq` |
| `src/data/reviews.ts` | `REVIEWS` | `/` RealReviews |
| `src/data/whyUs.ts` | (comparison data) | `/` WhyUsBold |
| `src/config/site.ts` | `siteConfig` | 전 페이지 (연락처·메타·이름) |
