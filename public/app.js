$(function() {
  
  
  $.ajax({
    type: "GET",
    url: "CateringItemList.json",
    async: false,
    beforeSend: function() { /*loading*/ },
    dataType: "json",
    success: function(result) {      
      $.each(result, function(index, val) {
        var items = "";
        for (var i = 0; i < val.length; i++) {
          if (val[i].Category === "Fajita Buffet") {
            const title2 = val[i].Title;
            const ul2 = document.getElementById("fajita-titles");
            const li2 = document.createElement("li");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "fajita-titles[]";
            input.value = title2;
            input.index = i;
            input.style.setProperty("font-weight", "bold");
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
                          const Count = parseFloat(document.getElementById("total").value)
                          const ul2 = document.getElementById("fajita-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                        };
                        
                        
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
                        let fajitaItems = [];
	                        checkboxes.forEach((checkbox, index) => {
                          checkbox.addEventListener('change', function() {
                            if (this.checked) {
                              checkboxes.forEach((cb, i) => {
                                if (i !== index) {
                                  cb.disabled = true;
                                }
                              });
                            } else {
                              checkboxes.forEach((cb) => {
                                cb.disabled = false;
                              });
                            }
                            

                            if (this.checked) {
                              var fajitaData = {
                                title: checkbox.value,
                                serves: val[index].Serves,
                                price: val[index].Price,
                                count: parseFloat(document.getElementById('total').value),
                                sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
                              };
							  fajitaItems = fajitaItems.filter(item => item.title != checkbox.value)
                              fajitaItems.push(fajitaData);
                            } else {
                              var uncheckedTitle = checkbox.value;
                              fajitaItems = fajitaItems.filter(item => item.title !== uncheckedTitle);
                            }

                            localStorage.setItem('fajita-data', JSON.stringify(fajitaItems));

                            total = fajitaItems.reduce((acc, item) => acc + item.sum, 0);
							
                            totalElement.textContent = "$" + total.toFixed(2);
							updateGrandTotals();

                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g,""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g,""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);*/
                              
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
              input.className = "boldCheckbox";
              li2.appendChild(input);
              const span = document.createElement("span");
              span.className = "boldCheckbox"; // Add class here
              span.appendChild(document.createTextNode(" " + title2));
              li2.appendChild(span);
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
                          
                          let checkboxes1 = document.querySelectorAll('input[name="fajita-addOns[]"]');
                          let sumElements = document.querySelectorAll('#fajita-addOns-sum li');
                          let totalElement = document.getElementById('g-fajita-addOns-total');
                          let priceElements = document.querySelectorAll('#fajita-addOns-price li');
                          let servesElements = document.querySelectorAll('#fajita-addOns-serves li');

                          let total = 0;
                          let addOnsItems = [];

                          // Add event listener to each checkbox
                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
							  if (this.checked){
								  const addOnsData = {
									title: checkbox.value,
									serves: parseFloat(servesElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									price: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									count: parseFloat(document.getElementById('total').value),
									sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
								  };
								  addOnsItems = addOnsItems.filter(item => item.title != checkbox.value)
								  addOnsItems.push(addOnsData);
							  }
							  else {
								  addOnsItems = addOnsItems.filter(item => item.title != checkbox.value)
							  }
							  
                              localStorage.setItem('addOns-data', JSON.stringify(addOnsItems));

                              total = addOnsItems.reduce((acc, item) => acc + item.sum, 0);
                              totalElement.textContent = "$" + total.toFixed(2);
							  updateGrandTotals();
                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);*/
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
                          let sumElements = document.querySelectorAll('#sides-addOns-sum li');
                          let totalElement = document.getElementById('g-sides-addOns-total');
                          let priceElements = document.querySelectorAll('#sides-addOns-price li');
                          let servesElements = document.querySelectorAll('#sides-addOns-serves li');

                          let total = 0;
                          let sidesAndTortillasItems = [];

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
                              if (this.checked) {
								  const sidesAndTortillasData = {
									title: checkbox.value,
									serves: parseFloat(servesElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									price: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									count: parseFloat(document.getElementById('total').value),
									sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
								  };
								  sidesAndTortillasItems = sidesAndTortillasItems.filter(item => item.title != checkbox.value)
								  sidesAndTortillasItems.push(sidesAndTortillasData);
							  }
							  else{
								  sidesAndTortillasItems = sidesAndTortillasItems.filter(item => item.title != checkbox.value)
							  }
                              

                              localStorage.setItem('sidesAndTortillas-data', JSON.stringify(sidesAndTortillasItems));

                              total = sidesAndTortillasItems.reduce((acc, item) => acc + item.sum, 0);
                              totalElement.textContent = "$" + total.toFixed(2);
							  updateGrandTotals();
                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);*/
                            });
                          });


                        }
            if (val[i].Category === "ETF") {
              const title2 = val[i].Title;
              const ul2 = document.getElementById("ETF");
              const li2 = document.createElement("li");
              const input = document.createElement("input");
              input.type = "checkbox";
              input.name = "ETF[]";
              input.value = title2;
              li2.appendChild(input);
              li2.appendChild(document.createTextNode(" " + title2));
              ul2.appendChild(li2);
            }
                        if (val[i].Category === "ETF") {
                          const Serves = val[i].Serves;
                          const ul2 = document.getElementById("ench-addOns-serves");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Serves));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "ETF") {
                          const Price = val[i].Price;
                          const ul2 = document.getElementById("ench-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "ETF") {
                          const Count = document.getElementById('total').value;
                          const ul2 = document.getElementById("ench-addOns-count");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Count));
                          ul2.appendChild(li2);
                          
                        }
                        if (val[i].Category === "ETF") {
                          const Serves = parseFloat(val[i].Serves);
                          const Price = parseFloat(val[i].Price);
                          const Count = parseFloat(document.getElementById('total').value);
                          const Sum4 = (Count / Serves) * Price;
                          const ul2 = document.getElementById("ench-addOns-sum");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode("$" + (Math.round(Sum4 * 100) / 100).toFixed(2)));
                          ul2.appendChild(li2);

                          let checkboxes1 = document.querySelectorAll('input[name="ETF[]"]');
                          let sumElements = document.querySelectorAll('#ench-addOns-sum li');
                          let totalElement = document.getElementById('g-ench-addOns-total');
                          let priceElements = document.querySelectorAll('#ench-addOns-price li');
                          let servesElements = document.querySelectorAll('#ench-addOns-serves li');

                          let total = 0;
                          let ETFItems = [];

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
							  if (this.checked) {
								  const ETFData = {
									title: checkbox.value,
									serves: parseFloat(servesElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									price: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									count: parseFloat(document.getElementById('total').value),
									sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
								  };
								  ETFItems = ETFItems.filter(item => item.title != checkbox.value)
								  ETFItems.push(ETFData);
							  }
							  else {
								  ETFItems = ETFItems.filter(item => item.title != checkbox.value)
							  }
                              localStorage.setItem('ETF-data', JSON.stringify(ETFItems));

                              total = ETFItems.reduce((acc, item) => acc + item.sum, 0);
                              totalElement.textContent = "$" + total.toFixed(2);
						      updateGrandTotals();
                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);*/
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
                          let sumElements = document.querySelectorAll('#marg-addOns-sum li');
                          let totalElement = document.getElementById('g-marg-addOns-total');
                          let priceElements = document.querySelectorAll('#marg-addOns-price li');
                          let servesElements = document.querySelectorAll('#marg-addOns-serves li');

                          let total = 0;
                          let margItems = [];

                          // Add event listener to each checkbox
                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
							  if (this.checked){
								  const margData = {
									title: checkbox.value,
									serves: parseFloat(servesElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									price: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, "")),
									count: parseFloat(document.getElementById('total').value),
									sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
								  };
								  margItems = margItems.filter(item => item.title != checkbox.value)
								  margItems.push(margData);
							  }
                              localStorage.setItem('marg-data', JSON.stringify(margItems));

                              total = margItems.reduce((acc, item) => acc + item.sum, 0);
                              totalElement.textContent = "$" + total.toFixed(2);
							  updateGrandTotals();
                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);*/
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
                          const Description = val[i].Description;
                          const ul2 = document.getElementById("serv-addOns-price");
                          const li2 = document.createElement("li");
                          li2.appendChild(document.createTextNode(" " + Description));
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
                          let sumElements = document.querySelectorAll('#serv-addOns-sum li');
                          let totalElement = document.getElementById('g-serv-addOns-total');
                          let priceElements = document.querySelectorAll('#serv-addOns-price2 li');
                          let descElements = document.querySelectorAll('#serv-addOns-serves li');

                          let total = 0;
                          let servItems = [];

                          checkboxes1.forEach((checkbox, index) => {
                            checkbox.addEventListener('change', function() {
							  if (this.checked) {
								  const servData = {
									title: checkbox.value,
									description: descElements[index],
									count: parseFloat(document.getElementById('total').value),
									sum: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, ""))
								  };
								servItems = servItems.filter(item => item.title != checkbox.value)
								servItems.push(servData);
							}
							else{
								servItems = servItems.filter(item => item.title != checkbox.value)
							}
							
                              

                              localStorage.setItem('serv-data', JSON.stringify(servItems));

                              total = servItems.reduce((acc, item) => acc + item.sum, 0);
                              totalElement.textContent = "$" + total.toFixed(2);
							  updateGrandTotals();

                              /*if (this.checked) {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total += sumValue;
                              } else {
                                const sumText = sumElements[index].textContent;
                                const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                total -= sumValue;
                              }
                              totalElement.textContent = "$" + total.toFixed(2);
							  */
                            });
                          });
                        }


            if (val[i].Category === "Dessert") {
            const title2 = val[i].Title;
            const ul2 = document.getElementById("Dessert");
            const li2 = document.createElement("li");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "Dessert[]";
            input.value = title2;
            li2.appendChild(input);
            li2.appendChild(document.createTextNode(" " + title2));
            ul2.appendChild(li2);
            }
                            if (val[i].Category === "Dessert") {
                            const Serves = val[i].Serves;
                            const ul2 = document.getElementById("dessert-serves");
                            const li2 = document.createElement("li");
                            li2.appendChild(document.createTextNode(" " + Serves));
                            ul2.appendChild(li2);   
                            }
                            if (val[i].Category === "Dessert") {
                            const Price = val[i].Price;
                            const ul2 = document.getElementById("dessert-price");
                            const li2 = document.createElement("li");
                            li2.appendChild(document.createTextNode("$" + (Math.round(Price * 100) / 100).toFixed(2)));
                            ul2.appendChild(li2);
                            }
                            if (val[i].Category === "Dessert") {
                            const Count = document.getElementById('total').value;
                            const ul2 = document.getElementById("dessert-count");
                            const li2 = document.createElement("li");
                            li2.appendChild(document.createTextNode(" " + Count));
                            ul2.appendChild(li2);
                            }
                            if (val[i].Category === "Dessert") {
                              const Serves = parseFloat(val[i].Serves);
                              const Price = parseFloat(val[i].Price);
                              const Count = parseFloat(document.getElementById('total').value);
                              const Sum6 = (Count / Serves) * Price;
                              const ul2 = document.getElementById("dessert-sum");
                              const li2 = document.createElement("li");
                              li2.appendChild(document.createTextNode("$" + (Math.round(Sum6 * 100) / 100).toFixed(2)));
                              ul2.appendChild(li2);
    
                              let checkboxes1 = document.querySelectorAll('input[name="Dessert[]"]');
                              let sumElements = document.querySelectorAll('#dessert-sum li');
                              let totalElement = document.getElementById('g-dessert-total');
                              let priceElements = document.querySelectorAll('#dessert-price li');
                              let servesElements = document.querySelectorAll('#dessert-serves li');
                              

                              let total = 0;
                              let dessertItems = [];
                              
                              checkboxes1.forEach((checkbox, index) => {
                                checkbox.addEventListener('change', function() {
									if (this.checked){
									  const dessertData = {
										title: checkbox.value,
										serves: parseFloat(servesElements[index].textContent.replace(/[^0-9.-]+/g, "")),
										price: parseFloat(priceElements[index].textContent.replace(/[^0-9.-]+/g, "")),
										count: parseFloat(document.getElementById('total').value),
										sum: parseFloat(sumElements[index].textContent.replace(/[^0-9.-]+/g, ""))
									  };
									  dessertItems = dessertItems.filter(item => item.title != checkbox.value)
									  dessertItems.push(dessertData);
									}
									else {
										dessertItems = dessertItems.filter(item => item.title != checkbox.value)
									}
									
                                  localStorage.setItem('dessert-data', JSON.stringify(dessertItems));

                                  total = dessertItems.reduce((acc, item) => acc + item.sum, 0);
                                  totalElement.textContent = "$" + total.toFixed(2);
                                  updateGrandTotals();


                                  /*if (this.checked) {
                                    const sumText = sumElements[index].textContent;
                                    const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                    total += sumValue;
                                  } else {
                                    const sumText = sumElements[index].textContent;
                                    const sumValue = parseFloat(sumText.replace(/[^0-9.-]+/g, ""));
                                    total -= sumValue;
                                  }
                                  totalElement.textContent = "$" + total.toFixed(2);
								  */
                                });
                              });
            }
          }
        });
      }
    });
          let guestCountElement = document.getElementById('total');
          guestCountElement.addEventListener('change', function() {
			  let newCount = parseInt(guestCountElement.value);
			  // Update all count elements
			  Array.from(document.getElementsByClassName('count')).forEach((el) => {
				Array.from(el.childNodes).forEach((child) => {
				  child.textContent = newCount;
				});
			  });
			  // Update sum and total elements
			  let sumItems = document.querySelectorAll('[id*="-sum"]');
			  let priceItems = document.querySelectorAll('[id*="-price"]');
			  let servesItems = document.querySelectorAll('[id*="-serves"]');

			  for (let i = 0; i < sumItems.length; i++) {
				  let priceList = priceItems[i];
				  let servesList =  servesItems[i];
				  for (let j = 0; j < sumItems[i].children.length; j++) {
					let price = parseFloat(priceList.children[j].textContent.replace(/[^0-9.-]+/g, ""));
					let serves = parseFloat(servesList.children[j].textContent.replace(/[^0-9.-]+/g, ""));
					let totalPrice = ((price / serves) * newCount).toFixed(2);
					sumItems[i].children[j].textContent = "$" + totalPrice;
					}
			  }
			  //fire existing change event on checkboxes when count is updated, in order to reprocess sums
			  document.querySelectorAll('input[type=checkbox]').forEach(function(cb) {
						cb.dispatchEvent(new Event('change'))	
			  });
			  
			  let urlParams = new URLSearchParams(window.location.search);
			  urlParams.set('total', newCount);

			  // Update the URL without reloading the page
			  history.replaceState(null, null, '?' + urlParams.toString());
          });
}); 


    var queryString = window.location.search.substring(1);
    var params = {};
    queryString = queryString.replace(/\+/g, ' '); // replace all '+' with space
    queryString.split('&').forEach(function(pair) {
        pair = pair.split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  
function updateGrandTotals() {
  let totalItems = Array.from(document.querySelectorAll('[id*="-total"]')).filter(e => e.textContent !== '')
  let grandTotal = totalItems.reduce((acc,item) => acc + parseFloat(item.textContent.replace(/[^0-9.-]+/g,"")),0)
  let tax = grandTotal * .0825;
  let gratuity = grandTotal * .2;
  let ggrandTotal = grandTotal + tax + gratuity;
  document.getElementById('grandTotal').value = "$" + grandTotal.toFixed(2);
  document.getElementById('tax').value = "$" + tax.toFixed(2);
  document.getElementById('gratuity').value = "$" + gratuity.toFixed(2);
  document.getElementById('ggrandTotal').value = "$" + ggrandTotal.toFixed(2);
  localStorage.setItem('grandTotal', "$" + grandTotal.toFixed(2));
  localStorage.setItem('tax', "$" + tax.toFixed(2));
  localStorage.setItem('gratuity', "$" + gratuity.toFixed(2));
  localStorage.setItem('ggrandTotal', "$" + ggrandTotal.toFixed(2));
}
 


 
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

localStorage.setItem('name', document.getElementById('name').value);
localStorage.setItem('edate', document.getElementById('edate').value);
localStorage.setItem('phone', document.getElementById('phone').value);
localStorage.setItem('email', document.getElementById('email').value);
localStorage.setItem('time', document.getElementById('time').value);
localStorage.setItem('address', document.getElementById('address').value);
localStorage.setItem('zcode', document.getElementById('zcode').value);
localStorage.setItem('city', document.getElementById('city').value);
localStorage.setItem('total', document.getElementById('total').value);
localStorage.setItem('theme', document.getElementById('theme').value);
localStorage.setItem('location', document.getElementById('location').value);
localStorage.setItem('lservice', document.getElementById('lservice').value);
