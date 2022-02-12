import styled from 'styled-components';

export const MainWrapper = styled.main`
  background: var(--bg-color);
  height: 100vh;
  flex-grow: 1;
  position: relative;

  .cubes-top {
    opacity: 0.4;
    position: absolute;
    top: 20px;
    width: 300px;
    left: 45px;
    text-align: center;

    p {
      font-family: Courier;
      font-style: normal;
      font-weight: 400;
      font-size: 6px;
      color: #fff;
      white-space: pre-wrap;
      user-select: none;
    }
  }

  .cubes-bottom {
    opacity: 0.4;
    position: absolute;
    bottom: -250px;
    width: 500px;
    right: -100px;
    text-align: center;

    p {
      font-family: Courier;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #fff;
      white-space: pre-wrap;
      user-select: none;
    }
  }
`;