import '../main.css';
import * as T from '../template.tsx';
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
        <>
            <T.Section>
                <T.Title>
                    Contact Me
                </T.Title>
                <T.SectionContent>
                    <form className="w-1/2 max-w-[300px] text-xl" action="https://submit-form.com/aDceOXRPS" ref={formRef} method="POST" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="_redirect"
                            value="https:/leewaikin.com/contact"
                          />
                        <input
                            type="checkbox"
                            name="poohplate"
                            style={{ display: 'none' }} 
                            tabIndex={-1}
                            autocomplete="off"
                          />
                        <div className="">
                            <label className="w-fullblock text-3xl text-white ">
                                Your Email
                            </label>
                            <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 outline-black has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent1">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="example@domain.com"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <label className="block text-3xl text-white ">
                                Message
                            </label>
                            <textarea
                                id="inquiry"
                                placeholder="Enter text here"
                                className="mt-2 block min-w-0 grow py-1.5 px-3 min-h-[200px] w-full rounded-md text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                                name="inquiry"
                            />
                        </div>
                        <div ref={turnstileRef}></div>
                        <div className="mt-10">
                            <T.Button className="place-items-center mr-0"> 
                                <button type="submit"> Send </button>    
                            </T.Button>
                        </div>
                    </form>
                </T.SectionContent>
            </T.Section>
        </>

    );
}


export default ContactForm;
