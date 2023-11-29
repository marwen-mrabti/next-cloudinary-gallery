import { SignIn } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "nextGallery - Sign In",
	description: "Sign In to nextGallery to upload your images"
};

export default function SignInPage() {
	return <SignIn appearance={{ variables: { colorPrimary: "#0f172a" } }} />;
}
