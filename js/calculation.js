// Triangle Value
document.getElementById('btn-triangle').addEventListener('click',function(){
  const triangleValueType = 'Triangle';
    const triangleValueOfB = getInputFieldValueById('triangle-field-b');
    const triangleValueOfH = getInputFieldValueById('triangle-field-h');
    if(triangleValueOfB  && triangleValueOfH ){    
      const triangleValue = (0.5 * triangleValueOfB * triangleValueOfH).toFixed(2);     
      const triangleResult = countFunction(triangleValueType, triangleValue);
      document.getElementById('btn-triangle').disabled = true;
      
      return;
    }
    document.getElementById('triangle-field-b').value = "";
    document.getElementById('triangle-field-h').value = "";
   
})

// Rectangle Value
document.getElementById('btn-rectangle').addEventListener('click',function(){
  const rectangleValueType = 'Rectangle';
    const rectangleValueOfW = getInputFieldValueById('rectangle-field-w');
    const rectangleValueOfI = getInputFieldValueById('rectangle-field-i');
    if(rectangleValueOfW  && rectangleValueOfI ){    
      const rectangleValue = (rectangleValueOfW * rectangleValueOfI).toFixed(2);
      const rectangleResult = countFunction(rectangleValueType, rectangleValue);      
      document.getElementById('btn-rectangle').disabled = true;
      return;
    }
    document.getElementById('rectangle-field-w').value = "";
  document.getElementById('rectangle-field-i').value = "";
})
// Parallelogram value
document.getElementById('btn-parallelogram').addEventListener('click',function(){
  const parallelogramValueType = 'Parallelogram';
    const parallelogramValueOfB = getInputFieldValueById('parallelogram-field-b');
    const parallelogramValueOfH = getInputFieldValueById('parallelogram-field-h');
    if(parallelogramValueOfB  && parallelogramValueOfH ){    
      const parallelogramValue = (parallelogramValueOfB * parallelogramValueOfH).toFixed(2);
      const parallelogramResult = countFunction(parallelogramValueType, parallelogramValue);  
      document.getElementById('btn-parallelogram').disabled = true;
      return;
    }
    document.getElementById('parallelogram-field-b').value = "";
  document.getElementById('parallelogram-field-h').value = "";
})
// Rhombus value
document.getElementById('btn-rhombus').addEventListener('click',function(){
  const rhombusValueType = 'Rhombus';
    const rhombusValueOfDOne = getInputFieldValueById('rhombus-field-d-four');
    const rhombusValueOfDTwo = getInputFieldValueById('rhombus-field-d-five');
    if(rhombusValueOfDOne  && rhombusValueOfDTwo){    
      const rhombusValue = (0.5 * rhombusValueOfDOne * rhombusValueOfDTwo).toFixed(2);
      const rhombusResult = countFunction(rhombusValueType, rhombusValue);  
      document.getElementById('btn-rhombus').disabled = true;
      return;
    }
    document.getElementById('rhombus-field-d-four').value = "";
  document.getElementById('rhombus-field-d-five').value = "";
})
// Pentagon value
document.getElementById('btn-pentagon').addEventListener('click',function(){
  const pentagonValueType = 'Pentagon';
    const pentagonValueOfP = getInputFieldValueById('pentagon-field-p');
    const pentagonValueOfB = getInputFieldValueById('pentagon-field-b');
    if(pentagonValueOfP  && pentagonValueOfB ){    
      const pentagonValue = (0.5 * pentagonValueOfP * pentagonValueOfB).toFixed(2);
      const pentagonResult = countFunction(pentagonValueType, pentagonValue);    
      document.getElementById('btn-pentagon').disabled = true;      
      return;
    }
   
    document.getElementById('pentagon-field-p').value = "";
  document.getElementById('pentagon-field-b').value = "";
})
// Ellipse value
document.getElementById('btn-ellipse').addEventListener('click',function(){
  const ellipseValueType = 'Ellipse';
    const ellipseValueOfA = getInputFieldValueById('ellipse-field-a');
    const ellipseValueOfB = getInputFieldValueById('ellipse-field-b');
    if(ellipseValueOfA  && ellipseValueOfB ){    
      const ellipseValue = (3.14 * ellipseValueOfA * ellipseValueOfB).toFixed(2);
      const ellipseResult = countFunction(ellipseValueType,ellipseValue);
      document.getElementById('btn-ellipse').disabled = true;     
      return;
    }
    document.getElementById('ellipse-field-a').value = "";
  document.getElementById('ellipse-field-b').value = "";
})