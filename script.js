


let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
    
}) 

async function sendapirequest(){
     let inputData = input1.value;


     let response=await fetch(`https://superheroapi.com/api.php/212296497305346/search/${inputData}`)

 console.log(response)
 let data=await response.json();
 console.log(data)
 useapidata(data)
}





  function useapidata(data)

  {
       document.querySelector("#content").innerHTML=`
     
     
 
   
     
     <div class="card-deck">
     <div class="card ">
     <img src="${data.results[0].image.url}" class="card-img-top" alt="...";">
   <div class="card-body" style="font-family: 'Cookie', cursive;tex-align:center;font-size: 20px;">
     <h5 class="card-title" style="text-align:center"><b>${data.results[0].name.toUpperCase()}</b></h5>
     <p class="card-text"><b>Race:</b>${data.results[0].appearance.race}</p>
     <p class="card-text"><b>Gender:</b>${data.results[0].appearance.gender}</p>
     
     <p class="card-text"><b>Powerstats:</b><ul style="justify-content:center"><li>Intelligence:${data.results[0].powerstats.intelligence}</li><li>Strenght:${data.results[0].powerstats.strength}</li><li>Speed:${data.results[0].powerstats.speed}</li><li>Combat:${data.results[0].powerstats.combat}</li></ul></p>
     <p class="card-text"><b>Aliases:</b>${data.results[0].biography.aliases[0]},${data.results[0].biography.aliases[1]},${data.results[0].biography.aliases[2]},${data.results[0].biography.aliases[3]},${data.results[0].biography.aliases[4]}</p>
     
     
     <p class="card-text"><b>Publisher:</b>${data.results[0].biography.publisher}</p>
     </div></div>

    <div class="card ">
    <img src="${data.results[1].image.url}" class="card-img-top" alt="...";">
  <div class="card-body" style="font-family: 'Cookie', cursive;tex-align:center;font-size: 20px;">
    <h5 class="card-title" style="text-align:center"><b>${data.results[1].name.toUpperCase()}</b></h5>
    <p class="card-text"><b>Race:</b>${data.results[1].appearance.race}</p>
     <p class="card-text"><b>Gender:</b>${data.results[1].appearance.gender}</p>
   
    <p class="card-text"><b>Powerstats:</b><ul style="justify-content:center"><li>Intelligence:${data.results[1].powerstats.intelligence}</li><li>Strenght:${data.results[1].powerstats.strength}</li><li>Speed:${data.results[1].powerstats.speed}</li><li>Combat:${data.results[1].powerstats.combat}</li></ul></p>
    <p class="card-text"><b>Aliases:</b>${data.results[1].biography.aliases[0]},${data.results[1].biography.aliases[1]},${data.results[1].biography.aliases[2]},${data.results[1].biography.aliases[3]},${data.results[1].biography.aliases[4]}</p>
    
    
    <p class="card-text"><b>Publisher:</b>${data.results[1].biography.publisher}</p>
    </div></div>

    <div class="card ">
    <img src="${data.results[2].image.url}" class="card-img-top" alt="...";">
  <div class="card-body" style="font-family: 'Cookie', cursive;tex-align:center;font-size: 20px;">
    <h5 class="card-title" style="text-align:center"><b>${data.results[2].name.toUpperCase()}</b></h5>
    <p class="card-text"><b>Race:</b>${data.results[2].appearance.race}</p>
     <p class="card-text"><b>Gender:</b>${data.results[2].appearance.gender}</p>
    
    <p class="card-text"><b>Powerstats:</b><ul style="justify-content:center"><li>Intelligence:${data.results[2].powerstats.intelligence}</li><li>Strenght:${data.results[2].powerstats.strength}</li><li>Speed:${data.results[2].powerstats.speed}</li><li>Combat:${data.results[2].powerstats.combat}</li></ul></p>
    <p class="card-text"><b>Aliases:</b>${data.results[2].biography.aliases[0]},${data.results[2].biography.aliases[1]},${data.results[2].biography.aliases[2]},${data.results[2].biography.aliases[3]},${data.results[2].biography.aliases[4]}</p>
    
    
    <p class="card-text"><b>Publisher:</b>${data.results[2].biography.publisher}</p>
    </div>


    
   
 </div>





</div>



 
    
      `
  }




