import Layout from '@/components/layout';
import React, { useEffect } from 'react';
import ChatBot from '@/components/chatbox';

declare global {
  interface Window {
    buy_modal: HTMLDialogElement;
  }
}

const Chatpage = () => {
  useEffect(() => {
    if (!window.buy_modal.open) {
      window.buy_modal.showModal();
    }
  }, []);

  return (
    <Layout>
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
            <div className="mt-[24px] flex flex-row justify-center items-center h-[64px] w-[338px] text-white bg-black text-[24px]">
              BUY!
            </div>
          </div>
        </form>
      </dialog>
    </Layout>
  );
};

export default Chatpage;
