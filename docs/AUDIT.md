# 온세상이마케팅이다 홈페이지 — 전체 감사 리포트

**작성일**: 2026-05-13  
**기준 정체성**: 12개 직군 (사용자 결정)  
**레퍼런스**: [adresult.kr](https://adresult.kr/) / [isanghan.co.kr](https://isanghan.co.kr/)  
**코드 변경 없음** — 발견 사항 + 개선안 정리 문서

---

## 1. Executive Summary

| 우선순위 | 건수 | 핵심 요약 |
|---------|------|-----------|
| **P0** (즉시 수정) | 6건 | 신뢰 깨지는 사실 오류·정합성 버그 |
| **P1** (영업 임팩트) | 10건 | 약속 없는 카피·CTA 구조 결함 |
| **P2** (IA·디자인) | 6건 | 섹션 과다·다크 섹션 위반·숫자 중복 |
| **P3** (콘텐츠 깊이) | 5건 | 실제 자산 부재·docs 오차 |

**가장 급한 3가지**

1. `RegulationPledge.tsx` 서명 **김도현 → 김태훈** 오타 수정 (방문자 즉각 발견)
2. `ceo-message.ts` · `AboutCEOTimeline.tsx` 의 **"6개 직군"** 표현을 12개로 통일
3. `kpi-showcase.ts` · `case-highlight.ts` · `case-grid.ts` · `service-cards.ts` 의 **PLACEHOLDER 수치**를 실데이터로 교체하거나 화면에서 제거

---

## 2. 레퍼런스 비교 인사이트

### adresult.kr 강점

| 그들이 잘하는 것 | 우리에게 적용 가능한 것 |
|----------------|----------------------|
| "광고비 650만원 절감 + 신규 환자 40% 증가" — 성과를 비용 절감과 환자 수 두 축으로 구체화 | 사례 확보 후 "광고비 X만원 절감 + 상담 Y건 증가" 형식으로 CaseHighlight 재작성 |
| 의사 인터뷰 영상 다수 — 텍스트 후기보다 실제 발화가 신뢰를 높임 | RealReviews의 placehold.co 썸네일을 실제 화면 캡처나 카카오 대화창으로 교체 |
| "현재 132개월째 함께" — 재계약율 90%를 기간으로 환산해 체감 전달 | "가장 오래된 클라이언트 X개월째 운영 중" 문장 1줄 추가 (데이터 있을 때) |
| FAQ 4문항 직접 답변 — 가격·기간·효과 솔직하게 공개 | ContactFAQ 3문항 현재도 양호. 가격 범위(최소·최대 기준) 한 줄 추가 권고 |

### isanghan.co.kr 강점

| 그들이 잘하는 것 | 우리에게 적용 가능한 것 |
|----------------|----------------------|
| "성의 없이 문의하는 분은 회신하지 않습니다" — 선택적 수주 포지셔닝이 역설적으로 신뢰 상승 | Engagement Policy(진행하지 않는 의뢰) 섹션이 있음 — 현재 숨어 있음. 메인이나 FAQ에 노출 강화 |
| "재계약율 97.6% — 수강생 7,082명 환불 0.7%" — 반증 가능한 역방향 수치 | "지금까지 진행 거절 N건" 등 역방향 수치 발굴 고려 |
| 대표 자체 베스트셀러 + 자사 사업 4개 — 대표 credential이 명확한 사실 | 대표 타임라인(중기부·G스타트업·캠퍼스타운)을 AboutHero 또는 AboutFoundingStory 서두에 더 명확히 노출 |
| "문의하지 마세요" 역설 CTA — 압박 없는 톤의 극단적 표현 | StickyCTA 초기 auto-open 제거 검토 (현재 페이지 진입 즉시 팝업 열림) |
| 영상·도표·인터뷰 중심 — 텍스트 대비 영상 비중이 훨씬 높음 | 팀 촬영 현장 사진은 있음. 실제 콘텐츠 제작 과정 GIF·영상 추가 고려 |

### 핵심 격차 요약

두 레퍼런스 모두 **"우리가 했던 일의 실제 결과물"** 을 전면에 내세운다. 온세상이마케팅이다는 현재 PLACEHOLDER 데이터를 노출 중이라, 레퍼런스 대비 신뢰의 물질적 증거(social proof)가 가장 약하다. 카피 톤은 오히려 절제되어 있어 차별점이다.

---

## 3. P0 — 신뢰가 깨지는 정합성 버그 (즉시 수정)

### P0-1. 서명 이름 오류

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/RegulationPledge.tsx`](../src/components/sections/RegulationPledge.tsx) line 29 |
| **현재 카피** | `대표 검수 — 김도현` |
| **문제** | 대표는 **김태훈**. 김도현은 퍼포먼스 마케터. 방문자가 About·Team 페이지와 교차하면 즉각 발견되는 오류. |
| **수정안** | `대표 검수 — 김태훈` |

---

### P0-2. "6개 직군" vs "12개 직군" 정체성 분열

12개 직군 정체성을 선택했으나 다음 파일에 여전히 "6개" 표현이 잔존한다.

| 파일 | verbatim | 비고 |
|------|----------|------|
| [`src/data/ceo-message.ts`](../src/data/ceo-message.ts) line 5 | `"그래서 온세상이마케팅이다를 새로 시작했습니다. 6개 직군의 광고 규정을 직접 검토하고…"` | 대표 인사말 본문 |
| [`src/components/sections/AboutCEOTimeline.tsx`](../src/components/sections/AboutCEOTimeline.tsx) line 32 | `"변호사·의사·한의사·수의사·노무사·세무사 6개 직군 광고 규정 검토 기반 콘텐츠 마케팅"` | 2026 타임라인 desc |

**추가 전제 조건**: [`src/data/regulations.ts`](../src/data/regulations.ts) 에서 회계사·약사·변리사·법무사·공인중개사·감정평가사 6개 직군 항목에 `TODO` 주석이 달려 있음. 12개 통일 전 이 6개 직군의 허용/금지 표현과 법령 조문 보강이 선행되어야 한다.

**데이터 레이어 이원화 주의**: [`src/data/professions.ts`](../src/data/professions.ts) 는 6개 슬러그(`lawyer/doctor/oriental/vet/labor/tax`)만 정의. 이는 `/services/professional` 직군 탭에서 6개만 보이는 원인. 12개 통일을 마케팅 카피에만 적용할지, `professions.ts`에 6개 슬러그를 추가할지는 별도 결정 필요.

---

### P0-3. PLACEHOLDER/TODO가 노출 중인 수치

아래 항목들은 코드 주석에 가상·추정치임을 명시하고 있지만, 실제 화면에는 사실인 것처럼 표시된다.

| 파일 | 주석 | 노출 데이터 |
|------|------|------------|
| [`src/data/kpi-showcase.ts`](../src/data/kpi-showcase.ts) line 1 | `// PLACEHOLDER: 아래 수치는 추정치입니다.` | 재계약율 90%+, 평균 월 상담 3배+, 광고 심의 통과 100%, 12개 직군 |
| [`src/data/case-highlight.ts`](../src/data/case-highlight.ts) line 1 | `// PLACEHOLDER: 아래 수치 및 사례는 가상입니다.` | K 법무법인 6배 증가 차트, 광고비 65% 절감 |
| [`src/data/case-grid.ts`](../src/data/case-grid.ts) line 1 | `// PLACEHOLDER: 아래 사례는 가상입니다.` | K법무법인·D정형외과·J한방병원·S세무사무소 4개 사례 전체 |
| [`src/data/cases.ts`](../src/data/cases.ts) line 3 | `// TODO: 실 데이터로 교체` | 강남 OO 법인·서울 OO 정형외과 등 4건 |
| [`src/data/service-cards.ts`](../src/data/service-cards.ts) line 21, 32 | `// PLACEHOLDER: 실데이터 교체 필요` | "평균 8주 내 검색 상위 노출", "첫 달 평균 조회수 3만+" |
| [`src/components/sections/TeamPrinciples.tsx`](../src/components/sections/TeamPrinciples.tsx) line 11, 28, 37 | `// TODO: 실제 수치 확인 — placeholder 측정 기준` (2건) | PRINCIPLES anecdote/meta 텍스트 |

**리스크**: 전문직 대표·원장은 수치를 꼼꼼히 검증하는 직군이다. "K 법무법인" 같은 익명 사례가 실제 클라이언트가 아닌 가상 데이터라는 게 드러나면 사이트 전체 신뢰가 무너진다. placehold.co 이미지도 노출 시 즉각 발각된다.

**임시 처리 옵션**: 실데이터를 확보하기 전까지는 해당 섹션을 조건부 렌더링으로 숨기거나(`CASES` 빈 배열 처리처럼), "사례는 준비되는 대로 공개합니다" EmptyState로 대체 가능.

---

### P0-4. "Since 2026" + "8년 누적" 시간 모순

| 항목 | 위치 | 표현 |
|------|------|------|
| Since 2026 표기 | [`src/components/sections/AESlogan.tsx`](../src/components/sections/AESlogan.tsx) line 17 | `온세상이마케팅이다 / Since 2026` |
| 8년 경력 | [`src/data/about-trust.ts`](../src/data/about-trust.ts) line 23 | caption `"8년간 누적"` (광고 규정 위반 0건 설명) |
| 8년 주장 | [`src/data/founding-story.ts`](../src/data/founding-story.ts) line 12 | `"8년간 직군 광고 규정을 직접 검토하면서 깨달았습니다."` |
| 8년 주장 | [`src/data/signature-points.ts`](../src/data/signature-points.ts) line 11 | `"광고 규정 위반 0건. 8년 누적 데이터입니다."` |
| 8년 주장 | [`src/components/sections/AboutSignature.tsx`](../src/components/sections/AboutSignature.tsx) | sub: `"8년간 전문직 광고 규정만 봤습니다."` |

**문제**: 회사 창립은 2026년인데 "8년 누적"을 내세우면, 대표 개인 경력 8년(2018~)과 회사 운영 기간을 혼동하게 된다. CEO 타임라인은 2023년 T사 입사부터 시작해 2026년 온세상이마케팅이다 정식 운영이므로, 방문자가 "2026년 창업인데 8년은 어떻게?"라는 의문을 가질 수 있다.

**수정 방향**: "8년간"을 "대표 개인의 전문직 마케팅 검토 경력 8년(2018~)"으로 구체적으로 설명하거나, 대표 개인 경력과 회사 운영 이력을 분리해 표기.

---

### P0-5. "200+" 의미 이중 정의

| 위치 | label | 의미 |
|------|-------|------|
| [`src/data/about-trust.ts`](../src/data/about-trust.ts) | `"누적 콘텐츠"` | 발행 콘텐츠 개수 |
| [`src/components/sections/RegulationHero.tsx`](../src/components/sections/RegulationHero.tsx) STATS[1] | `"검토 누적"` | 규정 검토 건수 |
| About Hero proof strip | `"누적 200+ 콘텐츠"` | 콘텐츠 수 |

같은 숫자 "200+"가 "콘텐츠 발행 수"인지 "규정 검토 건수"인지 페이지마다 바뀐다. 두 수치가 일치할 수도 있지만, 독자는 어느 의미인지 알 수 없다. 정의를 하나로 통일하거나 두 수치를 분리해 제시.

---

### P0-6. FinalCTA의 응답 약속 불일치

| 위치 | 표현 |
|------|------|
| [`src/components/sections/FinalCTA.tsx`](../src/components/sections/FinalCTA.tsx) line 18 | `"24시간 안으로 답변드립니다."` |
| ContactHero / CTACard / ContactForm 등 | `"영업일 1일 내 회신"` |

"24시간"과 "영업일 1일"은 주말·공휴일이 끼면 다른 약속이다. FinalCTA만 "24시간"이고 나머지는 "영업일 1일"이라 일관성 없음. 하나로 통일 필요.

---

## 4. P1 — 영업 임팩트 약화 카피

### P1-1. Hero — 서브 카피의 약속 부재

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/Hero.tsx`](../src/components/sections/Hero.tsx) line 62 |
| **현재** | `"고객이 먼저 찾아옵니다"` |
| **문제** | "고객이 먼저 찾아온다"는 결과의 선언이지, 왜·어떻게 가능한지 근거가 없다. 전문직 대표 입장에서 "어떻게?"라는 질문이 즉각 생긴다. |
| **보강안** | `"검색 상위 노출이 먼저입니다. 그 다음은 규정 검토입니다."` — 방법을 두 문장으로 예고 |

---

### P1-2. AboutHero — 8년 근거 없는 경력 주장

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/AboutHero.tsx`](../src/components/sections/AboutHero.tsx) line 114~117 |
| **현재** | `"대부분의 대행사는 변호사법·의료법·세무사법을 검토하지 않습니다.\n8년간 그걸 처음부터 당연한 일로 했습니다."` |
| **문제** | "대부분의 대행사는"은 검증 불가 일반화(SITE_GUIDE §3-4). "8년간"은 P0-4의 시간 모순 이슈. 두 문장 모두 자기 평가형. |
| **보강안** | `"변호사법 §23, 의료법 §56, 세무사법 §22의2. 발행 전 직접 검토합니다.\n지금까지 규정 위반 0건입니다."` — 법령 조항 인용으로 자신감 표현 |

---

### P1-3. AboutSignature — 자기평가형 헤드라인

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/AboutSignature.tsx`](../src/components/sections/AboutSignature.tsx) line 18 |
| **현재** | `"처음부터 달랐습니다."` (gradient-text 강조) |
| **문제** | SITE_GUIDE §3-1에서 "자기 평가형 형용사 금지"라 명시. "달랐습니다"는 사실이 아닌 자기 판단. 근거가 없으면 광고 문구로 읽힌다. |
| **보강안** | `"규정 검토가 먼저였습니다."` — 방법론을 사실로 진술 |

---

### P1-4. RegulationHero — 법적 위험을 내포한 헤드라인

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/RegulationHero.tsx`](../src/components/sections/RegulationHero.tsx) line 121 |
| **현재** | `"규정에 걸리지 않습니다."` |
| **문제** | 절대적 약속처럼 들린다. 광고 규정은 해석과 적용이 유동적이며, 행정처분·징계 주체는 각 협회와 기관이다. 온세상이마케팅이다가 "걸리지 않음"을 보장할 수 없는 영역. 향후 위반 사례 발생 시 법적 분쟁 소지. |
| **보강안** | `"발행 전 직접 검토합니다."` — 프로세스를 약속하되 결과를 보장하지 않음 |

---

### P1-5. KPI 설명의 캠페인 구호화

| 파일 | verbatim | 문제 |
|------|----------|------|
| [`src/data/kpi-showcase.ts`](../src/data/kpi-showcase.ts) | `"6개월 뒤, 당신의 전화가 지금보다 3배 더 울립니다."` | PLACEHOLDER 수치를 2인칭으로 약속. 보험·다단계 광고 문구와 유사. |
| [`src/data/kpi-showcase.ts`](../src/data/kpi-showcase.ts) | `"광고 규정 걱정은 저희가 합니다. 당신은 진료·상담에만 집중하세요."` | 캠페인 구호. SITE_GUIDE 톤과 어긋남. |
| [`src/data/stats.ts`](../src/data/stats.ts) | title: `"검색에서 먼저 발견됩니다"`, label: `"콘텐츠 검색 상위 노출 달성율"`, value: `"92%"` | "달성율"의 모수(전체 콘텐츠 중 몇 개?)가 없어 검증 불가. |

---

### P1-6. WhyUsBold — "수임 전환" 용어 문제

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/WhyUsBold.tsx`](../src/components/sections/WhyUsBold.tsx) line 30 |
| **현재** | `"수임 전환, 그것만 봅니다."` |
| **문제** | "수임"은 변호사·법무사 전용 용어. 의사는 "내원", 세무사는 "기장 의뢰", 노무사는 "자문 계약" 등 직군마다 다르다. 12개 직군을 대상으로 하면서 변호사 용어로만 표현하면 다른 직군 클라이언트에게 어색하게 들린다. |
| **보강안** | `"상담 신청 수, 그것만 봅니다."` — 직군 공통 용어 |

---

### P1-7. CTACard gradient 변형 — 버튼 없음

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/shared/CTACard.tsx`](../src/components/shared/CTACard.tsx) variant="gradient" |
| **사용 페이지** | `/about`, `/team`, `/contact`, `/services`, `/services/blog`, `/services/shortform` (6개 페이지 최하단) |
| **문제** | gradient 변형은 버튼을 렌더하지 않고 trust stats(1일/0원/없음)만 표시. 페이지를 다 읽은 사용자가 마지막 화면에서 취할 수 있는 액션이 없다. 카카오·이메일 링크도 없어 도달 후 이탈 구조. |
| **수정안** | gradient 변형에도 `/contact` 링크 버튼 1개 추가. 또는 `FinalCTA.tsx` 처럼 버튼 2개(마케팅 컨설팅 + 카카오) 구성. |

---

### P1-8. StickyCTA 진입 즉시 자동 팝업 열림

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/shared/StickyCTA.tsx`](../src/components/shared/StickyCTA.tsx) |
| **현재** | `const [open, setOpen] = useState(true)` — 페이지 진입 즉시 팝업 열림 |
| **문제** | 사용자가 아직 아무것도 읽지 않았는데 CTA 팝업이 튀어나온다. isanghan.co.kr이 "압박 없는 톤"을 차별점으로 삼는 것과 반대 방향. 전문직 대표는 압박을 가장 싫어한다(SITE_GUIDE §3-4). |
| **수정안** | `useState(false)` + 스크롤 30% 지점 또는 30초 이후에 자동 열림으로 변경. |

---

### P1-9. "광고비 더 태우기 전에" — About 중간 CTA 카피 과장

| 항목 | 내용 |
|------|------|
| **파일** | [`src/components/sections/AboutMidCTA.tsx`](../src/components/sections/AboutMidCTA.tsx) |
| **현재** | sub: `"광고비 더 태우기 전에, 위반 항목부터 점검하세요."` |
| **문제** | "태우다"는 광고비를 낭비한다는 부정적 표현. About 페이지 중간에서 방문자를 돈 낭비하는 사람으로 규정하는 어조. 공감형보다는 비난형으로 느껴질 수 있다. |
| **보강안** | `"광고 전, 규정부터 봅니다."` 또는 `"먼저 위반 항목을 확인해드립니다."` |

---

### P1-10. docs/04-pages.md ContactForm 설명 오류

| 항목 | 내용 |
|------|------|
| **파일** | [`docs/04-pages.md`](../docs/04-pages.md) (ContactForm 섹션) |
| **현재 docs 설명** | `submit behavior: mailto:{siteConfig.contact.email}` — 기본 메일 클라이언트 실행 |
| **실제 코드** | [`src/components/sections/ContactForm.tsx`](../src/components/sections/ContactForm.tsx) — `submitContact` 서버 액션 사용 (`src/app/actions/contact.ts`) |
| **상태** | 실제 코드가 더 좋다. docs가 구 버전이라 오해를 유발할 수 있음. docs/04-pages.md 해당 섹션 업데이트 필요. |

---

## 5. P2 — IA·디자인 톤

### P2-1. 메인 / About 페이지 섹션 수 과다

```
홈 (12섹션): Hero → PainPoints → ProfessionRotator → KPIShowcase →
             CaseHighlight → CaseGrid → WhyUsBold → ServiceCards →
             ProcessSteps → RealReviews → TeamPreview → FinalCTA

About (15섹션): AboutHero → AboutFoundingStory → AboutTrustCounter →
               AboutHowWeWork → AboutClientStrip → AESlogan → AboutSignature →
               AboutCaseHighlight → AboutCEOMessage → AboutCEOTimeline →
               AboutMission → OrgChart → Comparison → AboutMidCTA → CTACard
```

레퍼런스 두 곳 모두 8~10섹션 내외. About 15섹션은 스크롤 피로를 유발하고 각 섹션의 임팩트를 희석한다.

**통합·삭제 후보 (About 기준)**

| 섹션 | 상태 | 제안 |
|------|------|------|
| AboutMission | 짧은 텍스트 블록 (py-16) | AboutFoundingStory 마지막 문단으로 흡수 |
| AboutTrustCounter | KPIShowcase(홈)와 동일 수치 | 홈에서 이미 봤다면 중복. 홈 미방문자만 본다고 가정하면 유지 가능. 약화 고려. |
| AboutCaseHighlight | PLACEHOLDER 데이터 | 실데이터 확보 전까지 제거 |
| AboutMidCTA | dark 섹션 3번째 | FinalCTA(CTACard gradient)와 합칠 수 있음 |
| OrgChart | 조직도 시각화 | 신뢰 자산이지만 지금 팀 3명 + 외주 구조라 조직도가 빈약. 팀 확장 후 추가 권고 |

---

### P2-2. About 페이지 다크 섹션 4회 — SITE_GUIDE 원칙 위반

SITE_GUIDE §4.2: *"다크 섹션은 차별점 진술과 최종 CTA 두 곳에만 박힙니다."*

| 위치 | 컴포넌트 | 배경색 |
|------|---------|--------|
| About #1 | AboutHero | `bg-slate-900` |
| About #6 | AESlogan | `bg-[#0b1220]` |
| About #14 | AboutMidCTA | `bg-[#0a0a0a]` |
| About #15 | CTACard gradient | `gradient-brand` |

다크가 4번 반복되면 각 섹션의 앵커 효과가 사라진다. AESlogan이나 AboutMidCTA 중 하나를 라이트 배경으로 전환하거나 제거 권고.

---

### P2-3. 영문 eyebrow 35곳 이상

전문직 50대 대표·원장을 타겟으로 하면서 영문 eyebrow가 35곳 이상 사용된다. 레퍼런스 두 곳 모두 한국어 eyebrow를 사용한다.

**한글 전환 우선순위 높음** (클라이언트 직접 노출, 자주 보이는 섹션)

| 현재 영문 eyebrow | 권장 한글 |
|-----------------|----------|
| `Why Us` | `왜 온세상이마케팅이다인가` |
| `Why we started` | `창업 이유` 또는 `시작된 이유` |
| `Our Method` | `우리의 방법` |
| `Real Voices` | `실제 후기` |
| `Most asked` | `가장 많이 받는 질문` |
| `Pain Points` | `이런 경험 있으신가요` |
| `Our Principles` | `이렇게 일합니다` |
| `Engagement Policy` | `진행하지 않는 의뢰` |
| `Ad Regulation Compliance` | `광고 규정 준수` |
| `Studio` | `작업 공간` |

영문 eyebrow 자체가 나쁜 건 아니지만, 특히 About·Team 페이지처럼 친밀감을 쌓는 페이지에서는 한국어가 더 따뜻하게 읽힌다. 서비스 소개 페이지의 기술적 라벨(예: `Process`, `Coverage`)은 영문 유지도 무방.

---

### P2-4. KPI 수치 4중 노출

| 노출 위치 | 컴포넌트 | 동일 수치 |
|----------|---------|----------|
| 홈 섹션 4 | [`KPIShowcase`](../src/components/sections/KPIShowcase.tsx) | 재계약율 90%+, 심의 통과 100%, 12개 직군 |
| About 섹션 3 | [`AboutTrustCounter`](../src/components/sections/AboutTrustCounter.tsx) | 200+, 12개, 90%+, 0건 |
| 홈 Hero proof strip | [`Hero.tsx`](../src/components/sections/Hero.tsx) | 누적 200+ 콘텐츠, 재계약율 90%+, 의료광고 심의 통과 100% |
| About Hero proof strip | [`AboutHero.tsx`](../src/components/sections/AboutHero.tsx) | 전문직 12개 직군 · 광고 위반 0건 · 재계약율 90%+ |

같은 수치를 4번 보게 되면 "이 회사가 이 숫자 하나밖에 없나?"는 인상을 줄 수 있다. 페이지별로 강조 수치를 분산하거나, 실데이터 확보 후 수치를 다양화할 것을 권고.

---

### P2-5. 홈 CaseHighlight + CaseGrid 연속 배치

홈 페이지 섹션 5(CaseHighlight)와 6(CaseGrid)이 둘 다 사례 섹션이며, 둘 다 PLACEHOLDER 데이터다. 가상의 K 법무법인이 두 번 등장한다(CaseHighlight에서 주인공, CaseGrid에서 첫 번째 카드).

실데이터 확보 전까지는 두 섹션 중 하나만 노출하거나 EmptyState 처리 권고.

---

### P2-6. WhyUsBold의 다크 배경 위치

WhyUsBold는 `bg-[#0a0e2e]`로 메인 페이지의 다크 섹션이다. 현재 메인 흐름에서 FinalCTA 전 7번째 섹션에 위치한다. SITE_GUIDE는 메인에서 다크를 2회(WhyUsBold + FinalCTA)로 설계했고 이는 충족되지만, About처럼 다른 페이지에서 WhyUsBold가 재사용될 때 다크 과다 문제가 생긴다. `/services` 인덱스 페이지에서 WhyUsBold 재사용 시 확인 필요.

---

## 6. P3 — 콘텐츠 깊이 보강

### P3-1. 실제 신뢰 자산 입수 체크리스트

현재 `docs/SITE_GUIDE.md §10`에도 TODO 항목이 있지만, 구체적 입수 기준을 아래에 정리한다.

| 자산 | 설명 | 우선순위 |
|------|------|---------|
| 실제 사례 1건 (최강 성과) | 클라이언트명·수치·기간. 익명 처리 가능. adresult 스타일로 "광고비 X만원 + 상담 Y건" 형식 | 최우선 |
| 실제 후기 화면 캡처 | 카카오톡 대화 스크린샷 or 문자 캡처 (개인정보 마스킹 후). placehold.co 대체 | 최우선 |
| 실제 블로그 검색 상위 노출 화면 | 네이버 검색 결과 캡처. "K 법무법인 vs 그냥 법무법인" 보정 | 높음 |
| 클라이언트 로고 | 익명 실루엣도 OK. 섹터·규모 다양성 보여줌 | 중간 |
| 외부 인증·수상 이미지 | 중기부 예비창업 패키지, G스타트업 최우수 — 상장 또는 공식 레터 이미지 | 중간 |
| 실제 숏폼 영상 임베드 | YouTube 또는 인스타 릴스. 제작 퀄리티를 직접 보여줌 | 중간 |

---

### P3-2. 두 레퍼런스의 "솔직 FAQ" 패턴 적용

isanghan.co.kr은 "불만족 환불 비율 0.7%"처럼 **역방향으로 솔직한 수치**를 활용한다. adresult.kr은 FAQ에서 "비용은 마케팅 팀장 1명 인건비 수준"이라고 범위를 제시한다.

현재 FAQ의 비용 답변: *"직군·목표·운영 채널 수에 따라 상담 후 개별 제안서로 안내드립니다."* — 좋은 톤이지만 범위가 전혀 없어 대형 에이전시와 구별되지 않는다.

**권고**: 비용 FAQ에 "월 최소 X만원~최대 Y만원(채널·직군 기준)"처럼 범위 1줄만 추가해도 신뢰가 올라간다.

---

### P3-3. StickyCTA 초기 열림 UX 재검토

`src/components/shared/StickyCTA.tsx`: `useState(true)`로 초기 팝업 열림. 전문직 대표 타겟에게 압박 없는 톤을 내세우는 사이트에서 진입 즉시 팝업이 뜨는 건 메시지와 반대 방향이다.

P1-8에서도 언급했으나, P3 단계에서 스크롤 깊이(30~50%)나 체류 시간(30초)을 트리거로 바꾸는 것을 권고한다.

---

### P3-4. 대표 크레덴셜 노출 강화

`ceo-message.ts`에 중기부 예비창업 패키지 우수 기업, G스타트업 최우수 선정이 언급되지만 텍스트 단락 속에 묻혀 있다. isanghan.co.kr처럼 배지·스탬프 형태로 About Hero 아래에 별도로 노출하면 신뢰가 높아진다.

---

### P3-5. docs/04-pages.md ContactForm 섹션 업데이트

P1-10에서 언급한 것과 같이, `docs/04-pages.md`의 ContactForm 제출 방식 설명이 `mailto:` 기반으로 작성되어 있지만 실제 코드는 `submitContact` 서버 액션을 사용한다. 문서 동기화 필요.

---

## 7. 부록

### A. 6개 직군 → 12개 직군 통일 시 수정 파일 인벤토리

| 파일 | 현재 표현 | 수정 내용 |
|------|----------|----------|
| [`src/data/ceo-message.ts`](../src/data/ceo-message.ts) line 5 | `"6개 직군의 광고 규정을"` | `"12개 직군의 광고 규정을"` |
| [`src/components/sections/AboutCEOTimeline.tsx`](../src/components/sections/AboutCEOTimeline.tsx) line 32 | `"변호사·의사·한의사·수의사·노무사·세무사 6개 직군"` | `"12개 직군"` (리스트 생략 또는 6+6 구조) |
| [`src/data/regulations.ts`](../src/data/regulations.ts) | 회계사·약사·변리사·법무사·공인중개사·감정평가사 TODO 항목 | 허용/금지 표현, 법령 조문 보강 |
| [`src/data/professions.ts`](../src/data/professions.ts) | 6개 슬러그만 있음 | 6개 추가 or 12개 카피 전용 파일 분리 결정 |
| [`src/app/contact/page.tsx`](../src/app/contact/page.tsx) ContactForm | `PROFESSION_OPTIONS` 7개(6+기타) | 12개 직군 + 기타로 확장 |
| [`src/config/site.ts`](../src/config/site.ts) description | `"변호사·의사·한의사·수의사·노무사 등 전문직"` | 12개 명시 또는 대표 직군 열거 방식 유지 |

---

### B. PLACEHOLDER / TODO 위치 전수

| 파일 | 주석 유형 | 영향 범위 |
|------|---------|---------|
| [`src/data/kpi-showcase.ts`](../src/data/kpi-showcase.ts) | PLACEHOLDER | 홈 KPIShowcase — 재계약율·상담증가·심의통과율 |
| [`src/data/case-highlight.ts`](../src/data/case-highlight.ts) | PLACEHOLDER | 홈·About CaseHighlight — K 법무법인 전체 |
| [`src/data/case-grid.ts`](../src/data/case-grid.ts) | PLACEHOLDER | 홈 CaseGrid — 4개 사례 전체 |
| [`src/data/cases.ts`](../src/data/cases.ts) | TODO | 홈·About 사례 카드 4건 |
| [`src/data/service-cards.ts`](../src/data/service-cards.ts) | PLACEHOLDER | 홈 ServiceCards — 블로그 kpi 배지·숏폼 kpi 배지 |
| [`src/components/sections/TeamPrinciples.tsx`](../src/components/sections/TeamPrinciples.tsx) | TODO (×2) | 팀 페이지 principles anecdote |
| [`src/data/regulations.ts`](../src/data/regulations.ts) | TODO (×6 직군) | /regulation 직군 탭 6개 |
| [`src/data/real-reviews.ts`](../src/data/real-reviews.ts) | — | placehold.co 이미지 3개 (thumb 타입) |
| [`src/components/sections/AboutFoundingStory.tsx`](../src/components/sections/AboutFoundingStory.tsx) | `TEAM_PHOTO_READY = false` | About 팀 사진 placeholder |
| [`src/components/sections/AboutHero.tsx`](../src/components/sections/AboutHero.tsx) | `HERO_PHOTO_READY = false` | About Hero 사무실 사진 placeholder |
| [`src/components/sections/AboutMidCTA.tsx`](../src/components/sections/AboutMidCTA.tsx) | `DESK_PHOTO_READY` (유추) | About MidCTA 배경 |

---

### C. SITE_GUIDE 톤 가이드 5문항 셀프 체크 (섹션별)

SITE_GUIDE §3-5 기준: 5문항 모두 Yes여야 통과.

| 섹션 | ① 추상형용사 0 | ② 한 문장 한 의미 | ③ 단정형 마침 | ④ 연결어 최소화 | ⑤ 검증 가능 고유명사 | 통과 |
|------|------------|---------------|------------|--------------|-----------------|------|
| Hero (eyebrow+h1+sub) | ✅ | ✅ | ✅ | ✅ | ✅ 12개 직군·위반 0건 | **통과** |
| PainPoints | ✅ | ✅ | ✅ | ✅ | ❌ 없음 | **조건부** |
| KPIShowcase descriptions | ❌ "3배" 약속형 | ❌ | ❌ | ❌ | ❌ 추정치 | **실패** |
| AboutHero sub | ❌ "대부분의 대행사" | ✅ | ✅ | ✅ | ❌ "8년" 불명확 | **실패** |
| AboutSignature h2 | ❌ "달랐습니다" | ✅ | ✅ | ✅ | ❌ | **실패** |
| AboutMission body | ✅ | ❌ "규정을 통과한 콘텐츠로, 의뢰인이 먼저 찾아오는 구조를 만듭니다" (두 의미) | ✅ | ✅ | ✅ 12개 직군 | **조건부** |
| RegulationHero h1 | ✅ | ✅ | ✅ | ✅ | ✅ | **통과** ※ 법적 리스크는 별도 |
| WhyUsBold sub | ✅ | ✅ | ✅ | ✅ | ❌ "수임 전환" 용어 범위 문제 | **조건부** |
| FinalCTA sub | ✅ | ✅ | ✅ | ✅ | ❌ "24시간" vs "영업일 1일" 불일치 | **조건부** |
| Comparison rows | ✅ | ✅ | ✅ | ✅ | ✅ 직군별 규정명 | **통과** |
| FAQ answers | ✅ | ✅ | ✅ | ✅ | ✅ | **통과** |

**요약**: 11개 섹션 중 완전 통과 4개, 조건부 4개, 실패 3개.  
KPIShowcase description 3개, AboutHero sub, AboutSignature h2가 개선 우선순위 상위.

---

### D. 컴포넌트·데이터 파일 빠른 참조

| 증상 | 수정할 파일 |
|------|-----------|
| Hero 카피 변경 | `src/components/sections/Hero.tsx` (하드코딩) |
| 재계약율·직군 수 수치 변경 | `src/data/kpi-showcase.ts`, `src/data/about-trust.ts`, `src/data/stats.ts` |
| 대표 인사말 6→12 직군 수정 | `src/data/ceo-message.ts` |
| CEO 타임라인 6→12 직군 수정 | `src/components/sections/AboutCEOTimeline.tsx` |
| RegulationPledge 서명 수정 | `src/components/sections/RegulationPledge.tsx` line 29 |
| 사례 데이터 실제 교체 | `src/data/case-highlight.ts`, `src/data/case-grid.ts`, `src/data/cases.ts` |
| 서비스 카드 KPI 배지 수정 | `src/data/service-cards.ts` |
| 24시간 → 영업일 1일 통일 | `src/components/sections/FinalCTA.tsx` line 18 |
| StickyCTA 자동 열림 제거 | `src/components/shared/StickyCTA.tsx` |
| CTACard gradient 버튼 추가 | `src/components/shared/CTACard.tsx` |

---

*이 문서는 [`docs/SITE_GUIDE.md`](./SITE_GUIDE.md) 와 [`docs/04-pages.md`](./04-pages.md) 를 기준으로 작성됐습니다. 코드 수정 시 SITE_GUIDE 톤 가이드 §3-5 체크리스트를 통과한 후 발행합니다.*
