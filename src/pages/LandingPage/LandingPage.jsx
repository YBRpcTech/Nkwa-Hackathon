import React from 'react'
import Hero from './Hero'
import BannerFeatures from './BannerFeature'
import ConverterPage from './ConvertPage'
import PayMoney from './PayMoney'
import ReceiveMoney from './RecieveMoney'
import PaymentBanner from './PaymentBanner'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <Hero />
    <BannerFeatures />
    <ConverterPage />
    <PayMoney />
    <ReceiveMoney />
    <PaymentBanner />
    <Footer />
    
    </>
  )
}

export default LandingPage