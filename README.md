# Jun.Dev

> Claymorphism 스타일의 개발자 포트폴리오

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

<br />

<p align="center">
  <a href="https://portfolio-juns-projects-549d4c8b.vercel.app/">배포 사이트</a> &nbsp;|&nbsp;
  <a href="https://linkedin.com/in/hyunjun-lee-7b0995285">LinkedIn</a> &nbsp;|&nbsp;
  <a href="mailto:jun9048@naver.com">Contact</a>
</p>

## 주요 기능

- **Claymorphism 디자인 시스템** — inset/outset box-shadow를 활용한 3D clay 효과의 카드, 버튼, 뱃지
- **한국어 / English** — next-intl 기반 쿠키 방식 다국어 지원
- **문의 폼** — Resend를 통한 이메일 전송
- **스크롤 스파이 내비게이션** — IntersectionObserver 기반 현재 섹션 하이라이트
- **다크 모드** — CSS 커스텀 프로퍼티 기반 테마 전환
- **반응형 레이아웃** — 모바일 ~ 데스크톱 대응
- **애니메이션 배경** — 시차를 둔 플로팅 그라데이션 블롭

## 기술 스택

| 분류 | 기술 | 선택 이유 |
|------|------|----------|
| 프레임워크 | Next.js 16 (App Router) | SSR, 파일 기반 라우팅, 서버 컴포넌트 |
| 언어 | TypeScript | 전체 코드베이스 타입 안정성 |
| 스타일링 | Tailwind CSS v4 | 유틸리티 퍼스트 + CSS-first 설정 |
| UI 패턴 | CVA + Radix UI Slot | 타입 안전한 변형 관리 및 컴포넌트 합성 |
| 유틸리티 | clsx + tailwind-merge | 조건부 클래스 병합 시 충돌 방지 |
| 다국어 | next-intl | 쿠키 기반 로케일 전환 (ko / en) |
| 이메일 | Resend | 문의 폼 이메일 발송 |
| 아이콘 | lucide-react | 트리셰이킹 가능한 일관된 아이콘 |
| 폰트 | Fredoka (next/font) | clay 디자인과 어울리는 둥근 타이포그래피 |
| 린팅 | ESLint 9 + Prettier | 코드 품질 및 포맷 일관성 |

## 디자인 시스템

### 색상 팔레트

| 토큰 | Hex | 역할 |
|------|-----|------|
| Sky | `#f0f9ff` | 밝은 배경 |
| Navy | `#0c4a6e` | 주요 텍스트, 어두운 표면 |
| Blue | `#38bdf8` | 강조 포인트 |
| Gold | `#f0c040` | CTA, 뱃지 |

### Claymorphism

밝은 inset 하이라이트(좌상단) + 어두운 inset(우하단) + 확산된 외부 그림자를 겹쳐 부드러운 3D clay 질감을 구현합니다:

```css
.clay-card-white {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow:
    inset 6px 6px 12px rgba(255, 255, 255, 0.9),
    inset -6px -6px 12px rgba(12, 74, 110, 0.12),
    12px 12px 24px rgba(12, 74, 110, 0.18);
  border-radius: 32px;
}
```

카드(`white` / `purple` / `yellow`), 버튼(`primary` / `secondary` / `yellow` / `blue`) 등 CVA 기반 변형 시스템으로 clay 미학을 일관되게 유지하면서 유연한 조합이 가능합니다.

## 프로젝트 구조

```
src/
  app/
    layout.tsx        # 루트 레이아웃 (Fredoka 폰트, 메타데이터, i18n)
    page.tsx          # 메인 페이지 (싱글 페이지 구성)
    globals.css       # 디자인 토큰, claymorphism, 애니메이션
  components/
    ui/               # shadcn/ui 기본 컴포넌트
    Clay*.tsx         # Claymorphism 컴포넌트 (Card, Button, Badge)
    Hero.tsx          # 히어로 섹션 (동적 경력 통계)
    Skills.tsx        # 기술 스택 필터 그리드 (Frontend / Libraries / Tools)
    Projects.tsx      # 프로젝트 카드 (GitHub 링크)
    Experiences.tsx   # 경력 타임라인
    Contact.tsx       # 이메일 문의 폼
    Navigation.tsx    # 스크롤 스파이 사이드바
  data/               # 정적 데이터 (skills, projects, experience)
  hooks/              # useScrollPast, useActiveSection
  actions/            # 서버 액션 (sendEmail, setLocaleCookie)
messages/
  ko.json             # 한국어 번역 (92개 키)
  en.json             # 영어 번역 (92개 키)
public/
  icons/              # 기술 스택 SVG/PNG 아이콘
  projects/           # 프로젝트 미리보기 이미지
```

## Author

**이현준 (Lee Hyun Jun)**

- GitHub — [@Jun-Data](https://github.com/Jun-Data)
- Email — [jun9048@naver.com](mailto:jun9048@naver.com)
- LinkedIn — [hyunjun-lee](https://linkedin.com/in/hyunjun-lee-7b0995285)
