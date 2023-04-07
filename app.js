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
                        if (val[i].Category === "Add On Fajita Buffet") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("fajita-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Fajita Buffet") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("fajita-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Price));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Fajita Buffet") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("fajita-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Fajita Buffet") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum2 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("fajita-addOns-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum2 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                          let checkboxes = document.querySelectorAll('input[name="fajita-addOns[]"]');
                          let sumElements = document.querySelectorAll('#fajita-addOns-sum li');
                          let totalElement = document.getElementById('g-fajita-addOns-total');

                          let total = 0;

                          checkboxes.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g,""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g,""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);
                              
                              
                            });
                          });

                        }
            if (val[i].Category === "Sides & Tortillas") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Sides&Tortillas");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "Sides&Tortillas[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
              
            }
                        if (val[i].Category === "Sides & Tortillas") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("sides-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Sides & Tortillas") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("sides-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Sides & Tortillas") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("sides-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Sides & Tortillas") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum3 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("sides-addOns-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum3 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                          let checkboxes1 = document.querySelectorAll('input[name="Sides&Tortillas[]"]');
                          let sumElements1 = document.querySelectorAll('#sides-addOns-sum li');
                          let totalElement1 = document.getElementById('g-sides-addOns-total');

                          let total1 = 0;

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 += sumValue1;
                              } else {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 -= sumValue1;
                              }
                              totalElement1.textContent = "$" + total1.toFixed(2);
                              
                            });
                          });
                        }
            if (val[i].Category === "Enchiladas, Tamales, Flautas") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Enchiladas, Tamales, Flautas");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "Enchiladas, Tamales, Flautas[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
                        if (val[i].Category === "Enchiladas, Tamales, Flautas") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("ench-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Enchiladas, Tamales, Flautas") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("ench-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Enchiladas, Tamales, Flautas") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("ench-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Enchiladas, Tamales, Flautas") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum4 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("ench-addOns-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum4 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);

                          let checkboxes1 = document.querySelectorAll('input[name="Enchiladas, Tamales, Flautas[]"]');
                          let sumElements1 = document.querySelectorAll('#ench-addOns-sum li');
                          let totalElement2 = document.getElementById('g-ench-addOns-total');

                          let total1 = 0;

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 += sumValue1;
                              } else {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 -= sumValue1;
                              }
                              totalElement2.textContent = "$" + total1.toFixed(2);
                              
                              
                            });
                          });
                        }
            if (val[i].Category === "Margaritas & Drinks") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Margaritas & Drinks");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "Margaritas & Drinks[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
                        if (val[i].Category === "Margaritas & Drinks") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("marg-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Margaritas & Drinks") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("marg-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Margaritas & Drinks") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("marg-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Margaritas & Drinks") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum5 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("marg-addOns-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum5 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);

                          let checkboxes1 = document.querySelectorAll('input[name="Margaritas & Drinks[]"]');
                          let sumElements1 = document.querySelectorAll('#marg-addOns-sum li');
                          let totalElement3 = document.getElementById('g-marg-addOns-total');

                          let total1 = 0;

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 += sumValue1;
                              } else {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 -= sumValue1;
                              }
                              totalElement3.textContent = "$" + total1.toFixed(2);
                              
                              
                            });
                          });
                        }
            if (val[i].Category === "Service Add Ons") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("Service Add Ons");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "Service Add Ons[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }   
                        if (val[i].Category === "Service Add Ons") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("serv-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Service Add Ons") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("serv-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Service Add Ons") {
                          const Price1 = val[i].Price;
                          const ul2 = document.getElementById("serv-addOns-price2");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price1 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                          let checkboxes1 = document.querySelectorAll('input[name="Service Add Ons[]"]');
                          let sumElements1 = document.querySelectorAll('#serv-addOns-price2 li');
                          let totalElement4 = document.getElementById('g-serv-addOns-total');

                          let total1 = 0;

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 += sumValue1;
                              } else {
                                const sumText1 = sumElements1[index].textContent;
                                const sumValue1 = parseFloat(sumText1.replace(/[^0-9.-]+/g,""));
                                total1 -= sumValue1;
                              }
                              totalElement4.textContent = "$" + total1.toFixed(2);
                              
                              
                            });
                          });
                          
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
      var result1 = total * price;
      document.getElementById('g-sum').value = ("$" + (Math.round(result1 * 100) / 100).toFixed(2));
      document.getElementById('sum2').value = ("$" + (Math.round(result1 * 100) / 100).toFixed(2));
      
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
      const totalInputs = document.querySelectorAll('[id^="g"]');

      // Sum up the values of all the input fields
      let subtotal = 0;
      totalInputs.forEach(input => {
        subtotal += parseFloat(input.value);
      });
      
      // Format the result with 2 decimal places
      subtotal = subtotal.toFixed(2);
      
      // Output the result
      console.log(subtotal);

      
    
    }); 
    var queryString = window.location.search.substring(1);
    var params = {};
    queryString = queryString.replace(/\+/g, ' '); // replace all '+' with space
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
    document.getElementById('zcode').value = params['zcode'];
    document.getElementById('city').value = params['city'];
    document.getElementById('total').value = params['total'];
    document.getElementById('theme').value = params['theme'];
    document.getElementById('location').value = params['location'];
    document.getElementById('lservice').value = params['lservice'];
    document.getElementById('second_total_field').value = params['total'];

    // Select all checkboxes
    // Add event listener to each checkbox
    


      
      
      
      
      