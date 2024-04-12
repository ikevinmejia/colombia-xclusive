'use client'
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const imgData = [
    {
        id: '1',
        label: 'Entrepeneur',
        image: '/img/alliances/alliance1.png',
    },
    {
        id: '2',
        label: 'Cabronazi',
        image: '/img/alliances/alliance2.png',
    },
    {
        id: '3',
        label: "Q'Hubo",
        image: '/img/alliances/alliance3.png',
    },
    {
        id: '4',
        label: 'La Weekly',
        image: '/img/alliances/alliance4.png',
    },
    {
        id: '5',
        label: 'Bloomberg',
        image: '/img/alliances/alliance5.png',
    },
    {
        id: '6',
        label: 'medellin guru',
        image: '/img/alliances/alliance6.png',
    },
    {
        id: '7',
        label: 'Yahoo finance',
        image: '/img/alliances/alliance7.png',
    },
]


const HomeSwiper = () => {
  return (
    <Swiper
    slidesPerView={5}
    spaceBetween={30}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="mySwiper"
    modules={[Autoplay]}
  >
    {
        imgData.map(img => (
            <SwiperSlide key={img.id}>
                <Image src={img.image} alt={img.image} width={200} height={200} />
            </SwiperSlide>
        ))
    }

  </Swiper>
  )
}

export default HomeSwiper