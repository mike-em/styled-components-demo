import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
`;

export const InnerContaier = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  p {
    margin: 30px 0;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e3e3e;
  color: white;
`;
