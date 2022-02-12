import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "../../GlobalStyle";
import { ReactComponent as BondIcon } from "../../Images/bond-icon.svg";
import { ReactComponent as BridgeIcon } from "../../Images/bridge-icon.svg";
import { ReactComponent as DashboardIcon } from "../../Images/dashboard-icon.svg";
import fundIcon from "../../Images/fund-icon.png";
import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as MediumIcon } from "../../Images/medium-icon.svg";
import { ReactComponent as StakeIcon } from "../../Images/stake-icon.svg";
import SidebarSubMenu from "../SidebarSubMenu";
import { SidebarHeader, SidebarLinks, SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <Flex justify="center" align="center">
          <Logo />
        </Flex>
      </SidebarHeader>
      <SidebarLinks>
        <Flex direction="column">
          <div class="side-bar-link-item-container">
            <Link to="/" className="active">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <DashboardIcon />
                </div>
                <div className="text">Dashboard</div>
              </Flex>
            </Link>
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <StakeIcon />
                </div>
                <div className="text">Stake</div>
              </Flex>
            </Link>
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <BondIcon />
                </div>
                <div className="text">Mint</div>
              </Flex>
            </Link>
            <SidebarSubMenu />
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <BridgeIcon />
                </div>
                <div className="text">Bridge</div>
              </Flex>
            </Link>
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <img src={fundIcon} alt="fond icon" />
                </div>
                <div className="text">Fund</div>
              </Flex>
            </Link>
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/">
              <Flex className="side-bar-link-item" gap="10px">
                <div className="icon">
                  <MediumIcon />
                </div>
                <div className="text">Blog</div>
              </Flex>
            </Link>
          </div>
          <div class="side-bar-link-item-container">
            <Link to="/" className="docs">
              <Flex className="side-bar-link-item" gap="10px" justify="center">
                <div className="icon">
                  <StakeIcon />
                </div>
                <div className="text">Docs</div>
              </Flex>
            </Link>
          </div>
        </Flex>
      </SidebarLinks>
      <div class="social-links">
        <Flex justify="space-evenly">
          <Link to="/" class="link-icon">
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link to="/" class="link-icon">
            <i class="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/" class="link-icon">
            <i class="fa-solid fa-paper-plane"></i>
          </Link>
          <Link to="/" class="link-icon">
            <i class="fa-brands fa-discord"></i>
          </Link>
        </Flex>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
