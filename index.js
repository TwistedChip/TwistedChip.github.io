var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink, text, link) {
  $("#img_here").css("background", `url('${imglink}') center center`);

  // Remove any existing image-text elements
  $("#img_here .image-text").remove();

  // Create the text element with the provided text and link
  const textElement = $("<div class='image-text'></div>");
  const linkElement = $("<a></a>").attr("href", link).text(text);
  textElement.append(linkElement);

  $("#img_here").append(textElement);

  $("#magnify").css("display", "flex");
  $("#magnify").addClass("animated fadeIn");
  setTimeout(function() {
    $("#magnify").removeClass("animated fadeIn");
  }, 800);
}  

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

  const spreadsheetId = 'your-spreadsheet-id';
  const range = 'Sheet1!A1:C10';
  const apiKey = '377078011650-n865vak4amk5ak45nmt0qhceferd30el.apps.googleusercontent.com';

  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const values = data.values;
  
      // Get the container element
      const container = document.getElementById('dataContainer');
  
      // Create a table
      const table = document.createElement('table');
  
      // Loop through the rows
      for (let i = 0; i < values.length; i++) {
        const row = document.createElement('tr');
  
        // Loop through the columns
        for (let j = 0; j < values[i].length; j++) {
          const cell = document.createElement('td');
          cell.textContent = values[i][j];
          row.appendChild(cell);
        }
  
        table.appendChild(row);
      }
  
      // Append the table to the container
      container.appendChild(table);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
  