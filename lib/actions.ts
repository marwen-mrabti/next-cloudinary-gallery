"use server";

import { revalidatePath } from "next/cache";

export const revalidateOnUpload = async () => {
	try {
		return revalidatePath("/");
	} catch (error) {
		console.log(error);
		throw new Error("Error revalidating");
	}
};
