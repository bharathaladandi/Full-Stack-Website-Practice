
import React from 'react'
import { BankOffers } from '../Pages/HomePages/BankOffers'
import { BeautyandHygiene } from '../Pages/HomePages/BeautyandHygiene'
import { Beverages } from '../Pages/HomePages/Beverages'
import BottomCarousel from '../Pages/HomePages/BottomCarousel'
import { BrandStore } from '../Pages/HomePages/BrandStore'
import Slider from '../Pages/HomePages/Carousel'
import { CleaningHousehold } from '../Pages/HomePages/CleaningHousehold'
import { FruitsandVegetables } from '../Pages/HomePages/FruitsandVegetables'
import { Menus } from '../Pages/HomePages/Menus'
import Read from '../Pages/HomePages/Read'
import { SnacksStore } from '../Pages/HomePages/SnacksStore'
import { TopOffers } from '../Pages/HomePages/TopOffers'
import { YourDailyStaples } from '../Pages/HomePages/YourDailyStaples'

export const Homepage = () => {
  return (
    <div style={{ width: "80%", margin: "auto" , backgroundColor:'#f7fafc', backgroundImage:"url('https://w0.peakpx.com/wallpaper/154/372/HD-wallpaper-telegram-background-whatsapp-creative-android-pattern-texture-abstract.jpg')"}}>
    <br />
    <br />
    {/* <Navbar /> */}
    <br />
    <br />
    <Slider />
    <br />
    <br />
    <Menus />
    <br /> <br />
    <BankOffers />
    <br />
    <br />
    <TopOffers />
    <br />
    <br />
    <FruitsandVegetables />
    <br />
    <br />
    <YourDailyStaples />
    <br />
    <br />
    <Beverages />
    <br />
    <br />
    <SnacksStore />
    <br />
    <br />
    <CleaningHousehold />
    <br />
    <br />
    <BeautyandHygiene />
    <br />
    <br />
    <BottomCarousel />
    <br />
    <br />
    <BrandStore />
    <br /> <br />
    <Read />
    <br /> <br />
  </div>
  )
}
