import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 85%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.95rem 0;
  display: flex;
  justify-content: space-between;

  .mobile_menu {
    display: none;
    cursor: pointer;
  }

  .nav_logo_container {
    cursor: pointer;
    width: 8.75rem;
    height: 46.42px;
    z-index: 3;
    img {
      width: 100%;
    }
  }

  .nav_right_section_container {
    display: flex;
    align-items: center;
    gap: 3.566875rem;
    .nav_links_container {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.02em;
        color: var(--textColor);
      }
    }
    .nav_right__logic_section {
      display: flex;
      align-items: center;
      gap: 2rem;
      .language_switcher_container {
        display: flex;
        align-items: flex-end;
        .world_icon {
          color: var(--primaryColor);
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        .lang_choice {
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 18px;
          letter-spacing: -0.02em;
          color: var(--textColor);
        }
        .icon_select {
          align-self: center;
          margin-left: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .mobile_menu {
      display: block;
      font-size: 2.5rem;
      z-index: 3;
    }

    .nav_right_section_container {
      display: ${({ menu }) => (menu ? 'flex' : 'none')};

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      background-color: #fff;
      padding-top: 10rem;

      .nav_links_container {
        flex-direction: column;
        gap: 4rem;
        a {
          font-size: 1.3rem;
        }
      }

      .nav_right__logic_section {
        flex-direction: column;
        gap: 4rem;
      }
    }
  }
`;
