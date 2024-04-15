import { Button } from "@nextui-org/react";
import Link from "next/link";

const ExperienceSection = () => {
    return (
        <section className="w-full min-h-dvh max-h-max bg-colombiaExperiencieVIPWay bg-no-repeat">
            <div className="w-full min-h-dvh max-h-max mx-auto py-8 lg:py-0 flex flex-col justify-center items-center bg-black bg-opacity-55">
                <div className="w-11/12 sm:w-8/12 mx-auto flex flex-col justify-start items-start gap-4 text-white">
                    <h2 className="text-5xl md:text-8xl font-bold text-left">
                        EXPERIENCE COLOMBIA,
                        <br />
                        THE VIP WAY
                    </h2>
                    <p className="max-w-5xl text-xl">
                        At ColombiaXclusive, we specialize in providing
                        VIP-level experiences that will leave you feeling like a
                        superstar. We are an all-inclusive concierge company
                        that specializes in creating timeless memories for our
                        clients through our dedication to detail & connections
                        in the beautiful country of Colombia. In that time, you
                        can see everything from the tropical islands, the
                        vibrant city life of Medellin, and the wild jungles of
                        the Amazon.
                    </p>
                    <p className="max-w-5xl text-xl">
                        With an extensive network of private homes, boats,
                        experiences, private chefs, restaurants, & much more-
                        you can arrive in Colombia with style, and a booked
                        itinerary. Our security ensures your safety at all
                        times, and our hosts will make your trip as fun as
                        possible!
                    </p>
                    <p className="max-w-5xl text-xl">
                        We cater to a variety of clientele; for private groups
                        between 1-12 people, we host you in top class
                        accommodations and offer a multitude of different
                        experiences curated to your vision. We also host VIP
                        immersions with 10-40 people looking to create
                        incredible events for their company or organization.
                        Everything at your fingertips.
                    </p>
                    <Button as={Link} href="/about" variant="bordered" color="primary" className="text-white">
                        LEARN MORE
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
