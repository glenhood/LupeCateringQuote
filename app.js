
$(function(){

    $.ajax({ 
      type : 'GET', 
      url : 'CateringItems.json', 
      async : false, 
      beforeSend : function(){/*loading*/},
      dataType : 'json', 
      success : function(result){
       var buffer="";
        $.each(result, function(index, val){ 
    
          for(var i=0; i < val.length; i++){ 
            var item = val[i]; 
            console.log(item.Title);
            console.log(item.Price);
            console.log(item.Category);
            buffer+=" <li><a href='#"+item.Title+"'>"+item.Title+"</a></li> <li><a href='#"+item.Price+"'>"+item.Price+"</a></li> <li><a href='#"+item.Category+"'>"+item.Category+"</a></li>"; 
          } 
          $('ul').html(buffer);
        });
      }
     });
    });
