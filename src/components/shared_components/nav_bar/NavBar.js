import React from 'react';
import { NavBarContainer } from './NarBar.style';
import { NavLink } from 'react-router-dom';
import EXXLogo from '../../../assets/images/exx-logo.svg';
import { TbWorld, TbChevronDown } from 'react-icons/tb';
import { FiArrowUpRight } from 'react-icons/fi';
import ButtonBlueBg from '../buttons/ButtonBlueBg';

const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="nav_logo_container">
        <img src={EXXLogo} alt="EXX logo" />
      </div>

      <section className="nav_right_section_container">
        <div className="nav_links_container">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        <div className="nav_right__logic_section">
          <div className="language_switcher_container">
            <TbWorld className="world_icon" />
            <span className="lang_choice">EN</span>
            <TbChevronDown className="icon_select" />
          </div>

          <ButtonBlueBg
            text={`Connet Wallet`}
            width="197px"
            func={() => {}}
            icon={<FiArrowUpRight />}
          />
        </div>
      </section>
    </NavBarContainer>
  );
};

export default NavBar;
