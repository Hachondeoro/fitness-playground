import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import type { RootState } from "lib/redux/store";
import React from "react";
import { Col } from "react-bootstrap";

const About = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 gymRoutine paddingBottom">
      <Col md="10" className="mx-auto">
        <h2>MOTIVATION</h2>
        <p>
          This is a project focused on connecting, creating and supporting safe, sustainable and vibrant communities in
          the Northern Territory through the improvement of people's health and fitness levels .This is achieved by
          providing high quality tailored meal plans and gym workout routines delivered at no extra cost to the people
          in the Northern Territory. Current solutions or fitness dedicated websites make it hard to get a solid grasp
          of what to do, hiding behind 20-30 pages of information, or overloading with technical knowledge the fitness
          enthusiast to make them spend days or months trying to learn and understand what they have to do to lose
          weight or gain muscle.
        </p>
        <h2>THE SOLUTION</h2>
        <p>
          This is a project focused on connecting, creating and supporting safe, sustainable and vibrant communities in
          the Northern Territory through the improvement of people's health and fitness levels .This is achieved by
          providing high quality tailored meal plans and gym workout routines delivered at no extra cost to the people
          in the Northern Territory. Current solutions or fitness dedicated websites make it hard to get a solid grasp
          of what to do, hiding behind 20-30 pages of information, or overloading with technical knowledge the fitness
          enthusiast to make them spend days or months trying to learn and understand what they have to do to lose
          weight or gain muscle.
        </p>
      </Col>
    </div>
  );
};
export default About;
