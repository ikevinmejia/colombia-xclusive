import VideoComponent from "@/components/Core/Video/VideoComponent";
import HomeSwiper from "@/components/Home/HomeSwiper";
import ButtonCallToAction from "../Core/Button/ButtonCallToAction";
import Overlay from "../Core/Overlay/Overlay";

const WelcomSection = () => {
  return (
    <section className="w-full h-full relative">
    <Overlay/>
    <VideoComponent/>
    <div className="absolute w-full h-full top-0 gap-4 mx-auto flex flex-col justify-center items-center text-white">
        <h2 className="text-base md:text-xl">WELCOME TO</h2>
        <h2 className="text-5xl md:text-8xl font-bold">COLOMBIA</h2>
        <h1 className="text-base text-center md:text-xl">ACCESS TO MANSIONS, CARS & SECURITY, EXPERIENCES, & OUR VIP NETWORK</h1>
        <ButtonCallToAction/>
        <h2 className="text-xl">AS SEE ON</h2>
        <section className="w-full h-36  mx-auto overflow-hidden flex justify-center items-center">
            <HomeSwiper/>
        </section>
    </div>
  </section>
  )
}

export default WelcomSection