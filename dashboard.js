'use strict';

var catagorySelector = '#SearchBar-Filter';
var catagoryDefaultText = 'All';

var GenreSelector = '#Genre-Filter'

var top5Games = '#top5Games'
var SearchResultText = '#resultsText'
var SearchResultCount = 0;
var DisplayedResults = 0;

var SearchBarFilter;
var SearchBarStringSelector = '#SearchBar-string'
var SearchBarString;


var PriceSelector_20 = '#price-20'
var PriceSelector_40 = '#price-40'
var PriceSelector_60 = '#price-60'
var PriceSelector_80 = '#price-80'
var PriceSelector_100 = '#price-100'
var PriceSelector_120 = '#price-120'
var PriceSelector_120p = '#price-120p'
var PriceSelectorArray = []

var PlayerSelector_1 = '#player-1'
var PlayerSelector_2 = '#player-2'
var PlayerSelector_3 = '#player-3'
var PlayerSelector_4 = '#player-4'
var PlayerSelector_5 = '#player-5'
var PlayerSelector_6 = '#player-6'
var PlayerSelectorArray = []

var PlaytimeSelector_1 = '#Playtime-1'
var PlaytimeSelector_2 = '#Playtime-2'
var PlaytimeSelector_3 = '#Playtime-3'
var PlaytimeSelector_4 = '#Playtime-4'
var PlaytimeSelector_5 = '#Playtime-5'
var PlaytimeSelectorArray = []


$().ready(function () {
  SearchResultCount = Games.length;



  // Set default text
  $(catagorySelector).append($('<option>').text(catagoryDefaultText).attr('value', -1));

  // Populate province select
  $.each(catagories, function (number, catagory) {
    $(catagorySelector).append($('<option>').text(catagory.name).attr('value', catagory.value));
  });
  //Set Value
  SearchBarFilter = getUrlParameter('SearchBar-Filter') || -1;
  $(catagorySelector).val(SearchBarFilter);


  // Set default text
  $(GenreSelector).append($('<option>').text(catagoryDefaultText).attr('value', -1));

  // Populate province select
  $.each(catagories, function (number, catagory) {
    $(GenreSelector).append($('<option>').text(catagory.name).attr('value', catagory.value));
  });

  //Set Value
  SearchBarFilter = getUrlParameter('SearchBar-Filter') || -1;
  SearchBarString = getUrlParameter('SearchBar-string') || "";

  $(GenreSelector).val(SearchBarFilter);
  $(SearchBarStringSelector).val(SearchBarString);


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
  //console.log(PriceSelectorArray)

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
  //console.log(PlayerSelectorArray)

  if (getUrlParameter('Playtime-1') == 'on') {
    PlaytimeSelectorArray.push(1)
    $(PlaytimeSelector_1).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-2') == 'on') {
    PlaytimeSelectorArray.push(2)
    $(PlaytimeSelector_2).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-3') == 'on') {
    PlaytimeSelectorArray.push(3)
    PlaytimeSelectorArray.push(4)
    $(PlaytimeSelector_3).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-4') == 'on') {
    PlaytimeSelectorArray.push(5)
    PlaytimeSelectorArray.push(6)
    $(PlaytimeSelector_4).attr("checked", 1);
  }
  if (getUrlParameter('Playtime-5') == 'on') {
    PlaytimeSelectorArray.push(7)
    $(PlaytimeSelector_5).attr("checked", 1);
  }

  //console.log(PlaytimeSelectorArray)



  let results = Games.filter(function (game) {
    //console.log(SearchBarFilter, game.Genre, SearchBarFilter == -1, game.Genre == SearchBarFilter)
    let GenreFilter = SearchBarFilter == -1 ? true : game.Genre == SearchBarFilter
    //console.log(game.Title, SearchBarString, game.Title.includes(SearchBarString))
    let StringFilter = game.Title.includes(SearchBarString);
    //console.log(Math.floor(game.Price / 20), PriceSelectorArray.includes(Math.ceil(game.Price / 20)), PriceSelectorArray.includes(7) && game.Price > 120)
    let PriceFilter = PriceSelectorArray.includes(Math.ceil(game.Price / 20)) ||
      PriceSelectorArray.includes(7) && game.Price > 120 ||
      PriceSelectorArray.length == 0;

    let PlayerFilter = PlayerSelectorArray.includes(game.PlayerCount) ||
      PlayerSelectorArray.includes(6) && game.PlayerCount > 6 ||
      PlayerSelectorArray.length == 0;

    let PlayTimeValue = Math.ceil(game.PlayTime / 30)
    let PlayTimeFilter = PlaytimeSelectorArray.includes(PlayTimeValue) ||
      PlaytimeSelectorArray.includes(7) && PlayTimeValue > 7 ||
      PlaytimeSelectorArray.length == 0;
    return GenreFilter && StringFilter && PriceFilter && PlayerFilter && PlayTimeFilter
  })

  $.each(results, function (number, game) {
    $(top5Games).append($(
      '<div class="card my-3 game-card">' +
      '<img src="' + game.Image + '" class="card-img-top" alt="...">' +
      '<div class="card-body">' +
      '<h5 class="card-title text-center">' + game.Title + '</h5>' +
      '<p class="card-text text-center">' + game.ShortDesc + '</p>' +
      '<p class="card-text text-center">$' + game.Price + '</p>' +
      '</div>' +
      '</div>'
    ))
    DisplayedResults++
    // if(DisplayedResults == 5){
    //     break;
    // }
  });
  let SearchText = SearchBarString.length > 0 ? 'for "' + SearchBarString + '"' : ""
  $(SearchResultText).append($(
    '<div class="card-body">' +
    'Now showing ' + DisplayedResults + ' of ' + SearchResultCount + ' results ' + SearchText +
    '</div>'
  ))

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
