import React from 'react';
import Sidebar from '../../Components/Sidebar';
import { Flex } from '../../GlobalStyle';
import { HomeWrapper } from './Home.styles';

const Home = () => {
  return (
    <HomeWrapper>
      <Flex wrap='nowrap'>
        <Sidebar />
      </Flex>
    </HomeWrapper>
  );
};

export default Home;