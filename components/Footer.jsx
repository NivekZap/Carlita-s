import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo2} alt="logo2" />
          <p className="mt-6 text-sm">
           Carlita´s es una tienda en línea dedicada a ofrecer una amplia variedad de productos de alta calidad para el cuidado personal y la belleza. Nuestra misión es proporcionar a nuestros clientes productos innovadores y efectivos que realcen su belleza natural y promuevan el bienestar. Nos comprometemos a ofrecer un servicio excepcional y una experiencia de compra satisfactoria para todos nuestros clientes.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Nosotros</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="/">Inicio</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/">Acerca de </a>
              </li>
              <li>
                <a className="hover:underline transition" href="/">Contactame</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/">Politica de privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Ponte en Contacto con nosotros</h2>
            <div className="text-sm space-y-2">
              <p> +51 959349131</p> 
              <p>u17203294@utp.edu.pe</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © GRUPO 5 DE SOA 
      </p>
    </footer>
  );
};

export default Footer;