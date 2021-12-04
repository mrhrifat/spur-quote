import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Quote from '../utils/quote'
import '../style/style.css'

// const quoteIcon = <FontAwesomeIcon icon={['fas', 'quote-left']} />
// const fbIcon = <FontAwesomeIcon icon={['fab', 'facebook-f']} />
// const twitterIcon = <FontAwesomeIcon icon={['fab', 'twitter']} />

const quoteIcon = <FontAwesomeIcon icon={faQuoteLeft} />
const fbIcon = <FontAwesomeIcon icon={faFacebookF} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
// const myWindow = window.open("https://www.facebook.com/sharer/sharer.php?u=www.url-to-share.com/", "", "top=30px,width=200,height=100")
// const myWindow = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com'
// https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='

const quote = new Quote()
class Root extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        // quote.getQuote()
        //     .then(data => {
        //         console.log(data)
        //     })

        quote.getQuote()
            .then(data => {
                // console.log(data)
                this.setState({ data })
            })
            .catch(e => {
                throw new Error(e)
            })
    }

    handleChangeQuote = () => {
        quote.getQuote()
            .then(data => {
                this.setState({ data })
            })
    }

    render() {
        const { data } = this.state
        return (
            <div
                style={{
                    background: `${data.color}`,
                    // overflow: 'hidden',
                    // height: '100vh'
                }}
                className='root-container'
            >
                {/* {console.log(data)} */}
                {/* {console.log(data.color)} */}
                {/* {console.log({ color: `${data.color}` })} */}

                <div className='main-box d-flex flex-column align-items-center justify-content-center'>
                    <div className="quote-box bg-light rounded text-center">
                        <div className="quote">
                            <h4 style={{ color: `${data.color}` }}>
                                {quoteIcon} {data.quote}
                            </h4>

                            <p
                                className='d-flex justify-content-end my-2'
                                style={{ color: `${data.color}` }}
                            >
                                - {data.author ? data.author : 'Unknown'}
                            </p>
                        </div>
                        <div className="quote-footer d-flex justify-content-between">
                            <div className="share">
                                <a
                                    className="btn btn-sm mx-1"
                                    style={{
                                        backgroundColor: `${data.color}`,
                                        borderColor: `${data.color}`,
                                        color: '#fff'
                                    }}
                                    href="https://twitter.com/intent/tweet"
                                    target="_blank"
                                >
                                    {twitterIcon}
                                </a>

                                <a
                                    className="btn btn-sm mx-1"
                                    style={{
                                        backgroundColor: `${data.color}`,
                                        borderColor: `${data.color}`,
                                        color: '#fff'
                                    }}
                                    href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                                    target="_blank"

                                >
                                    {fbIcon}
                                </a>
                            </div>

                            <button
                                className='btn btn-sm'
                                style={{
                                    backgroundColor: `${data.color}`,
                                    borderColor: `${data.color}`,
                                    color: '#fff'
                                }}
                                onClick={this.handleChangeQuote}
                            >
                                New Quote
                            </button>
                        </div>
                    </div>

                    <div>
                        <a
                            href="https://github.com/mrhrifat"
                            target="_blank"
                            className='text-light text-decoration-none py-2'
                        >by mrhrifat
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Root
