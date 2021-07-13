let x = 10;
const p = new Promise((resolve,reject)=>
{
    if(x==10)
    {
        resolve('la variable es igual a 10 ');
    }
    else{
        reject('la variable no es igual a 10');
    }
});
p.then(res=>{
    console.log('succes:'+res);
    })

.catch(error=>{
console.log('error:'+error)
});