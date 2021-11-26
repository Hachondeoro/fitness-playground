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
      <Col md="10" className="mx-auto">
        <h2>THE PROBLEM</h2>
        <p>
          This is a project focused on improving the health and fitness of university students in
          the Northern Territory. Current solutions or fitness dedicated websites make it hard to
          get a solid grasp of what to do, hiding behind 20-30 pages of information, or overloading
          with technical knowledge the fitness enthusiast to make them spend days or months trying
          to learn and understand what they have to do. A quick search on Google with the terms:
          custom diet generator, and an exploration of the first 5 pages will present the person
          with thousands of words of content to learn and understand, without giving a final
          detailed diet to the person, having that person to bounce to another website for further
          information. Furthermore, most of fitness/nutrition websites generated diets don't provide
          an adequate amount of protein that will sustain healthy and consistent weight loss and
          instead, they are limited to just reduce the overall amount of calories consumed per day.
          Customization or options of what the user wants to eat are also not available.
        </p>
        <p>
          Another problem that is currently present is that the websites present only the guidelines
          to formulate the diet, leaving the hard work of doing even more research for the person to
          finally get a very customized diet that will suit his/her own needs. This makes the
          fitness journey confusing to the average student that wants to start working on its health
          and exercises.
        </p>
        <h2>THE SOLUTION</h2>
        <p>
          This project initiative makes all this complicated and tedious process straight forward
          and easy to understand. Diets will be custom generated based on the user input, and will
          provide a step by step diet already customized to the person goals. One key feature is the
          ability to choose between different foods or nutrients that the person wants to eat,
          making the dieting process much more enjoyable (foods are currently restricted to only
          healthy choices). All of this is presented in a SPA (Single Page Application), powered by
          React and Javascript.
        </p>
      </Col>
    </div>
  );
};
export default GymRoutine;
