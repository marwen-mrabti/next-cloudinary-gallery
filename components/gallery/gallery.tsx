import { fetchPhotos } from "@/lib/data";
import CldImg from "./cld-image";

export default async function Gallery() {
	const photos = await fetchPhotos();

	if (!photos.length) {
		return (
			<div className="container flex items-center justify-center  py-5">
				<p className="text-center text-2xl text-emerald-200">
					No photos yet. login and Upload some!
				</p>
			</div>
		);
	}

	return (
		<div className="">
			<ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{photos.map((photo) => (
					<li key={photo.asset_id} className="col-span-1 h-[50dvh]">
						<CldImg src={photo.public_id} alt="photo" />
					</li>
				))}
			</ul>
		</div>
	);
}
