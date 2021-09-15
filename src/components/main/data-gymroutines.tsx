export const MenWorkout = {
  day1: {
    name: "Workout A: Chest, Shoulders, Triceps",
    exercises: [
      {
        name: "Incline Bench Press:\n 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/male-incline-barbell-press-front_5tlUnQ9.gif.mp4",
        video2: "/exerciseVideos/male-incline-barbell-press-side_VFI8X1n.gif.mp4",
      },
      {
        name: "Seating Militar Press:\n 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/ShoulderPress-Front-021316_TPQKWgi.gif.mp4",
        video2: "/exerciseVideos/ShoulderPress-Side-021316_N2pSfpL.gif.mp4",
      },
      {
        name: "Lateral Raises:\n 3 sets x 8-12 reps",
        video1: "/exerciseVideos/SideLateralRaise-Front-021316_FIRCTda.gif.mp4",
        video2: "/exerciseVideos/SideLateralRaise-Side-021316_dXMKKnp.gif.mp4",
      },
      {
        name: "Skull Crushers:\n 3 sets x 6-10 reps",
        video1: "/exerciseVideos/barbell-male-laytingtricepextensions-front.gif.mp4",
        video2: "/exerciseVideos/barbell-male-laytingtricepextensions-side.gif.mp4",
      },
    ],
  },
  day2: {
    name: "Workout B: Back, Biceps, Traps, Legs",
    exercises: [
      {
        name: "Deadlifts: 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/barbell-male-deadlift-front_fFMvXc0.gif.mp4",
        video2: "/exerciseVideos/barbell-male-deadlift-side_dnPUuTI.gif.mp4",
      },
      {
        name: "Weighted Chin ups: 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/bodyweight-male-pullup-front.gif.mp4",
        video2: "/exerciseVideos/bodyweight-male-pullup-side.gif.mp4",
      },
      {
        name: "Dumbbell Rows: 3 sets x 8-12 reps",
        video1: "/exerciseVideos/DumbbellRow-Front-021316.gif.mp4",
        video2: "/exerciseVideos/DumbbellRow-Side-021316.gif.mp4",
      },
      {
        name: "Barbell Curls: 3 sets x 6-10 reps",
        video1: "/exerciseVideos/Male-Barbell-BicepCurl-Front.gif.mp4",
        video2: "/exerciseVideos/Male-Barbell-BicepCurl-side.gif.mp4",
      },
    ],
  },
};
export const WomenWorkout = {
  day1: {
    name: "Workout A",
    exercises: [
      {
        name: "Deadlift:\n 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/male-incline-barbell-press-front_5tlUnQ9.gif.mp4",
        video2: "/exerciseVideos/male-incline-barbell-press-side_VFI8X1n.gif.mp4",
      },
      {
        name: "Seating Militar Press:\n 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/ShoulderPress-Front-021316_TPQKWgi.gif.mp4",
        video2: "/exerciseVideos/ShoulderPress-Side-021316_N2pSfpL.gif.mp4",
      },
      {
        name: "Lateral Raises:\n 3 sets x 8-12 reps",
        video1: "/exerciseVideos/SideLateralRaise-Front-021316_FIRCTda.gif.mp4",
        video2: "/exerciseVideos/SideLateralRaise-Side-021316_dXMKKnp.gif.mp4",
      },
      {
        name: "Skull Crushers:\n 3 sets x 6-10 reps",
        video1: "/exerciseVideos/barbell-male-laytingtricepextensions-front.gif.mp4",
        video2: "/exerciseVideos/barbell-male-laytingtricepextensions-side.gif.mp4",
      },
    ],
  },
  day2: {
    name: "Workout B: WOMEN",
    exercises: [
      {
        name: "Deadlifts: 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/barbell-male-deadlift-front_fFMvXc0.gif.mp4",
        video2: "/exerciseVideos/barbell-male-deadlift-side_dnPUuTI.gif.mp4",
      },
      {
        name: "Weighted Chin ups: 3 sets (RPT - 5, 6, 8)",
        video1: "/exerciseVideos/bodyweight-male-pullup-front.gif.mp4",
        video2: "/exerciseVideos/bodyweight-male-pullup-side.gif.mp4",
      },
      {
        name: "Dumbbell Rows: 3 sets x 8-12 reps",
        video1: "/exerciseVideos/DumbbellRow-Front-021316.gif.mp4",
        video2: "/exerciseVideos/DumbbellRow-Side-021316.gif.mp4",
      },
      {
        name: "Barbell Curls: 3 sets x 6-10 reps",
        video1: "/exerciseVideos/Male-Barbell-BicepCurl-Front.gif.mp4",
        video2: "/exerciseVideos/Male-Barbell-BicepCurl-side.gif.mp4",
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
    <Container>
      <Modal isOpen={modal} toggle={toggle} className="parentCard">
        <ModalHeader className="mx-auto text-center justify-content-center">
          <h2> Exercise Technique</h2>
        </ModalHeader>
        <ModalBody>
          <video className="exerciseVideo" autoPlay loop muted>
            <source src={initial.video1} type="video/mp4" />
          </video>
          <video className="exerciseVideoPIXEL" autoPlay loop muted>
            <source src={initial.video2} type="video/mp4" />
          </video>
          <video style={{width:"300px"}} autoPlay loop muted>
            <source src={initial.video2} type="video/mp4" />
          </video>
          <video style={{width:"300px"}} autoPlay>
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
      <ul>
        {routine.day1.exercises.map((item) => (
          <Row>
            <Col xs="10" md="8">
              <li>{item.name}</li>
            </Col>
            <Col xs="2" md="2">
              <BsFillCameraVideoFill onClick={() => videoModal(item)} />
            </Col>
          </Row>
        ))}
      </ul>
      <h2>{routine.day2.name}</h2>
      <ul>
        {routine.day2.exercises.map((item) => (
          <Row>
            <Col xs="10" md="8">
              <li>{item.name}</li>
            </Col>
            <Col xs="2" md="2">
              <BsFillCameraVideoFill onClick={() => videoModal(item)} />
            </Col>
          </Row>
        ))}
      </ul>
    </Container>
  );
};
