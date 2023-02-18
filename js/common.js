// Blog Html page go
document.getElementById('blog-btn').addEventListener('click',function(){
  window.location.href = 'blog.html';
})


// input Field Value
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


// content value add

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
