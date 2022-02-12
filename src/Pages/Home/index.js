import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Components/Dashboard";
import Main from "../../Components/Main";
import Sidebar from "../../Components/Sidebar";
import { Flex } from "../../GlobalStyle";
import { HomeWrapper } from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Flex wrap="nowrap">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Main>
      </Flex>
    </HomeWrapper>
  );
};

export default Home;
