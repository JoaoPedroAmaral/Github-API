import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color:#fff;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color:#fff;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color:#fff;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }

  span{
    color:#add8e6;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  span{
    color: #add8e6;
  }

  h3 {
    margin-right: 8px;
    color:#fff;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
    color:#add8e6;
    text-decoration: underline;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  border: 2px solid #add8e6;
`;
