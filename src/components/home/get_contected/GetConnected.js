import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import ButtonBgWhite from '../../shared_components/buttons/ButtonBgWhite';
import ButtonBlueBg from '../../shared_components/buttons/ButtonBlueBg';
import { GetConnectedContainer } from './GetContected.style';

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
    </GetConnectedContainer>
  );
};

export default GetConnected;
