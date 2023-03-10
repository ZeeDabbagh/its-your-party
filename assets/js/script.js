// wikipedia client ID: 11220981964a8e690f4a7100a76d20ed
// wikipedia secret: ad2942411e6e8d286889bf7f1dd245fdd623d2c5

// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=[YOUR_API_KEY]'
// tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6


//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19900301&end_date=19900301&api-key=tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6' \ //article search 

// 'https://api.nytimes.com/svc/books/v3/lists.json?list=fiction&bestsellers-date=1990-03-01&api-key=tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6' //best seller search

// http://api.marketstack.com/v1/eod?access_key=18e6649598844cabcb3fed79128d93b0&symbols=AAPL&date_from=1990-02-27&date_to=1990-02-28

// var userInput = document.getElementById('userInput').value 
 var apiKey = 'tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6'
// var requestUrl =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${userInput}&end_date=${userInput}&api-key=`+ apiKey;
// var searchBtn = document.getElementById('searchBtn')

// fetch(requestUrl, {
//   method: 'GET',
//   credentials: 'same-origin',
//   redirect: 'follow',
// })
// .then(async function (response){
//   return response.json();
// })
// .then (async function (data){
//   console.log(data)
// })

searchBtn.addEventListener('click', function(){
  var dateInput = $('#userInput').val();
  var requestUrl =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${dateInput}&end_date=${dateInput}&api-key=`+ apiKey;

  fetch(requestUrl).then(function(response) {
    console.log(response.json());
  })

  // userInput = userInput.valueOf 

  // return userInput;
 // console.log(dateInput)

})


// var requestUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${userInput}}`;

// fetch(requestUrl)
// .then(response => response.json())
// .then (data => {
//   console.log(data)

  // data.births.map (pages => { //cite shortcut (find youtube video where i learned this)

  //   var p = document.createElement('p')
  //   p.innerText = births.description;

  //   var h1 = document.createElement('h1')
  //   h1.innerText = births[0].pages[0].title;

    
  //   headlines.appendChild(img)
  //   headlines.appendChild(p);
    
  // })
// })





// async function fetchData(requestUrl) {
//   var response = await fetch(requestUrl);
//   var data = await response.json();

//   console.log(data);
// }

// searchBtn.addEventListener('click', fetchData())









































//-----------------------------------------
// WORKING CODE
//-----------------------------------------
// var requestUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6'
// var headlines = document.getElementById('headlines');


// fetch(requestUrl)
// .then(response => response.json())
// .then (data => {
//   console.log(data)

//   data.results.map (article => { //cite shortcut (find youtube video where i learned this)
//     var a = document.createElement('a');
//     a.setAttribute('href', article.url);
//     a.innerText = article.title;

//     var p = document.createElement('p')
//     p.innerText = article.abstract;

//     var img = document.createElement('img')
//     img.setAttribute('src', article.multimedia[2].url)

//     headlines.appendChild(a);
//     headlines.appendChild(img)
//     headlines.appendChild(p);
    
//   })
// })