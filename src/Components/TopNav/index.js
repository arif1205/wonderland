import React from "react";
import { Flex } from "../../GlobalStyle";
import avax from "../../Images/avada.png";
import { TopNavWrapper } from "./TopNav.styles";

const TopNav = () => {
  return (
    <TopNavWrapper>
      <div class="top-nav-container">
        <Flex justify="flex-end" align="center" gap="20px">
          <div class="top-nav-item">
            <p>wMEMO</p>
          </div>
          <div class="top-nav-item">
            <p>Wrap</p>
          </div>
          <div class="top-nav-item">
            <Flex gap='5px'>
              <img src={avax} height="20px" width=" 20px" alt='avax' />
              <p>AVAX</p>
            </Flex>
          </div>
          <div class="top-nav-item">
            <p>Connect Wallet</p>
          </div>
        </Flex>
      </div>
    </TopNavWrapper>
  );
};

export default TopNav;
