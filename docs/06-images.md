# 06 — 이미지 자산 맵 (Images & Assets)

이 문서는 **현재 코드 기준** 정적 이미지·미디어 자산이 어느 페이지의 어느 섹션에서 쓰이는지 정리한 단일 출처(authoritative)다.
페이지 구성이 리디자인되면서 `docs/03-components.md`·`docs/04-pages.md`의 일부 섹션 목록은 과거 버전이므로, **이미지 사용 현황은 이 문서를 기준으로 본다.**

> 자산 추가·교체 시 이 표를 함께 갱신한다.

---

## 1. 자산 인벤토리 (`public/`)

### 1-1. 루트 (브랜드·메타·Hero)
| 파일 | 용도 | 참조 위치 |
|------|------|-----------|
| `header-logo.png` | 헤더 로고 | `components/shared/Logo.tsx` |
| `og-image.png` | OG/트위터 카드 + opengraph-image 합성 | `config/site.ts`, `app/opengraph-image.tsx` |
| `icon-192.png` / `icon-512.png` | PWA·파비콘·JSON-LD logo | `app/layout.tsx`, `app/manifest.ts`, `app/about/page.tsx` |
| `apple-icon.png` | iOS 홈스크린 아이콘 | `app/layout.tsx` |
| `hero-bg.webm` / `hero-bg.mp4` / `hero-bg-poster.jpg` | 홈 Hero 배경 영상 + 포스터 | `components/sections/Hero.tsx` |
| `onketing-brochure.pdf` | 회사소개서 다운로드 | `components/layout/Header.tsx`, `components/sections/AboutMidCTA.tsx` |

### 1-2. `public/images/`
| 폴더 | 파일 | 내용 |
|------|------|------|
| `onsite/` | `onsite-1~4.jpg` | 촬영·인터뷰 **현장** 사진 (원본: 사용자 제공 `현장1~4`) |
| `team/` | `video-01~05,07.jpg`, `edit-01~03.jpg` | 촬영팀·편집팀 현장 사진 |
| `reviews/` | `review-01~16.jpg` | 실제 고객 후기(01~08) + 업무 카톡(09~16) 스크린샷 |
| `shortform/` | `shortform-3.png` | 변호사 노동법 릴스 썸네일 1편 (병원 릴스 1·2·4·5·6은 2차 사용 불가로 삭제 — 조회수 카드로 대체) |
| `results/` | `reel-01~04.png` | About 성과 릴스 캡처(조회수 표기용) |
| `blog-examples/` | `blog-01~02.png` | 블로그 결과물 예시 캡처 |

> **참고**: `team/video-03.jpg` = `onsite/onsite-2.jpg`, `team/video-04.jpg` = `onsite/onsite-3.jpg` 는 동일 원본이다. TeamScene은 현장 컷(onsite)을, TeamCrews는 팀 컷(team/video-*)을 각각 사용한다.

---

## 2. 페이지 · 섹션 · 이미지 매핑

### `/` 홈
| 섹션 컴포넌트 | 사용 이미지 |
|---|---|
| `Hero` | `hero-bg.webm`, `hero-bg.mp4`, `hero-bg-poster.jpg` |
| `RealReviews` | `images/reviews/review-01~16.jpg` *(가로 마퀴, 세로 컷 단일 / 짧은 컷 위아래 스택)* |
| `OneTeamScene` | `images/onsite/onsite-1~4.jpg` *(벤토 모자이크)* |
| PainPoints / ProfessionRotator / KPIShowcase / CaseHighlight / ServiceCards / ProcessSteps / FinalCTA | (이미지 없음 — 텍스트·아이콘·차트) |

### `/about` 회사소개
| 섹션 | 사용 이미지 |
|---|---|
| `AboutHero` | `images/about/office-main.jpg` ⚠️ *(미존재 placeholder — `HERO_PHOTO_READY=false`)* |
| `AboutResults` | `images/results/reel-01~04.png` |
| AboutFoundingStory / AboutWhyPossible / AboutConsequences / OrgChart | (이미지 없음) |

### `/team` 팀
| 섹션 | 사용 이미지 |
|---|---|
| `TeamHero` | `team/video-01,02,05,07.jpg`, `team/edit-01,02.jpg` *(포토 모자이크)* |
| `TeamCrews` | 대본팀 `video-01,02,03` · 영상팀 `video-04,05,07` · 편집팀 `edit-01,02,03` (via `data/team-photos.ts`) |
| `TeamScene` | `onsite/onsite-1~4.jpg` + `team/video-02,05,07.jpg` + `team/edit-03.jpg` *(중복·유사 제외 고유 8장 균일 그리드)* |
| TeamProblemSolution | (이미지 없음) |

### `/services/blog` 블로그 마케팅
| 섹션 | 사용 이미지 |
|---|---|
| `BlogHomepageSection` | `images/blog-examples/blog-01.png`, `blog-02.png` |
| 그 외(BlogHero, BlogVsAds, BlogCaseChart, ServiceProofStrip, ServiceWhatWeDo, ServiceProcess, BlogEngagementPolicy, BlogFinalCTA) | (이미지 없음) |

### `/services/shortform` 숏폼 마케팅
| 섹션 | 사용 이미지 |
|---|---|
| `ShortformPortfolio` | `images/shortform/shortform-3.png` (변호사 릴스 1편, 클릭 시 인스타그램 이동) + 병원 5곳 익명 조회수 카드(이미지 없음) |
| 그 외(ShortformHero, ShortformPain, ServiceWhatWeDo, ShortformAccumulation, ServiceProcess, ShortformFinalCTA) | (이미지 없음) |

#### ShortformPortfolio 구성
병원 릴스 5편(뷰웰·오드·카인드글로벌·리뉴얼·포레)은 2차 사용 불가로 **이미지·링크를 모두 삭제**하고, 조회수만 익명 카드로 노출한다. 카드 데이터는 `components/sections/ShortformPortfolio.tsx`의 `RESULTS` 배열에서 수정.

| 카드(익명) | 조회수 |
|---|---|
| P 성형외과 | 100만 |
| R 의원 | 90만 |
| O 의원 | 72만 |
| B 의원 | 70만 |
| K 의원 | 17만 |

남은 릴스 썸네일 1편:
| 썸네일 | 인스타그램 URL |
|---|---|
| `shortform-3.png` (변호사 노동법) | https://www.instagram.com/reel/DYCAsVXR0He/ |

### `/regulation` · `/services/professional` (공통 `AboutMidCTA`)
| 섹션 | 사용 이미지 |
|---|---|
| `AboutMidCTA` | `images/about/desk.jpg` ⚠️ *(미존재 placeholder — `DESK_PHOTO_READY=false`)*, `onketing-brochure.pdf` |
| 그 외 Regulation*/Professional* 섹션 | (이미지 없음 — 표·차트·아이콘) |

### `/contact`, `/faq`, `/services`(인덱스)
- 이미지 사용 없음 (텍스트·폼·표·아이콘 중심)

---

## 3. 미존재 placeholder (준비 시 추가)

아래 두 경로는 코드에서 참조하지만 파일이 없고, `*_READY` 플래그가 `false`라 **렌더되지 않는다**. 사진 준비 후 파일을 넣고 플래그를 `true`로 바꾼다.

| 경로 | 플래그 | 위치 |
|------|--------|------|
| `public/images/about/office-main.jpg` | `HERO_PHOTO_READY` | `components/sections/AboutHero.tsx` |
| `public/images/about/desk.jpg` | `DESK_PHOTO_READY` | `components/sections/AboutMidCTA.tsx` |

---

## 4. 교체·추가 가이드

- **후기 추가**: `public/images/reviews/`에 `review-NN.jpg` 추가 후 `src/data/review-images.ts`의 `REVIEW_UNITS`에 항목 추가 (세로 긴 컷 → `single`, 짧은 컷 → `stack`).
- **릴스 조회수 카드 수정**: `components/sections/ShortformPortfolio.tsx`의 `RESULTS` 배열에서 이니셜·조회수 수정. 남은 변호사 릴스 썸네일·링크는 같은 파일 `LAWYER_REEL` 상수에서 수정.
- **현장 사진**: `public/images/onsite/`에 추가 후 `OneTeamScene.tsx`(홈)·`TeamScene.tsx`(팀)·`data/team-photos.ts`(TeamCrews)에서 참조.
- 한글 파일명은 URL 인코딩 이슈가 있어 **ASCII 파일명**으로 복사해 사용한다.
