import Navbar from '@/components/ui/Navbar';
import React from 'react';

import styles from '../styles/landing.module.css';

const HexagonalGrid = () => {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonalGrid;
