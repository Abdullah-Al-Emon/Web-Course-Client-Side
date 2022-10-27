import React from 'react';

const Blog = () =>
{
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-28 md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">

                        This is Blog Site
                    </h2>

                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is CORS?
                            </p>
                            <p className="">

                                Cross-origin resource sharing (CORS) is a browser security feature that restricts
                                cross-origin HTTP requests that are initiated from scripts running in the browser.
                                <br />
                                <br />
                                If your REST API's resources receive non-simple cross-origin
                                HTTP requests, you need to enable CORS support.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How does the private route work?
                            </p>
                            <p className="">
                                The private route component is similar to the public route, the
                                only change is that redirect URL and authenticate condition. If
                                the user is not authenticated he will be redirected to the login
                                page and the user can only access the authenticated routes If he
                                is authenticated (Logged in).
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is Node? How does Node work?
                            </p>
                            <p className="">
                                It is a used as backend service where javascript
                                works on the server-side of the application. This way
                                javascript is used on both frontend and backend. Node.
                                js runs on chrome v8 engine which converts javascript code
                                into machine code, it is highly scalable, lightweight, fast,
                                and data-intensive.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Why are you using firebase? What other options do you have to implement authentication?
                            </p>
                            <p className="">
                                Firebase Authentication provides backend services, easy-to-use SDKs,
                                and ready-made UI libraries to authenticate users to your app.
                                It supports authentication using passwords, phone numbers,
                                popular federated identity providers like Google, Facebook
                                and Twitter, and more.
                                <br />
                                <br />
                                Get Started with Firebase Authentication on Websites <br />
                                On this page. <br />
                                Add and initialize the Authentication SDK. <br />
                                (Optional) Prototype and test with Firebase Local Emulator Suite. <br />
                                Sign up new users. <br />
                                Sign in existing users. <br />
                                Set an authentication state observer and get user data. <br />
                                Next steps. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;