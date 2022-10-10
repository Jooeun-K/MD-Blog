# MD-Blog

**Next.js로 정적 블로그 만들기 with Markdown**  
[배포 링크](https://main--sparkly-cascaron-e302a3.netlify.app/)

## 작업하며 신경 쓴 부분

1. fs, path 등의 nodejs 모듈은 서버에서만 실행이 가능하다. 해당 스크립트가 브라우저에서 렌더링 될 경우 오류가 발생하기 때문에 getStaticProps 내부에서 작동시켜야 한다.
2. getStaticProps를 이용하는 경우 반드시 getStaticPaths를 사용해서 정적 페이지들의 경로를 설정해주어야 한다.
3. 레이아웃 컴포넌트에서 존재하는 모든 포스트의 경로를 불러와 nav를 생성한다.
   - \_app.tsx와 \_document.tsx에서는 getStaticProps, getStaticPaths 등을 사용할 수 없다.
   - 로컬 페이지 영역에서 getStaticProps를 이용해 path 목록을 생성한 뒤 context-api에 담아주는 방식으로 nav를 만들었다.

## 아쉬운 부분 = 추후 보완점

1. 바빠서 스타일링은 전혀 건드리지 못한 점...
2. 메인페이지를 list 형식으로 구현하고 싶었는데, 해당 부분은 건드리지 못한 점
3. 포스트가 수십개 이상 된다고 가정했을 때 필요한 페이지네이션 등에 대한 고려를 하지 못한 점

## 참고한 링크

['fs' module not founc issue 관련 Next.js github 이슈](https://github.com/vercel/next.js/discussions/12124)  
[Next.js 공식 문서](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)  
[코드 유인원 - Next.js로 블로그 만들기](https://code-anthropoid.tistory.com/160)
