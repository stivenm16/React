$('#boton').click(()=>{    // Asignamos un evento de click al boton con ID# BOTON
    var lista = $('#lista') //Declaramos una variable para almacenar el contenido 
    lista.empty()          // Limpiamos la lista

    $.get('http://localhost:5000/amigos', res =>{ 
     // utilizamos jquery para hacer un pedido a la api de la lista de amigos, que vamos a guardar en res
       for (let i = 0; i < res.length; i++) { // Usamos un for para recorrer res[]
    // append es un metodo de jquery generamos el contenido de <li> con res en posicion I entrandodesde name
        lista.append(`<li>${res[i].name}</li>`)
       }
    })
})


$('#search').click(()=>{
    
    let input = $('#input').val()

    $.get(`http://localhost:5000/amigos/${input}`, res =>{ 
    
    $('#amigo').text(res.name)

    })
})



$('#delete').click(()=>{
    var id = $('#inputDelete').val()
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type : 'DELETE',
        success: () =>{
        $('#success').text(`Amigo numero ${id} perma ban`)
        }
    })
})