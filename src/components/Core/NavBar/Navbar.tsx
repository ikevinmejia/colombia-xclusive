'use client'

import { Button, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NavbarNextUI } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { IoMenuSharp } from "react-icons/io5";
import logo from '../../../../public/img/logo.png';

const menuItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Experiences',
        path: '/experiences'
    },
    {
        title: 'about Us',
        path: '/about'
    },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <NavbarNextUI onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            // icon={<IoMenuSharp />}
            className="sm:hidden"
            />
            <NavbarBrand className="w-full h-full">
                <Link href={'/'} className="h-full overflow-hidden" >
                    <Image src={logo} alt={"colombiaXclusive logo"} className="w-full h-full" />
                </Link>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {
                menuItems.map(item => (
                    <NavbarItem key={item.title}>
                        <Link href={item.path}>
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))
            }
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">

            <NavbarItem>
                <Button as={Link} href="https://wa.me/573009891646" color="primary" target="_blank" >
                    Reserve now
                </Button>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
        {
                menuItems.map(item => (
                    <NavbarMenuItem key={item.title}>
                        <Link href={item.path}>
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))
            }
            <NavbarItem>
                <Button as={Link} href="https://wa.me/573009891646" color="primary" target="_blank" >
                    Reserve now
                </Button>
            </NavbarItem>
        </NavbarMenu>
    </NavbarNextUI>
  )
}

export default Navbar