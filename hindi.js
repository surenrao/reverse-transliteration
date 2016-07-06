//https://en.wikipedia.org/wiki/Devanagari
var numbers = ['०','१','२','३','४','५','६','७','८','९'];

document.write("<h3>Devanagari Range: 0900–097F</h3>");
for(var i=0x0900;i<0x097F;i++){
  if(i%16===0){
    document.write("<div class='range'>");
  }
  document.write("<span class='letter-kalam' title='"+i.toString(16)+"'>" + String.fromCharCode(i) +"</span>");
  if(i%16===15){
    document.write("</div>");
  }
}

document.write("<h3>Devanagari Extended Range: A8E0–A8FF</h3>");
for(var i=0xA8E0;i<0xA8FF;i++){
  if(i%16===0){
    document.write("<div class='range'>");
  }
  document.write("<span class='letter-hindi' title='"+i.toString(16)+"'>" + String.fromCharCode(i) +"</span>");
  if(i%16===15){
    document.write("</div>");
  }
}

document.write("<h3>Vedic Extensions Range: 1CD0–1CFF</h3>");
for(var i=0x1CD0;i<0x1CFF;i++){
  if(i%16===0){
    document.write("<div class='range'>");
  }
  document.write("<span class='letter-hindi' title='"+i.toString(16)+"'>" + String.fromCharCode(i) +"</span>");
  if(i%16===15){
    document.write("</div>");
  }
}
var word = '';
