import { useUI } from "../../context/ui.context";
import AddTweetModal from "../AddTweetModal";
import SignInModal from "../signin/SignInModal";
import Modal from "./modal";


const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "SIGN_IN_VIEW" && <SignInModal />}
			{modalView === "ADD_TWEET_MODAL" && <AddTweetModal />}
			{/* <SignInModal /> */}
		</Modal>
	);
};

export default ManagedModal;
