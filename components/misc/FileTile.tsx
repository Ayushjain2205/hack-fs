import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

interface FileTileProps {
  id: number;
  name: string;
  onRemove: (id: number) => void;
}

const FileTile: React.FC<FileTileProps> = ({ id, name, onRemove }) => {
  const docs = [
    {
      uri: 'https://20572069.fs1.hubspotusercontent-eu1.net/hubfs/20572069/PDF%20Guides/Blueprint%20-%20A%20Web3%20Games%20Guide%20by%20Polygon%20Labs%20v1.0.pdf?utm_campaign=%5BGuide%5D+Gaming+Guide+%7C+Q1+2023+%7C+MQL&utm_medium=email&_hsmi=250271722&_hsenc=p2ANqtz-_QGor9vP2G6fX-R5GQD0FdzS7XLutmQmNwFgdduN15CcCww2YT3WmLTRtY8-Aa6yIPCjKy-UpiFXpTBqVGtYvq-teZLw&utm_content=250271722&utm_source=hs_automation',
    },
  ];

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="relative h-[89px] w-[225px] border-black border-[1px] rounded-[4px]">
      <div className="absolute top-[8px] right-[8px]">
        <img
          className="cursor-pointer"
          src="/close.svg"
          alt=""
          onClick={handleRemove}
        />
      </div>
      <div className="flex flex-row p-[16px] gap-[8px]">
        <label htmlFor={`doc_modal_${id}`} className="cursor-pointer">
          <img src="/file.svg" alt="" />
        </label>
        <p className="text-[14px] w-[130px]">{name}</p>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`doc_modal_${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <DocViewer
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
        <label className="modal-backdrop" htmlFor={`doc_modal_${id}`}>
          Close
        </label>
      </div>
    </div>
  );
};

export default FileTile;
