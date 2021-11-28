import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calories from "./calories";
import DietBetter from "./diet-better";
import Fasting from "./fasting";
import GymRoutine from "./gymroutine";
import UserInput from "./userinput";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**/
export const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="text-center mx-auto">
      <Col className="mx-auto">
        <Content style={{ marginTop: "5vh" }}>
          <UserInput />
        </Content>
      </Col>
    </div>
  );
};
