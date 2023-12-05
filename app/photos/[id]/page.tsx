import CldImg from "@/components/gallery/cld-image";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PhotoPage({ params }: { params: any }) {
	const { id } = params;

	return (
		<>
			<div className="flex h-[100dvh] w-[100dvw] flex-col items-center justify-center gap-10">
				<Link
					className="group text-xl text-emerald-400  transition-all duration-150 hover:underline"
					href="/"
				>
					<ArrowLeft className="inline-block group-hover:-translate-x-2" />
					<span>back to gallery</span>
				</Link>
				<CldImg src={id} alt={id} />
			</div>
		</>
	);
}
