import { IImagesTitlePath } from '@/interfaces/global/imagesTitlePath'
import { Card, CardHeader, Image } from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'




const HomeProductCard = ({image, path, title}:IImagesTitlePath) => {
  return (
    <Card as={Link} href={path} isFooterBlurred className="w-full h-80 sm:h-full col-span-6  sm:col-span-2 relative cursor-pointer hover:scale-105 hover:z-10">
    <CardHeader className="w-full h-full absolute  flex justify-center items-center ">
        <h4 className="text-white/90 font-medium text-3xl text-center ">{title}</h4>
    </CardHeader>
    <Image
        as={NextImage}
        src={image}
        removeWrapper
        alt="Relaxing app background"
        width={600}
        height={600}
        quality={100}
        className="z-0 w-full h-full object-cover transition-opacity opacity-0 duration-250"
        onLoadingComplete={(image:HTMLImageElement) => image.classList.remove('opacity-0')}
    />
    </Card>
  )
}

export default HomeProductCard