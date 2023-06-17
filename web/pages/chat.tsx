import Layout from '@/components/layout';
import React, { useEffect, useState } from 'react';
import ChatBot from '@/components/chatbox';
import { ethers } from 'ethers';
import { abi } from '../config/abi';
import { useAddress } from '@thirdweb-dev/react';

declare global {
  interface Window {
    buy_modal: HTMLDialogElement;
  }
}

const Chatpage = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  const address = useAddress();

  const contractAddress = '0x0603dCfcAF81Df618915EcA57F4fa2c2ee50FDE3';

  const contractABI = abi;

  useEffect(() => {
    if (!window.buy_modal.open) {
      window.buy_modal.showModal();
    }

    const provider = new ethers.providers.Web3Provider(
      window.ethereum as ethers.providers.ExternalProvider,
    );

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );

    setContract(contractInstance);
  }, []);

  async function mintTokens() {
    if (!contract) {
      console.error('Contract is not loaded');
      return;
    }

    let to = address || '0xCafa93E9985793E2475bD58B9215c21Dbd421fD0';
    const amount = ethers.utils.parseUnits('50', 18); // The amount of b-coins to be minted

    await contract.mint(to, amount);
  }

  return (
    <Layout>
      <div className="flex flex-row w-[1152px] justify-between mb-[36px] mt-[25px]">
        <h5 className="font-bold text-[36px]">The PHARMA man</h5>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <img src="/more-vertical.svg" alt="" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-black text-white text-[16px] rounded-[2px] w-52"
          >
            <li>
              <a>uSE api</a>
            </li>
            <li>
              <a>download extension</a>
            </li>
            <li>
              <a>didget for mobil</a>
            </li>
          </ul>
        </div>
      </div>
      <ChatBot />
      <dialog id="buy_modal" className="modal">
        <form
          method="dialog"
          className="modal-box h-[400px] w-[389px] border-2 border-black rounded-[4px]"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none">
            ✕
          </button>
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <div className="text-[24px] text-black text-opacity-60 text-center">
                200 prompts
              </div>
              <div className="text-[36px] font-bold bg-[#FFC022] w-[217px] text-center">
                50 b-COINS
              </div>
              <div className="text-[24px] text-center">
                Free trial for 1 month
              </div>
            </div>
            <div className="flex flex-col gap-[12px] mt-[20px]">
              <div className="flex flex-row gap-[15px]">
                <img src="/tick.svg" alt="" />
                <div className="text-[20px]">Ask anything to your buddy</div>
              </div>
              <div className="flex flex-row gap-[15px]">
                <img src="/tick.svg" alt="" />
                <div className="text-[20px]">Use as browser extension</div>
              </div>
              <div className="flex flex-row gap-[15px]">
                <img src="/tick.svg" alt="" />
                <div className="text-[20px]">Use as widget in mobile</div>
              </div>
            </div>
            <div
              onClick={mintTokens}
              className="mt-[24px] flex flex-row justify-center items-center h-[64px] w-[338px] text-white bg-black text-[24px] cursor-pointer"
            >
              BUY!
            </div>
          </div>
        </form>
      </dialog>
    </Layout>
  );
};

export default Chatpage;
