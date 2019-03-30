let x = 0;
const colorsByOrder = [];
const colorsObj={};

function add_element_to_array() {
   const currentValue = document.getElementById("currVal").value
   colorsByOrder.push(currentValue);
  if ( !(currentValue in colorsObj) ){
       colorsObj[currentValue] = 0;
  }          
  
   colorsObj[currentValue] += 1;
   return currentValue;
}




function alerting(currentValue) {
       const statsContainer = document.getElementById("color-pick-stats")

      
       let numberOfPicks = colorsObj[currentValue];
       // let l = array[array.length - 1];
   
     statsContainer.querySelector(".total-times-value").innerText = colorsByOrder.length;
     statsContainer.querySelector(".event-index-value").innerText = numberOfPicks;
     statsContainer.querySelector(".last_value").innerText = colorsByOrder[colorsByOrder.length - 2];
     statsContainer.querySelector(".currVal").innerText = currentValue;
   }



function timeout_init() {
   const currentValue = add_element_to_array();
   setTimeout(alerting.bind(null, currentValue), 500);

}
