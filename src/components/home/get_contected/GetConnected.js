import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import ButtonBgWhite from '../../shared_components/buttons/ButtonBgWhite';
import ButtonBlueBg from '../../shared_components/buttons/ButtonBlueBg';
import { GetConnectedContainer } from './GetContected.style';
import OutterEclipse from '../../../assets/images/bg-community.png';
import OutterEclipseMobile from '../../../assets/images/mobile-community.png';

const GetConnected = () => {
  const features = [
    {
      id: 1,
      title: 'Documentation',
      content: 'Everything needed to build on Exx',
      link: 'View docs',
      linkValue: 'none',
    },
    {
      id: 2,
      title: 'Watch & Learn',
      content: 'Solidity made easy with recordings',
      link: 'Watch now',
      linkValue: 'none',
    },
    {
      id: 3,
      title: 'Blockchain Explorer ',
      content: 'Explore transactions on Exx',
      link: 'Explore now',
      linkValue: 'none',
    },
  ];
  return (
    <GetConnectedContainer>
      <section className="get_contnected_container">
        <div className="connect_exx">
          <h2>
            Get connected to <br /> the EXX Network
          </h2>

          <section className="connect_cta">
            <ButtonBlueBg text="Add to Metamask" width="12em" func={() => {}} />
            <ButtonBgWhite
              text="Learn More"
              width="12rem"
              func={() => {}}
              icon={<FiArrowUpRight />}
            />
          </section>
        </div>

        <div className="connect_address">
          <div className="connect">
            <span className="placeholder">PRC URL: </span>
            <span className="placeholder_value">{`https://ds2.exx.network`}</span>
          </div>
          <div className="connect">
            <span className="placeholder">Network name: </span>
            <span className="placeholder_value">Exx Testnet</span>
          </div>
          <div className="connect">
            <span className="placeholder">Symbol: </span>
            <span className="placeholder_value">EXX</span>
          </div>
          <div className="connect">
            <span className="placeholder">Chain ID: </span>
            <span className="placeholder_value">47</span>
          </div>
          <div className="connect">
            <span className="placeholder">Block Explorer: </span>
            <span className="placeholder_value">{`https://exxscan.com`}</span>
          </div>
        </div>
      </section>

      <section className="list_feature_container">
        <ul className="list_features">
          {features.map(({ id, title, content, link, linkValue }) => (
            <li key={id}>
              <span className="feature_highlight">0{id}</span>
              <h3>{title}</h3>
              <p>{content}</p>
              <a href={`${linkValue}`} target="_blank" rel="noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="join_community_section">
        <section className="join_community_text-content">
          <h2>
            Join our developer <br /> community
          </h2>

          <p className="text-content">
            Join our community of developers from diverse backgrounds where you
            can work collaboratively, develop projects, ask questions and grow
            your career.
          </p>

          <ButtonBlueBg
            text="Join the community"
            width="15.664375rem"
            func={() => {}}
            icon={<FaDiscord />}
          />
        </section>
        <section className="positional-images">
          <img
            src={OutterEclipse}
            alt="Out Eclipse"
            className="community-image-big"
          />
        </section>

        <section className="hidden-bg-community">
          <img
            src={OutterEclipseMobile}
            alt="Out Eclipse"
            className="community-image-big"
          />
        </section>
      </section>
    </GetConnectedContainer>
  );
};

export default GetConnected;
