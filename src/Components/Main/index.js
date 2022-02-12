import React from 'react';
import BottomSideBg from '../BottomSideBg';
import TopNav from '../TopNav';
import TopSideBg from '../TopSideBg';
import { MainWrapper } from './Main.styles';

const Main = ({children}) => {
  return (
    <MainWrapper className="main">
      <TopNav />
      <TopSideBg />
      <BottomSideBg />
      {children}
    </MainWrapper>
  );
};

export default Main;