/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// import "./main.css"

function App({ className }) {

  const [posTop, setPosTop] = useState(100)
  const [posLeft, setPosLeft] = useState(50)
  const [isHeld, setIsHeld] = useState(false)
  // const [offsetX, setOffsetX] = useState()
  const offsetX = useRef()
  // const [offsetY, setOffsetY] = useState()
  const offsetY = useRef()
  // const [mainOffsetX, setMainOffsetX] = useState()
  const mainOffsetX = useRef()
  // const [mainOffsetY, setMainOffsetY] = useState()
  const mainOffsetY = useRef()
  // const [isTouchDevice, setIsTouchDevice] = useState()
  const isTouchDevice = useRef()
  
  function touchDevice() {
    try {
      document.createEvent("TouchEvent")
      // setIsTouchDevice(true)
      isTouchDevice.current = true
    } catch (e) {
      // setIsTouchDevice(false)
      isTouchDevice.current = false
    }
  }

  useEffect(() => {
    const div = document.querySelector('.div')

    offsetX.current = div.offsetLeft
    offsetY.current = div.offsetTop

    touchDevice()
    // setInterval(() => {console.log(document.querySelector('div').style.zIndex)}, 3000)

    console.log("meow")
  }, [])

  function handleMove(event) {
    if (isHeld) {
      setPosTop(event.clientY - mainOffsetY.current)
      setPosLeft(event.clientX - mainOffsetX.current)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      offsetX.current = posLeft
      offsetY.current = posTop
    }
  }

  function mouseDown(event) {
    event.preventDefault()
    // console.log("start")
    setIsHeld(true)
    mainOffsetX.current = event.clientX - offsetX.current
    mainOffsetY.current = event.clientY - offsetY.current
    /* console.log(isTouchDevice)
    console.log(isHeld, mainOffsetX, mainOffsetY, event) */
  }

  function handleTouchMove(event) {
    if (isHeld) {
      setPosTop(event.touches[0].clientY - mainOffsetY.current)
      setPosLeft(event.touches[0].clientX - mainOffsetX.current)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      offsetX.current = posLeft
      offsetY.current = posTop
    }
  }

  function handleTouchDown(event) {
    setIsHeld(true)
    mainOffsetX.current = event.touches[0].clientX - offsetX.current
    mainOffsetY.current = event.touches[0].clientY - offsetY.current
    // console.log(zIndex)
    // console.log("started", offsetX, offsetY)
  }

  return (
    <>
      <div
        // draggable="true"
        className={`div ${className}`}
        onMouseDown={() => !isTouchDevice.current ? mouseDown(event) : null}
        onMouseMove={() => !isTouchDevice.current ? handleMove(event) : null}
        onMouseUp={() => {
          !isTouchDevice.current ? setIsHeld(false) : null
        }}

        onTouchStart={() => isTouchDevice.current ? handleTouchDown(event) : null}
        onTouchMove={() => isTouchDevice.current ? handleTouchMove(event) : null}
        onTouchEnd={() => isTouchDevice.current ? setIsHeld(false) : null}
        style={
          {
            position: "absolute",
            top: `${posTop}px`,
            left: `${posLeft}px`,
            cursor: 'grab',
            userSelect: 'none',
            border: 'solid 2px black',
            // zIndex: zIndex,
            // transform: `translate(${posLeft}px, ${posTop}px)`,
          }}
      >Component 1</div>
    </>
  )
}

App.propTypes = {
  className: PropTypes.string.isRequired
}

export default App
