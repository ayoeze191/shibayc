import React from 'react'
import Logo from './../../Assets/shilogo.jpg'
import Hero from './Hero/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import ap from './../../Assets/ap.png'
import coinmarket from './../../Assets/coinmarket.png'
import digitaljourney from './../../Assets/digitaljourney.png'
import marketwatch from './../../Assets/marketwatch.png'
import newsmax from './../../Assets/newsmax.png'
import uniswap from './../../Assets/uniswap.png'
import streetinsider from './../../Assets/streetinsider.png'
import coinGeckoam from './../../Assets/coinGecko.png'
import team from './../../Assets/team.png'
import asiaone from './../../Assets/asiaone.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import 'swiper/css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
const HomePage = () => {
  return (
  <div>
      {/* header */}
      <div className='container px-3 lg:px-0 flex pt-4 mb-8 lg:mb-0'>
          <div className='flex gap-3 md:gap-7 items-center'>
          <div className='w-12 h-12'><img src={Logo} className = 'w-full h-full' /></div>
          <div>
            <ul className='hidden sm:flex gap-3 md:gap-5 text-white'> 
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Roadmap
                </li>
                <li>
                    Etherscan
                </li>
                <li>
                    Socials
                </li>
            </ul>
          </div>
          </div>
          <div className='flex-1 flex  justify-end gap-3 pr-3'>
          <button className='bg-silver py-2 px-6 rounded-md text-xs sm:text-sm text-white'>ShibStats</button>
          <div className='sm:hidden '>
                aas
          </div>
          </div>
      </div>
    {/* Hero */}
      <Hero />
      {/* end hero section */}
      {/* swiper section */}
      <div className='container mt-8  px-3 sm:px-0'>
      <Swiper
        loop = {true}
        speed={500}
      spaceBetween={10}
      autoplay = {{"delay": 1000}}
      
      slidesPerView='auto'
      breakpoints={{320: {
        slidesPerView: 2,
        spaceBetween: 20
      },  1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
      autoHeight = {true}
    
      >
          <SwiperSlide><img src={ap} /> </SwiperSlide>
          <SwiperSlide> <img src={streetinsider} /> </SwiperSlide>
          <SwiperSlide> <img src={digitaljourney} /> </SwiperSlide>
          <SwiperSlide> <img src={newsmax} /> </SwiperSlide>
          <SwiperSlide> <img src={coinmarket} /> </SwiperSlide>
          <SwiperSlide> <img src={streetinsider} /> </SwiperSlide>
          <SwiperSlide> <img src={asiaone} /> </SwiperSlide>
          <SwiperSlide> <img src={team} /> </SwiperSlide>
          <SwiperSlide> <img src={uniswap} /> </SwiperSlide>
          <SwiperSlide> <img src={marketwatch} /> </SwiperSlide>
          <SwiperSlide> <img src={coinGeckoam} /> </SwiperSlide>
          </Swiper>
      </div>

      {/* end slider section */}

      {/* utitlities Section */}

      <div className='container  px-3 sm:px-0 flex flex-col items-center'>
      <h3 className='text-silver text-center'>SHIBAYC UTILITIES</h3>
      <h1 className='text-3xl font-bold text-white text-center'>THE DIVERSE SHIBAYC ECOSYSTEM</h1>
      <p>SHIBAYC is the most ambitious crypto-community, reaching the next frontier in the decentralised NFT gaming experience.</p>
      </div>
  </div>
  )
}

export default HomePage