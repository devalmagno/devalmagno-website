import type { NextPage } from 'next'
import { useState, useEffect, ReactNode } from 'react';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import About from '../components/About';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

  const projects = (
    <div className={styles.projects}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );

  const about = (
    <div className={styles.about}>
      <About />
      <About />
      <About />
    </div>
  )

  const [selectedComponent, setSelectedComponent] = useState(projects);

  function toggleSelectedTab(tab: string) {
    setSelectedTab(tab);
  }

  useEffect(() => {
    if (selectedTab == 'projects') setSelectedComponent(projects);
    else if (selectedTab == 'about') setSelectedComponent(about);
  }, [selectedTab]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <section>
        <Hero />
        <Navbar
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        {selectedComponent}
      </section>
    </div>
  )
}

export default Home
