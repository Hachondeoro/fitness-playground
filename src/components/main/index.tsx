import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calories from "./calories";
import DietBetter from "./diet-better";
import Fasting from "./fasting";
import GymRoutine from "./gymroutine";
import UserInput from "./userinput";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**/
export const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="text-center mx-1">
      <Col className="mx-auto">
        <Content style={{ marginTop: "5vh" }}>
          <UserInput />
          <DietBetter />
        </Content>
        {/*<TabPanel>*/}

        {/*</TabPanel>*/}
        {/*<TabPanel>*/}
        {/*  <Fasting/>*/}
        {/*</TabPanel>*/}
      </Col>
    </div>
  );
};
