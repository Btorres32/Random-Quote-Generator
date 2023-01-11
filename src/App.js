
import './App.css';
import React, {useLayoutEffect, useEffect, useState} from 'react';


const quoteObject = [
  {
    quote: "this is a test quote",
    author: "Brandon Torres"
  },
  {
      quote: "this is a test quote, this is a test quotethis is a test quotethis is a test quotethis is a test quote",
      author: "Randy Torres"
    },
  {
    quote: "this is a test quote this is a test quotethis is a test quotethis is a test quotethis is a test quotethis is a test quotethis is a test quotethis is a test quotethis is a test quotethis is a test quote",
    author: "Brandy Torres"
  },
  {
    quote: "this is a test quote this is a test quote",
    author: "Handy Torres"
  }
]

const colorArr = [
  {color: "#0000FF"},
  {color: "#330099"},
  {color: "#003333"},
  {color: "#990000"},
  {color: "#FF0099"},
  {color: "#CC00FF"},
  {color: "#0033FF"},
]




function App() {
  function Fader(props){


    const [fadeProp, setFadeProp] = useState({
      fade: 'fade-in'
    });

    useEffect(() => {
      const timeout = setInterval(() => {
        if (fadeProp === 'fade-in'){
          setFadeProp({
            fade: "fade-out"
          })
        }
        else {
          setFadeProp({
            fade: "fade-in"
          })
        }
      }, 4000)
      return () => clearInterval(timeout)
    }, [fadeProp])

    return <><h1 className={fadeProp.fade} style={textStyle} id="text"><span className="big">"</span> {props.text} </h1>
    <h3 className={fadeProp.fade} style={textStyle} id="author">- {props.author}</h3></>
  }
  
  const [currentQuote, setCurrentQuote] = useState("")
  const [currentAuthor, setCurrentAuthor] = useState("")
  const [currentColorAcc, setCurrentColorAcc] = useState("")
  // const [clicked, setClicked] = useState(false)

  
  
  
  function getNewQuoteObject(){
    const randomElm = Math.floor(Math.random() * quoteObject.length)
    const currentRandQuote = quoteObject[randomElm].quote
    const currentRandAuthor = quoteObject[randomElm].author
    
    setCurrentQuote(currentRandQuote)
    setCurrentAuthor(currentRandAuthor)
    getNewColor()
    
  }
  
  function getNewColor(){
    const randomElm = Math.floor(Math.random() * colorArr.length)
    const currentRandColorArr = colorArr[randomElm].color
    setCurrentColorAcc(currentRandColorArr)
  }

  useEffect(getNewQuoteObject, [])

  

  useLayoutEffect(() => {
    document.body.style.backgroundColor = currentColorAcc
  })

  const backgroundStyle = {
    backgroundColor: currentColorAcc
  }
  const textStyle = {
    color: currentColorAcc
  }

  
  
  
  return (
    <div className="quote-container" id="quote-box">

        <div className="row">
            <Fader text={currentQuote} author={currentAuthor} />
            <div className="clickable-container">
                <div className="a-container">
                    <a href="twitter.com/intent/tweet" style={backgroundStyle}  className="btn-size marg" id="tweet-quote">0</a>
                    <a href="twitter.com/intent/tweet" style={backgroundStyle}  className="btn-size" id="tumblr-quote">0</a>
                </div>
                <div className="b-container">
                    <button className="" style={backgroundStyle} onClick={getNewQuoteObject} id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
