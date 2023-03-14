var nytDate = ""
var wikiMonth = ""
var wikiDay = ""
var selectedName = ""
var billboardDate = ""
var apiSearchButton = document.getElementById("searchBtn")

$( function() {
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '1920:2050',
    onSelect: function(dateText) {
      var year = dateText.split("/")[2]
      var month = dateText.split("/")[0]
      var date = dateText.split("/")[1]
      nytDate = `${year}${month}${date}`
      wikiDay = `${date}`
      wikiMonth = `${month}`
      billboardDate = `${year}-${month}-${date}`
    }
  });
} );

apiSearchButton.addEventListener("click", function () {
  apiRequest(), saveName()
})

// yyyymmdd userInput.dayjs().format('YYYYMMDD)


function apiRequest() {

  document.getElementById('frontPage').classList.add('hide')
  document.getElementById('infoPage').classList.remove('hide')
  // selectedName = $('#selectedName').val()
  

  localStorage.setItem('selectedName', selectedName)


  var apiKey = 'tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6'

  var nytUrl =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${nytDate}&end_date=${nytDate}&api-key=`+ apiKey;

  fetch(nytUrl)
  .then(response => response.json()) 
  .then (data => {
    console.log(data);

    data.response.docs.slice(0, 3).map((article, index) => {
      console.log(article.headline.main)
      
      var nytInfoId = "#nytInfo" + index
      var nytHeadline = document.querySelector(nytInfoId + " h4")
      var abstracts = document.querySelector(nytInfoId + " span")
      
      nytHeadline.innerHTML = article.headline.main
      abstracts.innerHTML = article.abstract

      // nytHeadline.innerText = article.headline.main
      // abstracts.innerText = article.abstract

      // for (var i = 0; i < nytApiHeads.length; i++) {
      //   nytHeadline.innerText = article.headline.main
      // }

      
      


      // var h1 = document.createElement('h1')
      // h1.innerText = article.headline.main

      // headlineDiv.appendChild(h1);

    })


  // })

  var wikiSelectedUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${wikiMonth}/${wikiDay}`;
  fetch( wikiSelectedUrl,
    {
        headers: {
            'Authorization': 'd2ded8271ec6706b0494e89771c0a5c3',
            'Api-User-Agent': 'ITS_YOUR_PARTY (dabbagh.zainab@gmail.com)'
        }
    }
).then(response => response.json()) 
.then (data => {
  console.log(data);

  data.selected.slice(0, 3).map(selectedEvents => {
      console.log(selectedEvents.text)

      // var slide1Abstract = document.getElementById('slide-1-abstract')
      // slide1Abstract.innerText = selectedEvents.text
    
    
  })
});

var wikiBirthsUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${wikiMonth}/${wikiDay}`;
fetch( wikiBirthsUrl,
  {
      headers: {
          'Authorization': 'd2ded8271ec6706b0494e89771c0a5c3',
          'Api-User-Agent': 'ITS_YOUR_PARTY (dabbagh.zainab@gmail.com)'
      }
  }
).then(response => response.json()) 
.then (data => {
console.log(data);
data.births.slice(0, 3).map(selectedBirths => {
    console.log(selectedBirths.pages[0].normalizedtitle);
    
  
  
})
});


});

var bdayBtn = document.getElementById('bdayBtn');

bdayBtn.addEventListener('click', function() {
  document.getElementById('frontPage').classList.add('hide');
  document.getElementById('infoPage').classList.add('hide')
  document.getElementById('happyBirthday').classList.remove('hide');

  var start = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000);
  };

  var stop = () => {
    setTimeout(function () {
        confetti.stop();
    }, 5000)
  }

// Saves name to local storage and retrieves it
function saveName(){
  var userName = selectedName;
  
  // localStorage.clear();
  localStorage.setItem('Name', selectedName);
  console.log("Me nom is " +localStorage.getItem('Name'));
  }

  
  start();
  stop();
})

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2b7cad8979mshfa5e2dad08c6573p12d605jsn5240ab6f6aac',
// 		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
// 	}
// };

// fetch(`https://billboard-api2.p.rapidapi.com/hot-100?date=${billboardDate}&range=1-10`, options)
// 	.then(response => response.json())
// 	.then(data => {

// fetch( url,
//     {
//         headers: {
//             'Authorization': 'd2ded8271ec6706b0494e89771c0a5c3',
//             'Api-User-Agent': 'ITS_YOUR_PARTY (dabbagh.zainab@gmail.com)'
//         }
//     }
// ).then(response => response.json()) 
// .then (data => {
//   console.log(data);
// });









































// // _______________________________________________________
// // API CODE
// // _______________________________________________________

// // wikipedia client ID: d2ded8271ec6706b0494e89771c0a5c3

// // wikipedia secret: dd343f361c757fd8a9eabc2c49803e270d1cc042


// // 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=[YOUR_API_KEY]'
// // tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6


// //   'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19900301&end_date=19900301&api-key=tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6' \ //article search 

// // 'https://api.nytimes.com/svc/books/v3/lists.json?list=fiction&bestsellers-date=1990-03-01&api-key=tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6' //best seller search

// // http://api.marketstack.com/v1/eod?access_key=18e6649598844cabcb3fed79128d93b0&symbols=AAPL&date_from=1990-02-27&date_to=1990-02-28


// // var apiKey = 'tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6'
// // var headlineDiv = document.getElementById('headlines')

// // searchBtn.addEventListener('click', function(){
// //   var dateInput = $('#userInput').val();
// //   var requestUrl =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${dateInput}&end_date=${dateInput}&api-key=`+ apiKey;

// //   fetch(requestUrl)
// //   .then(response => response.json()) 
// //   .then (data => {
// //     console.log(data);

// //     data.response.docs.map(article => {
// //       console.log(article.headline.main)
// //       // var h1 = document.createElement('h1')
// //       // h1.innerText = article.headline.main

// //       // headlineDiv.appendChild(h1);

// //     })


// //   })

// // })

// // let today = new Date();
// // let month = String(today.getMonth() + 1).padStart(2,'0');
// // let day = String(today.getDate()).padStart(2,'0');




























// // // var requestUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/0301`

// // // // ${userInput}};

// // // fetch(requestUrl)
// // // .then(response => response.json())
// // // .then (data => {
// // //   console.log(data)

// // //   // data.births.map (pages => { //cite shortcut (find youtube video where i learned this)

// // //   //   var p = document.createElement('p')
// // //   //   p.innerText = births.description;

// // //   //   var h1 = document.createElement('h1')
// // //   //   h1.innerText = births[0].pages[0].title;

    
// // //   //   headlines.appendChild(img)
// // //   //   headlines.appendChild(p);
    
// // //   })
// // // // })

