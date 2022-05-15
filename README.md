# 🎬 Movie App

### 1. 서비스 소개(Intro)

원하는 영화를 검색하고, 나만의 즐겨찾기에 등록할 수 있는 앱입니다.

</br>

### 2. 기능 소개(Features)

- Recoil 통한 상태관리
- Intersection Observer 통한 Infinite Scroll 구현
- axios 로 API 통신 구현
- lodash 로 중복 데이터 제거
- classnames 로 조건부 스타일 정의
- eslint, prettier, stylelint 적용

</br>

### 3. 사용 스택(Skills)

- Typescript, React, Recoil
- axios
- lodash, storejs, classnames
- SCSS, CSS Modules

</br>

### 4. 배포(Preview)

https://grip-movie-app.netlify.app

</br>

| 검색 페이지 | 즐겨찾기 페이지 |
|:---:|:---:|
| ![search](https://user-images.githubusercontent.com/62868465/168456931-f7a5850e-3d5d-493d-8b04-f7306be2f5c5.gif) | ![favorites](https://user-images.githubusercontent.com/62868465/168457046-6683fffd-f5f1-457f-8810-4004a73de79f.gif) |

</br>

### 5. 구현 상세
> Recoil 통한 상태관리

 - movieListState: 검색어가 바뀔 때 리스트를 reset 하고, 검색 후 스크롤 시 추가된 리스트를 concat 합니다
- favoriteListState : 즐겨찾기 추가 리스트를 로컬 스토리지에 저장하여 관리합니다
 - favoriteState : 즐겨찾기 상태를 관리하여, 검색 페이지에서 즐겨찾기 된 영화를 구분합니다
- totalResultsState : 해당 검색어의 현재 페이지와 총 페이지 수를 관리합니다
- currentInputState : 스크롤 시 검색어를 통해 API 요청을 시도합니다

> Intersection Observer 통한 Infinite Scroll 구현
- entry.isIntersecting 이 true 이고, 현재 페이지(totalResults.start)가 전체 페이지(totalResults.end)보다 작거나 같고, 현재 검색어(currentInput)가 존재할 때, observe 하게 됩니다
- 데이터를 받아올 때, setTotalResults({start: totalResults.start + 1}, ...)을 하게 되므로, 현재 페이지가 전체 페이지와 같을 때까지 요청 가능합니다

> 에러 핸들링
- 잘못된 경로로 진입하는 경우 404 페이지(NotFound)를 띄웁니다
- 이미지 태그에 onError 속성을 적용하여 잘못된 url일 경우, svg 이미지를 띄웁니다
- lodash 의 uniqBy 를 통해 받아온 데이터를 정제합니다
```javascript
setMovies(_.uniqBy(data.Search, (v) => v.imdbID))
```
- 받아온 데이터 Response === 'Ture' 가 아닐 경우, currentInput 을 reset 하고, totalResults 를 초기화합니다