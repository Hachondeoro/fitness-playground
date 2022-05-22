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
        <Row key={item.video1}>
          <Col xs="10" md="8">
            <li>{item.name}</li>
          </Col>
          <Col xs="2" md="2">
            <BsFillCameraVideoFill color={"#7469F7"} onClick={() => videoModal(item)} style={{ cursor: "pointer" }} />
          </Col>
        </Row>
      ))}

      <h2>{routine.day2.name}</h2>

      {routine.day2.exercises.map((item) => (
        <Row key={item.video1}>
          <Col xs="10" md="8">
            <li>{item.name}</li>
          </Col>
          <Col xs="2" md="2">
            <BsFillCameraVideoFill color={"#7469F7"} onClick={() => videoModal(item)} style={{ cursor: "pointer" }} />
          </Col>
        </Row>
      ))}
    </>
  );
};
