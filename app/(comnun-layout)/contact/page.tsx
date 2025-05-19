import { Metadata } from 'next';
export const metadata : Metadata = {
  title:"Contactanos | Burguershop",
  description:"Ponte en contacto con el equipo de TuEmpresa. Estamos aquí para ayudarte con cualquier consulta o soporte que necesites",
  keywords:['contacto','soporte','ayuda','burguershop','atención al cliente']
}

const ContactPage = () => {
  return (
    <div>
      <span className="text-6xl font-sans">Contact page</span>
    </div>
  )
}

export default ContactPage
