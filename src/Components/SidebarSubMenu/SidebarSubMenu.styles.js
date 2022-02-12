import styled from "styled-components";

export const SidebarSubMenuWrapper = styled.div`
  padding-left: 34px;
  padding-right: 45px;

  .bond-discount-header {
    font-size: 14px;
    line-height: 17px;
    color: hsla(0, 0%, 100%, 0.6);
    margin-top: 20px;
  }

  .bond-discount-links {
    margin-top: 20px;
  }

  a {
    display: block;
    margin-left: 0;
    font-size: 14px;

    &.deleted {
      .discount-text, .discount-amount {
        text-decoration: line-through;
        }
      }
    }
  }
`;
