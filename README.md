## next.js 완전 초보편
- 생활코딩 next.js 강의를 보며 작성한 코드입니다.


### 사용한 라이브러리 및 프레임
- json-server
- typescript 기반
- tailwind-css


### 공부 내용 정리
처음 사용하는 next.js가 기본적으로 어떻게 작동되는가에 초점을 두었습니다.
- 폴더 위치에 따라 route처리를 할 수 있음
- parameter 존재하는 페이지일 경우 폴더이름/[id]로 접근후 파일 생성
  ex) read/2 => read/[id]/page.tsx 생성
- globals.css는 전역 css 변경이 가능
- page별 css 변경하고 싶을시, [페이지명].moudules.css로 생성
- 문법은 react와 동일하나, ssr 기반이라 csr 페이지 생성시 "use client" 필수 기재
- 환경변수 -> .env.local 생성하여 로커에서 API_URL 첨부
  client 환경 변수 접근이 불가능하여 NEXT_PUBLIC 이라고 지정 필수
