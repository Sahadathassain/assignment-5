// Blog Html page go

document.getElementById('blog-btn').addEventListener('click',function(){
  window.location.href = 'blog.html';
})


// input Field Value function

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);

  if (!isNaN(inputFieldValue)) {
    inputField.value = '';
    return inputFieldValue;
  } else {
      alert('Please enter a valid number');
      inputField.value = '';
    return false;
  }
}


// content value add table

let count = 0;
function countFunction(countName, countFun) {
  count += 1;
  if (count < 6) {
      const parent = document.getElementById("content-value");

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${count}</td>
        <td class=' w-auto' >${countName}</td>
        <td>${countFun}cm<sup>2</sup></td>
        <td>
          <button class='btn btn-primary p-0'>Covert to m</button>
        </td>
      `;
    
      parent.appendChild(tr);
  }
   else{
  alert("TD value is greater than 5");
      return true;
   }
    
}
//   Mouse hover er jnno gogole thake code dakhe idia niah complate krci
// Mouse hover 

const randomColorValue = document.querySelectorAll(".card-random");
const originalColors = [];

randomColorValue.forEach(function(element) {
originalColors.push(element.style.backgroundColor);

element.addEventListener("mouseover", function() {
  const randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
});

element.addEventListener("mouseout", function() {
  const index = Array.from(randomColorValue).indexOf(element);
  element.style.backgroundColor = originalColors[index];
});
});

function getRandomColor() {
const letters = "0123456789ABCDEF";
let color = "#";
for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}