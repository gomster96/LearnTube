import {React, useEffect, useState } from 'react';
import Modal from 'react-modal';

const CreatePlaylistButon = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const openModal = () => {
		<Modal modalIsOpen={true}>
			This is Modal content
	  	</Modal>
	};

	return (
		<div className='scrollup pe-3'>
				<div onClick={()=> setModalIsOpen(true)}>
					<i className="fa fa-plus"></i>
				</div>
		</div>
	);
}

export default CreatePlaylistButon