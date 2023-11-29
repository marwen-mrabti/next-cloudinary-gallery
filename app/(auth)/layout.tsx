import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto flex h-screen w-full max-w-7xl flex-col  items-start justify-center  gap-4  py-2">
			<Link
				className="group text-xl text-emerald-400  transition-all duration-150 hover:underline"
				href="/"
			>
				<ArrowLeft className="inline-block group-hover:-translate-x-2" />
				<span>back to gallery</span>
			</Link>
			<div className="flex w-full items-center justify-center">{children}</div>
		</main>
	);
}
