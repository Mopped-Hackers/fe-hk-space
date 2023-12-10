import React from 'react'
import Map from '../components/map/Map'
import { Button } from '@mui/material'
import html2canvas from 'html2canvas'
import { ACCESS_TOKEN, LAT, LONG, MAP_STYLE, DEFAULT_ZOOM, BACKEND_URL } from '../constants'
import { enqueueSnackbar } from 'notistack'
import styles from '../styles/Dashboard.module.css'
import { ThreeDots } from 'react-loader-spinner'
import ModalMapImage from '../components/map/ModalMapImage'
const timeout = 5 * 60 * 1000; // 5 minutes

const Dashboard = () => {
  const [longitude, setLongitude] = React.useState(LONG)
  const [latitude, setLatitude] = React.useState(LAT)
  const [zoom, setZoom] = React.useState(DEFAULT_ZOOM)
  const [isLoading, setIsLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [resImage, setImage] = React.useState('')

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timeout')), timeout)
  );

  const screenshotHandler = async () => {
    setIsLoading(true)
    const width = 700
    const height = 700
    const apiUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${longitude},${latitude},${zoom},0,0/${width}x${height}?access_token=${ACCESS_TOKEN}`
    try {
      const fetchPromise = fetch(apiUrl);
      const response = await Promise.race([fetchPromise, timeoutPromise]);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const blob = await response.blob()
      const dataUrl = await new Promise(resolve => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(blob)
      })

      const res = await fetch(`${BACKEND_URL}/images/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: dataUrl
        })
      })

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }

      const resBlob = await res.blob()
      const resDataUrl = await new Promise(resolve => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(resBlob)
      })
      setImage(resDataUrl)
      enqueueSnackbar('Picture analyzed successfully!', { variant: 'success' });
      setOpen(true)
    } catch (error) {
      enqueueSnackbar('Error taking a screenshot!', { variant: 'error' })
    }
    setIsLoading(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={styles.dashboardWrapper}>
      {isLoading ? (
        <div
          className={styles.loaderWrapper}
        >
          <div className={styles.flexDashboard}>
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='#4fa94d'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          </div>
          <div>
            <p><strong>Creating a optimized fire plan for the selected area...</strong></p>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${styles.flexDashboard} ${styles.marginTen}`}
          >
            <Button
              variant='contained'
              color='warning'
              onClick={screenshotHandler}
            >
              Analyze this area
            </Button>
          </div>
          <div style={{ height: '600px' }}>
            <Map
              longitude={longitude}
              latitude={latitude}
              zoom={zoom}
              setLongitude={setLongitude}
              setLatitude={setLatitude}
              setZoom={setZoom}
            />
          </div>
        </>
      )}
    <ModalMapImage 
      open={open}
      handleClose={handleClose}
      resImage={resImage}
    />
    </div>
  )
}

export default Dashboard
