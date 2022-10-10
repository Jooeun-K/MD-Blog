import { css } from "@emotion/react";

export const globalStyles = css`
  /* Reset body */
  html,
  body {
    margin: 0;
    overflow-wrap: break-word;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 14px;
    color: #212529;
  }
  body {
    background: #f1f1f3;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    word-break: keep-all;
  }
  span {
    word-break: keep-all;
  }
  /* Do not break Korean words */
  :lang(ko) {
    word-break: keep-all;
  }
  :lang(en) {
    overflow-wrap: break-word;
  }
  /* Reset img*/
  img {
    max-width: 100%;
  }
  /* CSS Reset by [class] - class를 가지고 있는 요소만 reset한다 */
  [class] {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: 0;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-appearance: none;
    appearance: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [class]::before,
  [class]::after {
    box-sizing: border-box;
  }

  // sound-only 설정
  .sound-only {
    width: 0;
    height: 0;
    overflow: hidden;
    text-indent: -9999px;
    position: absolute;
  }
`;
