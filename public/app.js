$(function(){
    $.ajax({ 
      type : "GET", 
      url : "CateringItemList.json", 
      async : false, 
      beforeSend : function(){/*loading*/},
      dataType : "json", 
      success : function(result){
        $.each(result, function(index, val){ 
          var items = ""
          for(var i=0; i < val.length; i++){
          
          
            if (val[i].Category === "Fajita Buffet") {
              
              const title2 = val[i].Title;
              const ul2 = document.getElementById("fajita-titles");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "fajita-titles[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
              
            }
                        if (val[i].Category === "Fajita Buffet") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("fajita-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Fajita Buffet") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("fajita-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Fajita Buffet") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("fajita-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Fajita Buffet") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum2 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("fajita-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum2 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                          let checkboxes = document.querySelectorAll('input[name="fajita-titles[]"]');
                          let sumElements = document.querySelectorAll('#fajita-sum li');
                          let totalElement = document.getElementById('g-fajita-total');

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
            if (val[i].Category === "Add On Options") {
              
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
                        if (val[i].Category === "Add On Options") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("fajita-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Options") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("fajita-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Options") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("fajita-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "Add On Options") {
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
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
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
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
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
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
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
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
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
                          
                          let checkboxes = document.querySelectorAll('input[name="Service Add Ons[]"]');
                          let sumElements = document.querySelectorAll('#serv-addOns-price2 li');
                          let totalElement = document.getElementById('g-serv-addOns-total');

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
    
    
    // function getPrice(title) {
    //   var price = "";
    //   $.ajax({ 
    //     type : "GET", 
    //     url : "CateringItemList.json", 
    //     async : false, 
    //     dataType : "json", 
    //     success : function(result){
    //       $.each(result, function(index, val){ 
    //         for(var i=0; i < val.length; i++){
    //           var item = val[i];
    //           if (item.Title === title) {
    //             price = parseFloat(item.Price);
    //             break;
    //           }
    //         }
    //       });
    //     }
    //   });
    //   return price;
    // }
    // function getServes(title) {
    //     var serves = "";
    //     $.ajax({ 
    //       type : "GET", 
    //       url : "CateringItemList.json", 
    //       async : false, 
    //       dataType : "json", 
    //       success : function(result){
    //         $.each(result, function(index, val){ 
    //           for(var i=0; i < val.length; i++){
    //             var item = val[i];
    //             if (item.Title === title) {
    //               serves = item.Serves;
    //               break;
    //             }
    //           }
    //         });
    //       }
    //     });
    //     return serves;
      
    //   }
      // $('#fajita-titles').on('click', 'li', function() {
      //   var value = $(this).text();
      //   $('#output').val(value);
      //   var price = parseFloat(getPrice(value));
      //   $('#price').val(price);
      //   var serves = getServes(value);
      //   $('#serves').val(serves);
  
        // var fajitaTotal = parseFloat(document.getElementById('total').value);
        // var price = parseFloat($('#price').val());
        // var result1 = fajitaTotal * price;
        // document.getElementById('g-sum').value = ("$" + (Math.round(result1 * 100) / 100).toFixed(2));
        // document.getElementById('sum2').value = ("$" + (Math.round(result1 * 100) / 100).toFixed(2));
      let checkboxes = document.querySelectorAll('input[name="fajita-titles[]"]');
      let sumElements = document.querySelectorAll('#fajita-sum li');
      let totalElement = document.getElementById('g-fajita-total');
      let total = 0;  
      
      let checkboxes1 = document.querySelectorAll('input[name="fajita-addOns[]"]');
      let sumElements1 = document.querySelectorAll('#fajita-addOns-sum li');
      let totalElement1 = document.getElementById('g-fajita-addOns-total');
      let total1 = 0;
      
      let checkboxes2 = document.querySelectorAll('input[name="Sides&Tortillas[]"]');
      let sumElements2 = document.querySelectorAll('#sides-addOns-sum li');
      let totalElement2 = document.getElementById('g-sides-addOns-total');
      let total2 = 0;

      let checkboxes3 = document.querySelectorAll('input[name="Enchiladas, Tamales, Flautas[]"]');
      let sumElements3 = document.querySelectorAll('#ench-addOns-sum li');
      let totalElement3 = document.getElementById('g-ench-addOns-total');
      let total3 = 0;

      let checkboxes4 = document.querySelectorAll('input[name="Margaritas & Drinks[]"]');
      let sumElements4 = document.querySelectorAll('#marg-addOns-sum li');
      let totalElement4 = document.getElementById('g-marg-addOns-total');
      let total4 = 0;

      let checkboxes5 = document.querySelectorAll('input[name="Service Add Ons[]"]');
      let sumElements5 = document.querySelectorAll('#serv-addOns-price2 li');
      let totalElement5 = document.getElementById('g-serv-addOns-total');
      let total5 = 0;

      
      let grandTotal = 0;
      let tax = 0;
      let gratuity = 0;
      let ggrandTotal = 0;

      

    


      // Update total for fajita add-ons
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
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
        });
      });
      
      // Update total for sides add-ons
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
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
        });
      });
    
      checkboxes2.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            const sumText2 = sumElements2[index].textContent;
            const sumValue2 = parseFloat(sumText2.replace(/[^0-9.-]+/g,""));
            total2 += sumValue2;
          } else {
            const sumText2 = sumElements2[index].textContent;
            const sumValue2 = parseFloat(sumText2.replace(/[^0-9.-]+/g,""));
            total2 -= sumValue2;
          }
          totalElement2.textContent = "$" + total2.toFixed(2);
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
        });
      });

      checkboxes3.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            const sumText3 = sumElements3[index].textContent;
            const sumValue3 = parseFloat(sumText3.replace(/[^0-9.-]+/g,""));
            total3 += sumValue3;
          } else {
            const sumText3= sumElements3[index].textContent;
            const sumValue3 = parseFloat(sumText3.replace(/[^0-9.-]+/g,""));
            total3 -= sumValue3;
          }
          totalElement3.textContent = "$" + total3.toFixed(2);
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
        });
      });

      checkboxes4.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            const sumText4 = sumElements4[index].textContent;
            const sumValue4 = parseFloat(sumText4.replace(/[^0-9.-]+/g,""));
            total4 += sumValue4;
          } else {
            const sumText4= sumElements4[index].textContent;
            const sumValue4 = parseFloat(sumText4.replace(/[^0-9.-]+/g,""));
            total4 -= sumValue4;
          }
          totalElement4.textContent = "$" + total4.toFixed(2);
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
          
        });
      });

      checkboxes5.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            const sumText5 = sumElements5[index].textContent;
            const sumValue5 = parseFloat(sumText5.replace(/[^0-9.-]+/g,""));
            total5 += sumValue5;
          } else {
            const sumText5= sumElements5[index].textContent;
            const sumValue5 = parseFloat(sumText5.replace(/[^0-9.-]+/g,""));
            total5 -= sumValue5;
          }
          totalElement5.textContent = "$" + total5.toFixed(2);
          grandTotal = total + total1 + total2 + total3 + total4 + total5;
          tax = (total + total1 + total2 + total3 + total4 + total5) * .0825;
          gratuity = (total + total1 + total2 + total3 + total4 + total5) * .2;
          ggrandTotal = total + total1 + total2 + total3 + total4 + total5 + tax + gratuity
          document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
          document.getElementById('tax').value = "$" + tax.toFixed(2);
          document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
          document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
          
        });
      });
      
    });
    
    
    // }); 
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

    var doc = new jsPDF('p', 'pt', 'letter');
                  var specialElementHandlers = {
                    '#editor': function (element, renderer) {
                      return true;
                    }          
                  };     
                  $('button').click(function () {
                    doc.fromHTML($('#myTabContent').html(), 25, 25, {
                      'width': 790,
                      'elementHandlers': specialElementHandlers
                    });
                    doc.save('LupeCateringProposal.pdf');
                    window.location.reload();
                  });

   
    
      
      
      
      
      