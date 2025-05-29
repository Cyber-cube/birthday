import App from './App.jsx'
import Progress from './Progress.jsx'
import "./main.css"
import { useState, useEffect, useRef } from 'react'

function Ui() {

  const divRef = useRef()
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState({
    one: {
      moved: false,
      style: {
        backgroundColor: '#D9B483',
        zIndex: 16,
      },
      text: "Hii Lakshita! I've prepared this site as a birthday card for you. Hope you'll like this and guess who I am! (this sounds so akward...)"
    },

    two: {
      moved: false,
      style: {
        backgroundColor: '#DBB681',
        zIndex: 15,
      },
      text: 'So first of all, happy birthday! And a little background on this site. I started planning this since the end of finals of previous session.'
    },

    three: {
      moved: false,
      style: {
        backgroundColor: '#D7AD79',
        zIndex: 14,
      },
      text: 'I got the idea of these draggable cards froma youtube video so I made my own and added a progress system (which gives a fact at the end). I just barely finished this and now you\'re reading this.'
    },

    four: {
      moved: false,
      style: {
        backgroundColor: '#D8B280',
        zIndex: 13,
      },
      text: 'The source code is available on https://github.com/Cyber-cube/birthday btw. Ok back to the actual content, have you guessed who I am till now ?'
    },

    five: {
      moved: false,
      style: {
        backgroundColor: '#D3A771',
        zIndex: 12,
      },
      text: 'I just remember how excited I felt when you weren\'t going to bseb ^-^. Happy birthday again!'
    },

    six: {
      moved: false,
      style: {
        backgroundColor: '#D4A874',
        zIndex: 11,
      },
      text: 'The favourite moment I remember with you is when we were arranging the copies of maths\' half yearly exam previous session. I wanted that moment to never end. Idk if you remember it or not but I do.'
    },

    seven: {
      moved: false,
      style: {
        backgroundColor: '#D8B27F',
        zIndex: 10,
      },
      text: 'Btw I\'ve some pickup lines for you, (coughs) Are you the absolute value operation ? Cuz you make me feel positive (|-x| = +x).'
    },

    eight: {
      moved: false,
      style: {
        backgroundColor: '#E3C295',
        zIndex: 9,
      },
      text: 'Another pickup like is coming!'
    },

    nine: {
      moved: false,
      style: {
        backgroundColor: '#E8CFA6',
        zIndex: 8,
      },
      text: 'Are you the +C in my antiderivatives ? Cuz I never want to forget you (Antiderivatives means indefinite integrals and in the answers +C is always important).'
    },

    ten: {
      moved: false,
      style: {
        backgroundColor: '#F1D9B2',
        zIndex: 7,
      },
      text: 'Now you definitely know who I am right ? Anyways did you like this ? Tell me that after the school reopens.'
    },

    eleven: {
      moved: false,
      style: {
        backgroundColor: '#EBD2AB',
        zIndex: 6,
      },
      text: 'Idk if you liked this or not but I tried my best for this and completed this just on 29th.'
    },

    twelve: {
      moved: false,
      style: {
        backgroundColor: '#F6E2C3',
        zIndex: 5,
      },
      text: 'Next year this would be way better as there would be more memories and I would have more skills and probably a better sense od colorschemes.'
    },

    thirteen: {
      moved: false,
      style: {
        backgroundColor: '#F9E7CF',
        zIndex: 4,
      },
      text: 'The next year also marks the change of section...'
    },

    fourteen: {
      moved: false,
      style: {
        backgroundColor: '#FBEAD5',
        zIndex: 3,
      },
      text: 'Anyways try when you\'ll rate this in school, please be frank.'
    },

    fifteen: {
      moved: false,
      style: {
        backgroundColor: '#FDF1DE',
        zIndex: 2,
      },
      text: 'Happy birthday again, may you live long, a happy and wonderful life full of great memories and excel in all fields.'
    },

    sixteen: {
      moved: false,
      style: {
        backgroundColor: '#FFF6E6',
        zIndex: 1,
      },
      text: 'And.... 大好きだよ'
    },
  })

  useEffect(() => {
    if (progress == 16) {
      // divRef.current.style.display = "block"
      divRef.current.style.opacity = "100%"
    }
  }, [progress])

  return (
    <>
      <Progress value={progress} />
      <App id={'one'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <App id={'two'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <App id={'three'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <App id={'four'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />


      <App id={'five'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'six'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'seven'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'eight'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'nine'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <App id={'ten'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'eleven'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'twelve'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'thirteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'fourteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'fifteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <App id={'sixteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <div ref={divRef} style={{
        opacity: "0%",
        // display: "none",
        transition: "opacity 1s ease-in-out"
      }}>
        <p>Here's the fact— Our birthday fall on the same day... almost every year and our birthday is exactly 2 weeks apart &lt;3! (If you don't know my birth date, it's on 13th of June)</p>
      </div>
    </>
  )
}

export default Ui;
