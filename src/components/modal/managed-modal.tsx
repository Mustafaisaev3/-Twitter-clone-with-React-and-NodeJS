import { useUI } from "../../context/ui.context";
import SignInModal from "../signin/SignInModal";
import Modal from "./modal";


const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "SIGN_IN_VIEW" && <SignInModal />}
			{/* <SignInModal /> */}
		</Modal>
	);
};

export default ManagedModal;
