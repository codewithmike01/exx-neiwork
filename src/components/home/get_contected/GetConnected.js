import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import ButtonBgWhite from '../../shared_components/buttons/ButtonBgWhite';
import ButtonBlueBg from '../../shared_components/buttons/ButtonBlueBg';
import { GetConnectedContainer } from './GetContected.style';
import OutterEclipse from '../../../assets/images/bg-community.png';
const GetConnected = () => {
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
          <li>
            <span className="feature_highlight">01</span>
            <h3>Documentation</h3>
            <p>Everything needed to build on Exx</p>
            <a href="none" target="_blank">
              View docs
            </a>
          </li>
          <li>
            <span className="feature_highlight">02</span>
            <h3>Watch & Learn </h3>
            <p> Solidity made easy with recordings</p>
            <a href="none" target="_blank">
              Watch now
            </a>
          </li>
          <li>
            <span className="feature_highlight">03</span>
            <h3>Blockchain Explorer </h3>
            <p>Explore transactions on Exx</p>
            <a href="none" target="_blank">
              Explore now
            </a>
          </li>
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
          <img src={OutterEclipse} alt="Out Eclipse" />
        </section>
      </section>
    </GetConnectedContainer>
  );
};

export default GetConnected;
