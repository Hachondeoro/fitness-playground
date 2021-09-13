import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { updateMainTab, updateRoutineTab } from "@redux/slices/controls";
import type { RootState } from "@redux/store";
import React from "react";
import { Button } from "react-bootstrap";
import { CgGym } from "react-icons/cg";
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
      sex == true ? dispatch(updateRoutineTab(0)) : dispatch(updateRoutineTab(1));
    }, 100);
  };
  return (
    <>
      <Button onClick={() => gotoGymroutines()} className="gymButton">
        <CgGym color="#ffffff" size={36} className="gymIcon" />
        <p className="gymTitle">Gym time!</p>
      </Button>
    </>
  );
};

export default GymButton;
