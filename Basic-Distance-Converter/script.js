document.getElementById('convert').addEventListener('submit', function(event){
    event.preventDefault(); // prevent the form from submitting

    var distance = parseFloat(document.getElementById('distance').value);

    if (isNaN(distance)){
        alert('Please enter a valid number');
    }
    else {
        var conversion = distance * 1.609344;
        alert(conversion);
    }
    
});
