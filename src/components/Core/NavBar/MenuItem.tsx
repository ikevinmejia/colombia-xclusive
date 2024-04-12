import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    menuItems: {
        title: string,
        path:string,
    }[]
}

const MenuItem = ({menuItems}:Props) => {
    const pathName = usePathname();

  return (
    <>
    {
        menuItems.map(item => (
            <NavbarItem key={item.title}
             className={`w-min px-2 py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-primary  transition-colors
             ${item.path === pathName ? "border-primary " : ""}`
             }
            >
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