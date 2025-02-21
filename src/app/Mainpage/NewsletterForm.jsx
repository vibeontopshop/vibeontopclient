import * as React from "react";

function NewsletterForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center self-stretch my-auto w-full text-base text-zinc-500 max-md:mt-10 max-md:max-w-full">
            <div
                className="text-8xl text-center uppercase leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-9"
                style={{ color: '#CEB863' }}>
                STAY UPTO DATE <br />
                VIBES ON TOP{" "}
            </div>
            <div className="mt-3 leading-7 text-center max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                duis ultrices sollicitudin
            </div>
            <div className="self-stretch mt-8">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vot@gmail.com"
                    className="w-full p-8 text-2xl leading-none shadow-2xl bg-[linear-gradient(95deg,#FDFDFD_3.88%,#9C9C9C_246.6%)] max-md:px-5 max-md:max-w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="gap-2.5 self-stretch py-5 pr-11 pl-11 mt-8 max-w-full font-medium leading-none text-center text-white rounded-xl min-h-[56px] shadow-[0px_20px_35px_rgba(0,0,0,0.15)] w-[207px] max-md:px-5"
                style={{ backgroundColor: '#CEB863', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            >
                SUSCRIBE NOW
            </button>
        </form>
    );
}

export default NewsletterForm;