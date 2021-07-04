import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

interface IProps {
    message: string;
}

const Tooltip: React.FC<IProps> = ({ message }) => {
    return (
        <div>
            <a data-tip={message}>
                {" "}
                <BsFillInfoCircleFill
                    size={16}
                    style={{
                        float: "right",
                        marginTop: "0.6em",
                        color: "rgb(31, 113, 184)",
                    }}
                />{" "}
            </a>
            <ReactTooltip
                place="top"
                type="success"
                effect="float"
                multiline={true}
            />
        </div>
    );
};

export default Tooltip;
