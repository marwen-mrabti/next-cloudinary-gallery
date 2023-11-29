import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "nextGallery",
	description: "A Next.js gallery app using Cloudinary and Clerk"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={cn(
						inter.className,
						"container min-h-[100dvh] max-w-[100dvw] overflow-x-hidden bg-slate-900 text-slate-100"
					)}
				>
					{children}
					<Toaster
						position="top-right"
						reverseOrder={false}
						gutter={8}
						containerClassName="z-50"
						toastOptions={{
							duration: 2000,
							style: {
								background: "#333",
								color: "#fff"
							},
							success: {
								duration: 2000
							}
						}}
					/>
				</body>
			</html>
		</ClerkProvider>
	);
}
