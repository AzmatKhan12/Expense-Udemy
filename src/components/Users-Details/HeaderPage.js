import React from "react";
import { Nav, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HeaderPage = (props)=>{
     return (
      <Card className="bg-lite text-black">
        <Card.Header>
          {props.heading}
          <Nav className="justify-content-end" >
            <Card className="bg-dark text-white p-1">
              <Nav.Item>
                {props.title}
                <NavLink style={{ textDecoration: "none" }} to= {props.link}>
                  {props.linkTitle}
                </NavLink>
              </Nav.Item>
            </Card>
          </Nav>
        </Card.Header>
      </Card>
    );
}

export default HeaderPage;