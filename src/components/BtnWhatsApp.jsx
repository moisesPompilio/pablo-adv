import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './BtnWhatsApp.scss';

export function BtnWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511999999999" // Seu número do WhatsApp com código do país
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

