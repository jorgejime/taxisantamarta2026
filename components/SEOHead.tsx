import React, { useEffect } from 'react';
import { useLanguage } from '../i18n';

interface SEOConfig {
    es: {
        title: string;
        description: string;
        keywords: string;
    };
    en: {
        title: string;
        description: string;
        keywords: string;
    };
}

const seoConfig: SEOConfig = {
    es: {
        title: 'Taxi Santa Marta | Transporte Confiable, Turismo y Traslados Aeropuerto',
        description: 'Servicio de taxi seguro y confiable en Santa Marta, Colombia. Traslados al aeropuerto, tours a Tayrona, Minca, Taganga. Conductores verificados, tarifas fijas. Reserva por WhatsApp.',
        keywords: 'taxi santa marta, transporte santa marta, taxi aeropuerto santa marta, tour tayrona, taxi minca, taxi taganga, transporte turistico santa marta, taxi colombia',
    },
    en: {
        title: 'Taxi Santa Marta | Reliable Transportation, Tourism & Airport Transfers',
        description: 'Safe and reliable taxi service in Santa Marta, Colombia. Airport transfers, tours to Tayrona, Minca, Taganga. Verified drivers, fixed rates. Book via WhatsApp.',
        keywords: 'taxi santa marta, santa marta transportation, airport taxi santa marta, tayrona tour, minca taxi, taganga taxi, tourist transport santa marta, colombia taxi',
    },
};

const SEOHead: React.FC = () => {
    const { language } = useLanguage();

    useEffect(() => {
        const config = seoConfig[language];

        // Update document title
        document.title = config.title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', config.description);
        }

        // Update meta title
        const metaTitle = document.querySelector('meta[name="title"]');
        if (metaTitle) {
            metaTitle.setAttribute('content', config.title);
        }

        // Update keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', config.keywords);
        }

        // Update html lang attribute
        document.documentElement.lang = language;

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', config.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', config.description);
        }

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', language === 'es' ? 'es_CO' : 'en_US');
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', config.title);
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', config.description);
        }

    }, [language]);

    return null; // This component doesn't render anything
};

export default SEOHead;
