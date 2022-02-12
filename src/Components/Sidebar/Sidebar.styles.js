import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  height: 100vh;
  width: 297px;
  overflow-y: auto;
  background-color: var(--bg-color);

  .social-links {
    padding: 1.3rem;

    i {
      font-size: 19px;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const SidebarHeader = styled.div`
  margin: 20px 0 63px;
`;

export const SidebarLinks = styled.div`
  color: #ffffff;

  .side-bar-link-item-container {
      margin-top: 20px;
      margin-left: 20px;
      align-items: center;
      margin-bottom: 20px;
    
    a {
      .text {
        font-weight: 600;
        font-size: 16px;
        align-self: center;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;

        &:hover {
          border-bottom: 1px solid #3f51b5;
        }
      }

      .icon {
        /* vertical-align: -4px; */
        align-self: center;
        height: 20px;
        width: 20px;

        svg,
        img {
          width: 20px;
          height: 20px;
        }
      }

      &.docs {
        margin-top: 0;
        margin-bottom: 20px;
      }

      &.active .text {
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;
