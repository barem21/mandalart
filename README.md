# MANDALART 계획표

## 📅 프로젝트 개발기간

2024.12.16 ~ 2025.01.08

## 👨‍👩‍👦‍👦 팀구성 및 역할

- FE : 김재범(팀장), 서동욱
- BE : 사공수기(팀장), 권혜지, 송은아, 임현찬, 장재웅

| 디폴트 정렬 | 왼쪽 정렬 | 오른쪽 정렬 | 가운데 정렬 |
| ----------- | :-------- | ----------: | :---------: |
| 🥕          | 🥕        |          🥕 |     🥕      |

## 📚 Overview

- 이 프로젝트는 사용자가 일정 관리, 할 일 목록, 메모 등의 기능을 제공하는 웹 애플리케이션입니다. Node.js와 React를 사용하여 개발되었습니다.

## ⚙️ Features

- 기능 1: 사용자가 할 일 목록을 추가, 수정, 삭제할 수 있습니다.
- 기능 2: 알림 기능을 통해 일정에 맞는 알림을 받습니다.
- 기능 3: 사용자 인터페이스가 직관적이며 PC환경에 맞는 디자인을 제공합니다.

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

프로젝트를 실행한 후, 애플리케이션 사용 방법에 대해 설명합니다.

1. 사용자 등록 : 애플리케이션을 처음 실행하면, 계정을 등록할 수 있는 화면이 표시됩니다.
2. 할 일 추가 : 화면 상단의 "할 일 추가" 버튼을 클릭하여 새로운 할 일을 작성할 수 있습니다.
3. 알림 설정 : 각 할 일에 알림 시간을 설정할 수 있습니다.

## 📦 Tech Stack

이 프로젝트에서 사용한 주요 기술들을 나열합니다.

- Frontend: React, Node.js
- Backend: -
- Database: -
- Authentication: JWT?

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
│  ├─ flower.png
│  ├─ flower_orig.png
│  ├─ main_swiper1.png
│  ├─ main_swiper2.png
│  ├─ main_swiper3.png
│  ├─ share_mandalart.png
│  ├─ share_mandalart2.png
│  ├─ share_mandalart3.png
│  ├─ share_mandalart4.png
│  ├─ share_mandalart5.png
│  ├─ share_mandalart6.png
│  ├─ share_mandalart7.png
│  ├─ share_mandalart8.png
│  ├─ share_mandalart9.png
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
│  ├─ assets
│  ├─ components
│  │  ├─ footer
│  │  │  └─ Footer.jsx
│  │  ├─ header
│  │  │  └─ Header.jsx
│  │  ├─ Layout.jsx
│  │  ├─ mandalart
│  │  │  └─ LoopContent.jsx
│  │  ├─ PopupLayout.jsx
│  │  ├─ ScrollTop.jsx
│  │  ├─ ShareSns.jsx
│  │  └─ subpageVisual
│  │     └─ SubpageVisual.jsx
│  ├─ contants
│  ├─ contexts
│  │  └─ UserInfoContext.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ About.jsx
│  │  ├─ Calendar.jsx
│  │  ├─ Index.jsx
│  │  ├─ mandalartt
│  │  │  ├─ gridLevel1_1.css
│  │  │  ├─ GridLevel1_Main.jsx
│  │  │  └─ GridLevel1_MainView.jsx
│  │  ├─ mandalarttt
│  │  │  ├─ gridLevel0.css
│  │  │  ├─ GridLevel0.jsx
│  │  │  ├─ GridLevel0View.jsx
│  │  │  └─ memo
│  │  ├─ member
│  │  │  ├─ ChangePwPage.jsx
│  │  │  ├─ EditPage.jsx
│  │  │  ├─ JoinEndPage.jsx
│  │  │  ├─ JoinPage.jsx
│  │  │  ├─ LoginPage.jsx
│  │  │  └─ LogoutPage.jsx
│  │  ├─ myplan
│  │  │  ├─ AddMandalart.jsx
│  │  │  ├─ EditMandalart.jsx
│  │  │  ├─ ListMandalart.jsx
│  │  │  ├─ ViewCalendar.jsx
│  │  │  └─ ViewMandalart.jsx
│  │  ├─ NotFoundPage.jsx
│  │  └─ share
│  │     ├─ AddMandalart.jsx
│  │     ├─ EditMandalart.jsx
│  │     ├─ ListMandalart.jsx
│  │     └─ ViewMandalart.jsx
│  └─ utils
└─ vite.config.js
```

# 📄 License

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

# 📞 Contact

프로젝트에 대해 질문이 있거나 도움이 필요하면, 아래의 이메일로 연락주세요.

이메일 : -

# 감사합니다.
