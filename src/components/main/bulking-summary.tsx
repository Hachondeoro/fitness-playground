import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import React from "react";
import { Col } from "react-bootstrap";
import S from "@components/button/superscript";

const BulkingSummary: React.FC = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="gymRoutine paddingBottom">
      <Col md="8" className="mx-auto">
        <h1>Crash course on Bulking</h1>
        {/* prettier-ignore */}
        <div>
          <li>Use plenty of compound exercises and free weights</li>
          <li>Train no more than 4 times a week in the gym</li>
          <li>On the days you train, just add 500-600 calories extra to any meal, for clean muscle gain (and not fat!)</li>
          <li>It doesn't matter if you have 2 meals a day, or 6 meals, the effect is the same, <strong>so don't stress about it</strong><S n={1}/>.</li>
          <li>You should aim to consume 1.6g protein/kg bodyweight. This means if you weight 75 kg, you should consume 120 grams of protein. Larger amounts than 120 grams (some famous authors or websites suggest 1.8 to 2.2 or more gr protein/kg) are non-sense<S n={2}/>.</li>
        </div>
        <h2>References</h2>
        <ol>
          <li>
            Arnal, M A et al. “Protein feeding pattern does not affect protein retention in young women.”{" "}
            <em>The Journal of nutrition</em> vol. 130,7 (2000): 1700-4. doi:10.1093/jn/130.7.1700
          </li>
          <li>
            Phillips, Stuart M, and Luc J C Van Loon. “Dietary protein for athletes: from requirements to optimum
            adaptation.” <em>Journal of sports sciences</em> vol. 29 Suppl 1 (2011): S29-38.
            doi:10.1080/02640414.2011.619204
          </li>
        </ol>
      </Col>
    </div>
  );
};

export default BulkingSummary;
