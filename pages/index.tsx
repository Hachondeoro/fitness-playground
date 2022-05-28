import React from "react";
import UserInput from "ui/main/userinput";
import { Layout } from "antd";
import { Col } from "react-bootstrap";
import CaloriesInfo from "ui/main/caloriesInfo";

const { Content } = Layout;

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 mx-auto">
      <Col className="mx-auto" lg={6}>
        <Content style={{ marginTop: "5vh" }}>
          <UserInput />
          {/*<CaloriesInfo/>*/}
        </Content>
      </Col>
    </div>
  );
};

export default Home;
