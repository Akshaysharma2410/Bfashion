import React from 'react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004-4.971 4.971z"/>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);


const FloatingButtons: React.FC = () => {
    return (
        <>
            {/* Side buttons */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
                <a href="#" aria-label="Chat on WhatsApp" className="bg-green-500 p-4 shadow-lg hover:bg-green-600 transition-colors rounded-l-lg">
                    <WhatsAppIcon />
                </a>
                <a href="#" aria-label="Call us" className="bg-brand-gold p-4 shadow-lg hover:bg-brand-gold/90 transition-colors mt-1 rounded-l-lg">
                    <PhoneIcon />
                </a>
            </div>

            {/* Bottom right chat button */}
            <div className="fixed bottom-6 right-6 z-40">
                <button aria-label="Open chat" className="bg-brand-charcoal p-4 rounded-full shadow-lg hover:bg-brand-charcoal/80 transition-colors group">
                    <ChatIcon />
                </button>
            </div>
        </>
    );
};

export default FloatingButtons;