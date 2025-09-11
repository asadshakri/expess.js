function handleSubmit(event){
    event.preventDefault();
    const data=event.target.productName.value;
    
    let obj={
        productName:data
    }

    axios.post('http://localhost:3000'+'/api/products',obj).then((response)=>{
        console.log("Data received from post request:",response.data.value);
    })



}