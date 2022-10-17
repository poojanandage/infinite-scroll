let cl = console.log;

const count = 50;
const apiKey = 'onjgeazmS79Oz-VQj85E58hSvzZgOWe9Aepb7eyXyMQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`; 
let main = document.getElementById("main")

async function makeFetchApi() {
    let res = await fetch(apiUrl, {});
    let data = await res.json();
    cl(data)
    templating(data)
    
}
        // makeFetchApi(apiUrl)
        //         .then(cl)
        //         .catch(cl)

const templating = (arr)=>{
    arr.forEach(ele => {
      let col = document.createElement("div");
      col.classList.add("col-md-4")
      let div = document.createElement("div")
      div.classList.add("card")
      div.classList.add("my-3")
      let div1 = document.createElement("div")
      div1.classList.add("card-body")
      div1.classList.add("bg-light")
      let div2 = document.createElement("div");
      div2.classList.add("gallaryImgs")
      let anc = document.createElement("a");
      anc.setAttribute(`href`,`${ele.urls.regular}`);
      let img = document.createElement("img");
      img.setAttribute(`src`,`${ele.urls.regular}`);
      img.classList.add("image-fuild");
    

      anc.appendChild(img)
      div2.appendChild(anc);
      div1.appendChild(div2);
      div.appendChild(div1);
      col.appendChild(div);
      main.appendChild(col);
     

    });
}

window.addEventListener("scroll",() =>{
    let scrollTop = document.documentElement.scrollTop;
    // cl(scrollTop)
    let scrollHeight = document.documentElement.scrollHeight;
    // cl(scrollHeight)
    let clientHeight = document.documentElement.clientHeight;
    // cl(clientHeight)
    if(scrollTop + clientHeight >= scrollHeight - 400){
        makeFetchApi()
    }
})
makeFetchApi()