import CldImg from "@/components/gallery/cld-image";
import Modal from "@/components/gallery/modal";

export default function PhotoModal({ params }: { params: any }) {
	const { id } = params;

	return (
		<Modal>
			<CldImg src={id} alt={id} />
		</Modal>
	);
}
