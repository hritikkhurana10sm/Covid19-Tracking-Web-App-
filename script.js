

$("#form").submit(function fun(e){
  
  e.preventDefault();
  var country = $("#country").val().toUpperCase();

  var request = new XMLHttpRequest();

  request.onload = function fun(){

     var jobj = JSON.parse(request.response);
     console.log(jobj.statewise[0].state);
    
     for(var i = 0 ; i < jobj.statewise.length ; i++){
          var s = jobj.statewise[i];
           var st = jobj.statewise[i].state.toUpperCase();
           console.log(st , country);
          if(st === country){
         console.log("in");
  $("#area").html('');
  $("#positive").html('');
  $("#recover").html('');
  $("#deaths").html('');
  $("#time").html('');
  $("#active").html('');
  
  $("#area").append('<div class = " card bg-primary text-white title"><h3>State<h3><h1 class = "trx">'+ s.state + '</h1></div>');  
  $("#positive").append('<div class = " card bg-warning text-white title"><h3>Positive Cases<h3><h1 class = "trx">'+ s.confirmed + '</h1></div>');  
 $("#recover").append('<div class = " card bg-danger text-white title"><h3>Total Recovered<h3><h1 class = "trx">'+ s.recovered + '</h1></div>');  
  $("#deaths").append('<div class = " card bg-info text-white title"><h3>Total Deaths<h3><h1 class = "trx">'+ s.deaths + '</h1></div>');  
  $("#active").append('<div class = " card bg-primary text-white title"><h3>Active Cases<h3><h1 class = "trx">'+ s.active + '</h1></div>');  
  $("#time").append('<div class = " card bg-warning text-white title"><h3>Total Recovered<h3><h1 class = "trx">'+ s.lastupdatedtime + '</h1></div>');  
   }
     }
    
  };
var url = 'https://api.covid19india.org/data.json';
 request.open('GET', url , true);
 request.send();
})
