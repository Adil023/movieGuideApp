// i'am begining type javascript codes,go on

const seachBtn=document.querySelector('.searchBtn')
const movieName=document.querySelector('#input')
const result=document.querySelector('.result')
function getMovie(){
    const film=movieName.value 
    if(film <=0){
        result.innerHTML='Type some movie name'
    }else{
        
        fetch(`http://www.omdbapi.com/?t=${film}&apikey=${key}`)
        .then((response) => response.json())
        .then((data) => {
        
        if(data.Response == 'True'){
            result.innerHTML=`
          <div>
            <div class='containerMovie'>
                <div class='Poster'>
                    <img src='${data.Poster}'/>             
                </div>
                <div class='rightSide'>
                    <h3>${data.Title}<h3>
                    <div>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><defs><style>.cls-1{fill:#ffb92a;}</style></defs><path class="cls-1" d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"/></svg>
                        <span>${data.imdbRating}<span>
                    </div>
                    <div>
                       <span style='font-size:15px;color:grey;'>${data.Year}</span>
                       <span style='font-size:15px;color:grey;'>${data.Runtime}</span>
                    </div>
                    <div class='containerGenre'>
                       <span class='Genre'>${data.Genre.split(',')[0]}<span>
                       <span class='Genre'>${data.Genre.split(',')[1]}<span>
                       <span class='Genre'>${data.Genre.split(',')[2]}<span>
                    </div>
                   
                    </div>
            </div>
            <div>
                 <div>
                    <h3 style='text-align:start;'>Plot:</h3>
                    <p style='text-align:start;font-size:15px;color:grey;'>${data.Plot}</p>
                 </div>
                 <div>
                    <h3 style='text-align:start;'>Cast</h3>
                    <p style='text-align:start;font-size:15px;color:grey;'>${data.Actors}</p>
                 </div>
            </div>
          </div>
        
        `
        }else{
            result.innerHTML='type available movie name'
        }

        
         } );
    }


}





seachBtn.addEventListener('click',getMovie)
window.addEventListener('load',getMovie)
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    //if input field is empty

    