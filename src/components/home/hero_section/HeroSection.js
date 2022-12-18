import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import ButtonBgWhite from '../../shared_components/buttons/ButtonBgWhite';
import ButtonBlueBg from '../../shared_components/buttons/ButtonBlueBg';
import { HeroContainer } from './HeroSection.style';
import DocPreview from '../../../assets/images/doc-preview.svg';

const HeroSection = () => {
  return (
    <HeroContainer>
      <h1 className="hero_header">
        Start building apps with
        <span className="hero_section_text_higlight">useful cases</span>
      </h1>

      <p className="hero_text">
        Welcome to the EXX Developer’s Guide. Now you can begin building your
        first DApp on EXX.
      </p>

      <section className="hero_cta">
        <ButtonBlueBg text="Get Started" width="15.664375rem" func={() => {}} />
        <ButtonBgWhite
          text="Faucet"
          width="15.664375rem"
          func={() => {}}
          icon={<FiArrowUpRight />}
        />
      </section>

      <section className="hero_doc_preview">
        <img src={DocPreview} alt="Doc preview" />
      </section>
    </HeroContainer>
  );
};

export default HeroSection;
