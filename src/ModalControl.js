import {useState} from "react";

export default function ModalControl(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return {openModal, closeModal, isModalOpen, setIsModalOpen}
}