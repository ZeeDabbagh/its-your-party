var nytDate = ""
var wikiMonth = ""
var wikiDay = ""
var selectedName = $("#selectedName");
var billboardDate = ""
var apiSearchButton = document.getElementById("searchBtn")

$( function() {
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: '1940:2023',
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
  apiRequest() 
  localStorage.setItem('selectedName', $('#selectedName').val())
  localStorage.setItem('selectedName', $('#selectedName').val())
})

// yyyymmdd userInput.dayjs().format('YYYYMMDD)


function apiRequest() {

  document.getElementById('frontPage').classList.add('hide')
  document.getElementById('infoPage').classList.remove('hide')
  // selectedName = $('#selectedName').val()
  

  // localStorage.setItem('selectedName', selectedName)


  var nytKey = 'tjyebbtQOUAnsp7tZpC8fCtH2pW8s3a6'

  var nytUrl =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${nytDate}&end_date=${nytDate}&api-key=`+ nytKey;

  fetch(nytUrl)
  .then(response => response.json()) 
  .then (data => {
    console.log(data);

    data.response.docs.slice(0, 3).map((article, index) => {
      console.log(article.headline.main)
      
      var nytInfoId = "#nytInfo" + index
      var nytHeadline = document.querySelector(nytInfoId + " h5")
      var abstracts = document.querySelector(nytInfoId + " p")
      
      nytHeadline.innerHTML = article.headline.main
      abstracts.innerHTML = article.abstract

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

  data.selected.slice(0, 3).map((selectedEvents, index) => {
      console.log(selectedEvents.text)

      var selectedEventsId = "#happenedToday" + index
      var eventsImgID = "#todayImg" + index
      var eventName = document.querySelector(selectedEventsId + " h5")
      var eventDesc = document.querySelector(selectedEventsId + " p")
      var eventImg = document.querySelector(eventsImgID + " img")

      eventName.innerHTML = selectedEvents.pages[0].normalizedtitle
      eventDesc.innerHTML = selectedEvents.pages[0].extract

      if ('thumbnail' in selectedEvents.pages[0]) {
        eventImg.setAttribute('src', selectedEvents.pages[0].thumbnail.source);
        eventImg.setAttribute('alt', selectedEvents.pages[0].description)
        eventImg.setAttribute('width', '100px')
      } else {
        eventImg.setAttribute('src', './assets/images/partyhorn.png')
      }
      
    
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
data.births.slice(0, 3).map((selectedBirths, index) => {
    console.log(selectedBirths.pages[0].normalizedtitle);
    console.log(selectedBirths.pages[0].extract)
    
    var otherBirthsID = "#otherBirths" + index
    var birthsImgID = "#birthsImg" + index
    var wikiBirthsName = document.querySelector(otherBirthsID + " h5")
    var wikiBirthsAbstract = document.querySelector(otherBirthsID + " p")
    var wikiImage = document.querySelector(birthsImgID + " img")

    wikiBirthsName.innerHTML = selectedBirths.pages[0].normalizedtitle
    wikiBirthsAbstract.innerHTML = selectedBirths.pages[0].extract

    if ('thumbnail' in selectedBirths.pages[0]) {
      wikiImage.setAttribute('src', selectedBirths.pages[0].thumbnail.source);
      wikiImage.setAttribute('alt', selectedBirths.pages[0].description)
      wikiImage.setAttribute('width', '100px')
    } else {
      wikiImage.setAttribute('src', './assets/images/partyhorn.png')
    }
   
  
})
});


});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b7cad8979mshfa5e2dad08c6573p12d605jsn5240ab6f6aac',
		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
	}
};

fetch(`https://billboard-api2.p.rapidapi.com/hot-100?date=${billboardDate}&range=1-10`, options)
	.then(response => response.json())
	.then(data => {

    console.log(data);
    console.log(data.content[1].artist)  


    var firstArtist= data.content[1].artist
    var secondArtist = data.content[2].artist
    var thirdArtist = data.content[3].artist

    var firstSong = data.content[1].title
    var secondSong = data.content[2].title
    var thirdSong = data.content[3].title

    var firstImg = data.content[1].image
    var secondImg = data.content[2].image
    var thirdImg = data.content[3].image

    document.getElementById('firstSong').innerHTML=firstSong
    document.getElementById('secondSong').innerHTML=secondSong
    document.getElementById('thirdSong').innerHTML=thirdSong

    document.getElementById('firstArtist').innerHTML=firstArtist
    document.getElementById('secondArtist').innerHTML=secondArtist
    document.getElementById('thirdArtist').innerHTML=thirdArtist

    document.getElementById('firstImg').setAttribute('src', firstImg)
    document.getElementById('firstImg').setAttribute('width', '200px')
    document.getElementById('secondImg').setAttribute('src', secondImg)
    document.getElementById('secondImg').setAttribute('width', '200px')
    document.getElementById('thirdImg').setAttribute('src', thirdImg)
    document.getElementById('thirdImg').setAttribute('width', '200px')
  })
    


	.catch(err => console.error(err));
    

  


}

var bdayBtn = document.getElementById('bdayBtn');

bdayBtn.addEventListener('click', function() {
  console.log(localStorage.getItem('selectedName'))

  document.getElementById('happyBirthday').classList.remove('hide');
  document.getElementById('frontPage').classList.add('hide');
  document.getElementById('infoPage').classList.add('hide')
  
  var bdayName =  document.querySelector('#bdayName');
  bdayName.innerHTML = localStorage.getItem('selectedName');
  
  // localStorage.clear();
 
  console.log(localStorage.getItem('selectedName'))

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

  start();
  stop();
})


