import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ReactImageGallery from 'react-image-gallery';

const ModalGallery = (props) => {

    const { open, setOpen, images } = props;

    const handleOk = () => {

    }

    return (
        <>
            <Modal
                width={'60vw'}
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                cancelText={() => setOpen(false)}
                centered
                closable={false}
                footer={null}
            >
                <ReactImageGallery
                    thumbnailPosition='right'
                    items={images}
                    showPlayButton={false} //hide play button
                    showFullscreenButton={false} //hide fullscreen button
                    // renderLeftNav={() => <></>} //left arrow === <> </>
                    // renderRightNav={() => <></>}//right arrow === <> </>
                    slideOnThumbnailOver={true}  //onHover => auto scroll images
                />
            </Modal >
        </>
    );
}

export default ModalGallery;