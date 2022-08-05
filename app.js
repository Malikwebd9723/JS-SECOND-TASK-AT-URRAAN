const icon = document.getElementById('icon');
const text = document.getElementById('text');


toggleIcon = () => {
icon.classList.toggle('active');
if (icon.classList.contains('active')) {
    
    text.innerHTML = "ON";
    document.getElementById("toggleIcon").style.backgroundColor = "lightblue";
}
else{
    text.innerHTML = "OFF";
    document.getElementById("toggleIcon").style.backgroundColor = "grey";
}
};