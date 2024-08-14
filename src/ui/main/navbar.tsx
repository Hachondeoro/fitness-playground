import React, { useState } from "react";
import { Col, Container, Navbar as NavbarBS } from "react-bootstrap";
import { Layout } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdEmojiFoodBeverage, MdFoodBank, MdInput } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { RiInformationFill } from "react-icons/ri";
import { useAppSelector } from "lib/redux/hooks";
import { RootState } from "lib/redux/store";
// import serviceLine from "@public/shapes/service-line-1-1.png";
// import galleryDot from "@public/shapes/gallery-dot-1-1.png";

const { Sider } = Layout;

export const Navbar = ({ children }) => {
  const weight = useAppSelector((state: RootState) => state.bodydata.weight);
  const height = useAppSelector((state: RootState) => state.bodydata.height);
  const age = useAppSelector((state: RootState) => state.bodydata.age);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const MobileLink = ({ children, href, ...props }) => (
    <NavbarBS.Brand>
      <Link href={href} {...props} passHref legacyBehavior>
        <a className={router.pathname == href ? "activeTab" : "inactiveTab"}>{children}</a>
      </Link>
    </NavbarBS.Brand>
  );
  const DesktopLink = ({ children, href, ...props }) => (
    <Link href={href} {...props} passHref legacyBehavior>
      <a className={router.pathname == href ? "activeTab" : "inactiveTab"}>{children}</a>
    </Link>
  );

  return (
    <div className="text-center">
      <Col xs={10} md={12} className="mx-auto">
        <NavbarBS fixed="bottom" bg="light" expand="lg" className="navbarMobile">
          <Container>
            <MobileLink href="/">
              <MdInput size={36} />
            </MobileLink>
            <MobileLink href="/diets">
              <MdFoodBank size={36} />
            </MobileLink>
            <MobileLink href="/gymroutines">
              <GiGymBag size={36} />
            </MobileLink>
            <MobileLink href="/fasting">
              <MdEmojiFoodBeverage size={36} />
            </MobileLink>
            <MobileLink href="/about">
              <RiInformationFill size={36} />
            </MobileLink>
          </Container>
        </NavbarBS>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="DesktopNavbar">
              {/*<p>Weight: {weight}</p>*/}
              {/*<p>Height: {height}</p>*/}
              {/*<p>Age: {age}</p>*/}
              {/*<p>Calories: {Number(calories).toFixed(0)}</p>*/}
              <DesktopLink href="/">
                <MdInput size={72} />
              </DesktopLink>
              <DesktopLink href="/diets">
                <MdFoodBank size={72} />
              </DesktopLink>
              <DesktopLink href="/gymroutines">
                <GiGymBag size={72} />
              </DesktopLink>
              <DesktopLink href="/fasting">
                <MdEmojiFoodBeverage size={72} />
              </DesktopLink>
              <DesktopLink href="/about">
                <RiInformationFill size={72} />
              </DesktopLink>
            </div>
          </Sider>

          {/*<img src={serviceLine.src} alt="" className="service-one__shape-1" />*/}
          {/*<img src={galleryDot.src} alt="" className="gallery-home-two__dots" />*/}
          <Col md={9} className="mx-auto sidebarFix">
            {children}
          </Col>
        </Layout>
      </Col>
    </div>
  );
};
