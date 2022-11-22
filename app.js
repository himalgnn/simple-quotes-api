// Two Versions of API 
// (First api has total quotes in single json file & we need to manually randomize & display them)
// (Second api generates 1 random quote, no need to manually randomize)

// -------------------------------------------------------------------------------------------

// Code for first API
// // Selector
// const quoteText = document.getElementById('quoteText')
// const quoteAuthor = document.getElementById('quoteAuthor')
// // API
// const api_url = 'https://type.fit/api/quotes'

// async function get_data_from_api(api_url) { 
//     // data
//     const response = await fetch(api_url); 
//     var data = await response.json();
    
//     const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//     const dataNum = random(0,data.length)
//     console.log(data[dataNum])

//     quoteText.innerHTML =`${data[dataNum].text}`
//     quoteAuthor.innerHTML =`${data[dataNum].author}`
// }

// // get_data_from_api(api_url)
// window.addEventListener('load', get_data_from_api(api_url))


// Code for Second API
// Selector
const quoteText = document.getElementById('quoteText')
const quoteAuthor = document.getElementById('quoteAuthor')
// API
const api_url = 'https://api.quotable.io/random'

async function get_data_from_api(api_url) { 
    // data
    const response = await fetch(api_url); 
    var data = await response.json();

    console.log(data)

    quoteText.innerHTML =`${data.content}`
    quoteAuthor.innerHTML =`${data.author}`
    setTimeout(() => get_data_from_api(api_url), 60000)
    
}

// get_data_from_api(api_url)
window.addEventListener('load', get_data_from_api(api_url))