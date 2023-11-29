import { v2 as cloudinary } from "cloudinary";
import { unstable_noStore as noStore } from "next/cache";

export type Photo = {
	asset_id: string;
	public_id: string;
	created_at: string;
};

export const fetchPhotos = async () => {
	noStore();
	try {
		const { resources } = (await cloudinary.search
			.expression("resource_type:image")
			.sort_by("created_at", "desc")
			.max_results(10)
			.execute()) as { resources: Photo[] };

		const photos = resources.map((image) => ({
			asset_id: image.asset_id,
			public_id: image.public_id,
			created_at: image.created_at
		}));

		return photos;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching photos");
	}
};
