import Layout from '@/components/layout';
import React from 'react';
import BoxHeader from '@/components/ui/BoxHeader';
import { Checkbox } from 'antd';

const Preview = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[24px]">
        <div className="h-[578px] w-[1152px] border-black border-[2px] rounded-[4px] mt-[38px]"></div>
        <div className="flex flex-row gap-[24px]">
          <div className="w-[516px]">
            <BoxHeader title="How should it be used?" bg="#fff">
              <div className="flex flex-col gap-[16px]">
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use as web interface</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use a chrome extension</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use as API</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use a widget in mobile</span>
                </div>
              </div>
            </BoxHeader>
          </div>
          <div className="w-[612px]">
            <BoxHeader title="bOT API" bg="#fff">
              a
            </BoxHeader>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Preview;
