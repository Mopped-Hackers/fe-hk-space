import React, { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styles from '../../styles/Modal.module.css'
import { Button, useMediaQuery } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { HEIGHT_EXPORT_IMAGE, WIDTH_EXPORT_IMAGE } from '../../constants'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const ModalMapImage = props => {
  const { open, handleClose, resImage } = props
  const imgRef = useRef(null)

  const downloadImage = () => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = WIDTH_EXPORT_IMAGE
      canvas.height = HEIGHT_EXPORT_IMAGE

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = `map-${new Date().getTime()}.png`

      document.body.appendChild(link) // Append the link to the document
      link.click() // Simulate a click on the link to trigger the download
      document.body.removeChild(link) // Remove the link from the document
      handleClose()
    }

    img.src = resImage
  }

  useEffect(() => {
    if (imgRef.current && resImage && resImage.length > 0) {
      imgRef.current.src = resImage
    }
  }, [resImage])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className={styles.modalWrapper}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id='alert-dialog-title'>{'Analyzed Area'}</DialogTitle>
        <DialogContent>
          <hr />
          <img
            ref={imgRef}
            src={resImage}
            alt='Map Screenshot'
            width={'100%'}
            height={500}
          />
          <div className={styles.legends}>
            <div className={styles.legendItem}>
              <div className={`${styles.black} ${styles.circle}`}></div>
              <div className={styles.label}>soil</div>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.blue} ${styles.circle}`}></div>
              <div className={styles.label}>water</div>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.green} ${styles.circle}`}></div>
              <div className={styles.label}>plants</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color='success' onClick={downloadImage}>
              Download
            </Button>
            <Button variant='contained' color='error' onClick={handleClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ModalMapImage
