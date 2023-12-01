import React from 'react';
import {link} from "react-router-dom"
import {motion, AnimatePresence} from 'framer-motion';

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

const modal = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    transition: {delay: 0.2},
    }

const Modal = ({showModal, setShowModal, currentStory}) => {
    return (
        <>
        <AnimatePresence mode='wait'>
                {/* // background of site when modal pops up */}
                <motion.div className='backdrop'
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <motion.div className='modal'
                    variants={modal}
                    exitBeforeEnter= {true}
                    onExitComplete={() => null}
                    >
                        <button className='exitButton' onClick={() => setShowModal(false)}>x</button>
                        <a href={currentStory.url}>
                        <p className='title' id='modalTitle'>{currentStory.title}</p>
                        <img src={currentStory.multimedia[2].url} id='modalPicture' alt={currentStory.multimedia[2].caption}></img>
                        <p className='storyPreview'>{currentStory.abstract}</p>
                        </a>
                    </motion.div>
                </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Modal