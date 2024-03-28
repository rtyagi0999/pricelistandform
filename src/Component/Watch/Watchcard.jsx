import React, { useState } from "react";


const Watchcard =() =>{

//data
let [watches,Setwatches]= useState([
{
id:"AA001",
imageurl: "https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg",
name:"Rolex watch",
price :1000,
qty : 2

},
{
    id:"AA002",
    imageurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT613ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507270905",
    name:"Samsung",
    price :2000,
    qty : 5
    
    },
    {
        id:"AA003",
        imageurl: "https://rukminim2.flixcart.com/image/850/1000/kfeamq80/smartwatch/a/u/s/ios-mydr2hn-a-apple-original-imafvvev9qsvhhgt.jpeg?q=90&crop=false",
        name:"Apple",
        price :1500,
        qty : 3
        
        },
        {
            id:"AA004",
            imageurl: "https://images-cdn.ubuy.co.in/65749e4f2d0a7e4ad62f1459-luch-one-hand-mechanical-wrist-watch.jpg",
            name:"Oppo",
            price :700,
            qty : 10
            
            }

]);


let incqty =(Watchid) =>{
    Setwatches ((prevState)=> {
    return prevState.map((watch,index)=>{
    if(watch.id===Watchid)
    {   
    return{
    ...watch,
        qty:watch.qty+1>0   ? watch.qty+1:1
    }
    
    }
    else{
    return watch;
    
    
    }
    
    });
    
    })
    };


let decqty =(Watchid) =>{
Setwatches ((prevState)=> {
return prevState.map((watch,index)=>{
if(watch.id===Watchid)
{   
return{
...watch,
    qty:watch.qty-1>0   ? watch.qty-1:1
}

}
else{
return watch;


}

});

})
};

let deletewatch =(watchid) =>{
Setwatches((prevState)=>{

return prevState.filter(watch=>watch.id !== watchid);


})


};


return(

<>

<div
    class="container">
    <div
        class="row justify-content-center align-items-center g-2">
       
        <div class="col"> <p className="h3 text-success">watch Cart</p></div>
      
    </div>
    <div className="row mt-3">
<div className="col">
<table className="table table-hover text-center table-striped">
<thead>
<tr>
<th>Sno</th>
<th>Name</th>
<th>Image</th>
<th>Price</th>
<th>quantity</th>
<th>Total</th>
<th>Action</th>

</tr>

</thead>
<tbody>
{
watches.map((watch,index)=>{
return(

<tr key={index} >
<td>{watch.id}</td>
<td>{watch.name}</td>
<td><img src={watch.imageurl} width={50} height={50}></img></td>

<td>{watch.price}</td>
<td>
<button className="btn" onClick={()=>decqty(watch.id)}>
<i class="bi bi-dash-circle-fill text-success"></i>
</button>
    {watch.qty}
    <button className="btn" onClick={()=>incqty(watch.id)}>
<i class="bi bi-plus-circle-fill text-success"></i>
</button>
    
    </td>
<td>{watch.qty*watch.price}</td>
<td>
<button className="btn btn-danger" onClick={()=>deletewatch(watch.id)}>
<i class="bi bi-trash3-fill"></i>

</button>

</td>

</tr>

)



})

}

</tbody>
</table>


</div>


    </div>
</div>

</>

)


}

export default Watchcard;

