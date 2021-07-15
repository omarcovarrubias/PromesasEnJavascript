
//CONVERTIR ESTE CODIGO A PROMESA
/*let x =10 ;
console.log('1. proceso iniciado...');

setTimeout(() => {
    x=x*3+2;
    console.log('2. proceso terminado....')
}, 2000);

console.log('3. El resultado es :'+x);
*/
//PROMESA
let x=10;
const promesa= new Promise((resolve,reject)=>{
    console.log('1.proceso iniciado...');
    setTimeout(() => {
        x=x*3+2;
        console.log('2.proceso terminado..');
        resolve(x);
    }, 2000);
});
promesa.then(res=>{
  console.log('3. El resultado es :'+ res)  ;
})
.catch(error=>{
    console.log('error:'+error)
    });