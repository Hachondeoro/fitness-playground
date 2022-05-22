import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import type { RootState } from "lib/redux/store";
import React from "react";
import { Col } from "react-bootstrap";
import S from "ui/buttons/superscript";

const MaintainSummary = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="gymRoutine paddingBottom" style={{ fontSize: "0.9em" }}>
      <Col md="8" className="mx-auto">
        <h2>Maintain</h2>
      </Col>
    </div>
  );
};

export default MaintainSummary;
