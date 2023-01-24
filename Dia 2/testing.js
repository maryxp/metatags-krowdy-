//Base de datos no relacionales NoSQL

//Tabla de usuario


const user = {
    {
        _id: 1234,

        firstName: 'Maria',

    },
    {
        _id: 5678,
        firstName: 'Bryan1',

    },
    {
        _id: 6894,
        firstName: 'Emma',

    },
    {
        _id: 9874,
        firstName: 'Bryan2',

    },
   
}:

//Obtener un elemento del array

//De un conjunto de user cada que itere va a procesar un user

const getUserMaria = users.find((user) =>  {
    console.log(user);
})

//Find: Si encuentra UN elemento deja de iterar
const getUserMaria = users.find((user) =>  {

    if (user?._id === 9874){        //Si no tiene el opcional change ? se romperan los nodos
        return user;

    }
    console.log(user);
});

    console.log('===>', getUserMaria);

/* Forma 2

const getUserMaria2 = users.find(((_id)) => _id === 6894);

console.log(getUserMaria2);
*/

//Retornar un array de elementos
//Busca un CONJUNTO de elementos que cumplan una condicion
const getUserMaria3 = users.filter(((_id)) => _id === 9874);

console.log(getUserMaria3);



let candidate1 = {
    firstName: "Maria"
    profilePicture: 'imagen/maria.png'
    //Referencia
    /*userId: 1234*/
    userId: users.find(user => user._id ===1234)
}
    

let candidate2 = {
    firstName: "video/laura.webm"
    userId: 5678
    userId: users.find(user => user._id ===5678)
}
//No requeire que sus hijos sean parte de 
const candidates = [candidate1, candidate2]

/*Tecnicas utilizadas para la implementacion de un store NoSQL

Quorum replication
    Sistemas distribuidos-Disponibilidad de nodos o sitemas

    Metodo de contro que calcula la disponibilidad de un recurso e indica si puede o no ser utilizado

    w + r > n
    nodos de lectura
        nodos de escritura
            total replicas


Arbol de Merkle Anti Entropico
    Realiza busqueda o determina posiciones donde pueden existir los datos


Versionamiento por vector
    


hashing consistente


*/