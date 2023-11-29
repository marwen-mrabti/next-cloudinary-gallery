import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Gallery from "@/components/gallery/gallery";
import UploadBtn from "@/components/upload-btn";

export default async function Home() {
	return (
		<main className="flex h-fit min-h-screen flex-col items-center justify-start gap-10 px-10 ">
			<div className="!sticky top-0 z-50 flex w-full  items-center justify-end gap-10 py-3 backdrop-blur-sm">
				<SignedOut>
					<Link href="/sign-in" className="rounded-md bg-indigo-300 px-5 py-2 ">
						Sign In to upload images
					</Link>
				</SignedOut>
				<SignedIn>
					<UploadBtn />
					<UserButton
						afterSignOutUrl="/"
						appearance={{
							variables: { colorPrimary: "#0f172a" }
						}}
					/>
				</SignedIn>
			</div>

			<Gallery />
		</main>
	);
}
