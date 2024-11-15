const response = fetch("https://dummyjson.com/products");
response.then(data=> {
    console.log(data);
    data.json().then(res=>(console.log(res.products[3].id)));
})

