# 🎬 Search Movie App

## 🙌 서비스 소개

원하는 영화를 검색하고, 나만의 즐겨찾기에 등록할 수 있는 앱입니다.

## 🚀 배포
https://grip-movie-app.netlify.app

## 🔧 기술 스택

- Typescript
- React, React router, Recoil
- react-intersection-observer
- axios
- lodash, storejs, classnames
- SCSS, CSS Modules

## ✨ 구현 기능

- Recoil 통한 상태관리
- Infinite Scroll 구현
- axios 로 API 통신 구현
- lodash 로 중복 데이터 제거
- classnames 로 조건부 스타일 정의
- eslint, prettier, stylelint 적용
- mediaQuery 로 반응형 웹 구현

## 💡 구현 상세

> Infinite Scroll 구현
- 현재 페이지가 전체 페이지보다 적을 경우, 스크롤 시 자동으로 다음 페이지를 불러옵니다.
- 새로운 검색어를 입력할 경우, scrollIntoView() 를 통해 리스트의 최상단으로 이동합니다.
- useParams 를 통해 현재 검색어와 페이지를 표시합니다.

> 즐겨 찾기 등록 및 상태 유지
- 리스트 목록의 영화를 클릭하면 즐겨찾기를 등록 및 해제할 수 있습니다.
- 즐겨찾기 상태는 로컬 스토리지에 저장되어 유지되며, 검색 시 즐겨찾기 등록 유무를 확인할 수 있습니다.
- Favorites 페이지에서 즐겨찾기 목록을 확인 및 삭제할 수 있습니다.

> 에러 핸들링
- 잘못된 경로로 진입하는 경우 404 페이지(NotFound)를 띄웁니다.
- lodash 를 통해 중복 데이터를 처리합니다.
- Poster 이미지가 존재하지 않을 경우, 대체 이미지를 보여줍니다.

## 📸 구현 결과

| 홈 |
|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/173862615-735be01e-0bea-42e8-8d74-529f9bc33bde.gif" width="600" />|

| 무한 스크롤 | 즐겨찾기 추가/해제 |
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/173859969-fe3c5180-157e-482e-bd4c-488288fc57c6.gif" width="300" />|<img src="https://user-images.githubusercontent.com/62868465/173860332-02cb7c77-9cdd-418c-90b4-33c3da953b8c.gif" width="300" />|