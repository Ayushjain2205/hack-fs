import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const FileTile = () => {
  const docs = [
    {
      uri: 'https://20572069.fs1.hubspotusercontent-eu1.net/hubfs/20572069/PDF%20Guides/Blueprint%20-%20A%20Web3%20Games%20Guide%20by%20Polygon%20Labs%20v1.0.pdf?utm_campaign=%5BGuide%5D+Gaming+Guide+%7C+Q1+2023+%7C+MQL&utm_medium=email&_hsmi=250271722&_hsenc=p2ANqtz-_QGor9vP2G6fX-R5GQD0FdzS7XLutmQmNwFgdduN15CcCww2YT3WmLTRtY8-Aa6yIPCjKy-UpiFXpTBqVGtYvq-teZLw&utm_content=250271722&utm_source=hs_automation',
    },
  ];
  return (
    <div className="relative h-[89px] w-[225px] border-black border-[1px] rounded-[4px]">
      <div className="absolute top-[8px] right-[8px]">
        <img src="/close.svg" alt="" />
      </div>
      <div className="flex flex-row p-[16px] gap-[8px]">
        <label htmlFor="my_modal_7" className="">
          <img src="/file.svg" alt="" onClick={() => console.log(1)} />
        </label>
        <p className="text-[14px] w-[130px]">
          Designing for Behavior Change_ Applying.pdf
        </p>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <DocViewer
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default FileTile;
