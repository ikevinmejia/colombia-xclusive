import { videoData } from '@/data/home/video/videoData'
import Image from 'next/image'
import barberLogo from '../../../public/img/barbero-millonario-logo.png'
import ButtonCallToAction from '../Core/Button/ButtonCallToAction'
import VideoComponent from '../Core/Video/VideoComponent'

const BarberHomeSection = () => {
  return (
    <section className="w-full h-full relative">
    <VideoComponent video={videoData.barberoMillonarioVideo}/>
    <div className="absolute w-full h-full top-0 gap-4 mx-auto flex flex-col justify-center items-center text-white">
        <Image
            src={barberLogo}
            alt='Logo barbero millonario'
            width={400}
            height={400}
        />
        <p className="text-base text-center w-11/12 ">AUTOMATICALLY SAVE 50% WITH THE #1 VIP BARBER EXPERIENCE IN MEDELLIN AS OUR CLIENT.</p>
        <ButtonCallToAction href='https://barberobillonario.com/' label='VISIT WEBSITE' variant='bordered' className='text-white' />
    </div>
  </section>
  )
}

export default BarberHomeSection