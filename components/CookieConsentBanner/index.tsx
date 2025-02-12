'use client';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Script from 'next/script';

const CookieConsentBanner = () => {
  const [isClient, setIsClient] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const handleAccept = () => {
    console.log('Cookies accepted');
    setAnalyticsEnabled(true);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {analyticsEnabled && (
        <>
          <Script
            src=''
            strategy='afterInteractive'
            onError={(e) => {
              console.error('Google Analytics script failed to load', e);
            }}
            onLoad={() => {
              console.log('Google Analytics script loaded successfully');
            }}
          />
        </>
      )}
      <CookieConsent
        location='bottom'
        buttonText='Bekräfta'
        declineButtonText='Decline'
        //enableDeclineButton
        cookieName='yourAppCookieConsent'
        style={{ background: '#363636', color: '#FFF' }}
        buttonStyle={{
          fontSize: '14px',
          backgroundColor: 'var(--background)',
          color: 'white',
          borderRadius: '9999px',
          paddingBlock: '1vh',
          paddingInline: '2vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        declineButtonStyle={{
          backgroundColor: '#f44336',
          color: '#FFF',
          fontSize: '14px',
        }}
        expires={365}
        onAccept={() => {
          handleAccept();
        }}
        onDecline={() => {
          console.log('Cookies declined');
        }}
      >
        Webbsidan använder cookies för att möjliggöra en bra upplevelse för
        besökare. Genom att fortsätta använda webbsidan godkänner du användning
        av cookies. Läs mer om cookies under vår integritetspolicy.saa
      </CookieConsent>
    </>
  );
};

export default CookieConsentBanner;
