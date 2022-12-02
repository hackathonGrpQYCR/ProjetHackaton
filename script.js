nbgoutte=0;
goutte_1=0;
goutte_2=0;
goutte_3=0;
goutte_4=0;
goutte_5=0;

function Goutte(num,color,position_x,position_y,largeur,longeur,sortie){
    this.num = num
    this.color = color
    this.position_x = 0
    this.position_y = 0
    this.largeur=45
    this.longeur=45
    this.sortie="False"
  }
function Plaque_chauffante(position_x,position_y,color,largeur,longeur){
    this.position_x=5
    this.position_y=5
    this.color = "orange"
    this.largeur=100
    this.longeur=100
}
plaque_chauffante=new Plaque_chauffante();
function Plaque_sortie(position_x,position_y,color,largeur,longeur){
    this.position_x=9
    this.position_y=0
    this.color = "black"
    this.largeur=50
    this.longeur=50
}
plaque_sortie=new Plaque_sortie();


function timer(t){
  return new Promise(r=>setTimeout(r,t));
}

function createGoutte(num,color){
  switch (color){
    case 'red':
        goutte_cree=new Goutte(num,color);
        break;    
    case 'green':
        goutte_cree=new Goutte(num,color);
        break
    case 'blue':
        goutte_cree=new Goutte(num,color);
        break;
    case 'yellow':
        goutte_cree=new Goutte(num,color);
        break;
    case 'purple':
        goutte_cree=new Goutte(num,color);
        break;
  }
  return goutte_cree
}


function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    for (var x = 0.5; x < 500; x += 50) {
      context.moveTo(x, 0);
      context.lineTo(x, 500);
    }
    for (var y = 0.5; y < 500; y += 50) {
      context.moveTo(0, y);
      context.lineTo(500, y);
    }
    context.strokeStyle = 'grey';
    context.stroke();
    context.fillStyle = goutte_1.color;
    context.fillRect(goutte_1.position_x, goutte_1.position_y, goutte_1.longeur, goutte_1.largeur);
    context.fillStyle = goutte_2.color;
    context.fillRect(goutte_2.position_x, goutte_2.position_y, goutte_2.longeur, goutte_2.largeur);
    context.fillStyle = goutte_3.color;
    context.fillRect(goutte_3.position_x, goutte_3.position_y, goutte_3.longeur, goutte_3.largeur);
    context.fillStyle = goutte_4.color;
    context.fillRect(goutte_4.position_x, goutte_4.position_y, goutte_4.longeur, goutte_4.largeur);
    context.fillStyle = goutte_5.color;
    context.fillRect(goutte_5.position_x, goutte_5.position_y, goutte_5.longeur, goutte_5.largeur);
  }
}

function getColor(){
  var couleur_select = document.getElementById("choix_couleur").value;
  nbgoutte+=1;
  context = canvas.getContext('2d');
  switch (nbgoutte){
    case 1:
      goutte_1=createGoutte(1,couleur_select);
      document.getElementById("couleur_choisie").innerHTML+='<option>'+goutte_1.num+" "+goutte_1.color+'</option>';
      context.fillStyle = goutte_1.color;
      context.fillRect(goutte_1.position_x, goutte_1.position_y, goutte_1.longeur, goutte_1.largeur);
      break;
    case 2:
      goutte_2=createGoutte(2,couleur_select);
      document.getElementById("couleur_choisie").innerHTML+='<option>'+goutte_2.num+" "+goutte_2.color+'</option>';
      context.fillStyle = goutte_2.color;
      context.fillRect(goutte_2.position_x, goutte_2.position_y, goutte_2.longeur, goutte_2.largeur);
      break;
    case 3:
      goutte_3=createGoutte(3,couleur_select);
      document.getElementById("couleur_choisie").innerHTML+='<option>'+goutte_3.num+" "+goutte_3.color+'</option>';
      context.fillStyle = goutte_3.color;
      context.fillRect(goutte_3.position_x, goutte_3.position_y, goutte_3.longeur, goutte_3.largeur);
      break;
    case 4:
      goutte_4=createGoutte(4,couleur_select);
      document.getElementById("couleur_choisie").innerHTML+='<option>'+goutte_4.num+" "+goutte_4.color+'</option>';
      context.fillStyle = goutte_4.color;
      context.fillRect(goutte_4.position_x, goutte_4.position_y, goutte_4.longeur, goutte_4.largeur);
      break;
    case 5:
      goutte_5=createGoutte(5,couleur_select);
      document.getElementById("couleur_choisie").innerHTML+='<option>'+goutte_5.num+" "+goutte_5.color+'</option>'; 
      context.fillStyle = goutte_5.color;
      context.fillRect(goutte_5.position_x, goutte_5.position_y, goutte_5.longeur, goutte_5.largeur);     
      break;
    default:
      break;
  }
}

async function get_Value2(){
  var x = document.getElementById("x").value*50;
  var y = document.getElementById("y").value*50;
  lesGouttes=[goutte_1,goutte_2,goutte_3,goutte_4,goutte_5];
  laGoutte="";
  var theone = parseInt((document.getElementById("couleur_choisie").value).substr(0,1));
  for(uneGoutte in lesGouttes){
    if(lesGouttes[uneGoutte].num == theone){
      laGoutte = lesGouttes[uneGoutte];
    }
  }
  ancien_x=laGoutte.position_x
  ancien_y=laGoutte.position_y
  context = canvas.getContext('2d');
  if(laGoutte.sortie=="False"){
    yes = false;
    while(yes == false){
      ancien_x=laGoutte.position_x;
      ancien_y=laGoutte.position_y;
      if(ancien_x<x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_x+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);
      }
      if(ancien_y<y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_x>x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;;
        laGoutte.position_x-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_y>y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000); 
      }
      if(ancien_x==x && ancien_y==y ){
        yes = true;
      }
    }
  }
  else{
    alert("La goutte selectionné est sortie")
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function chauffe(){
  context.fillStyle = plaque_chauffante.color;
  context.fillRect(plaque_chauffante.position_x*50, plaque_chauffante.position_y*50, plaque_chauffante.longeur, plaque_chauffante.largeur);
  x = getRandomInt(5,6)*50;
  y = getRandomInt(5,6)*50;
  lesGouttes=[goutte_1,goutte_2,goutte_3,goutte_4,goutte_5];
  laGoutte="";
  parseInt((document.getElementById("couleur_choisie").value).substr(0,1));
  var theone = parseInt((document.getElementById("couleur_choisie").value).substr(0,1));
  for(uneGoutte in lesGouttes){
    if(lesGouttes[uneGoutte].num == theone){
      laGoutte = lesGouttes[uneGoutte];
    }
  }
  if(laGoutte.sortie=="False"){
    context = canvas.getContext('2d');
    
    yes = false;
    while(yes == false){
      ancien_x=laGoutte.position_x;
      ancien_y=laGoutte.position_y;
      if(ancien_x<x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_x+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);
      }
      if(ancien_y<y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_x>x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;;
        laGoutte.position_x-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_y>y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000); 
      }
      if(ancien_x==x && ancien_y==y ){
        yes = true;
      }
    }
    switch(laGoutte.color){
      case 'red':
        laGoutte.color='DarkRed';
        break;
      case 'green':
        laGoutte.color='DarkGreen';
        break;
      case 'blue':
        laGoutte.color='SkyBlue';
        break;
      case 'yellow':
        laGoutte.color='LemonChiffon';
        break;
      case 'purple':
        laGoutte.color='RebeccaPurple';
        break;
    }
    context.fillStyle = laGoutte.color;
    context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);  
  }
  else{
    alert("La goutte selectionné est sortie")
  }
}

async function sortie(){
  context.fillStyle = plaque_sortie.color;
  context.fillRect(plaque_sortie.position_x*50, plaque_sortie.position_y*50, plaque_sortie.longeur, plaque_sortie.largeur);
  x = 9*50;
  y = 0*50;
  lesGouttes=[goutte_1,goutte_2,goutte_3,goutte_4,goutte_5];
  laGoutte="";
  parseInt((document.getElementById("couleur_choisie").value).substr(0,1));
  var theone = parseInt((document.getElementById("couleur_choisie").value).substr(0,1));
  for(uneGoutte in lesGouttes){
    if(lesGouttes[uneGoutte].num == theone){
      laGoutte = lesGouttes[uneGoutte];
    }
  }
  if(laGoutte.sortie=="False"){
    context = canvas.getContext('2d');
    yes = false;
    while(yes == false){
      ancien_x=laGoutte.position_x;
      ancien_y=laGoutte.position_y;
      if(ancien_x<x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_x+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);
      }
      if(ancien_y<y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y+=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_x>x){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;;
        laGoutte.position_x-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000);   
      }
      if(ancien_y>y){
        if((laGoutte.position_x==5*50 || laGoutte.position_x==6*50) && (laGoutte.position_y==5*50 || laGoutte.position_y==6*50)){
          context.fillStyle = 'orange';
        }
        else{
          context.fillStyle = 'white';
        }
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        context.fillStyle = laGoutte.color;
        laGoutte.position_y-=50
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        draw();
        await timer(1000); 
      }
      if(ancien_x==x && ancien_y==y ){
        yes = true;
        laGoutte.color="black";
        context.fillStyle = laGoutte.color;
        context.fillRect(laGoutte.position_x, laGoutte.position_y, laGoutte.longeur, laGoutte.largeur);
        laGoutte.sortie="True"; 
      }
    }
  }
  else{
    alert("La goutte selectionée est sortie");
  }
}