
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
            if (val[i].Category === "Add On Fajita Buffet") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("fajita-addOns");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-addOns[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
            
            if (val[i].Category === "Sides & Tortillas") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Sides & Tortillas");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-addOns[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
            if (val[i].Category === "Enchiladas, Tamales, Flautas") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Enchiladas, Tamales, Flautas");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-addOns[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
            if (val[i].Category === "Service Add Ons") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Service Add Ons");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-addOns[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
            if (val[i].Category === "Rentals") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Rentals");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-addOns[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
            
          }
        });
      }
    });
  
    $('#fajita-titles').on('click', 'li', function() {
      var value = $(this).text();
      $('#output').val(value);
      var price = parseFloat(getPrice(value));
      $('#price').val(price);
      var serves = getServes(value);
      $('#serves').val(serves);

      var total = parseFloat(document.getElementById('total').value);
      var price = parseFloat($('#price').val());
      var result = total * price;
      document.getElementById('sum').value = result;
    });

    $('#fajita-addOns').on('change', 'input[type="checkbox"]', function() {
      var value = $(this).val();
      var isChecked = $(this).is(':checked');
    
      if (isChecked) {
        // $('#output2').val(value);
        var price = parseFloat(getPrice(value));
        $('#price2').val(price);
        var serves = getServes(value);
        $('#serves2').val(serves);
    
        var total = parseFloat(document.getElementById('total').value);
        var price = parseFloat($('#price2').val());
        var serves = parseFloat($('#serves2').val());
        var result = (total / serves) * price;
        document.getElementById('sum2').value = result;
      } else {
        $('#output2').val('');
        $('#price2').val('');
        $('#serves2').val('');
        document.getElementById('sum2').value = '';
      }
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
                price = parseFloat(item.Price);
                break;
              }
            }
          });
        }
      });
      return price;
    }
    

    function getServes(title) {
        var serves = "";
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
    document.getElementById('third_total_field').value = params['total'];
    document.getElementById('location').value = params['location'];
    document.getElementById('theme').value = params['theme'];
    document.getElementById('lservice').value = params['lservice'];

    



      
      
      
      
      