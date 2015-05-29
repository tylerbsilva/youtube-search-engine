$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyAW0q3d5W5bF9rG-9oP4mitrTdEnM8L3R4',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<li>';
    html += '<a href="//youtube.com/watch?v=' + value.id.videoId + '">';
    html += '<img src="' + value.snippet.thumbnails.medium.url + '"" />';
    html += '<h3>' + value.snippet.title + '</h3>';
    html += '</a></li>';
    console.log(value);
  });
  $('#search-results').html(html);
}
