const fetch = require('node-fetch')

export default async function handler(req, res){
    console.log("test")
    const {symbol} = req.query
    const key = process.env.API_KEY
    const response =  await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}`)
    if (response.ok){
        const data = await response.json();
        const timeSeries = data["Time Series (5min)"]
        const ret = []
        for(const dateTime in timeSeries){
            const prices = timeSeries[dateTime]
            const priceArray = []
            for(const price in prices){
                priceArray.push(prices[price])
            }
            ret.push({x:dateTime, y:priceArray})
        }
        res.status(200).json(ret)
        console.log(data)
    }else{
        res.status(response.status)
    }
    
    
    
}