"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

type CldImgProps = {
	src: string;
	alt: string;
};

export default function CldImg({ src, alt }: CldImgProps) {
	return (
		<Link href={`/photos/${src}`}>
			<div className="flex  items-center justify-center overflow-hidden rounded-md ">
				<CldImage
					src={src}
					sizes="100vw"
					alt={alt}
					width="500"
					height="400"
					loading="lazy"
					crop="fill"
					gravity="auto"
					effects={[
						{
							background: "black"
						},
						{
							gradientFade: true
						},
						{
							gradientFade: "symetric,x_0.4"
						}
					]}
					className="shape-m h-auto max-w-full scale-100 rounded-md bg-cover bg-no-repeat align-middle transition-all duration-100 hover:scale-110"
				/>
			</div>
		</Link>
	);
}
