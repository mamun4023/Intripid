import LanguageSelector from "@/components/LanguageSelector"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Package from '@/components/Packages';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider'

export default  function Page() {

  return(
        <main className="w-full h-m-screen ">
            <LanguageSelector />
            <Navbar />
            <Banner />
            <Package />
            <Slider />
            <Footer />
        </main>
  )
}
