import React from 'react';
import NavBar from '../shared_components/nav_bar/NavBar';
import DeployDapp from './deploy_dapp/DeployDapp';
import GetConnected from './get_contected/GetConnected';
import HeroSection from './hero_section/HeroSection';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DeployDapp />
      <GetConnected />
    </div>
  );
};

export default Home;
