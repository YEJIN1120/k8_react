# 📝 React 실습 - k8_react

## 📌 소개

이 저장소는 Create React App 기반으로 시작된 React 학습용 실습 저장소입니다.
React의 컴포넌트, 상태관리, 이벤트 처리, Recoil, TailwindCSS 등을 실습하며 기록한 내용을 정리한 공간입니다.

학습하며 작성한 주요 코드와 개념들을 포함하고 있으며, 반복 실습을 통해 React의 기초부터 확장까지 경험하고자 구성하였습니다.

---

## 🛠 사용 기술

- **React**
- **Recoil** – 전역 상태 관리
- **Tailwind CSS** – 유틸리티 기반 스타일링
- JavaScript (ES6+)
- Create React App

---

## ✨ 학습 포인트

- React 컴포넌트 구조 및 JSX 작성법
- `useState`, `useEffect`, `useRef` 등 주요 Hook 사용법
- 부모 → 자식 데이터 전달 (props) 및 props 구조 분해
- 이벤트 처리 (`onClick`, `onChange` 등)
- Recoil을 이용한 전역 상태 관리 실습
- TailwindCSS를 이용한 반응형 스타일 적용 및 컴포넌트 스타일링














---

# Getting Started with Create React App

[Create React App](https://github.com/facebook/create-react-app).

### 실행 : `npm start` 

## 리액트 주요개념
1. 컴포넌트 만들기 
   - 사용자 정의 태그
   - 자바스크립트 함수 
     - 함수명은 반드시 대문자
     - 반드시 retrun 으로 반환 : 하나의 요소만 반환  

2. 컴포넌트 추가
  - import로 추가
  - <컴포넌트 />

3. 컴포넌트 변수 사용
  - {} 안에 변수명을 넣어서 사용

4. props 
  + 부모 컴포넌트에서 자식 컴포넌트로 자료 전달시 사용
  + <컴포넌트명 속성명={값} />
  + props를 자식 컴포넌트에서 사용할 때 함수의 파라미터로 사용
    + export default function Recoil2(props) 
      + 변수 접근시  props.변수명
    + export default function Recoil2({y2})  
      + 변수 접근시 변수명 그대로 사용

5. state변수
  + 화면의 변경을 감지하기 위한 장치
  + 선언 : [변수명, 변수를 변경하는 set함수명] = useState(초기값) 
    + import {useState} from react ; 

6. 이벤트 달기 
  + onClick, onChange, onFocus 등의 이벤트 발생시 처리할 함수 지정

7. useEffect 
  + 사이드 이펙트 처리 
  + 선언 : useEffect(()=>{}, [])
    + import {useEffect} from react ; 
    + []에 따라 실행 시점 결정
      + [] : 컴포넌트 생성시
      + [state변수] : 특정 State변수가 변경 되었을 때
      + [] 생략 : 컴포넌트가 변경이 될때 마다

8. useRef
  + 폼요소 참조시 사용 가능 
  + 선언 : const ref변수명 = useRef()
    + import {useRef} from react ; 
    + 폼요소에 ref속성으로 연결 : 
    ```
    <input type='number' ref = {inRef} />
    ```
9. recoil로 상태변수 관리
---
[TailwindCss]
1. classname에 클래명으로 추가
2. 크기
  + 너비 : w-n , w-full (상위컴포넌트 너비를 모두 차지) 
  + 높이 : h-n , h-full (상위컴포넌트 높이를 모두 차지) , h-screen(화면높이)
3. 박스
  + flex 박스 
    + flex-row (디폴트) : 블록요소를 가로로 배치
    + flex-col : 블록요소를 세로로 배치
    + justify- : 기준축으로 정렬 
    + items- : 기준축 반대 방향 정렬
  + grid 박스
    + grid-cols- : 칸 개수 설정
    + 반응형 : sm: , md: , lg: 추가
    + grid-gap- : 칸 간격
  + m- : 마진설정 , ml-, mr-, mx-, mt-, mb-, my-
  + p- : 패딩설정
  + border : 테두리
4. 배경색 : bg-
5. 글자색 : text-
6. 글자진하게 : font-bold   
---
참고 
+ 마크다운 작성 : https://gist.github.com/ihoneymon/652be052a0727ad59601
