import { Blockquote } from "flowbite-react";

import People from "./People";

const Quote: React.FC<{ picture: string; name: string; description: string; text: string }> = ({ picture, name, description, text }) => {
    return (
        <figure className="mx-auto px-3 max-w-screen-md text-center my-20">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                {text}
                </p>
            </Blockquote>
            <People name={name} picture={picture} description={description} />
            </figure>
    );
}

const Title: React.FC<{ text: string }> = ({ text }) => {
    return (
        <figure className="mx-auto max-w-screen-md text-center my-20">
            <Blockquote>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {text}
                </p>
            </Blockquote>
        </figure>
    );
}

export { Title };
export default Quote;