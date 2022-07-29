import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 2px solid #add8e6;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    color:#fff;
  }

  button {
    background-color: transparent;
    padding: 8px 16px;
    margin: 0 16px;
    border: 2px solid;
    border-radius: 8px;
    border-color: #add8e6;

    &:hover {
      background-color: #222;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {

      font-weight: bold;
      color: #ffff;
    }
  }
`;
