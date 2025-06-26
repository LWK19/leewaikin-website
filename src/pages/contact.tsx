import React, { useEffect, useRef, useState } from 'react';

function ContactForm() {
    const turnstileRef = useRef(null);
    const widgetIdRef = useRef(null); // Use ref instead of state
    const [turnstileToken, setTurnstileToken] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadTurnstile = () => {
            if (window.turnstile && turnstileRef.current) {
                const id = window.turnstile.render(turnstileRef.current, {
                    sitekey: '0x4AAAAAABiVNOJwVk6TLWep',
                    size: 'invisible',
                    callback: (token) => {
                        setTurnstileToken(token);
                        setIsSubmitting(false);
                        document.getElementById('contact-form').submit();
                    },
                    'error-callback': () => {
                        setTurnstileToken('');
                        setIsSubmitting(false);
                        alert('Verification failed. Please try again.');
                    },
                    'expired-callback': () => {
                        setTurnstileToken('');
                        setIsSubmitting(false);
                    }
                });
                widgetIdRef.current = id; // Store in ref
            }
        };

        if (window.turnstile) {
            loadTurnstile();
        } else {
            const checkTurnstile = setInterval(() => {
                if (window.turnstile) {
                    loadTurnstile();
                    clearInterval(checkTurnstile);
                }
            }, 100);
        }

        // Cleanup - now using ref
        return () => {
            if (widgetIdRef.current !== null && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
            }
        };
    }, []); // Empty dependency array is now correct

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSubmitting) return;
        setIsSubmitting(true);
        
        // Use ref here too
        if (widgetIdRef.current !== null && window.turnstile) {
            window.turnstile.execute(widgetIdRef.current);
        }
    };

    return (
        <form 
            id="contact-form"
            action="https://submit-form.com/aDceOXRPS" 
            method="POST"
            onSubmit={handleSubmit}
        >
            {/* Hidden input for turnstile token */}
            <input
                type="hidden"
                name="cf-turnstile-response"
                value={turnstileToken}
            />
            
            {/* Honeypot */}
            <input
                type="checkbox"
                name="poohplate"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
            />

            <div>
                <label>Your Email</label>
                <input
                    type="email"
                    name="email"
                    required
                />
            </div>

            <div>
                <label>Message</label>
                <textarea
                    name="inquiry"
                    required
                />
            </div>

            {/* Invisible turnstile container */}
            <div ref={turnstileRef}></div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Verifying...' : 'Send'}
            </button>
        </form>
    );
}

export default ContactForm;
