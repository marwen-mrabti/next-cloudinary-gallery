"use client";

import { CldUploadButton } from "next-cloudinary";
import { UploadCloud } from "lucide-react";
import toast from "react-hot-toast";
import { revalidateOnUpload } from "@/lib/actions";

export default function UploadBtn() {
	return (
		<div>
			<CldUploadButton
				uploadPreset="b3bf2och"
				className="rounded-lg bg-emerald-500 px-4 py-2 hover:bg-emerald-400"
				onClose={() => {
					toast.success("Image uploaded successfully!");
					revalidateOnUpload();
				}}
			>
				Upload Image
				<UploadCloud className="ml-2 inline-block" />
			</CldUploadButton>
		</div>
	);
}
