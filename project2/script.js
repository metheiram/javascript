document.getElementById('toggleButton').addEventListener('click', function() {
    var bulb = document.getElementById('bulb');
    if (bulb.src.includes('OIP.jpeg')) {
        bulb.src = 'OIP (1).jpeg'; // Change this to the path of your "on" bulb image
    } else {
        bulb.src = 'OIP.jpeg'; // Change this to the path of your "off" bulb image
    }
});
