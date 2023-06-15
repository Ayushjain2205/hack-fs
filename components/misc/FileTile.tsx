import React from 'react';

const FileTile = () => {
  return (
    <div className="relative h-[89px] w-[225px] border-black border-[1px] rounded-[4px]">
      <div className="absolute top-[8px] right-[8px]">
        <img src="/close.svg" alt="" />
      </div>
      <div className="flex flex-row p-[16px] gap-[8px]">
        <img src="/file.svg" alt="" />
        <p className="text-[14px] w-[130px]">
          Designing for Behavior Change_ Applying.pdf
        </p>
      </div>
    </div>
  );
};

export default FileTile;
