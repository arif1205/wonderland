import styled from "styled-components";

export const TopNavWrapper = styled.header`
  width: 100%;
  padding: 33px 0 33px 0;

  .top-nav-container {
    min-height: 64px;
    width: 89%;
    max-width: 833px;
    margin: auto;

    .top-nav-item {
      padding: 9px 20px;
      background: hsla(0, 0%, 100%, 0.2);
      box-shadow: 0 0 10px rgb(44 39 109 / 10%);
      border-radius: 10px;
      cursor: pointer;

      p {
        font-weight: 600;
        font-size: 18px;
        color: #fff;
      }
    }
  }
`;
