function breadlist(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data =>{
        let breeddropdown = document.querySelector('#breeddropdown')

        for(let breed in data.message){
            let option= document.createElement('option');
            option.value=breed
            option.textContent =breed
            breeddropdown.append(option)        
        }
    }).catch(err =>console.log(err));
}
breadlist()

document.querySelector("button").addEventListener("click",()=>{
    let selectbreed = document.querySelector("#breeddropdown").value;
    fetch(`https://dog.ceo/api/breed/${selectbreed}/images`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.message.length===0){
            alert('please select another')
        }
        for(let i of data.message){
            let dogimage = document.createElement('img');
            dogimage.setAttribute('src',i);
            dogimage.style.height="300px"
            dogimage.style.width="300px"
            dogimage.style.padding="20px"
            document.querySelector("#viewdog").prepend(dogimage)
              }
    })
    .catch(err=>console.log(err));
})