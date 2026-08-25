import React from 'react';

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@nyxsports.id?_r=1&_t=ZS-99AkysEty6y',
  instagram: 'https://www.instagram.com/nyxsports.id?igsi=a2U1a2xtNHZ2cGR5',
  whatsapp: 'https://wa.me/6281513811623',
  whatsappDisplay: '+62 815-1381-1623',
  email: 'editorial@nyx-photography.com',
  tiktokHandle: '@nyxsports.id',
  instagramHandle: '@nyxsports.id',
};

interface IconProps {
  className?: string;
}

export const TikTokIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.4a8.18 8.18 0 0 0 4.77 1.52V6.69h-.1l-.1-.01v.01z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.501-1.786-1.677-2.087-.175-.3-.019-.463.132-.613.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.244-.588-.493-.509-.678-.518-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.079 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.405A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.63 0-3.15-.494-4.425-1.341l-.317-.212-3.26.92.932-3.178-.233-.339A8.147 8.147 0 0 1 3.818 12c0-4.512 3.67-8.182 8.182-8.182 4.511 0 8.182 3.67 8.182 8.182 0 4.512-3.671 8.182-8.182 8.182z" />
  </svg>
);
