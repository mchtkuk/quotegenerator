import tumblrIcon from '../tumblr.svg';
import twitterIcon from '../twitter.svg';
import React, {useState, useEffect} from 'react';




const Quotes = () => {

    const[quote, setQuote] = useState()
    const[author, setAuthor] = useState()

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length)
            let randomQuote = dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }
        const handleClick = () => {
            getQuote();
        }
    return (
        <div>
            <h1>Random Quote Generator</h1>
        
    <div id="wrapper">
        <div id="quote-box">
            <div id="text">
            <span id="right-quote">&#8221;</span>
            <p>{quote}
            </p>
            </div>
            <div id="author"><p>{author}</p></div>

            <div id="buttons">
                <div className="social-media">
                    <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote">
                        <span><img src={twitterIcon} alt=""></img></span>
                    </a>
                    <a href="#" id="tumlr-quote">
                        <span><img src={tumblrIcon} alt=""></img></span>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    </div>
    </div>


    )
}

export default Quotes;