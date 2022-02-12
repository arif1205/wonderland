import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '../../GlobalStyle';
import { SidebarSubMenuWrapper } from './SidebarSubMenu.styles';

const SidebarSubMenu = () => {
  return (
    <SidebarSubMenuWrapper>
      <div class="bond-discount">
        <div class="bond-discount-header">
          <p>Mint discounts</p>
        </div>
        <div class="bond-discount-links">
          <Flex direction="column" gap='20px'>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">wAVAX</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">wETH.e</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">MIM</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">TIME-MIM LP</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">wMEMO-MIM SLP</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
            <Link to="/" className="deleted">
              <Flex justify="space-between">
                <div class="discount-text">TIME-AVAX LP</div>
                <div class="discount-amount">0%</div>
              </Flex>
            </Link>
          </Flex>
        </div>
      </div>
    </SidebarSubMenuWrapper>
  );
};

export default SidebarSubMenu;