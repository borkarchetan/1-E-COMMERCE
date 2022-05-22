var form=document.querySelector("#form");
var arr=JSON.parse(localStorage.getItem("products"))||[];

function Myfunction(e){
    e.preventDefault();
   
    let name=form.name.value;
    let category=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sold=form.sold.value;

    
    let product=new Products(name,category,image,price,gender,sold);
    arr.push(product);

    console.log(arr);
    localStorage.setItem("products",JSON.stringify(arr));
 
}

function Products(n,c,i,p,g,b){
  this.name=n;
  this.category=c;
  this.image=i;
  this.price=p;
  this.gender=g;
  this.sold=b;
}