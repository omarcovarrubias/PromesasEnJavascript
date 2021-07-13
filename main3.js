let usuarios=[{
    id:1,
    nombre:'Marcos'
},
{
    id:2,
    nombre:'lena'
}
];
let telefonos=[{
    id:1,
    telefono:12345678
},
{
    id:2,
    telefono:1293891
}];

/*const obtenerUsuario=id=>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id==id))
        {
            resolve('El usuario existe');
        }
        else
        {
            reject('El usuario no existe');
        }
    });
}
const obtenerTelefono=id=>{
    return new Promise((resolve,reject)=>{
        if(telefonos.find(telefono=>telefono.id==id))
        {
            resolve('El telefono existe');
        }
        else
        {
            reject('El telefono no existe');
        }
    });
}
obtenerUsuario(1)
.then(res=>{
    console.log(res);
})
.catch(error=>{
    console.error(error);
});
*/

//OBTENER USUARIO Y TELEFONO
const obtenerTelefono=id=>{
    return new Promise((resolve,reject)=>{
        if(telefonos.find(telefono=>telefono.id==id))
        {
            resolve('El telefono existe');
        }
        else
        {
            reject('El telefono no existe');
        }
    });
}

const obtenerUsuario2=id=>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id==id))
        {
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));

        }
        else
        {
            reject('El usuario no existe');
        }
    }) ;}
    
obtenerUsuario2(5)
.then(res=>{
    return res;
})
.then(mensaje=>{
    console.log(mensaje);
})
.catch(error=>{
    console.error(error);
});