import axios from 'axios'

const baseUrl = 'https://type.fit/api/quotes'

const color = {
    0: '#1abc9c',
    1: '#2c3e50',
    2: '#27ae60',
    3: '#16a085',
    4: '#27ae60',
    5: '#2c3e50',
    6: '#f39c12',
    7: '#e74c3c',
    8: '#9b59b6',
    9: '#FB6964',
    10: '#342224',
    11: '#472E32',
    12: '#00b894',
    13: '#d35400',
    14: '#73A857'
}

export default class Quote {
    constructor() {
        // this._quote = ''
        // this._author = ''
        this._currentQuote = 0
        this._currentAuthor = 0
        this._currentColor = color[0]
    }


    async getQuote() {
        try {
            // const res = await axios.get(baseUrl)
            // console.log(res)

            const {
                data
            } = await axios.get(baseUrl)
            // console.log(data)
            this._currentQuote = Math.floor(Math.random() * 1500)
            this._currentAuthor = Math.floor(Math.random() * 1500)
            this._currentColor = Math.floor(Math.random() * 14)
            // console.log(this._currentBgColor)
            return {
                quote: data[this._currentQuote].text,
                author: data[this._currentAuthor].author,
                color: Object.values(color)[this._currentColor]
            }

        } catch (e) {
            console.log(e)
        }
    }

    // changeQuote() {
    //     this._currentQuote = Math.floor(Math.random() * 1500)
    //     this._currentAuthor = Math.floor(Math.random() * 1500)
    // }
}