import React, { useEffect, useState } from "react";
import { Col, Row, Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { MdInput } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { RiInformationFill } from "react-icons/ri";

const { Header, Content, Footer, Sider } = Layout;
/**/
export const Navbar: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="text-center mx-1">
      <Col md="8" className="mx-auto">
        <NavbarBS fixed="bottom" bg="light" expand="lg" className="navbarMobile">
          <Container>
            <NavbarBS.Brand href="/">
              <MdInput size={36} color={"#746af7"} />
            </NavbarBS.Brand>
            <NavbarBS.Brand href="/gymroutines">
              <GiGymBag size={36} color={"#746af7"} />
            </NavbarBS.Brand>
            <NavbarBS.Brand href="/fasting">
              <MdEmojiFoodBeverage size={36} color={"#746af7"} />
            </NavbarBS.Brand>
            <NavbarBS.Brand href="/about">
              <RiInformationFill size={36} color={"#746af7"} />
            </NavbarBS.Brand>
          </Container>
        </NavbarBS>
        <Col md="8" className="mx-auto">
          {children}
        </Col>
      </Col>
    </div>
  );
};
