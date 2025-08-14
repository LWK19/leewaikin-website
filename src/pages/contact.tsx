import '../main.css';
import React from 'react';
import * as Utils from '../common/utils.tsx';
import * as Page from '../common/page.tsx';

function Contact(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Contact Me - Lee Wai Kin";
    const formRef = React.useRef(null);
    const [submitting, setSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        try {
            const res = await fetch('https://api.lwaikin8.workers.dev/inquiry', {
                method: 'POST',
                headers: {
                    "Access-Control-Request-Private-Network": "true",
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, PATCH, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(data),
            });
            
            if (res.ok) {
                alert("Form Submitted.")
            } else {
                alert('Error. Please reload the page and try again.');
            }
        } catch (error) {
            if (error instanceof Error) {
                alert('Error submitting form:' + error.toString());
            } else {
                alert('An unknown error occurred. Please reload the page and try again.');
            }
        }
        setSubmitting(false);
    };

    return (
        <>
            <Page.Section>
                <Page.Title>
                    Contact Me
                </Page.Title>
                <Page.SectionContent>
                    <form className="w-1/2 max-w-[300px] text-2xl" ref={formRef} onSubmit={handleSubmit} >
                        <input
                            type="checkbox"
                            name="poohplate"
                            style={{ display: 'none' }} 
                            tabIndex={-1}
                            autoComplete="off"
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
                                    required={true}
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
                                required={true}
                            />
                        </div>
                        <div className="mt-10">
                            <Utils.Button className={"place-items-center mr-0 " + (submitting ? "brightness-50 cursor-not-allowed" : "")}> 
                                <button type="submit" disabled={submitting} > Send </button>    
                            </Utils.Button>
                        </div>
                        {submitting && (
                            <div
                            className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70"
                            >
                            <div className="loader border-4 border-accent1 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
                            </div>
                        )}
                    </form>
                </Page.SectionContent>
            </Page.Section>
        </>
    );
}


export default Contact;
