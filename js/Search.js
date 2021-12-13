/*************************************************************
Search.js - the javascript for Search.html
--------------------------------------------------------------
Austin Powers
12/01/2021 - 12/14/2021
--------------------------------------------------------------
There are 3 categories of javascript covered in this file:
1 - Reading Filters: 	Sets Persistent Search bar and filter selections.
   And compiles all selected HTML elements into JS arrays for filtering later.

2 - Finding Results: 	Filers all Games through a JS.Filter() to find matching results.

3 - Appending Results to Search Page, No results will have a notification message
 and use popular results instead of search specific 
 
*************************************************************/
'use strict';

// HTML Link Consts and global variables
const catagorySelector = '#SearchBar-Filter';
const catagoryDefaultText = 'All';
const GenreSelector = '#Genre-Filter'
const SearchResults = '#searchResults'
const SearchResultText = '#resultsText'
var SearchResultCount = 0;
var DisplayedResults = 0;

var SearchBarFilter;
const SearchBarStringSelector = '#SearchBar-string'
var SearchBarString;


const PriceSelector_20 = '#price-20'
const PriceSelector_40 = '#price-40'
const PriceSelector_60 = '#price-60'
const PriceSelector_80 = '#price-80'
const PriceSelector_100 = '#price-100'
const PriceSelector_120 = '#price-120'
const PriceSelector_120p = '#price-120p'
var PriceSelectorArray = []

const PlayerSelector_1 = '#player-1'
const PlayerSelector_2 = '#player-2'
const PlayerSelector_3 = '#player-3'
const PlayerSelector_4 = '#player-4'
const PlayerSelector_5 = '#player-5'
const PlayerSelector_6 = '#player-6'
var PlayerSelectorArray = []

const PlaytimeSelector_1 = '#Playtime-1'
const PlaytimeSelector_2 = '#Playtime-2'
const PlaytimeSelector_3 = '#Playtime-3'
const PlaytimeSelector_4 = '#Playtime-4'
const PlaytimeSelector_5 = '#Playtime-5'
var PlaytimeSelectorArray = []


$().ready(function () {
  SearchResultCount = Games.length;

  // Set default text
  $(catagorySelector).append($('<option>').text(catagoryDefaultText).attr('value', -1));

  // Populate Category dropdown
  $.each(Categories, function (number, catagory) {
    $(catagorySelector).append($('<option>').text(catagory.name).attr('value', catagory.value));
  });

  //Set Value of search bar to match url parameters
  SearchBarFilter = getUrlParameter('SearchBar-Filter') || -1;
  $(catagorySelector).val(SearchBarFilter);

  // Set category selector default option
  $(GenreSelector).append($('<option>').text(catagoryDefaultText).attr('value', -1));

  // Populate category select options
  $.each(Categories, function (number, catagory) {
    $(GenreSelector).append($('<option>').text(catagory.name).attr('value', catagory.value));
  });


  //Set Value of search bars to match url parameters
  SearchBarFilter = getUrlParameter('SearchBar-Filter') || -1;
  SearchBarString = getUrlParameter('SearchBar-string') || "";
  $(GenreSelector).val(SearchBarFilter);
  $(SearchBarStringSelector).val(SearchBarString);

  // Start Grabbing all of the filter options and contain the options into their respective arrays

  // Price
  if (getUrlParameter('price-20') == 'on') {
    PriceSelectorArray.push(1)
    $(PriceSelector_20).attr("checked", 1);
  }
  if (getUrlParameter('price-40') == 'on') {
    PriceSelectorArray.push(2)
    $(PriceSelector_40).attr("checked", 1);

  }
  if (getUrlParameter('price-60') == 'on') {
    PriceSelectorArray.push(3)
    $(PriceSelector_60).attr("checked", 1);

  }
  if (getUrlParameter('price-80') == 'on') {
    PriceSelectorArray.push(4)
    $(PriceSelector_80).attr("checked", 1);

  }
  if (getUrlParameter('price-100') == 'on') {
    PriceSelectorArray.push(5)
    $(PriceSelector_100).attr("checked", 1);

  }
  if (getUrlParameter('price-120') == 'on') {
    PriceSelectorArray.push(6)
    $(PriceSelector_120).attr("checked", 1);

  }
  if (getUrlParameter('price-120p') == 'on') {
    PriceSelectorArray.push(7)
    $(PriceSelector_120p).attr("checked", 1);
  }

  // Player Count
  if (getUrlParameter('player-1') == 'on') {
    PlayerSelectorArray.push(1)
    $(PlayerSelector_1).attr("checked", 1);
  }
  if (getUrlParameter('player-2') == 'on') {
    PlayerSelectorArray.push(2)
    $(PlayerSelector_2).attr("checked", 1);
  }
  if (getUrlParameter('player-3') == 'on') {
    PlayerSelectorArray.push(3)
    $(PlayerSelector_3).attr("checked", 1);
  }
  if (getUrlParameter('player-4') == 'on') {
    PlayerSelectorArray.push(4)
    $(PlayerSelector_4).attr("checked", 1);
  }
  if (getUrlParameter('player-5') == 'on') {
    PlayerSelectorArray.push(5)
    $(PlayerSelector_5).attr("checked", 1);
  }
  if (getUrlParameter('player-6') == 'on') {
    PlayerSelectorArray.push(6)
    $(PlayerSelector_6).attr("checked", 1);
  }

  //Play Time
  if (getUrlParameter('Playtime-1') == 'on') {
    PlaytimeSelectorArray.push(0)
    PlaytimeSelectorArray.push(30)
    $(PlaytimeSelector_1).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-2') == 'on') {
    PlaytimeSelectorArray.push(30)
    PlaytimeSelectorArray.push(60)

    $(PlaytimeSelector_2).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-3') == 'on') {
    PlaytimeSelectorArray.push(60)
    PlaytimeSelectorArray.push(120)
    $(PlaytimeSelector_3).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-4') == 'on') {
    PlaytimeSelectorArray.push(120)
    PlaytimeSelectorArray.push(180)
    $(PlaytimeSelector_4).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-5') == 'on') {
    PlaytimeSelectorArray.push(180)
    PlaytimeSelectorArray.push(1000)

    $(PlaytimeSelector_5).attr("checked", 1);
  }

  //Filter Games based on selected options

  let results = Games.filter(function (game) {
    //GenreFilters is based on selected categories
    let GenreFilter = SearchBarFilter == -1 ? true : game.Genre == SearchBarFilter
    //StringFilter is Based on the searchbar Text Entry
    let StringFilter = game.name.toLowerCase().includes(SearchBarString.toLowerCase());

    //the following are based on the overlapping ranges between the selection options, and the respective min and max of the game
    let PriceFilter = PriceSelectorArray.includes(Math.ceil(game.price / 20)) ||
      PriceSelectorArray.includes(7) && game.price > 120 ||
      PriceSelectorArray.length == 0;

    let PlayerFilter = false;
    for (let i = game.minPlayers; i <= game.maxPlayers;i++){
      if(PlayerSelectorArray.includes(i) || (game.maxPlayers >= 6 && PlayerSelectorArray.includes(6)) || PlayerSelectorArray.length == 0){
        PlayerFilter = true
        break;
      }
    }
    
    let PlayTimeFilter = PlaytimeSelectorArray == 0;
    for(let i = 0; i < PlaytimeSelectorArray.length; i += 2){

      if((game.minPlaytime <= PlaytimeSelectorArray[i] && game.maxPlaytime >= PlaytimeSelectorArray[i+1])){
        PlayTimeFilter = true
        break;
      }
    }
    //All filters must pass for the game to end up in the results array
    return GenreFilter && StringFilter && PriceFilter && PlayerFilter && PlayTimeFilter
  })

  // If we have results append them to the Proper place. Else were owning the error and displaying popular results instead
  if(results.length > 0){
  $.each(results, function (number, game) {
    $(SearchResults).append($(
      '<a class="card my-3 game-card text-dark text-decoration-none" href="SingleGame.html?id='+ game.id +'">' + 
      '<img src="' + game.image + '" class="card-img-top" alt="...">' +
      '<div class="card-body">' +
      '<h5 class="card-title text-center">' + game.name + '</h5>' +
      '<p class="card-text text-center">' + game.ShortDesc + '</p>' +
      '<p class="card-text text-center">$' + game.price + '</p>' +
      '</div>' +
      '</a>'
    ))
    DisplayedResults++
  });
  let SearchText = SearchBarString.length > 0 ? 'for "' + SearchBarString + '"' : ""
  $(SearchResultText).append($(
    '<div class="card-body">' +
    'Now showing ' + DisplayedResults + ' of ' + SearchResultCount + ' results ' + SearchText +
    '</div>'
  ))

  }else{

    let SearchText = SearchBarString.length > 0 ? ' for "' + SearchBarString + '"' : ""
    $(SearchResultText).append($(
      '<div class="card-body">' +
      'No results found' + SearchText + ', heres the most popular games though!'+
      '</div>'
    ))
    $.each(Games, function (number, game) {
      $(SearchResults).append($(
        '<a class="card my-3 game-card text-dark text-decoration-none" href="SingleGame.html?id='+ game.id +'">' + 
        '<img src="' + game.image + '" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title text-center">' + game.name + '</h5>' +
        '<p class="card-text text-center">' + game.ShortDesc + '</p>' +
        '<p class="card-text text-center">$' + game.price + '</p>' +
        '</div>' +
        '</a>'
      ))
      DisplayedResults++
    });
  }
});



$(".gameSubmittion").click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};


function selectElement(id, valueToSelect) {
  let element = document.getElementById(id);
  element.value = valueToSelect;
}
