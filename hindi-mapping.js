//https://en.wikipedia.org/wiki/Devanagari
//http://www.linguanaut.com/english_hindi.htm
//http://www.unicode.org/cldr/charts/latest/transforms/Latin-Indic.html
//http://hindilanguage.info/devanagari/
//http://www.virtualvinodh.com/wp/aksharamukha/
//http://transliteration.eki.ee/
//http://www.aczoom.com/itrans/TRANS.TXT ITRANS rules
//http://www.aczoom.com/itrans/online/webitrans-form.html
/*jshint esversion: 6 */
/* jshint -W100 */
(function () {
   'use strict';

   class Devanagari {
     constructor(standard) {
       this.standard = standard;
       this.mapping = {
        "ITRANS":{
          "encode":{
            "consonants":{},
            "vowels":{},
          },
          "decode":{
            "consonants":{
              //numbers
              "०":"0",
              "१":"1",
              "२":"2",
              "३":"3",
              "४":"4",
              "५":"5",
              "६":"6",
              "७":"7",
              "८":"8",
              "९":"9",
              //letters
              "क":"k",
              "ख":"kh",
              "ग":"g",
              "घ":"gh",
              "ङ":"~N", // ~N / N^a
              "च":"ch",
              "छ":"Ch",
              "ज":"j",
              "झ":"jh",
              "ञ":"~n",//~n / JN
              "ट":"T",
              "ठ":"Th",
              "ड":"D",
              "ढ":"Dh",
              "ण":"N",
              "त":"t",
              "थ":"th",
              "द":"d",
              "ध":"dh",
              "न":"n",
              "प":"p",
              "फ":"ph",
              "ब":"b",
              "भ":"bh",
              "म":"m",
              "य":"y",
              "र":"r",
              "ल":"l",
              "व":"v",// v/w
              "श":"sh",
              "ष":"Sh",
              "स":"s",
              "ह":"h",
              //Other consonants
              "क़" : "q",
              "ख़" : "Kh",
              "ग़" : "G",
              "ज़" : "z",// z/J
              "फ़" : "f",
              "ड़" : ".D",
              "ढ़" : ".Dh",
              "ऱ" : "R", //marathi half-RA
              "य़" : "Y",//benagli
              "ळ" : "L", //marathi LLA
              //complex
              "क्ष":"kSh", // x/kSh
              "ज्ञ":"GY", // GY / j~n /dn
              "श्र":"shr",
              "त्र":"tr",
              //special
              "अँ":".N",
              "ऽ":".a",
              "ॐ":"OM",// OM / AUM
              "॰":"*",
              "।":"|",
              ".":".",
            },
            "vowels":{
              "अ":"a",
              "आ":"A",// aa/A
              "इ":"i",
              "ई":"I",// ii/I
              "उ":"u",
              "ऊ":"U",// uu/U
              "ए":"e",
              "ऐ":"ai",
              "ओ":"o",
              "औ":"au",
              "अं":"aM",
              "अः":"aH",
              "ऑ":"aa.c",
              "ऋ":"RRi",// RRi/R^i
              "ॠ":"RRI",// RRI/R^I
              "ऌ":"LLi",// LLi/L^i
              "ॡ":"LLI",// LLI/L^I
            },
            "diatrics":{
              "ा":"aa",
              "ि":"i",
              "ी":"ii",
              "ु":"u",
              "ू":"uu",
              "े":"e",
              "ै":"ai",
              "ो":"o",
              "ौ":"au",
              "ं":".n", // .n/M/.m
              "ः":"H",
              "ॉ":"a.u",
              "्":".h",
              "ृ":"RRi",
              "ॄ":"RRI",
              "ॢ":"LLi",
              "ॣ":"LLI",
              "़‌":"`",
              "ँ":".N",
              "ॅ":".e",
            }
          }
        }
      };
     }

     encode(sentense){
       return '';
     }

     decode(sentense){
       var newSentence = "";
       var consonants = this.mapping[this.standard].decode.consonants;
       var vowels = this.mapping[this.standard].decode.vowels;
       var diatrics = this.mapping[this.standard].decode.diatrics;
       for(var i=0;i<sentense.length;i++)
       {
         var char = "";
         if(!consonants[sentense[i]] && !vowels[sentense[i]] && !diatrics[sentense[i]]){
           char = sentense[i];
         }else{
           if(consonants[sentense[i]]){
             char = consonants[sentense[i]];
              if(i+1 < sentense.length){
                //if next letter is also a consonant add a
                if(consonants[sentense[i+1]] || vowels[sentense[i+1]])
                {
                  char = char +'a';
                }
              }
           }else{
             char = vowels[sentense[i]] || diatrics[sentense[i]];
           }
         }
           newSentence += char;
       }
       return newSentence;
     }
   }

   //Testing
   var hindi = new Devanagari('ITRANS');

   var sentenses =
   ["सीने में जलन आँखों में तूफ़ान सा क्यूँ है",
   "इस शहर में हर शख़्स परेशान सा क्यूँ है",
   "दिल है तो धड़कने का बहाना कोई ढूंढे",
   "पत्थर की तरह बेहिस\-ओ\-बेजान सा क्यूँ है",
   "तनहाई की ये कौन सी मंज़िल है रफ़ीक़ों",
   "ता\-हद्द\-ए\-नज़र एक बयाबान सा क्यूँ है",
   "क्या कोई नई बात नज़र आती है हम में",
   "आईना हमें देख के हैरान सा क्यूँ है"];
   /*
    siine me.n jalan aa.Nkho.n me.n tuufaan saa kyuu.N hai
    is shahar me.n har shaKs pareshaan saa kyuu.N hai

    dil hai to dha.Dakane kaa bahaanaa koI Dhuu.nDhe
    patthar kii tarah behis\-o\-bejaan saa kyuu.N hai

    tanahaaI kii ye kaun sii ma.nzil hai rafiiqo.n
    taa\-hadd\-e\-nazar ek bayaabaan saa kyuu.N hai

    kyaa koI naI baat nazar aatii hai ham me.n
    aaInaa hame.n dekh ke hairaan saa kyuu.N hai
   */
  //  [
  //   " क्या आप इसे दोहरा सकते हैं",
  //  "क्या आप (अंग्रेजी-हिंदी) में बात कर सकते हैं",
  //  "श्री-श्रीमती-कुमारी-कुमार",
  //  "आपसे मिलकर खुशी हुई ।",
  //  "क्या आपको यहाँ अच्छा लगता है",
  //  "दस बजे हैं, शाम के सात बज कर तीस मिनट हुए हैं",
  //  ];

   for(var i=0;i<sentenses.length;i++){
     console.log(sentenses[i]);
     console.log(hindi.decode(sentenses[i]));
   }
}());
