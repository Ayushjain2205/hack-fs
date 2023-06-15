import Layout from '@/components/layout';
import React from 'react';
import BoxHeader from '@/components/ui/BoxHeader';

const Personalize = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <h5 className="font-bold text-[36px] my-[20px]">LeT’S personalise</h5>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row gap-[24px] w-[1141px]">
            <div className="h-[472px] w-[346px] flex-shrink-0 bg-[#FFC022]"></div>
            <div className="w-full">
              <BoxHeader title="Knowledge base" bg="#fff">
                <p className="text-[16px]"> Personalize your experience</p>
              </BoxHeader>
            </div>
          </div>
          <div className="w-[1141px] h-[320px] border-2 border-black rounded-[4px]">
            a
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Personalize;
