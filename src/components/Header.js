import React from "react";
import logo from "../img/logo.png";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { Navbar, NavbarBrand, Container, Image } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
    return (
        <Navbar bg="primary">
            <Container fluid >
                <NavbarBrand href="#" id="header-brand">
                    <Image src={logo} width={36} />
                    Przychodnia studencka Wielkie Serce
                    
                </NavbarBrand>
                <Sidebar>
                    <SidebarItem> Opcja 1 </SidebarItem>
                    <SidebarItem> Opcja 2 </SidebarItem>
                    <SidebarItem> Opcja 3 </SidebarItem>
                    <SidebarItem> Opcja 4 </SidebarItem>
                    <SidebarItem> Wyloguj </SidebarItem>
                </Sidebar>
            </Container>
        </Navbar>
    )
}

export default Header;
