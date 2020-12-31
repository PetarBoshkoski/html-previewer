import styled from "styled-components";

export const PreviewerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 35px;
  height: 100%;
  min-height: 250px;
  background: #eee;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const PreviewerWrapper = styled.div`
  box-shadow: 0 0 8px #719ece;
  width: 100%;
  height: 100%;
`;
export const PreviewerHeadline = styled.div`
  background: #123089;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  height: 10%;
`;

export const HeadlineTitle = styled.h3`
  color: #fff;
  margin: 5px;
  padding: 0;
`;

export const PreviewerTextWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 225px;
  background-color: #204ecf;
  color: #fff;
`;

export const PreviewerText = styled.div`
  margin: 0;
  padding: 0;
`;
