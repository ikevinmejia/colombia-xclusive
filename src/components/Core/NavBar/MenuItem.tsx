import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
    menuItems: {
        title: string,
        path:string,
    }[]
}

const MenuItem = ({menuItems}:Props) => {
  return (
    <>
    {
        menuItems.map(item => (
            <NavbarItem key={item.title}>
                <Link href={item.path}>
                    {item.title}
                </Link>
            </NavbarItem>
        ))
    }
    </>
  )
}

export default MenuItem