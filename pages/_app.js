import GlobalStyle from "../styles";
import { ThemeProvider } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const darkTheme = {
  bodyFontFamily: lora,
  bodyFontSize: "16px",
  bodyFontStyle: "normal",
  bodyFontWeight: "400",
  bodyLetterSpacing: "0px",
  bodyLineHeight: "normal",
  bookShadow:
    "0px 22px 12px -12px rgba(0, 0, 0, 0.07), 0px 16px 8px -8px rgba(0, 0, 0, 0.07), 0px 7px 4px -4px rgba(0, 0, 0, 0.07), 0px 4px 8px -2px rgba(0, 0, 0, 0.09), 0px 2px 10px 0px rgba(0, 0, 0, 0.06)",
  captionFontFamily: lora,
  captionFontSize: "12px",
  captionFontStyle: "normal",
  captionFontWeight: "500",
  captionItalicFontFamily: lora,
  captionItalicFontSize: "12px",
  captionItalicFontStyle: "italic",
  captionItalicFontWeight: "400",
  captionItalicLetterSpacing: "0px",
  captionItalicLineHeight: "normal",
  captionLetterSpacing: "0px",
  captionLineHeight: "normal",
  clouds: "rgba(241, 241, 241, 1)",
  earth: "rgba(40, 40, 40, 1)",
  fellowship: "rgba(36, 44, 49, 1)",
  headline1FontFamily: lora,
  headline1FontSize: "44px",
  headline1FontStyle: "normal",
  headline1FontWeight: "700",
  headline1LetterSpacing: "0px",
  headline1LineHeight: "48px",
  headline2FontFamily: lora,
  headline2FontSize: "32px",
  headline2FontStyle: "normal",
  headline2FontWeight: "700",
  headline2LetterSpacing: "0px",
  headline2LineHeight: "normal",
  king: "rgba(32, 44, 44, 1)",
  smoke: "rgba(212, 209, 205, 1)",
  titleFontFamily: lora,
  titleFontSize: "16px",
  titleFontStyle: "normal",
  titleFontWeight: "700",
  titleLetterSpacing: "0px",
  titleLineHeight: "normal",
  towers: "rgba(83, 39, 36, 1)",
};

const lightTheme = {
  bodyFontFamily: lora,
  bodyFontSize: "16px",
  bodyFontStyle: "normal",
  bodyFontWeight: "400",
  bodyLetterSpacing: "0px",
  bodyLineHeight: "normal",
  bookShadow:
    "0px 22px 12px -12px rgba(0, 0, 0, 0.07), 0px 16px 8px -8px rgba(0, 0, 0, 0.07), 0px 7px 4px -4px rgba(0, 0, 0, 0.07), 0px 4px 8px -2px rgba(0, 0, 0, 0.09), 0px 2px 10px 0px rgba(0, 0, 0, 0.06)",
  captionFontFamily: lora,
  captionFontSize: "12px",
  captionFontStyle: "normal",
  captionFontWeight: "500",
  captionItalicFontFamily: lora,
  captionItalicFontSize: "12px",
  captionItalicFontStyle: "italic",
  captionItalicFontWeight: "400",
  captionItalicLetterSpacing: "0px",
  captionItalicLineHeight: "normal",
  captionLetterSpacing: "0px",
  captionLineHeight: "normal",
  clouds: "rgba(241, 241, 241, 1)",
  earth: "rgba(40, 40, 40, 1)",
  fellowship: "rgba(36, 44, 49, 1)",
  headline1FontFamily: lora,
  headline1FontSize: "44px",
  headline1FontStyle: "normal",
  headline1FontWeight: "700",
  headline1LetterSpacing: "0px",
  headline1LineHeight: "48px",
  headline2FontFamily: lora,
  headline2FontSize: "32px",
  headline2FontStyle: "normal",
  headline2FontWeight: "700",
  headline2LetterSpacing: "0px",
  headline2LineHeight: "normal",
  king: "rgba(32, 44, 44, 1)",
  smoke: "rgba(212, 209, 205, 1)",
  titleFontFamily: lora,
  titleFontSize: "16px",
  titleFontStyle: "normal",
  titleFontWeight: "700",
  titleLetterSpacing: "0px",
  titleLineHeight: "normal",
  towers: "rgba(83, 39, 36, 1)",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={lora.className}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
