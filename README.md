# [옵션 API vs. 컴포지션 API]
## 옵션 API 방식
- data() 함수에서 반환하는 객체의 속성으로 상태 정의
- this를 통해 상태에 접근 (this.currentTime처럼)
## 컴포지션 API 방식
- 반응형 상태를 ref()함수를 통해 생성
- 값을 변경할 때 .value 속성을 사용
- 관련 로직을 함께 그룹화가 가능

# [Vue의 반응형 데이터와 가상 DOM 렌더링 과정]
1. Vue 어플리케이션을 생성
2. setup 함수를 통해 반응형 상태를 생성
3. 생성된 반응형 데이터를 템플릿에 바인딩

## 가상돔
1. mount 함수를 통해 앱을 마운트(올림)한다. -> 최초의 가상 DOM 생성
2. Vue가 기존 가상돔과 비교해서 새로운 가상 DOM을 만들 -> 실제 DOM에 반영하게 됨
3. 데이터(ref)가 변경됨 -> 새로운 가상 DOM 생성
4. Vue의 Diffing 알고리즘이 변경된 부분을 감지 -> 변경된 부분만 실제 DOM에 적용
5. 브라우저 실제 DOM을 화면에 업데이트 -> 렌더링

# [Vue 디렉티브]
## v-bind 디렉티브
- HTML 요소의 속성과 Vue의 데이터를 연결해주는 디렉티브
- 데이터가 변경되면 연결된 HTML 속성도 자동으로 업데이트됨.
1) 사용법:
- 기본 형식: v-bind:속성명="데이터"
- 축약 형식: :속성명="데이터"
2) 수식어(modifier)
  .lazy   -> change 이벤트 발생시에만 데이터 업데이트를 함
  .number  -> 사용자 입력을 자동으로 숫자로 형변환 해줌. 숫자로 변환 가능할때만
  .trim -> 입력값의 앞뒤 공백을 자동으로 제거

## v-model 디렉티브
- 폼 입력 요소와 Vue의 데이터를 양방향으로 바인딩해주는 디렉티브
- 사용자 입력에 따라 데이터가 자동으로 업데이트되고, 데이터 변경 시 입력 요소도 업데이트됨
1) 사용법:
- 기본 형식: v-model="데이터"
2) 주요 사용 사례:
- 텍스트 입력: <input type="text" v-model="메시지변수">
- 체크박스: <input type="checkbox" v-model="체크상태변수">
- 라디오 버튼: <input type="radio" v-model="선택변수">
- 셀렉트 박스: <select v-model="선택변수">
- 텍스트 영역: <textarea v-model="내용변수"></textarea>

## v-show 디렉티브
- 조건이 거짓이면 요소가 DOM에는 남아있지만 display 속성으로 안보이게 함
## v-if 디렉티브
- 조건부 렌더링을 할 때 사용
- 조건이 false이면 요소가 DOM에서 완전히 제거된다.

## v-for 디렉티브를 사용한 렌더링
- 배열이나 객체의 각 항목에 대해 요소를 반복 설정
- :key 속성을 통해 각 항목에 고유한 식별자를 부여(Vue의 가상 DOM 최적화)
## v-on 디렉티브
 - v-on:click
 - @click="increaseCount"는 버튼 클릭 시 increaseCount 메서드를 호출
 - Vue에서 이벤트 핸들링을 위해 v-on: 대신 @ 기호를 사용하는 단축 문법 제공
 
- v-on:mouseover
- @mouseover="decreaseCount"는 마우스를 올렸을 때 decreaseCount 메서드를 호출
- 마찬가지로 v-on: 대신 @ 기호를 사용한 단축 문법 사용 가능
