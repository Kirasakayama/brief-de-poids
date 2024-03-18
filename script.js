let longeur = document.querySelector('.longeur')
let ageInput = document.querySelector('.ageInput')
let mince = document.querySelector('.mince')
let moyen = document.querySelector('.moyen')
let large = document.querySelector('.large')
let calculer = document.querySelector('.calculer')
let result = document.querySelector('.result')
let info = document.querySelector('.info')
let radios = document.querySelectorAll('#checkbox1 input')
let jsonData = {}

if(localStorage.length > 0){
    let data = JSON.parse(localStorage.getItem('data'))
        info.innerHTML = "VOTRE MOYENNE POID EST :" + data.moyenresult + "<br> VOTRE LARGE POID EST :" + data.largeresult ;

}


calculer.addEventListener('click', ()=>{
 
     radios.forEach(radio => {
        if(radio.checked){
            if(radio.id == mince.id){
              var moyenresult = longeur.value - 100 + (ageInput.value /10)*0.9*0.9 ;
              var largeresult = longeur.value - 100 + (ageInput.value /10)*0.9;
              jsonData["moyenresult"] = moyenresult;
              jsonData["largeresult"] = largeresult;
              localStorage.setItem('data' , JSON.stringify(jsonData))   
              result.innerHTML = '<br>' + 'votre poids ideal : ' + moyenresult + 'kg'  + '<br><br>' + ' selon la formule de creff : ' + '<br>' + largeresult +' kg ' ;
            }
            if(radio.id == moyen.id){

                var moyenresult = longeur.value - 100 + (ageInput.value /10)*0.9;
              var largeresult = longeur.value - 100 + (ageInput.value /10)*1.1;
              jsonData["moyenresult"] = moyenresult;
              jsonData["largeresult"] = largeresult;
              localStorage.setItem('data' , JSON.stringify(jsonData))   

                result.innerHTML = '<br>' + 'votre poids ideal : ' + moyenresult + 'kg'  + '<br><br>' + 'selon la formule de creff : ' + '<br>' + largeresult + ' kg ' ;
            }
            if(radio.id == large.id){
                var moyenresult = 0;
                var largeresult = longeur.value - 100 + (ageInput.value /10)*1.1;
                jsonData["moyenresult"] = largeresult;
                jsonData["largeresult"] = moyenresult;
                localStorage.setItem('data' , JSON.stringify(jsonData))   
                result.innerHTML = '<br>' + 'votre poids ideal : ' + largeresult + 'kg'  + '<br>' ;
                
            }
        }






    })





})



