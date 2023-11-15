"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import styles from '../../../public/assets/styles/page.module.scss'

export const LoginForm = () => {
    const router = useRouter(); // initialize nextjs router
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });// State for form input values.
    const [error, setError] = useState("");// State for handling errors during authentication.

    const searchParams = useSearchParams();// Get query parameters from the URL.
    const callbackUrl = searchParams.get("callbackUrl") || "/profle";// Define a callback URL or use a default one.

    //handle form submission
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //prevent the default form submission behavior
        try {
            setLoading(true);
            setFormValues({ email: "", password: "" });//clear form input values

            // attempt tp sign in using the credentials
            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);
            console.log(res) //log auth response

            if (!res?.error) {
                router.push(callbackUrl); //redirect to the callback url on success
            } else {
                setError("Invalid email or password");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    // handle input field changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value }); // Update the form input values.
    };

    const input_style =
        "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    return (
        <form onSubmit={onSubmit}>
            {error && (<p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>)}
            {/* Email input field */}
            <div className="mb-6">
                <input
                    required
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={`${input_style}`}
                />
            </div>
            {/* Password input field */}
            <div className="mb-6">
                <input
                    required
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`${input_style}`}
                />
            </div>

            {/* Sign In button */}
            <button
                type="submit"
                style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
                className="inline-block px-7 py-4 bg-blue-600 text-white font-medium 
                text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                disabled={loading}
            >
                {loading ? "loading..." : "Sign In"}
            </button>

            {/* OR divider */}
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            {/* Sign In with Google button */}
            <a
                className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#ffffff", color: "gray" }}
                onClick={() => signIn("google", { callbackUrl })}
                role="button"
            >
                <img
                    className="pr-2"
                    src="/images/google.svg"
                    alt=""
                    style={{ height: "2rem" }}
                />
                Continue with Google
            </a>

            {/* Sign In with GitHub button */}
            <a
                className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{ backgroundColor: "#000000" }}
                onClick={() => signIn("github", { callbackUrl })}
                role="button"
            >
                <img
                    className="pr-2"
                    src="/images/github.png"
                    alt=""
                    style={{ height: "2.2rem" }}
                />
                Continue with GitHub
            </a>
        </form>
    );
};