import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalForCharacter({ modal, showOrHideModal, modalData }) {
    console.log(modalData)// {known_for:[{},{}]}
    const imageUrl = "https://image.tmdb.org/t/p/w185"

    return (
        <div>
            <Modal isOpen={modal} >
                <ModalHeader toggle={showOrHideModal}>{modalData.name} {modalData.popularity}</ModalHeader>
                <ModalBody className="text-center">
                    <img className='modalImage' src={`${imageUrl}${modalData.profile_path}`} alt="" />
                </ModalBody>
                <ModalBody className="d-flex text-center ">
                    {
                        modalData.known_for.map(item => {
                            return (
                                <div key={item.id}>
                                    <img className='knownForImage' src={`${imageUrl}${item.poster_path}`} alt="" />
                                    <div>
                                        <span>{item.name || item.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={showOrHideModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

export default ModalForCharacter;