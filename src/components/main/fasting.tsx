import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import React from "react";
import { Col } from "react-bootstrap";

const GymRoutine: React.FC = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 gymRoutine">
      <Col md="6" className="mx-auto">
        <h2>What to do while Fasting</h2>
        <p>
          The number one thing you need to remember to do is to drink a lot of
          fluids; this will help you avoid getting thirsty, which is often
          mistaken as hunger.
        </p>
        <p>
          First, in the morning start your day with a large glass of water.
          Black coffee and tea are also allowed during a fast. You may also find
          diet colas useful, and don’t worry about artificial sweeteners during
          your fast, in my opinion the health benefits of fasting far out weigh
          any worry about the intake of artificial sweeteners. Of course, this
          is your personal decision.
        </p>
        <p>
          You may also find it helpful to stay busy while fasting. John Barban,
          Varsity Strength Coach has been experimenting with fasting for the
          last 6 months. Recently he said that, “fasting is easiest when I’m
          busy. I think if people’s lives were a little more exciting they
          wouldn’t need to eat so much to get some joy out of their day.” This
          statement is very true.
        </p>
        <h2>References</h2>
        <p>
          <strong>Eat, Stop, Eat.</strong> Brad Pilon, 2007
        </p>
      </Col>
    </div>
  );
};

export default GymRoutine;
