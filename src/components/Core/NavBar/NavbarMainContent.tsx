import { Button, NavbarContent, NavbarItem, NavbarMenu } from "@nextui-org/react";

import Link from "next/link";
import MenuItem from "./MenuItem";

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

const NavbarMainContent = () => {
  return (
    <>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <MenuItem menuItems={menuItems}/>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">

            <NavbarItem>
                <Button as={Link} href="https://wa.me/573009891646" color="primary" target="_blank" >
                    Reserve now
                </Button>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
            <MenuItem menuItems={menuItems}/>
            <NavbarItem>
                <Button as={Link} href="https://wa.me/573009891646" color="primary" target="_blank" >
                    Reserve now
                </Button>
            </NavbarItem>
        </NavbarMenu>
    </>
  )
}

export default NavbarMainContent