import Layout from '@/components/layout';
import React from 'react';
import BoxHeader from '@/components/ui/BoxHeader';
import FileButton from '@/components/form/FileButton';
import FileTile from '@/components/misc/FileTile';
import Link from 'next/link';

const Personalize = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[32px]">
        <h5 className="font-bold text-[36px] my-[20px]">LeT’S personalise</h5>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row gap-[24px] w-[1141px]">
            <div className="h-[472px] w-[346px] flex-shrink-0 bg-[#FFC022]">
              <img src="/pharma.svg" alt="" />
            </div>
            <div className="w-full">
              <BoxHeader title="Knowledge base" bg="#fff">
                <div className="grid grid-cols-3 gap-[16px] gap-x-[24px]">
                  <FileTile />
                  <FileTile />
                  <FileTile />
                  <FileTile />
                  <FileTile />
                </div>
              </BoxHeader>
            </div>
          </div>
          <div className="w-[1141px] h-[320px] border-2 border-black rounded-[4px] flex flex-col justify-center items-center">
            <FileButton buttonText="add Resources" />
            <span className="italic text-black text-opacity-50 text-[24px]">
              (pdf, csv, video link, ppt, xls & more....)
            </span>
          </div>
        </div>
        <div className="flex flex-row w-[1141px] justify-center">
          <Link href="/preview">
            <button className="flex flex-row justify-center  items-center h-[56px] w-[230px] text-white bg-black text-[24px]">
              LeTs preview &nbsp;
              <img
                src="/arrow-left.svg"
                className="transform rotate-[135deg]"
                alt=""
              />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Personalize;
