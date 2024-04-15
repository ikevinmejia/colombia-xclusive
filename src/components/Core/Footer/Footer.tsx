import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io'
import { IoCalendar, IoLocation, IoMail } from 'react-icons/io5'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='w-full flex flex-col flex-wrap justify-between border-t-[20px] border-t-primary'>
        {/* columnas de información */}
        <section className='w-11/12 sm:w-full my-6 mx-auto flex flex-col sm:flex-row justify-evenly gap-5'>
        <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Contact us</h3>
                <ul className='flex flex-col gap-2'>
                    <li> <Link href='https://wa.me/573009891646' className='flex gap-2 justify-start items-center'><IoLogoWhatsapp size={20} className='text-slate-700'/> +57 300 989 1446</Link></li>
                    <li className='flex gap-2 justify-start items-center'> <IoMail size={20} className='text-slate-700'/> Colombiaxclusive@gmail.com</li>
                    <li className='flex gap-2 justify-start items-center'> <IoLocation size={20} className='text-slate-700'/> Medellín, Colombia</li>
                    <li className='flex gap-2 justify-start items-center'> <IoCalendar size={20} className='text-slate-700'/> MON - SAT 9am - 7pm</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Company</h3>
                <Link href='/about'>About Us</Link>
                <Link href='/terms'>Terms of Service</Link>
                <Link href='/privacy'>Privacy</Link>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Follow Us</h3>
                <Button isIconOnly as={Link} href='https://www.instagram.com/thecolombiaxclusive/' color="default" aria-label="Instagram" target='_blank'>
                    <IoLogoInstagram size={28} />
                </Button>
            </div>
        </section>

        <section className='bg-slate-700 py-4'>
            <p className='text-center text-white'>All rights reserved {year}</p>
        </section>

    </footer>
  )
}

export default Footer