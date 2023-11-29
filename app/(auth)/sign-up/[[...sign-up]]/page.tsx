import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "nextGallery - Sign Up",
	description: "Sign Up to nextGallery to upload your images"
};

export default function SignUpPage() {
	return <SignUp appearance={{ variables: { colorPrimary: "#0f172a" } }} />;
}
