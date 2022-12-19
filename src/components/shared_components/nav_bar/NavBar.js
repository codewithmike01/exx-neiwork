import React, { useState } from 'react';
import { NavBarContainer } from './NarBar.style';
import { NavLink, useNavigate } from 'react-router-dom';
import EXXLogo from '../../../assets/images/exx-logo.svg';
import { TbWorld, TbChevronDown } from 'react-icons/tb';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';
import ButtonBlueBg from '../buttons/ButtonBlueBg';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const connectWallet = () => {
    console.log('connect');
  };
  return (
    <NavBarContainer menu={showMobileMenu}>
      <div
        className="nav_logo_container"
        onClick={() => {
          setShowMobileMenu(false);
          navigate('/');
        }}
      >
        <img src={EXXLogo} alt="EXX logo" />
      </div>

      <section
        className="nav_right_section_container"
        onClick={() => setShowMobileMenu(false)}
      >
        <div className="nav_links_container">
          <NavLink to="/about" onClick={() => setShowMobileMenu(false)}>
            About
          </NavLink>
          <NavLink to="/developers" onClick={() => setShowMobileMenu(false)}>
            Developers
          </NavLink>
          <NavLink to="/blog" onClick={() => setShowMobileMenu(false)}>
            Blog
          </NavLink>
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
            func={() => connectWallet()}
            icon={<FiArrowUpRight />}
          />
        </div>
      </section>

      {!showMobileMenu && (
        <HiOutlineMenuAlt3
          className="mobile_menu"
          onClick={() => setShowMobileMenu(true)}
        />
      )}

      {showMobileMenu && (
        <RiCloseFill
          className="mobile_menu"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
    </NavBarContainer>
  );
};

export default NavBar;
