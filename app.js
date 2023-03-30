
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
              const ul = document.getElementById("fajita-titles");
              const li = document.createElement("li");
              li.appendChild(document.createTextNode(title));
              ul.appendChild(li);
            }
          }
        });
      }
    });
  
    $('#fajita-titles').on('click', 'li', function() {
      var value = $(this).text();
      $('#output').val(value);
      var price = getPrice(value);
      $('#price').val(price);
      var price = getServes(value);
      $('#serves').val(serves);
    });
  
    function getPrice(title) {
      var price = "";
      $.ajax({ 
        type : "GET", 
        url : "CateringItems.json", 
        async : false, 
        dataType : "json", 
        success : function(result){
          $.each(result, function(index, val){ 
            for(var i=0; i < val.length; i++){
              var item = val[i];
              if (item.Title === title) {
                price = item.Price;
                break;
              }
            }
          });
        }
      });
      return price;
    }

    function getServes(title) {
        // var serves = "";
        $.ajax({ 
          type : "GET", 
          url : "CateringItems.json", 
          async : false, 
          dataType : "json", 
          success : function(result){
            $.each(result, function(index, val){ 
              for(var i=0; i < val.length; i++){
                var item = val[i];
                if (item.Title === title) {
                  serves = item.Serves;
                  break;
                }
              }
            });
          }
        });
        return serves;
      }
});

  
    
    
   
   
    var queryString = window.location.search.substring(1);

    // Parse the query string into an object
    var params = {};
    queryString.split('&').forEach(function(pair) {
        pair = pair.split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    
    document.getElementById('name').value = params['name'];
    document.getElementById('edate').value = params['edate'];
    document.getElementById('phone').value = params['phone'];
    document.getElementById('email').value = params['email'];
    document.getElementById('time').value = params['time'];
    document.getElementById('address').value = params['address'];
    document.getElementById('total').value = params['total'];
    document.getElementById('second_total_field').value = params['total'];
    document.getElementById('location').value = params['location'];
    document.getElementById('theme').value = params['theme'];
    document.getElementById('lservice').value = params['lservice'];

    var total = parseFloat(document.getElementById('total').value);
    var price = parseFloat($('#price').val());

    if (!isNaN(total) && !isNaN(price)) {
    var result = total * price;
    document.getElementById('sum').value = result;
    }


      
      
      
      
      