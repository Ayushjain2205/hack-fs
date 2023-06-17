import React from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';

declare global {
  interface Window {
    use_modal: HTMLDialogElement;
  }
}

const Explore = () => {
  return (
    <Layout>
      <div className="grid">
        <div className="relative w-[286px] h-[347px] bg-[#FFC022]">
          <button
            className="absolute bottom-0 right-0 w-full h-[48px] text-white bg-black text-[24px] flex items-center justify-end pr-4"
            onClick={() => window.use_modal.showModal()}
          >
            <img
              src="/arrow-left.svg"
              className="transform rotate-180"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* Popup */}
      <dialog id="use_modal" className="modal">
        <form
          method="dialog"
          className="absolute modal-box h-[709px] w-[820px] max-w-[820px] border-black border-[2px] rounded-[4px] bg-[#FFC022] p-0"
        >
          <div className="absolute w-full">
            <div className="h-[613px] flex flex-col align-center justify-center">
              <img className="h-[300px]" src="/mascot.svg" alt="" />
            </div>
            <div className=" w-full left-0 right-0 border-t-2 border-black flex flex-row items-center h-[96px] gap-[24px] justify-end px-[24px]">
              <Link href="/personalize">
                <button className="h-[64px] w-[210px] text-white bg-black text-[24px]">
                  pERSONALIZE
                </button>
              </Link>
              <Link href="/chat">
                <button className="h-[64px] w-[210px] text-white bg-black text-[24px]">
                  LETs uSE
                </button>
              </Link>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </Layout>
  );
};

export default Explore;
