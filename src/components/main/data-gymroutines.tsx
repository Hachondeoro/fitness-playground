// prettier-ignore
export const MenWorkout = {
  day1: {
    name: "Workout A: Chest, Shoulders, Triceps",
    exercises: [
      {
        name: "Incline Bench Press:\n     3 sets (RPT - 5, 6, 8)",
        video1: "/gym/male-incline-barbell-press-front.m4v", video2: "/gym/male-incline-barbell-press-side.m4v",
      },
      {
        name: "Seating Militar Press:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/ShoulderPress-Front.m4v", video2: "/gym/ShoulderPress-Side.m4v",
      },
      {
        name: "Lateral Raises:\n      3 sets x 8-12 reps",
        video1: "/gym/SideLateralRaise-Front.m4v", video2: "/gym/SideLateralRaise-Side.m4v",
      },
      {
        name: "Skull Crushers:\n      3 sets x 6-10 reps",
        video1: "/gym/barbell-male-laytingtricepextensions-front.m4v",
        video2: "/gym/barbell-male-laytingtricepextensions-side.m4v",
      },
    ],
  },
  day2: {
    name: "Workout B: Back, Biceps, Traps, Legs",
    exercises: [
      {
        name: "Deadlifts:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/barbell-male-deadlift-front.m4v", video2: "/gym/barbell-male-deadlift-side.m4v",
      },
      {
        name: "Weighted Chin ups:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/bodyweight-male-pullup-front.m4v", video2: "/gym/bodyweight-male-pullup-side.m4v",
      },
      {
        name: "Dumbbell Rows:\n      3 sets x 8-12 reps",
        video1: "/gym/DumbbellRow-Front.m4v", video2: "/gym/DumbbellRow-Side.m4v",
      },
      {
        name: "Barbell Curls:\n      3 sets x 6-10 reps",
        video1: "/gym/Male-Barbell-BicepCurl-Front.m4v", video2: "/gym/Male-Barbell-BicepCurl-side.m4v",
      },
    ],
  },
};
// prettier-ignore
export const WomenWorkout = {
  day1: {
    name: "Workout A: Women",
    exercises: [
      {
        name: "Incline Bench Press:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/male-incline-barbell-press-front.m4v", video2: "/gym/male-incline-barbell-press-side.m4v",
      },
      {
        name: "Seating Militar Press:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/ShoulderPress-Front.m4v", video2: "/gym/ShoulderPress-Side.m4v",
      },
      {
        name: "Lateral Raises:\n      3 sets x 8-12 reps",
        video1: "/gym/SideLateralRaise-Front.m4v", video2: "/gym/SideLateralRaise-Side.m4v",
      },
      {
        name: "Skull Crushers:\n      3 sets x 6-10 reps",
        video1: "/gym/barbell-male-laytingtricepextensions-front.m4v",
        video2: "/gym/barbell-male-laytingtricepextensions-side.m4v",
      },
    ],
  },
  day2: {
    name: "Workout B: Women",
    exercises: [
      {
        name: "Deadlifts:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/barbell-male-deadlift-front.m4v", video2: "/gym/barbell-male-deadlift-side.m4v",
      },
      {
        name: "Weighted Chin ups:\n      3 sets (RPT - 5, 6, 8)",
        video1: "/gym/bodyweight-male-pullup-front.m4v", video2: "/gym/bodyweight-male-pullup-side.m4v",
      },
      {
        name: "Dumbbell Rows:\n      3 sets x 8-12 reps",
        video1: "/gym/DumbbellRow-Front.m4v", video2: "/gym/DumbbellRow-Side.m4v",
      },
      {
        name: "Barbell Curls:\n      3 sets x 6-10 reps",
        video1: "/gym/Male-Barbell-BicepCurl-Front.m4v", video2: "/gym/Male-Barbell-BicepCurl-side.m4v",
      },
    ],
  },
};
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const Workout = (routine) => {
  const [modal, setModal] = useState(false);
  const [initial, setInitial] = useState({ video1: "random", video2: "random" });
  const toggle = () => setModal(!modal);
  const videoModal = (data) => {
    setInitial(data);
    toggle();
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="parentCard">
        <ModalHeader className="mx-auto text-center justify-content-center">
          <h2> Exercise Technique</h2>
        </ModalHeader>
        <ModalBody>
          <video className="exerciseVideo" autoPlay loop muted>
            <source src={initial.video1} type="video/mp4" />
          </video>
          <video className="exerciseVideo" autoPlay loop muted>
            <source src={initial.video2} type="video/mp4" />
          </video>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} className="statsButton">
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <h2>{routine.day1.name}</h2>

      {routine.day1.exercises.map((item) => (
        <Row>
          <Col xs="10" md="8">
            <li>{item.name}</li>
          </Col>
          <Col xs="2" md="2">
            <BsFillCameraVideoFill
              color={"#7469F7"}
              onClick={() => videoModal(item)}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      ))}

      <h2>{routine.day2.name}</h2>

      {routine.day2.exercises.map((item) => (
        <Row>
          <Col xs="10" md="8">
            <li>{item.name}</li>
          </Col>
          <Col xs="2" md="2">
            <BsFillCameraVideoFill
              color={"#7469F7"}
              onClick={() => videoModal(item)}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};
