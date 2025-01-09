import { Navbar, HeroSection, HomeCategory } from "../components"
import { images } from "../constants"

const HomePage = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <HomeCategory categoryName={"Electronic"}/>
    </>
  )
}

export default HomePage