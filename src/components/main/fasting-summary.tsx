import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import React from "react";
import { Col } from "react-bootstrap";
import S from "@components/button/superscript";

const FastingSummary: React.FC = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="gymRoutine paddingBottom" style={{ fontSize: "0.9em" }}>
      <Col md="8" className="mx-auto">
        <h1>Crash course on Fasting</h1>
        {/* prettier-ignore */}
        <div>
          <li>Fasting ends around lunch time. E.g. 1 or 2pm</li>
          <li>The last meal of the previous day should be between 8pm to 10pm</li>
          <li>While fasting, you should have 1 or 2 cups of coffee during the morning to further activate the fat burning process<S n={1}/>.</li>
          <li>During a fat burning diet, the amount of protein consumed should be high.  It should be between 100-140 grams protein max<S n={2}/>. This is because protein makes you feel fuller and therefore you eat less(among other benefits).</li>
          <li>During the feeding period (after lunch, between 2pm to 10pm), as prescribed by the diet above, eat plenty of veggies. </li>
          <li>Non guilty snacks that help quite a lot with dieting include diet cola (I prefer <a target="_blank" href="https://www.woolworths.com.au/shop/productdetails/7985/pepsi-max-bottle">Pepsi Max</a>), <a target="_blank" href="https://www.woolworths.com.au/shop/productdetails/5678/aeroplane-jelly-lite-orange-mango">
            Diet Jelly</a> (tastes amazing and makes you quite full) and some variations of <a target="_blank" href="https://www.woolworths.com.au/shop/productdetails/830130/slendier-noodles-style">Konjac Noodles</a> (basically no calories)</li>
        </div>
        <h2>References</h2>
        <ol>
          <li>
            Acheson, K J et al. “Caffeine and coffee: their influence on metabolic rate and substrate utilization in
            normal weight and obese individuals.” <em>The American journal of clinical nutrition</em> vol. 33,5 (1980):
            989-97. doi:10.1093/ajcn/33.5.989
          </li>
          <li>
            Pikosky, Matthew A et al. “Increased protein maintains nitrogen balance during exercise-induced energy
            deficit.” <em>Medicine and science in sports and exercise</em> vol. 40,3 (2008): 505-12.
            doi:10.1249/MSS.0b013e31815f6643
          </li>
        </ol>
      </Col>
    </div>
  );
};

export default FastingSummary;
