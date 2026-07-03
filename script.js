function translateText(){

let input=document.getElementById("inputText").value.toLowerCase().trim();

let output="Translation not available.";

const dictionary={

"hello":"नमस्ते",

"good morning":"सुप्रभात",

"good night":"शुभ रात्रि",

"how are you":"आप कैसे हैं?",

"i am fine":"मैं ठीक हूँ",

"what is your name":"आपका नाम क्या है?",

"my name is dinesh":"मेरा नाम दिनेश है",

"thank you":"धन्यवाद",

"welcome":"स्वागत है",

"yes":"हाँ",

"no":"नहीं",

"please":"कृपया",

"sorry":"माफ़ कीजिए",

"i love india":"मुझे भारत से प्यार है",

"computer":"कंप्यूटर",

"college":"कॉलेज",

"student":"छात्र",

"teacher":"शिक्षक",

"language":"भाषा",

"translate":"अनुवाद",

"goodbye":"अलविदा"

};

if(dictionary[input]){
output=dictionary[input];
}

document.getElementById("outputText").value=output;

}