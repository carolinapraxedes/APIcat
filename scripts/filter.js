const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_uzlCnzvVXqOQnKGecKQVhnIHhiqep7b5va4HawjUL0KdZfUMs5F6MmpjoqK0oa70"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
})
.then((data) => {
    //filter to only include those with an `image` object
    data = data.filter(img=> img.image?.url!=null)
    
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    /*console.log(storedBreeds[i].name)
    console.log(storedBreeds[i].temperament)*/
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
    document.getElementById('breed_selector').appendChild(option);
    console.log(document.getElementById('breed_selector').appendChild(option))

  }

   
    
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

// const openModal = document.getElementById('anotherBreed')
// openModal.addEventListener('shown.bs.modal')



function showBreedImage(index)
{
    //console.log(storedBreeds[index]) 

    let breedName = document.getElementById("breedName");
    breedName.innerHTML= storedBreeds[index].name;
    

    let breedImage =  document.getElementById("breedImage")   
    breedImage.src= storedBreeds[index].image.url;
  
    let breedJson = document.getElementById("breedJson")
    breedJson.textContent= storedBreeds[index].temperament
   
 
    
    let wikiLink = document.getElementById("wikiLink");
    wikiLink.href= storedBreeds[index].wikipedia_url
  
  
  //document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}