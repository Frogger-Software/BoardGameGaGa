/*************************************************************
Dashboard.js - the javascript for the Dashboard Top 5 Games
--------------------------------------------------------------
Austin Powers - Header
Cameron Robinson - Modals
12/01/2021 - 12/14/2021

--------------------------------------------------------------
This will take an array of 'Top game ids' and display only those from the master list of GameData
*************************************************************/
'use strict';
var top5Games = '#top5Games'
const topFiveIds = ["3","4","5","2","6"] 


$().ready(function () {
  let results = Games.filter(function (game) {
    return topFiveIds.includes(game.id)
})

  $.each(results, function (number, game) {
    $(top5Games).append($(
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
