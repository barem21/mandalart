# MANDALART 계획표

## 📅 프로젝트 개발기간

2024.12.16 ~ 2025.01.08

## 👨‍👩‍👦‍👦 팀구성 및 역할

- FE : 김재범(팀장), 서동욱
- BE : 사공수기(팀장), 권혜지, 송은아, 임현찬, 장재웅

| FE 김재범                                                                                   | FE 서동욱                                        |
| ------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| 디자인, 메인페이지, 사이트 소개, 회원기능 전반, 나의 만다라트, 공유 만다라트, 계획표 캘린더 | 만다라트 계획표 CRUD, 종료일이 임박한 할 일 알림 |

## 📚 Overview

- 이 프로젝트는 사용자가 만다라트 계획표 형태로 일정 관리, 할 일 목록, 달성율에 따른 차트 확인, 공유 등의 기능을 제공하는 웹 애플리케이션으로 Node.js와 React를 사용하여 개발되었습니다.

## ⚙️ Features

- 기능 1 : 사용자가 할 일을 추가, 수정, 삭제할 수 있습니다.
- 기능 2 : 알림 기능을 통해 종료일 일정에 맞는 알림을 제공받습니다.
- 기능 3 : 작성한 계획표를 서로 공유하여 사용자 간의 서비스 이해도를 높일 수 있습니다.
- 기능 4 : 공유된 계획표는 댓글 기능을 통해서 사용자 간의 의견교환이 가능합니다.
- 기능 5 : 할 일의 시작일/종료일이 설정되어 있을 경우 캘린더로 확인도 가능합니다.
- 기능 6 : 본인의 만다라트 세부목표(8가지) 데이터를 그래프화하여 확인할 수 있습니다.
- 기능 7 : 사용자 인터페이스가 직관적이며, PC환경에 맞는 디자인을 제공합니다.

## 🛠️ Installation

이 프로젝트를 로컬 환경에 설치하는 방법을 안내합니다.

### 1. 레포지토리 클론 (현재 폴더)

```
git clone https://github.com/barem21/todo_project.git .
```

### 2. 의존선 설치 :

```
cd project-name
npm install
```

### 3. 서버 실행:

```
npm run dev
```

위의 단계들을 완료한 후, localhost:5173에서 애플리케이션을 확인할 수 있습니다.

## 🎯 Usage

프로젝트를 실행한 후, 웹 애플리케이션 사용 방법에 대해 설명합니다.

1. 사용자 등록 : 웹애플리케이션을 실행하여 회원가입을 통해 계정을 등록할 수 있는 화면으로 이동됩니다.
2. 할 일 추가 : 내 만다라트 메뉴를 통해 계획표를 생성한 후 주 목표와 세부 목표, 할 일을 등록할 수 있습니다.
3. 시작일/종료일 설정 : 각 할 일에 시작일/종료일을 설정하시면 계획표 캘린더를 통해서도 할일을 확인할 수 있으며, 종료일에 가까워질 경우 별도의 알림 팝업을 제공합니다.
4. 달성여부 설정 : 각 할 일에 대해서 달성여부가 완료 설정될 경우 통계 처리가 진행되어 8개의 세부 목표에 대한 달성률을 원형차트 형태로 제공합니다.

## 📦 Tech Stack

이 프로젝트에서 사용한 주요 기술들을 나열합니다.

- Frontend: React, Node.js
- Backend: -
- Database: -

## 💻 Contributing

프로젝트에 기여하려면 다음 단계를 따르세요.

### 1. Fork 레포지토리

```
git fetch
git pull origin main
```

### 2. 새로운 브랜치 생성

```
git branch 브랜치명
git switch 브랜치명
```

### 3. 변경 사항 커밋

```
git commit
```

### 4. 변경 사항 푸시

```
git push origin 브랜치명
```

### 5. 깃허브 New Pull Request

### 6. 폴더/파일 구조

```

manda
├─ .gitignore
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ about_mandalart.png
│  ├─ favicon.png
│  ├─ flower.png
│  ├─ main_swiper1.jpg
│  ├─ main_swiper2.jpg
│  ├─ main_swiper3.jpg
│  ├─ no_image.png
│  ├─ top_about.png
│  ├─ top_member.png
│  └─ top_member_orig.png
├─ README.md
├─ src
│  ├─ apis
│  │  ├─ grid.js
│  │  ├─ member.js
│  │  ├─ myplan.js
│  │  └─ share.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ footer
│  │  │  └─ Footer.jsx
│  │  ├─ header
│  │  │  └─ Header.jsx
│  │  ├─ Layout.jsx
│  │  ├─ Loading.jsx
│  │  ├─ mandalart
│  │  │  ├─ LoopContent.jsx
│  │  │  ├─ Mandalart.jsx
│  │  │  ├─ Mandalart.module.css
│  │  │  ├─ MandalartSingle.jsx
│  │  │  └─ MandalartSingle.module.css
│  │  ├─ PopupLayout.jsx
│  │  ├─ ScrollTop.jsx
│  │  ├─ ShareSns.jsx
│  │  └─ subpageVisual
│  │     └─ SubpageVisual.jsx
│  ├─ contexts
│  │  └─ UserInfoContext.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ About.jsx
│     ├─ Calendar.jsx
│     ├─ Index.jsx
│     ├─ mandalart
│     │  ├─ gridLevel0.css
│     │  ├─ GridLevel0.jsx
│     │  ├─ gridLevel1_1.css
│     │  ├─ GridLevel1_Main.jsx
│     │  └─ memo.jsx
│     ├─ mandalartview
│     │  ├─ GridLevel0View.jsx
│     │  └─ GridLevel1_MainView.jsx
│     ├─ member
│     │  ├─ ChangePwPage.jsx
│     │  ├─ EditPage.jsx
│     │  ├─ JoinEndPage.jsx
│     │  ├─ JoinPage.jsx
│     │  ├─ LoginPage.jsx
│     │  └─ LogoutPage.jsx
│     ├─ myplan
│     │  ├─ AddMandalart.jsx
│     │  ├─ EditMandalart.jsx
│     │  ├─ ListMandalart.jsx
│     │  ├─ ViewCalendar.jsx
│     │  └─ ViewMandalart.jsx
│     ├─ NotFoundPage.jsx
│     └─ share
│        ├─ AddMandalart.jsx
│        ├─ EditMandalart.jsx
│        ├─ ListMandalart.jsx
│        └─ ViewMandalart.jsx
└─ vite.config.js
```

# 📄 License

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

# 📞 Contact

프로젝트에 대해 질문이 있거나 도움이 필요하면, 아래의 이메일로 연락주세요.

이메일 : barem210@gmail.com

# 감사합니다.
