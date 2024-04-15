import { homeProductsImage } from "@/data/home/img/homeImageLocalPaths"
import { Card, CardHeader, Image } from "@nextui-org/react"
import NextImage from "next/image"

const HomeProductsSection = () => {
  return (
    <section className="h-auto w-full mx-auto pt-5 pb-7 bg-gradient bg-no-repeat bg-cover ">
        <h2 className="text-5xl mb-8 mt-3 text-black text-center">ELITE EXPERIENCES</h2>
        <div className="h-full w-11/12 mx-auto grid grid-cols-6 gap-5 justify-center items-center">
        {
            homeProductsImage.map(product => (
                <Card key={product.title} isFooterBlurred className="w-full h-80 sm:h-full col-span-6  sm:col-span-2 relative cursor-pointer hover:scale-105 hover:z-10">
                <CardHeader className="w-full h-full absolute  flex justify-center items-center ">
                    <h4 className="text-white/90 font-medium text-3xl text-center ">{product.title}</h4>
                </CardHeader>
                <Image
                    as={NextImage}
                    removeWrapper
                    alt="Relaxing app background"
                    width={600}
                    height={600}
                    quality={100}
                    className="z-0 w-full h-full object-cover"
                    src={product.image}
                />
                </Card>
            ))
        }
        </div>
    </section>
  )
}

export default HomeProductsSection