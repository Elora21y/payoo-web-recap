function getInputById(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
}

function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    const convertInnerText = parseFloat(innerText);
    return convertInnerText;
}

function setInnerTextByIdAndValue(id , value){
    const result = document.getElementById(id).innerText = value;
}


// toggle
function handleToggle(id , status){
    document.getElementById(id).style.display = status;
}