import './ModalDetail.css'

const Modal = ({children, isOpen, closeModal}) => {
    const handleContainerClick = (e) => e.stopPropagation();

 return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleContainerClick}>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
        </div>
    </article>
 )
};

export default Modal;
