import BarberHomeSection from '@/components/Home/BarberHomeSection'
import ExperienceSection from '@/components/Home/ExperienceSection'
import HomeProductsSection from '@/components/Home/HomeProductsSection'
import StartExperienceHomeSection from '@/components/Home/StartExperienceHomeSection'
import WelcomeSection from '@/components/Home/WelcomeSection'
import { NextPage } from 'next'

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
  return (
    <main className=" w-full ">
      <WelcomeSection/>
      <HomeProductsSection/>
      <ExperienceSection/>
      <BarberHomeSection/>
      <StartExperienceHomeSection/>
    </main>
  )
}

export default HomePage