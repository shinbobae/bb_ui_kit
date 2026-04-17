import { globalStyle } from '@vanilla-extract/css';

// 1. 모든 요소의 box-sizing을 border-box로 통일
globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
});

// 2. 기본 여백 및 테두리 초기화
globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
);

// 3. HTML5 시맨틱 태그 호환성
globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block',
  },
);

// 4. 리스트 스타일 제거
globalStyle('ol, ul', {
  listStyle: 'none',
});

// 5. 바디 기본 설정
globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

// 6. 이미지 및 미디어 요소
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

// 7. 폼 요소 초기화
globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

// 8. 버튼 기본 스타일 제거 (UI Kit 제작 시 필수)
globalStyle('button', {
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
});

// 9. 링크 스타일 초기화
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
