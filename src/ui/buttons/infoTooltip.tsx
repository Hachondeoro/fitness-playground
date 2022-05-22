import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
interface Message {
  message: string;
}

const InfoTooltip = (props: Message): React.ReactElement => {
  return (
    <>
      <div className="infoTooltip" data-tip={props.message} data-for="happyFace">
        <AiFillInfoCircle size={24} color="#085EA9" />
      </div>
      <ReactTooltip id="happyFace" html={true} />
    </>
  );
};

export default InfoTooltip;
