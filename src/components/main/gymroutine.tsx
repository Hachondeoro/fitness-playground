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
        <h2>Guidelines</h2>
        <p>
          The first two exercises of every workout are your key movements. These
          exercises are the ones you want to focus on improve the most.{" "}
        </p>
        <p>
          You will alternate between Workout A and Workout B three times per
          week on non-consecutive days. Therefore you will perform each workout
          6 times over the course of 4 weeks.
        </p>
        <h2>Workout A: Chest, Shoulders, Triceps</h2>
        <ul>
          <li>Incline Bench Press: 3 sets (RPT - 5, 6, 8)</li>
          <li>Seating Militar Press: 3 sets (RPT - 5, 6, 8)</li>
          <li>Lateral Raises: 3 sets x 8-12 reps</li>
          <li>Skull Crushers: 3 sets x 6-10 reps</li>
        </ul>
        <h2>Workout B: Back, Biceps, Traps, Legs</h2>
        <ul>
          <li>Deadlifts: 3 sets (RPT - 5, 6, 8)</li>
          <li>Weighted Chin ups: 3 sets (RPT - 5, 6, 8)</li>
          <li>Dumbbell Rows: 3 sets x 8-12 reps</li>
          <li>Barbell Curls: 3 sets x 6-10 reps</li>
        </ul>
        <h3>Additional notes</h3>
        <p>RPTs(Reverse Pyramid Training):</p>
        <p>
          Your first work set will be for 5 repetitions. You will then reduce
          the weight by 10%, rest 3 minutes and perform your second set for 6
          reps. You will then reduce the weight by 10% again, rest 3 minutes and
          perform your final set for 8 reps.
        </p>
      </Col>
    </div>
  );
};

export default GymRoutine;
