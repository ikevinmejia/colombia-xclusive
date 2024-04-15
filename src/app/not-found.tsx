import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "../../public/img/not-found.svg";

interface Props {}

const NotFoundRootPage: NextPage<Props> = ({}) => {
  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <section className="flex flex-col w-11/12 mx-auto h-80 justify-center items-center gap-4">
        <Image src={notFoundImg} alt={"Not found image"} width={400} height={400} />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1>This page could not be found.</h1>
          <Button as={Link} href="/home" variant="bordered" >Return to home</Button>
        </div>
      </section>
    </main>
  );
};

export default NotFoundRootPage;
