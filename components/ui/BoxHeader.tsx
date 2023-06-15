import React from 'react';

const BoxHeader = ({ children, title, bg }) => {
  return (
    <div className="flex flex-col z-1 h-full border-2 border-black rounded-[4px]">
      <div
        className={`h-[68px] border-b-2 border-black rounded-t-[10px] flex items-center px-[32px] z-0 ${
          bg ? `bg-[${bg}]` : ''
        }`}
      >
        <span className=" text-[32px]">{title}</span>
      </div>
      <div className="flex flex-col p-10">{children}</div>
    </div>
  );
};

export default BoxHeader;
