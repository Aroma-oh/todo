import './App.css';
import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { light, dark, tagColors } from './style/theme';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Main } from './components/Main';

function App() {
  const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
  const theme = themeMode === 'light' ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.
  //const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  }
  console.log(isDarkMode)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <TodoContainer> */}
        <Header />
        <Nav isDarkMode={isDarkMode} toggleHandler={toggleHandler} />
        <Main />
        {/* </TodoContainer> */}
      </ThemeProvider>

    </>
  );
}

export default App;
