'use client'
import { IDataImages } from "@/interfaces/data/interfacesData";
import Image from "next/image";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
    images:IDataImages[]
}

const HomeSwiper = ({images}:Props) => {
  return (
    <Swiper
    slidesPerView={5}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay]}
    className="mySwiper"
    wrapperClass="items-center mx-auto gap-10 mt-10 "
  >
    {
        images.map(img => (
            <SwiperSlide key={img.id} className="flex justify-center items-center">
                <Image src={img.image} alt={img.image} width={200} height={200} />
            </SwiperSlide>
        ))
    }
  </Swiper>
  )
}

export default HomeSwiper