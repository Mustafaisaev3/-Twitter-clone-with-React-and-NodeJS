import { useState } from "react";
import { useUI } from "../../context/ui.context";
import Toast from "./Toast";


const ManagedModal: React.FC = () => {
	useState()
	const { displayModal, closeModal, modalView } = useUI();
	return (
		// <Modal open={displayModal} onClose={closeModal}>
		// 	{modalView === "SIGN_IN_VIEW" && <SignInModal />}
		// 	{modalView === "ADD_TWEET_MODAL" && <AddTweetModal />}
		// 	{/* <SignInModal /> */}
		// </Modal>

        // <Toast>

        // </Toast>
		<div></div>
	);
};

export default ManagedModal;
