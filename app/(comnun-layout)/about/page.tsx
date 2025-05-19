import { Metadata } from "next";

 export const metadata: Metadata ={
    title:"Sobre mi | BurguerShop",
    description:"Conoce la historia detrás de BurguerShop: nuestra pasión por las hamburguesas, nuestro compromiso con la calidad y quiénes somos.",
    keywords: ['sobre nosotros', 'BurguerShop', 'historia', 'hamburguesas artesanales', 'quiénes somos']
 }

 const AboutPage = () => {
  return (
    <div>
      <span className="text-6xl font-sans">About Page</span>
    </div>
  )
}

export default AboutPage;