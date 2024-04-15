import ButtonCallToAction from "@/components/Core/Button/ButtonCallToAction";
import { NextPage } from "next";

interface Props {}

const AboutPage: NextPage<Props> = ({}) => {
  return (
    <main className="w-full h-full">
      <div className="bg-aboutTitle bg-no-repeat bg-cover bg-center h-96">
        <div className="h-full w-full flex justify-center items-center bg-black bg-opacity-65">
          <h1 className="text-white text-5xl md:text-8xl font-bold">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="w-full bg-aboutText">
        <div className="h-screen w-full grid items-center bg-black bg-opacity-65">
          <div className="container mx-auto gap-4 flex flex-col justify-center items-start text-white">
            <h2 className="text-5xl mb-3 md:text-8xl font-bold text-left">
              FOR VIPS, BY VIPS
            </h2>
            <p className="max-w-5xl text-xl">
            We are here to create memorable experiences for you.
            </p>
            <p className="max-w-5xl text-xl">
            ColombiaXclusive was founded by a diverse group of individuals who have experienced life the way 99% never have. With our collective knowledge, resources, & wisdom, we set out to create the greatest travel experience company Colombia has ever seen. We have created a standard for our clients that we expect for ourselves- peace of mind, security, and lots of adventures.
            </p>
            <p className="max-w-5xl text-xl">
            In Colombia, we have an extensive network of the highest quality homes, boats, & security. We are friends with the owners of every 5-star restaurant, lounge, club, & attraction. We are partnered with the best spas, estheticians, and medical clinics. And we work with the most reputable experience providers who know their country best.
            </p>
            <p className="max-w-5xl text-xl">
            All of this, combined with our dedication to detail and timing, allows our clients to experience the best of Colombia, with peace of mind. And because we are selective with our clients, we guarantee the best service imaginable. When you&apos;re ready for an experience of a lifetime, join one of our Xperiences.
            </p>
            <ButtonCallToAction href="https://wa.me/573009891646" label="BOOK YOUR TRIP"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
