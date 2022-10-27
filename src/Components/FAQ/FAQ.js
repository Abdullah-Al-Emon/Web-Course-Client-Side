import { useState } from "react";

const Item = ({ title, children }) =>
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3  transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () =>
{
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:pb-56 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div class="space-y-4">
                    <Item title="Differences between firebase and mongodb?">
                        Both Firebase and MongoDB are modern post-relational databases that allow
                        for flexibility and speed to market, while Firebase is more popular for
                        smaller applications, and MongoDB moreso for big data and high-performance use cases.
                    </Item>
                    <Item title="What is React and why use it?">
                        React is a JavaScript library developed by Facebook which, among
                        other things, was used to build Instagram.com. Its aim is to allow
                        developers to easily create fast user interfaces for websites and
                        applications alike. The main concept of React. js is virtual DOM.
                    </Item>
                    <Item title="How to use the JavaScript callback function?">
                        In JavaScript, the way to create a callback function is to pass it as a
                        parameter to another function, and then to call it back right after
                        something has happened or some task is completed.
                    </Item>
                    <Item title=" What are the HTTP methods supported by REST?">
                        The following subset of HTTP methods are supported for the REST BC: <br />
                        GET. The GET method retrieves specific information from the server as identified by the request URI. <br />
                        PUT. The PUT method requests that the message body sent with the request be stored under the location provided in the HTTP message. <br />
                        DELETE. ... <br />
                        POST. ... <br />
                        HEAD. <br />
                    </Item>
                </div>
            </div>
        </div>
    );
};