import styled from "styled-components";

export const MarkdownContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 15px;
  height: 250px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const MarkdownWrapper = styled.div`
  box-shadow: 0 0 10px #719ece;
  width: 100%;
  height: 100%;
`;
export const MarkdownHeadline = styled.div`
  background: #123089;
  margin: 0;
  padding: 0;
  height: 10%;
`;

export const HeadlineTitle = styled.h3`
  color: #fff;
  margin-left: 5px;
  padding: 0;
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  height: 90%;
  margin: 0;
`;
export const MarkdownTextArea = styled.textarea`
  background-color: #204ecf;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  min-height: 100%;
  &:focus {
    outline: none !important;
  }
`;

export const PageHeader = styled.h1`
  text-align: center;
  margin: 5px 35px 5px 35px;
  color: #fff;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;