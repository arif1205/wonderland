import React from 'react';
import TopNav from '../TopNav';
import { MainWrapper } from './Main.styles';

const Main = ({children}) => {
  return (
    <MainWrapper className="main">
      <TopNav />
      {children}
    </MainWrapper>
  );
};

export default Main;