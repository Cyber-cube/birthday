/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function App({ className }) {

  const [posTop, setPosTop] = useState(100)
  const [posLeft, setPosLeft] = useState(50)
  const [isHeld, setIsHeld] = useState(false)
  const [offsetX, setOffsetX] = useState()
  const [offsetY, setOffsetY] = useState()
  const [mainOffsetX, setMainOffsetX] = useState()
  const [mainOffsetY, setMainOffsetY] = useState()
  const [isTouchDevice, setIsTouchDevice] = useState()

  function touchDevice() {
    try {
      document.createEvent("TouchEvent")
      setIsTouchDevice(true)
    } catch (e) {
      setIsTouchDevice(false)
    }
  }

  useEffect(() => {
    const div = document.querySelector('.div')

    setOffsetX(div.offsetLeft)
    setOffsetY(div.offsetTop)

    touchDevice()
    // setInterval(() => {console.log(document.querySelector('div').style.zIndex)}, 3000)

    console.log("meow")
  }, [])

  function handleMove(event) {
    if (isHeld) {
      setPosTop(event.clientY - mainOffsetY)
      setPosLeft(event.clientX - mainOffsetX)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      setOffsetX(posLeft)
      setOffsetY(posTop)
    }
  }

  function mouseDown(event) {
    event.preventDefault()
    // console.log("start")
    setIsHeld(true)
    setMainOffsetX(event.clientX - offsetX)
    setMainOffsetY(event.clientY - offsetY)
    /* console.log(isTouchDevice)
    console.log(isHeld, mainOffsetX, mainOffsetY, event) */
  }

  function handleTouchMove(event) {
    if (isHeld) {
      setPosTop(event.touches[0].clientY - mainOffsetY)
      setPosLeft(event.touches[0].clientX - mainOffsetX)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      setOffsetX(posLeft)
      setOffsetY(posTop)
    }
  }

  function handleTouchDown(event) {
    setIsHeld(true)
    setMainOffsetX(event.touches[0].clientX - offsetX)
    setMainOffsetY(event.touches[0].clientY - offsetY)
    // console.log(zIndex)
    // console.log("started", offsetX, offsetY)
  }

  return (
    <>
      <div
        // draggable="true"
        className={`div ${className}`}
        onMouseDown={() => !isTouchDevice ? mouseDown(event) : null}
        onMouseMove={() => !isTouchDevice ? handleMove(event) : null}
        onMouseUp={() => {
          !isTouchDevice ? setIsHeld(false) : null
        }}

        onTouchStart={() => isTouchDevice ? handleTouchDown(event) : null}
        onTouchMove={() => isTouchDevice ? handleTouchMove(event) : null}
        onTouchEnd={() => isTouchDevice ? setIsHeld(false) : null}
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
