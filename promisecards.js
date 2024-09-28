//!promise

let prom=fetch("https://fakestoreapi.com/products")
console.log(prom)
prom
 .then((data)=>{
    console.log(prom)
    return data.json();
 })
.then((data1)=>{
    console.log(data1)
    let req=data1;
    let div1="";
  req.map((element)=>{
    div1+= `<div class="card">
    <img src="${element.image}"></img>
    <h4>ID:${element.id}
    </h4>
  <h4>TITLE:${element.title}</h4>
  <h4>CATEGORY:${element.category}</h4>
  <h4>PRICE:${element.price}</h4>
     </div>`
  })
let maincontent=document.getElementById("maincontent")
maincontent.innerHTML=div1;
})
.catch((err)=>{
    console.log(err)
});