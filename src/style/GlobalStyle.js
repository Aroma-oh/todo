import { createGlobalStyle } from 'styled-components';
// 브라우저의 기본 css 스타일 제거 목적

const GlobalStyle = createGlobalStyle`
    * {
	margin: 0;
	box-sizing: border-box;
}

body {
	-webkit-touch-callout: none;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;

	font-family: 'Noto Sans KR', sans-serif;
	color: #4B4B4B;
	background-color: #5D5FEF;
}

div {
	word-break: keep-all;
}

button,
input,
textarea,
select {
	font-family: 'Noto Sans KR', sans-serif;
	color: #4B4B4B;
	letter-spacing: -1px;
}

button:focus,
input:focus,
textarea:focus,
select:focus {
	outline: none;
}
`

export default GlobalStyle; 