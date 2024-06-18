let languageOption = document.querySelectorAll('select');
let inText=document.querySelector('.incomingtext');
let transText=document.querySelector('.translate');
let fromSound=document.querySelector('.from');
let toSound=document.querySelector('.to');
let btn=document.querySelector('.bx-copy');
let countValue=document.querySelector('.length');
let exchangeLang=document.querySelector('.bx-transfer');

languageOption.forEach((get,con)	=>{
	for(let countryCode in  language){
        let selected="";
        if (con == 0 && countryCode == "en-GB") {
            selected = "selected";
        } else if (con == 1 && countryCode == "bn-IN") {
            selected = "selected";
        }
        
       let option =`<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`; 
       get.insertAdjacentHTML('beforeend',option);
	}
})

inText.addEventListener('input',function(){
       let content = inText.value;
       fromContent = languageOption[0].value;
       transContent = languageOption[1].value;

       let transLINK =`https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

       fetch(transLINK).then(translate => translate.json()).then(data=>{
          transText.value = data.responseData.translatedText;
       })
})

fromSound.addEventListener('click',function(){
       let fromTalk;
       fromTalk = new SpeechSynthesisUtterance(inText.value);
       fromTalk.lang=languageOption[0].value;
       speechSynthesis.speak(fromTalk);
})
toSound.addEventListener('click',function(){
       let toTalk;
       toTalk = new SpeechSynthesisUtterance(transText.value);
       toTalk.lang=languageOption[1].value;
       speechSynthesis.speak(toTalk);
})
btn.addEventListener('click',function(){
    navigator.clipboard.writeText(transText.value);
})
inText.addEventListener('keyup',function(){
       countValue.innerHTML = `${inText.value.length}/5000`;
})
exchangeLang.addEventListener('click',function(){
       let tempTxt=inText.value;
       inText.value=transText.value;
       transText.value=tempTxt;

       let tempOpt=languageOption[0].value;
       languageOption[0].value=languageOption[1].value;
       languageOption[1].value=tempOpt;

})