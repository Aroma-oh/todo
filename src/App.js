import "./App.css";
import { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { light, dark, colorSet } from "./style/theme";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { CreateModal } from "./components/CreateModal";
import { postData } from "./data/postData";

function App() {
    const [themeMode, setThemeMode] = useState("light");
    const theme = themeMode === "light" ? light : dark;
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [data, setData] = useState(postData);
    const dataHandler = (newData) => {
        postData.push(newData);
        openModalHandler();
        console.log(data);
    };
    const dataResetHandler = () => {
        setData(postData);
        setSelectedTag("");
    };

    /* 
    📌 문제
    data state를 바꿔버려서 hide - non 사이 전환이 안됐음 
        if (!isHide) {
                setData(data);
    📌 해결
    핸들러 말고 post를 렌더시키는 곳에서 hide state를 참조하여 done을 렌더할지 말지를 결정함 
    */
    const [isHide, setIsHide] = useState(false);
    // const hideHandler = (isHide, setIsHide) => {
    //     if (!isHide) {
    //         setData(data);
    //     } else if (isHide) {
    //         setData([...data].filter((el) => el.done === false));
    //     }
    /**
     * 데이터를 없애는게 아니라
     * 렌더 시점에 done이 숨
     */
    // if (isHide) {
    //     setData(data);
    // } else {
    //     setData([...data].filter((el) => el.done === false));
    // }
    //     setIsHide(!isHide);
    //     console.log(isHide);
    // };

    const doneHandler = (val, id) => {
        if (val) {
            setData(data.filter((data) => data.id !== id));
        } else {
            setData(postData);
        }
        console.log(data);
    };

    const toggleHandler = () => {
        setIsDarkMode(!isDarkMode);
        setThemeMode(themeMode === "light" ? "dark" : "light");
    };

    const [selectedTag, setSelectedTag] = useState("");
    const tagHandler = (label) => {
        setSelectedTag(label);
        const filterTag = postData.filter((el) => el.tag === label);
        setData(filterTag);
    };

    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ThemeProvider theme={theme} colorSet={colorSet}>
                <GlobalStyle />
                {/* <TodoContainer> */}
                <Header
                    selectedTag={selectedTag}
                    tagHandler={tagHandler}
                    isOpen={isOpen}
                    openModalHandler={openModalHandler}
                    dataResetHandler={dataResetHandler}
                />
                <Nav
                    isDarkMode={isDarkMode}
                    toggleHandler={toggleHandler}
                    selectedTag={selectedTag}
                    tagHandler={tagHandler}
                    //hideHandler={hideHandler}
                    isHide={isHide}
                    setIsHide={setIsHide}
                />
                <Main
                    data={data}
                    setData={setData}
                    doneHandler={doneHandler}
                    isHide={isHide}
                    openModalHandler={openModalHandler}
                />
                <CreateModal
                    type="create"
                    isOpen={isOpen}
                    openModalHandler={openModalHandler}
                    selectedTag={selectedTag}
                    tagHandler={tagHandler}
                    dataHandler={dataHandler}
                    data={data}
                />
                {/* </TodoContainer> */}
            </ThemeProvider>
        </>
    );
}

export default App;
