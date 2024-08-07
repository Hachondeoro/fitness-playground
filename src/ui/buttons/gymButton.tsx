import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { updateMainTab, updateRoutineTab } from "lib/redux/slices/controls";
import type { RootState } from "lib/redux/store";
import React from "react";
import { Button } from "react-bootstrap";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

const GymButton = () => {
  const mainTab = useAppSelector((state: RootState) => state.controls.mainTab);
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const dispatch = useAppDispatch();

  const gotoGymroutines = () => {
    dispatch(updateMainTab(1));
    setTimeout(() => {
      scroll.scrollTo(0, { duration: 1200, delay: 0, smooth: "easeInOutCubic" });
      sex === "male" ? dispatch(updateRoutineTab(0)) : dispatch(updateRoutineTab(1));
    }, 100);
  };
  return (
    <>
      <Button onClick={() => gotoGymroutines()} className="gymButton">
        {/* <GiBiceps color="#ffffff" size={20} className="gymIcon" /> */}
        <p className="gymTitle">Gym routine</p>
      </Button>
    </>
  );
};

export default GymButton;
