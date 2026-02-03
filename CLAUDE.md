# 개인 웹사이트(포트폴리오)

## 프로젝트 개요

Claymorphism 스타일의 개발자 포트폴리오 웹사이트

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Custom Properties
- **UI Pattern**: CVA (class-variance-authority) + Radix UI Slot
- **Font**: Fredoka (next/font/google)
- **Icons**: lucide-react

## 프로젝트 구조

```
src/
  app/
    layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
    page.tsx            # 메인 페이지
    globals.css         # 디자인 토큰, claymorphism, 애니메이션
  components/
    ui/                 # shadcn/ui 컴포넌트 (수정 금지)
    ClayCard.tsx        # Clay 카드 (white/purple/yellow)
    ClayButton.tsx      # Clay 버튼 (primary/secondary/accent)
    ClayBadge.tsx       # Clay 뱃지
  data/                 # 정적 데이터 (skills, projects, experience)
  hooks/                # 커스텀 훅 (scroll spy 등)
  lib/
    utils.ts            # cn() 유틸리티
reference/              # AI 생성 랜딩 페이지 (구현 참고용)
```

## 디자인 시스템

- **색상**: sky(#6CABDD), navy(#1C2C5B), gold(#DAA520) + foreground 쌍
- **Claymorphism**: inset/outset box-shadow로 3D clay 효과
- **다크모드**: CSS 변수 기반 (.dark 클래스)

## 컨벤션

- 컴포넌트 파일명: PascalCase (ClayCard.tsx)
- shadcn 컴포넌트: ui/ 폴더, 직접 수정하지 않음
- 커스텀 컴포넌트: components/ 루트에 배치
- 데이터/UI 분리: data/ 폴더에 타입 + 배열 export

### Git 규칙

#### Gitmoji

- ✨ 기능 추가 | 🐛 버그 수정 | 💄 UI/스타일 | 🔧 설정 수정
- ♻️ 리팩토링 | 📝 문서 수정 | 🔥 코드 삭제 | 🚀 배포/성능

#### 커밋 수행 절차

1. `git branch` 및 `git status` 확인
2. **main 브랜치 절대 금지** — main이면 작업 중단 후 사용자에게 알림
3. 현재 브랜치명이 작업 내용과 불일치 시 → 알맞은 브랜치명으로 변경 제안
4. `git log -5 --oneline`으로 이전 커밋 메시지 패턴 분석
5. `git add .` → `git commit`
6. 인자에 "push" 또는 "푸시"가 포함되면 `git push`도 수행

#### 커밋 메시지 규칙

- 한글 사용 가능
- bullet point 본문 허용
- Co-Authored-By 제외
