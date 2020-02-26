function falar() {
    let rec;
        if (!("webkitSpeechRecognition" in window)) {
            alert("Erro ao Carregar o Kit SpeechRecognition");
        } else {
            rec = new webkitSpeechRecognition();
            rec.lang = "pt-BR";
            rec.continuous = true;
            rec.interim = true;
            rec.addEventListener("result",iniciar);
        }
    function iniciar(event){
        for (let i = event.resultIndex; i < event.results.length; i++){
                document.getElementById('texto').innerHTML = event.results[i][0].transcript;
				
				change();
        }
    }
    
    rec.start();
    }

know = {
                "oi" : "ola",
                "como vai?" : "muito bem :)",
                "ok" : ":D"
            };


    
function change(){
    var user = document.getElementById("texto").value;
    document.getElementById("texto").value = "";
    document.getElementById("chatlogi").innerHTML += user+"<br>";
}

function addT(){
	var esp = document.createElement('br');
	var user = document.getElementById("texto").value;
	var imguser = document.createElement('img');
	imguser.src= 'img/user.png';
	
	const element = document.createElement('div');
	element.classList.add('chat','me');
	
	imguser.style.width= "60px";
	imguser.style.height= "60px";
	imguser.style.background= "#ccc";
	imguser.style.borderRadius= "50%";
	imguser.style.overflow= 'hidden';
	imguser.style.float='right';
	
	
	element.setAttribute("src","img/user.png");
	element.setAttribute("width", "304");
	element.setAttribute("height", "228");
	element.setAttribute("alt", "The Pulpit Rock");
	
	element.style.width= "80%";
	element.style.padding= "15px";
	element.style.margin= "5px 10px 0";
	element.style.borderRadius= "10px";
	element.style.color= "#fff";
	element.style.size="20px";
	element.style.background= "#1ddced";
	
	
	
	
	const elemText= document.createTextNode(user);
	
	element.appendChild(elemText);
	
	document.getElementById("chatlogi").appendChild(imguser);
	document.getElementById("chatlogi").appendChild(element);
	document.getElementById("chatlogi").appendChild(esp);
	console.log(element);
		   
	const elemento = document.createElement('div');
	elemento.classList.add('chat','bot');
	console.log(elemento);
	
	
	
	if (user in know) {
	  var espa = document.createElement('br');
	  var imgbot = document.createElement('img');	
	  imgbot.src= 'img/bot.jpg';
	  
      const elemento = document.createElement('div');
	  elemento.classList.add('chat','botz');
	  
	  imgbot.style.width= "60px";
	  imgbot.style.height= "60px";
	  imgbot.style.background= "#ccc";
	  imgbot.style.borderRadius= "50%";
	  imgbot.style.overflow= 'hidden';
      imgbot.style.float='left';
	  imgbot.style.margin="10px";
	  
	  elemento.style.width= "80%";
	  elemento.style.padding= "15px";
	  elemento.style.margin= "5px 15px 0";
	  elemento.style.borderRadius= "10px";
	  elemento.style.color= "#fff";
	  elemento.style.size="20px";
	  elemento.style.background= "#1adda4";
	  
	  
	  const elemText= document.createTextNode(know[user]);
	
	  elemento.appendChild(elemText);
		
	  
	  document.getElementById("chatlogi").appendChild(imgbot);
	  document.getElementById("chatlogi").appendChild(elemento);
	  document.getElementById("chatlogi").appendChild(espa);
	  
	  
	   
	

	   
	   
    } else {
      
    }
	
}