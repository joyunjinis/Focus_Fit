# 🎯 Focus Fit

> 집중력 향상을 위한 Todo 리스트 + 회고 일기 웹 앱

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?style=flat-square)

---

## 📌 프로젝트 소개

**Focus Fit**은 하루의 집중을 돕고, 하루를 마무리하는 회고 일기를 작성할 수 있는 웹 앱입니다.

- ⏱️ 포모도로 타이머로 집중 시간 관리
- ✅ Todo 리스트로 할 일 관리
- 📝 날짜별 회고 일기 작성 및 저장 
---

## 🛠️ 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| UI 컴포넌트 | shadcn/ui |
| 아이콘 | lucide-react |
| 저장소 | localStorage |
| 알림 | Sonner |

---

## 📁 폴더 구조
```
app/
├── page.tsx
├── main/
│   └── page.tsx
└── diary/
    └── page.tsx

components/
├── main/
│   ├── Timer.tsx
│   ├── TodoInput.tsx
│   ├── TodoList.tsx
│   └── DateDisplay.tsx
└── diary/
    ├── DiaryCard.tsx
    ├── DateNavigator.tsx
    ├── DiaryTextArea.tsx
    └── FocusTime.tsx
```

---

## 🚀 시작하기
```bash
# 저장소 클론
git clone https://github.com/joyunjinis/Focus_Fit.git

# 디렉토리 이동
cd Focus_Fit

# 패키지 설치
yarn install

# 개발 서버 실행
yarn dev
```

브라우저에서 http://localhost:3000 접속
배포한 주소: https://focus-fit-five.vercel.app

---

## 📱 주요 화면

### 메인 페이지 (Todo + 타이머)
- 포모도로 타이머 (25분 카운트다운)
- Todo 추가 / 완료 / 삭제
- 회고 일기 페이지로 이동
<img width="1582" height="945" alt="image" src="https://github.com/user-attachments/assets/842ffd68-3564-4a0e-b6bf-90bf118cb438" />

<img width="1582" height="945" alt="image" src="https://github.com/user-attachments/assets/c4ac6d59-f139-4076-82aa-4acbdb2b74c3" />



### 회고 일기 페이지
- ← → 버튼으로 날짜 이동
- 날짜별 일기 작성
- 오늘의 집중 시간 입력
- localStorage에 자동 저장
<img width="1582" height="945" alt="image" src="https://github.com/user-attachments/assets/970db4db-66f1-423d-9665-d9e523f8acfa" />

---

## 💾 데이터 저장 구조

localStorage에 날짜를 key로 저장합니다.
```
localStorage
├── "diary-2026.03.10" : { content: "...", focusTime: "3" }
├── "diary-2026.03.11" : { content: "...", focusTime: "5" }
```
