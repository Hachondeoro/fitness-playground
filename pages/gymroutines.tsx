import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { updateRoutineTab } from "lib/redux/slices/controls";
import type { RootState } from "lib/redux/store";
import React from "react";
import { Col } from "react-bootstrap";

import { MenWorkout, WomenWorkout } from "ui/gymRoutines/data-routines";
import { Workout } from "ui/gymRoutines/Gymroutines";
import { Tab, TabList, TabPanel, TabsProps } from "react-tabs";
import dynamic from "next/dynamic";

const Tabs = dynamic<TabsProps>(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false },
);

const GymRoutine = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const routineTab = useAppSelector((state: RootState) => state.controls.routineTab);

  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 gymRoutine paddingBottom">
      <Col md="10" className="mx-auto">
        <h1>Gym Routines</h1>
        <Tabs
          selectedIndex={routineTab}
          onSelect={(index) => {
            dispatch(updateRoutineTab(index));
          }}>
          <TabList className="reactTabs">
            <Tab>Men</Tab>
            <Tab>Women</Tab>
          </TabList>
          <TabPanel>{Workout(MenWorkout)}</TabPanel>
          <TabPanel>{Workout(WomenWorkout)}</TabPanel>
        </Tabs>

        <h2>Guidelines</h2>
        <p>
          The first two exercises of every workout are your key movements. These exercises are the ones you want to
          focus on improve the most.{" "}
        </p>
        <p>
          You will alternate between Workout A and Workout B three times per week on non-consecutive days. Therefore you
          will perform each workout 6 times over the course of 4 weeks.
        </p>
        <h3>Additional notes</h3>
        <p>RPTs(Reverse Pyramid Training):</p>
        <p>
          Your first work set will be for 5 repetitions. You will then reduce the weight by 10%, rest 3 minutes and
          perform your second set for 6 reps. You will then reduce the weight by 10% again, rest 3 minutes and perform
          your final set for 8 reps.
        </p>
      </Col>
    </div>
  );
};

export default GymRoutine;
