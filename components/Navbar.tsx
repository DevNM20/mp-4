"use client";
import Link from "next/link";
import styled from "styled-components";

const NavBarContainer = styled.nav`
    background-color: #0b0b0b;
    padding: 15px;
    display: flex;
    justify-content: center;
`;

const NavLink = styled(Link)`
    color: #c99700;
    text-decoration: none;
    font-weight: bold;
`;

export default function Navbar() {
    return (
        <NavBarContainer>
            <NavLink href="/top-artists"> Top Artists </NavLink>
            <NavLink href="/top-tracks"> Top Tracks </NavLink>
        </NavBarContainer>
    );
}
