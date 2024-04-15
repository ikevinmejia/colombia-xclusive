import { welcomeFinishHomePartners } from "@/data/home/img/homeImageLocalPaths"
import ButtonCallToAction from "../Core/Button/ButtonCallToAction"
import HomeSwiper from "./HomeSwiper"

const StartExperienceHomeSection = () => {
  return (
    <section className="w-full min-h-dvh max-h-max bg-colombiaStartYourXperience bg-no-repeat relative">
    <div className="w-full min-h-dvh max-h-max mx-auto py-8 lg:py-0 flex flex-col justify-center items-center bg-black bg-opacity-55">
        <div className="w-11/12 sm:w-8/12 mx-auto flex flex-col justify-start items-start gap-4 text-white">
            <h2 className="text-5xl md:text-8xl font-bold text-left">
            START YOUR XPERIENCE IN COLOMBIA!
            </h2>
            <p className="max-w-5xl text-xl">
            Come and explore Colombia with us! We take care of all the planning, reservations, experiences, tours, food, partying, and more! Everything is catered to your preferences, and your security is our top priority! There&apos;s a reason why so many VIPs only work with us! Reserve your experience today
            </p>
            <ButtonCallToAction href="https://wa.me/573009891646" label='CONTACT US' variant='bordered' className='text-white' />
        </div>
        <section className="w-full h-36  mx-auto mt-10 overflow-hidden flex justify-center items-center">
            <HomeSwiper images={welcomeFinishHomePartners}/>
        </section>
    </div>
</section>
  )
}

export default StartExperienceHomeSection