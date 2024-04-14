var data= {
  chatinit:{
      title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
      options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
  },
  movies: {
      title:["Please select category"],
      options:['Prime'],
      url : {
          link:["https://www.amazon.com/s/?ie=UTF8&keywords=video+movie&index=dvd&tag=mh0b-20&ref=pd_sl_60c2spwq86_p&adgrpid=1337008520460294&hvadid=83563291886799&hvnetw=o&hvqmt=p&hvbmt=bp&hvdev=c&hvlocint=164297&hvlocphy=145635&hvtargid=kwd-83564066487038:loc-190&hydadcr=17038_13438724"]
      }
  },
  
  news: {
      title:["Today's Top Headline"],
      options:["The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA."],
      url : {
          //more:"https://www.youtube.com/@webhub/videos",
          link:["https://www.livescience.com/green-comet-c2022-e3-how-to-watch#:~:text=On%20Feb.%201%2C%20a%20bright-green%20comet%20named%20C%2F2022,when%20modern%20humans%20shared%20our%20planet%20with%20Neanderthals."]
      }
  },
  
  shopping: {
      title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
      options:['Electronics'],
      url : {
          
      }
  },
  electronics: {
      title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
      options:['Televisions'],
      url : {
          //more:"https://www.youtube.com/@webhub/videos",
          link:["https://www.walmart.com/browse/electronics/electronics-by-brand/3944_4131277?adid=22222222264446347498&wmlspartner=wmtlabs&wl0=b&wl1=o&wl2=c&wl3=74835639785364&wl4=dat-2326635323984836:loc-149&wl5=145635&wl6=&wl7=&wl14=online%20electronics%20shopping&veh=sem&&msclkid=df10c84e82b5114a5f01ae5541933bf6&gclid=df10c84e82b5114a5f01ae5541933bf6&gclsrc=3p.ds"]
      }
  },
  /*
  beauty: {
      title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
      options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
      url : {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#"]
      }
  },
  mobiles: {
      title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
      options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
      url : {
          more:"https://www.youtube.com/@webhub/videos",
          link:["https://www.ndtv.com/science/rare-green-comet-to-make-closest-approach-of-earth-this-week-3734392#:~:text=The%20rare%20green%20comet%20will,February%202%2C%20according%20to%20NASA.&text=A%20rare%20green%20comet%20is,if%20the%20skies%20are%20clear.","#","#","#"]
      }
  },
  
  
  men: {
      title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
      options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
      url : {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#","#"]
      }
  },
  women: {
      title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
      options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
      url : {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#"]
      }
  },
  */
  music: {
      title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
      options: ["song 1"],
      url : {
          //more:"https://www.youtube.com/@webhub/videos",
          link:["https://music.youtube.com/tasteprofile"]
      }
  },
  /*
  hollywood: {
      title: ["Thanks for your response","Here are some genre based movies"],
      options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
      url: {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#","#"]
      }
  },
  */
  /*
  bollywood: {
      title: ["Thanks for your response","Here are some genre based movies"],
      options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
      url: {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#","#"]
      }
  },
  */
  /*
  web: {
      title: ["Thanks for your response","Here are some genre based web series"],
      options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
      url: {
          more:"https://www.youtube.com/@webhub/videos",
          link:["#","#","#","#","#"]
      }
  },
  */
  /*
  others: {
      title: ["Here are some more options for you"],
      options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
      url: {
          more:"https://www.youtube.com/",
          link:["#","#","#","#","#"]
      }
  },
  */
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
  console.log(this.innerText);
  if(this.innerText=='START CHAT'){
      document.getElementById('test').style.display='block';
      document.getElementById('init').innerText='CLOSE CHAT';
      initChat();
  }
  else{
      location.reload();
  }
}

function initChat(){
  j=0;
  cbot.innerHTML='';
  for(var i=0;i<len1;i++){
      setTimeout(handleChat,(i*500));
  }
  setTimeout(function(){
      showOptions(data.chatinit.options)
  },((len1+1)*500))
}

var j=0;
function handleChat(){
  console.log(j);
  var elm= document.createElement("p");
  elm.innerHTML= data.chatinit.title[j];
  elm.setAttribute("class","msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options){
  for(var i=0;i<options.length;i++){
      var opt= document.createElement("span");
      var inp= '<div>'+options[i]+'</div>';
      opt.innerHTML=inp;
      opt.setAttribute("class","opt");
      opt.addEventListener("click", handleOpt);
      cbot.appendChild(opt);
      handleScroll();
  }
}

function handleOpt(){
  console.log(this);
  var str= this.innerText;
  var textArr= str.split(" ");
  var findText= textArr[0];
  
  document.querySelectorAll(".opt").forEach(el=>{
      el.remove();
  })
  var elm= document.createElement("p");
  elm.setAttribute("class","test");
  var sp= '<span class="rep">'+this.innerText+'</span>';
  elm.innerHTML= sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj= data[findText.toLowerCase()];
  handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
  var elm= document.createElement("p");
      elm.innerHTML= title;
      elm.setAttribute("class","msg");
      cbot.appendChild(elm);
}


function handleResults(title,options,url){
  for(let i=0;i<title.length;i++){
      setTimeout(function(){
          handleDelay(title[i]);
      },i*500)
      
  }

  const isObjectEmpty= (url)=>{
      return JSON.stringify(url)=== "{}";
  }

  if(isObjectEmpty(url)==true){
      console.log("having more options");
      setTimeout(function(){
          showOptions(options);
      },title.length*500)
      
  }
  else{
      console.log("end result");
      setTimeout(function(){
          handleOptions(options,url);
      },title.length*500)
      
  }
}

function handleOptions(options,url){
  for(var i=0;i<options.length;i++){
      var opt= document.createElement("span");
      var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
      opt.innerHTML=inp;
      opt.setAttribute("class","opt");
      cbot.appendChild(opt);
  }
  var opt= document.createElement("span");
  var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

  const isObjectEmpty= (url)=>{
      return JSON.stringify(url)=== "{}";
  }

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML=inp;
  opt.setAttribute("class","opt link");
  cbot.appendChild(opt);
  handleScroll();
}

function handleScroll(){
  var elem= document.getElementById('chat-box');
  elem.scrollTop= elem.scrollHeight;
}