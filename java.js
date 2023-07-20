let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){

}, 5000)


function nexImage(){
    count++;
    if(count>7){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}