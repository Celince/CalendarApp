var currentDate = new Date();
const months= ["January", "February","March","April","May","June","July","August","September","October","November","December"];
const monthdays= [31,28,31,30,31,30,31,31,30,31,30,31];
var month = currentDate.getMonth();

var year = currentDate.getFullYear();

//this function adds the dates to the table dynamically
function displayDate(){
    var c = 0;
    var currentDate = new Date();
    var cDay = currentDate.getDate();

    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    //changing month name
    var displaymonth = document.getElementById("monthdate");
    displaymonth.innerHTML = months[month];

    //changing year
    var displayYear = document.getElementById("year");
    displayYear.innerHTML = year.toString();

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var d = -currentDate.getDay();
    
    for(var i=0; i<7; i++){

        var cell1 = row.insertCell(i);

        var temp= (cDay+d);
        
        if (temp>monthdays[month]){
            temp= temp-monthdays[month+1]+1;
        }
        if (temp<1){
            temp= monthdays[month-1]+temp;
        }
        
        d++;
        cell1.innerHTML= temp.toString();

        if (cell1.innerHTML == cDay.toString()){
            cell1.style.backgroundColor="red";
        }    
    }
}

var cDay = currentDate.getDate()

//when u press > it switches to next week and so on
function nextWeek(){

    cDay = cDay+7;
    var table = document.getElementById("table");
    table.deleteRow(-1);
    var row = table.insertRow(-1);
    var tempDate = -currentDate.getDay();
    for(var i=0; i<7; i++){

        var cell1 = row.insertCell(i);

        var temp= (cDay+tempDate);
        
        if ((temp)>monthdays[month]){
            cDay= cDay-monthdays[month];
            temp= temp-monthdays[month];
            month++;
            if (month>11){
                month=0;
                year+=1;
                var displayYear = document.getElementById("year");
                displayYear.innerHTML = year.toString();
            }
            var displaymonth = document.getElementById("monthdate");
            displaymonth.innerHTML = months[month].toString();
        }
        if (temp<1){
            temp= monthdays[month-1]+temp;
        }
        
        tempDate++;
        cell1.innerHTML= temp.toString();
        
        var cDay2 = currentDate.getDate();
        var cYear = currentDate.getFullYear();
        var cMonth = currentDate.getMonth();
        if (cell1.innerHTML == cDay2.toString()&& year==cYear && month==cMonth){
            cell1.style.backgroundColor="red";
        }

        document.getElementById("next")
    }
}

//when u press < it switches to last week and so on
function prevWeek(){

    cDay = cDay-7;
    var table = document.getElementById("table");
    table.deleteRow(-1);
    var row = table.insertRow(-1);
    var tempDate = -currentDate.getDay();
    for(var i=0; i<7; i++){

        var cell1 = row.insertCell(i);

        var temp= (cDay+tempDate);
        
        if (temp<1){

            month--;
            if (month<0){    
                month=11;
                year--;
                var displayYear = document.getElementById("year");
                displayYear.innerHTML = year.toString();
            }
            cDay= monthdays[month]+cDay;
            temp= monthdays[month]+temp;
            var displaymonth = document.getElementById("monthdate");
            displaymonth.innerHTML = months[month].toString();
        }
        if (temp>monthdays[month]){
            temp= temp-monthdays[month];
        }
        
        tempDate++;
        cell1.innerHTML= temp.toString();


        var cDay3 = currentDate.getDate();
        var cYear = currentDate.getFullYear();
        var cMonth = currentDate.getMonth();
        if (cell1.innerHTML == cDay3.toString()&& year==cYear && month==cMonth){
            cell1.style.backgroundColor="red";
        }

        document.getElementById("prev")
        
    }
}

//this function displays the exact time input with hours, minutes and meridian
function onTimeChange() {
    var field2 = document.getElementById("inptime");
    var timeSplit = field2.value.split(':'),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    return(hours + ':' + minutes + ' ' + meridian);
  }

//alerts about an event
function updateAlert(){
    var field1 = document.getElementById("inpdate").value; 
    var field2 = document.getElementById("inptime").value;
    var field3 = document.getElementById("inpdes").value;

    if (field1==""||field2==""||field3==""){
        alert ("Please fill up everything including date, time and description of the event")
    }
    else
        alert('You have '+ field3 + ' on ' + field1 + ' at ' + onTimeChange());
}