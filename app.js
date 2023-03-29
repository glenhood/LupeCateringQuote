
$(function(){

    $.ajax({ 
      type : "GET", 
      url : "CateringItems.json", 
      async : false, 
      beforeSend : function(){/*loading*/},
      dataType : "json", 
      success : function(result){
        $.each(result, function(index, val){ 
        var items = ""
          for(var i=0; i < val.length; i++){
            
            var item = val[i];
            
            if (val[i].Category === "Fajita Buffet") {
                const title = val[i].Title;
                // assuming that you have a <ul> element with an id of "fajita-titles" in your HTML
                const ul = document.getElementById("fajita-titles");
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(title));
                ul.appendChild(li);
              }
            // console.log(item.Title);
            // console.log(item.Price);
            // console.log(item.Category);
        
          } 
        });
      }
     });
    });
