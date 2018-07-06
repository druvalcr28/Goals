import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected Option"
    >
    <h2>Selected Optn</h2>
    <h4>{props.selectedOption}</h4>
    <button onClick={props.clearSelectedOption}>Okay</button>
    </Modal>
);

export {OptionModal as default};