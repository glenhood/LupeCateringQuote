
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
                const serves = val[i].Serves;
                const sAmount = document.getElementById("sAmount");
                const ul = document.getElementById("fajita-titles");
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(title));
                sAmount.appendChild(document.createTextNode(serves));
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
    $(document).ready(function() {
        $('#fajita-titles').on('click', 'li', function() {
            var value = $(this).text();
            $('#output').val(value);
        });
    });
    
   
    var queryString = window.location.search.substring(1);

    // Parse the query string into an object
    var params = {};
    queryString.split('&').forEach(function(pair) {
        pair = pair.split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    
    // Populate the fields with the values
    document.getElementById('name').value = params['name'];
    document.getElementById('edate').value = params['edate'];
    document.getElementById('phone').value = params['phone'];
    document.getElementById('email').value = params['email'];
    document.getElementById('time').value = params['time'];
    document.getElementById('address').value = params['address'];
    document.getElementById('total').value = params['total'];
    document.getElementById('location').value = params['location'];
    document.getElementById('theme').value = params['theme'];
    document.getElementById('lservice').value = params['lservice'];
   


      
      
      
      
      