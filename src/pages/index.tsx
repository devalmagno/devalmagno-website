import type { NextPage } from 'next'
import { useState } from 'react';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

  function toggleSelectedTab(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <section>
        <Hero />
        <Navbar 
          selectedTab={selectedTab} 
          toggleSelectedTab={toggleSelectedTab}
        />

        <div className={styles.projects}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  )
}

export default Home
