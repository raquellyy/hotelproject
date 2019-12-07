var userLowerCase;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];



/*function addperson(){
if (document.getElementById('rone').length < 4) {
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('person').value);
  newlist.appendChild('newText');
  var position = document.getElementById('rone');
  position.appendChild('newlist');
    }
  else ()
};

function removeperson() {
    var remove = document.getElementById('removeone').value;
    var change = parseInt(remove);
    var child = document.getElementById('rone')[change - 1];
    var parent = child.parentNode;
    parent.removeChild(child);
};*/


function addperson(){
  if (r1 < 4) {
    /*var newlist = document.createElement('li');*/
    var newText = document.createTextNode(document.getElementById('person').value);
    /*newlist.appendChild(newText);*/
    var position = document.getElementsByTagName('ul')[0];
    /*position.appendChild(newlist);*/
    var allguests = document.getElementById('allguests');
    var biglist = document.createElement('li');
    var date = new Date();
    var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    var bigliststuff = document.createTextNode(document.getElementById('person').value + " " + adddate);
    biglist.appendChild(bigliststuff);
    allguests.appendChild(biglist);
    

    var allguests2 = document.getElementById('list1');
    var biglist2 = document.createElement('li');
    var date2 = new Date();
    var adddate2 = months[date2.getMonth()] + " " + days[date2.getDay()] + " - " + date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds() + ":" + date2.getMilliseconds();
    var bigliststuff2 = document.createTextNode(document.getElementById('person').value + " " + adddate2);
    biglist2.appendChild(bigliststuff2);
    allguests2.appendChild(biglist2);
    document.getElementById('person').value = " ";

    r1++
    newlist.appendChild(newText);
    position.appendChild(newlist);
  }

};

function cleanone() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room1button').disabled;
  if(current == true){
    document.getElementById('room1button').disabled = false;
  }
  else {
    document.getElementById('room1button').disabled= true;
  }
};

function removeperson() {
    var listone = document.getElementById("list1");
    var remove = document.getElementById('removeone').value;
    /*var change = parseInt(remove);*/
    var child = document.getElementById("list1").getElementsByTagName('li')[remove - 1];
    /*var parent = child.parentNode;*/
    listone.removeChild(child);   
    r1--;
}

function byeone() {
  var ul = document.getElementById("list1");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}









/*document.getElementById('person').value = Date();*/

/*function addpersontwo(){
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('persontwo').value);
  var position = document.getElementsByTagName('ul')[1];
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('persontwo').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
  document.getElementById('persontwo').value = " ";
 if (r2 < 4) {
   r2++
   newlist.appendChild(newText);
   position.appendChild(newlist);  
 }
};*/


function addpersontwo(){
  if (r2 < 4) {
  /*var newlist = document.createElement('li');*/
  var newText = document.createTextNode(document.getElementById('persontwo').value);
  var position = document.getElementsByTagName('ul')[1];
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('persontwo').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
 

   var allguests2 = document.getElementById('list2');
   var biglist2 = document.createElement('li');
   var date2 = new Date();
   var adddate2 = months[date2.getMonth()] + " " + days[date2.getDay()] + " - " + date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds() + ":" + date2.getMilliseconds();
   var bigliststuff2 = document.createTextNode(document.getElementById('persontwo').value + " " + adddate2);
   biglist2.appendChild(bigliststuff2);
   allguests2.appendChild(biglist2);
   document.getElementById('persontwo').value = " ";

   r2++
   newlist.appendChild(newText);
   position.appendChild(newlist); 
 }
};


function cleantwo() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room2button').disabled;
  if(current == true){
    document.getElementById('room2button').disabled = false;
  }
  else {
    document.getElementById('room2button').disabled= true;
  }
};

function removepersontwo() {
  var listone = document.getElementById("list2");
  var remove = document.getElementById('removetwo').value;
  /*var change = parseInt(remove);*/
  var child = document.getElementById("list2").getElementsByTagName('li')[remove - 1];
  /*var parent = child.parentNode;*/
  listone.removeChild(child);   
  r2--;  
};

function byetwo() {
  var ul = document.getElementById("list2");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}








function addpersonthree(){
if (r3 < 4) {
  
  /*var newlist = document.createElement('li');*/
  var newText = document.createTextNode(document.getElementById('personthree').value);
  var position = document.getElementsByTagName('ul')[2];
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('personthree').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
  document.getElementById('personthree').value = " ";

  /*var allguests2 = document.getElementById('room3');
  var biglist2 = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff2 = document.createTextNode(newText + adddate);
  biglist2.appendChild(bigliststuff2);
  allguests2.appendChild(biglist2);*/

  var allguests2 = document.getElementById('list3');
  var biglist2 = document.createElement('li');
  var date2 = new Date();
  var adddate2 = months[date2.getMonth()] + " " + days[date2.getDay()] + " - " + date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds() + ":" + date2.getMilliseconds();
  var bigliststuff2 = document.createTextNode(document.getElementById('personthree').value + " " + adddate2);
  biglist2.appendChild(bigliststuff2);
  allguests2.appendChild(biglist2);
  document.getElementById('personthree').value = " "; 

  r3++
  newlist.appendChild(newText);
  position.appendChild(newlist);
    }
}

function cleanthree() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room3button').disabled;
  if(current == true){
    document.getElementById('room3button').disabled = false;
  }
  else {
    document.getElementById('room3button').disabled= true;
  }
};

function removepersonthree() {
  var listone = document.getElementById("list3");
  var remove = document.getElementById('removethree').value;
  /*var change = parseInt(remove);*/
  var child = document.getElementById("list3").getElementsByTagName('li')[remove - 1];
  /*var parent = child.parentNode;*/
  listone.removeChild(child);   
  r3--;  
}

function byethree() {
  var ul = document.getElementById("list3");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}








function addpersonfour(){
if (r4 < 4) {
  r4++
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('personfour').value);
  newlist.appendChild(newText);
  var position = document.getElementsByTagName('ul')[3];
  position.appendChild(newlist);
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('personfour').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
  document.getElementById('personfour').value = " ";
    }
}

function cleanfour() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room4button').disabled;
  if(current == true){
    document.getElementById('room4button').disabled = false;
  }
  else {
    document.getElementById('room4button').disabled= true;
  }
};

function removepersonfour() {
  var list = document.getElementById("list4");
  var remove = document.getElementById('removefour').value;
  /*var change = parseInt(remove);*/
  var child = document.getElementById("list4").getElementsByTagName('li')[remove - 1];
  /*var parent = child.parentNode;*/
  list.removeChild(child);   
  r4--; 
}

function byefour() {
  var ul = document.getElementById("list4");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}







function addpersonfive(){
if (r5 < 4) {
  r5++
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('personfive').value);
  newlist.appendChild(newText);
  var position = document.getElementsByTagName('ul')[4];
  position.appendChild(newlist);
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('personfive').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
  document.getElementById('personfive').value = " ";
    }
}

function cleanfive() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room5button').disabled;
  if(current == true){
    document.getElementById('room5button').disabled = false;
  }
  else {
    document.getElementById('room5button').disabled= true;
  }
};

function removepersonfive() {
  var list = document.getElementById("list5");
  var remove = document.getElementById('removefive').value;
  /*var change = parseInt(remove);*/
  var child = document.getElementById("list5").getElementsByTagName('li')[remove - 1];
  /*var parent = child.parentNode;*/
  list.removeChild(child);   
  r5--;   
}

function byefive() {
  var ul = document.getElementById("list5");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}







function addpersonsix(){
if (r6 < 4) {
  r6++
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('personsix').value);
  newlist.appendChild(newText);
  var position = document.getElementsByTagName('ul')[5];
  position.appendChild(newlist);
  var allguests = document.getElementById('allguests');
  var biglist = document.createElement('li');
  var date = new Date();
  var adddate = months[date.getMonth()] + " " + days[date.getDay()] + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  var bigliststuff = document.createTextNode(document.getElementById('personsix').value + adddate);
  biglist.appendChild(bigliststuff);
  allguests.appendChild(biglist);
  document.getElementById('personsix').value = " ";
    }
}

function cleansix() {
  /*document. getElementById("room1button"). disabled = true;*/
  current = document.getElementById('room6button').disabled;
  if(current == true){
    document.getElementById('room6button').disabled = false;
  }
  else {
    document.getElementById('room6button').disabled= true;
  }
};

function removepersonsix() {
  var listsix = document.getElementById("list6");
  var remove = document.getElementById('removesix').value;
  /*var change = parseInt(remove);*/
  var child = document.getElementById("list6").getElementsByTagName('li')[remove - 1];
  /*var parent = child.parentNode;*/
  listsix.removeChild(child);   
  r6--;    
}

function byesix() {
  var ul = document.getElementById("list6");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
}






/*function removepersonsix() {
    var remove = document.getElementById('removesix').value;
    var change = parseInt(remove);
  var child = document.getElementsByTagName('li')[r6 - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
}*/