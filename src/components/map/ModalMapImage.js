import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../styles/Modal.module.css';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalMapImage = (props) => {
  const { open, handleClose, resImage } = props;
  const imgRef = useRef(null);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = resImage;
    link.download = `map-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  useEffect(() => {
    if (imgRef.current && resImage && resImage.length > 0) {
      imgRef.current.src = resImage;
    }
  }, [resImage]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className={styles.modalWrapper}
      >
        <Box sx={style}>
          <div style={{ minHeight: '100hv', width: '100%' }}>
            <h3>Analyzed Area</h3>
            <hr />
            <img
              ref={imgRef}
              src={resImage}
              alt='Map Screenshot'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color='success' onClick={downloadImage}>
              Download
            </Button>
            <Button variant='contained' color='error' onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalMapImage;
