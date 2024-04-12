'use client'

import { NavbarBrand, NavbarContent, NavbarMenuToggle, Navbar as NavbarNextUI } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../../../public/img/logo.png';
import NavbarMainContent from "./NavbarMainContent";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <NavbarNextUI onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
            />
            <NavbarBrand className="w-full h-full">
                <Link href={'/'} className="h-full overflow-hidden" >
                    <Image src={logo} alt={"colombiaXclusive logo"} className="w-full h-full" />
                </Link>
            </NavbarBrand>
        </NavbarContent>
        <NavbarMainContent/>
    </NavbarNextUI>
  )
}

export default Navbar