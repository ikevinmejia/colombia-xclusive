'use client'
import { homeProductsImage } from "@/data/home/img/homeImageLocalPaths"
import HomeProductCard from "../Core/Card/HomeProductCard"

const HomeProductsSection = () => {
  return (
    <section className="h-auto w-full mx-auto pt-5 pb-7 bg-gradient bg-no-repeat bg-cover ">
        <h2 className="text-5xl mb-8 mt-3 text-black text-center">ELITE EXPERIENCES</h2>
        <div className="h-full w-11/12 mx-auto grid grid-cols-6 gap-5 justify-center items-center">
        {
            homeProductsImage.map(product => (
                <HomeProductCard key={product.title} {...product}/>
            ))
        }
        </div>
    </section>
  )
}

export default HomeProductsSection