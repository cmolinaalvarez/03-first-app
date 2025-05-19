import { Metadata } from "next";

 export const metadata: Metadata ={
    title:"Preción | BurguerShop",
    description:"Nuestros precios son altamente competitivos y estamos en capacidad de cumplir tus expectativas en cuaanto a precios.",
    keywords: ['Precios competitivos', 'BurguerShop', 'ofertas', 'demanda', 'productos','calidad']
 }

const PricingPage = () => {
  return (
    <div>
      <span className="text-6xl font-sans">Pricing Page</span>
    </div>
  )
}

export default PricingPage
