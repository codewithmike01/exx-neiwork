import React from 'react';
import { DeployDappContainer } from './DeployDapp.style';
import Contract from '../../../assets/images/contract.svg';
import Web from '../../../assets/images/web.svg';
import Plug from '../../../assets/images/plug.svg';
const DeployDapp = () => {
  return (
    <DeployDappContainer>
      <h1 className="deploy_header">
        Your journey to developing your first dapp.
      </h1>

      <section className="deploy_card">
        <ul className="deploy_card_list">
          <li>
            <img src={Contract} alt="Contract piture" />
            <h3>Write Smart Contract</h3>
            <p>
              Write instructions via code on the Exx network. <br />
              {`{solidity}`}
            </p>
          </li>
          <li>
            <img src={Web} alt="Contract piture" />
            <h3>Build Web Apps</h3>
            <p>
              Build a frontend application for easier interaction. <br />
              {` {next} {react} `}
            </p>
          </li>
          <li>
            <img src={Plug} alt="Contract piture" />
            <h3>Integrate Dapp</h3>
            <p>
              Connect your contract with your web app.
              <br />
              {`{web3.js} {ethers.js} `}
            </p>
          </li>
        </ul>
      </section>
    </DeployDappContainer>
  );
};

export default DeployDapp;
