import styled from "@emotion/styled";

export const Container = styled.div`
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  background: white;
`;

export const Nav = styled.nav`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  a {
    padding: 3px 10px;
    background: white;
    margin: 10px 5px;
    border: 1px solid gray;
    border-radius: 3px;
  }
  a.isNow {
    background: gray;
    color: white;
  }
`;
