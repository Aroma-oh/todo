import styled, { css } from "styled-components";

export const size = {
    mobile: "600px",
    tablet: "900px",
    laptop: "1200px",
    desktop: "1800px",
};

export const breakpoints = {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
};
// export const theme = {
//     mainColor: '#0a4297',
//     white: '#FFFFFF',
//     beige: '#FFF9E7',
//     gray: '#F7F7F7',
//     darkGray: '#5F5D59',
//     black: "#2D2D2D",
//     pink: "#FFDEFA",
//     green: "#C5E9D2",
//     orange: "#FCD4BC",
//     blue: "#D6E5FA",
//     violet: "#E3E1FF",
//     mobile: `(max-width: ${size.mobile})`,
//     tablet: `(max-width: ${size.tablet})`,
//     laptop: `(max-width: ${size.laptop})`,
//     desktop: `(min-width: ${size.desktop})`,
// }
export const colorSet = {
    white: "#FFFFFF",
    beige: "#FFF9E7",
    gray: "#F7F7F7",
    darkGray: "#5F5D59",
    black: "#2D2D2D",
    pink: "#FFDEFA",
    green: "#C5E9D2",
    orange: "#FCD4BC",
    blue: "#D6E5FA",
    violet: "#E3E1FF",
};

export const light = {
    colors: {
        textColor: "#5F5D59",
        buttonTextColor: "#5F5D59",
        buttonColor: "#F7F7F7",
        postColor: "#FFF9E7",
        toggleColor: "#F7F7F7",
        toggleBorderColor: "#5F5D59",
        mainBgColor: "#F7F7F7",
        containerBgColor: "#FFFFFF",
        //modalBgColor: rgba(45, 45, 45, 0.25),
    },
};

export const dark = {
    colors: {
        textColor: "#F7F7F7",
        buttonTextColor: "#F7F7F7",
        buttonColor: "#5F5D59",
        postColor: "#5F5D59",
        toggleColor: "#5F5D59",
        toggleBorderColor: "#F7F7F7",
        mainBgColor: "#2D2D2D",
        containerBgColor: "#2D2D2D",
        //modalBgColor: rgba(95, 93, 89, 0.25),
    },
};
