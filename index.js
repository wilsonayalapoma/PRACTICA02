const express = require('express');
const app = express();

// Datos de ejemplo (suponiendo una base de datos o arreglo de libros)
const libros = [
     // Antiguo Testamento
     { nombre: 'Génesis', autor: 'Moisés' },
     { nombre: 'Éxodo', autor: 'Moisés' },
     { nombre: 'Levítico', autor: 'Moisés' },
     { nombre: 'Números', autor: 'Moisés' },
     { nombre: 'Deuteronomio', autor: 'Moisés' },
     { nombre: 'Josué', autor: 'Josué' },
     { nombre: 'Jueces', autor: 'Samuel' },
     { nombre: 'Rut', autor: 'Samuel' },
     { nombre: '1 Samuel', autor: 'Samuel' },
     { nombre: '2 Samuel', autor: 'Samuel' },
     { nombre: '1 Reyes', autor: 'Jeremías' },
     { nombre: '2 Reyes', autor: 'Jeremías' },
     { nombre: '1 Crónicas', autor: 'Esdras' },
     { nombre: '2 Crónicas', autor: 'Esdras' },
     { nombre: 'Esdras', autor: 'Esdras' },
     { nombre: 'Nehemías', autor: 'Nehemías' },
     { nombre: 'Ester', autor: 'Mordecai' },
     { nombre: 'Job', autor: 'Desconocido' },
     { nombre: 'Salmos', autor: 'David y otros' },
     { nombre: 'Proverbios', autor: 'Salomón' },
     { nombre: 'Eclesiastés', autor: 'Salomón' },
     { nombre: 'Cantares', autor: 'Salomón' },
     { nombre: 'Isaías', autor: 'Isaías' },
     { nombre: 'Jeremías', autor: 'Jeremías' },
     { nombre: 'Lamentaciones', autor: 'Jeremías' },
     { nombre: 'Ezequiel', autor: 'Ezequiel' },
     { nombre: 'Daniel', autor: 'Daniel' },
     { nombre: 'Oseas', autor: 'Oseas' },
     { nombre: 'Joel', autor: 'Joel' },
     { nombre: 'Amós', autor: 'Amós' },
     { nombre: 'Abdías', autor: 'Abdías' },
     { nombre: 'Jonás', autor: 'Jonás' },
     { nombre: 'Miqueas', autor: 'Miqueas' },
     { nombre: 'Nahúm', autor: 'Nahúm' },
     { nombre: 'Habacuc', autor: 'Habacuc' },
     { nombre: 'Sofonías', autor: 'Sofonías' },
     { nombre: 'Hageo', autor: 'Hageo' },
     { nombre: 'Zacarías', autor: 'Zacarías' },
     { nombre: 'Malaquías', autor: 'Malaquías' },
     // Nuevo Testamento
     { nombre: 'Mateo', autor: 'Mateo' },
     { nombre: 'Marcos', autor: 'Marcos' },
     { nombre: 'Lucas', autor: 'Lucas' },
     { nombre: 'Juan', autor: 'Juan' },
     { nombre: 'Hechos', autor: 'Lucas' },
     { nombre: 'Romanos', autor: 'Pablo' },
     { nombre: '1 Corintios', autor: 'Pablo' },
     { nombre: '2 Corintios', autor: 'Pablo' },
     { nombre: 'Gálatas', autor: 'Pablo' },
     { nombre: 'Efesios', autor: 'Pablo' },
     { nombre: 'Filipenses', autor: 'Pablo' },
     { nombre: 'Colosenses', autor: 'Pablo' },
     { nombre: '1 Tesalonicenses', autor: 'Pablo' },
     { nombre: '2 Tesalonicenses', autor: 'Pablo' },
     { nombre: '1 Timoteo', autor: 'Pablo' },
     { nombre: '2 Timoteo', autor: 'Pablo' },
     { nombre: 'Tito', autor: 'Pablo' },
     { nombre: 'Filemón', autor: 'Pablo' },
     { nombre: 'Hebreos', autor: 'Desconocido' },
     { nombre: 'Santiago', autor: 'Santiago' },
     { nombre: '1 Pedro', autor: 'Pedro' },
     { nombre: '2 Pedro', autor: 'Pedro' },
     { nombre: '1 Juan', autor: 'Juan' },
     { nombre: '2 Juan', autor: 'Juan' },
     { nombre: '3 Juan', autor: 'Juan' },
     { nombre: 'Judas', autor: 'Judas' },
     { nombre: 'Apocalipsis', autor: 'Juan' },
    // Más libros...
];

// 1. Endpoint de bienvenida
app.get('/', (req, res) => {
    const nombre = "\nWILSON AYALA POMA Y CARLOS MONTERO PANTOJA";
    const profesion = "INGENIERO EN SISTEMAS";
    res.send(`Bienvenido, ${nombre}. \nProfesión actual: ${profesion}`);
});

// 2. Obtener libros por autor
app.get('/libros/autor/:autor', (req, res) => {
    const autor = req.params.autor;
    const librosAutor = libros.filter(libro => libro.autor === autor);
    res.json(librosAutor);
});

// 3. Cantidad total de libros
app.get('/libros/cantidad', (req, res) => {
    const cantidad = libros.length;
    res.json({ cantidad });
});

// 4. Obtener libros por nombre que contenga el texto "juan"

/*app.get('/libros/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const librosJuan = libros.filter(libro => libro.nombre.includes(wilson, carlos));
    res.json(librosJuan);
});*/
app.get('/libros/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const librosFiltrados = libros.filter(libro => libro.nombre.toLowerCase().includes(nombre.toLowerCase()));
    res.json(librosFiltrados);
});

// 5. Ordenar libros por nombre
app.get('/libros/ordenar/nombre', (req, res) => {
    const librosOrdenados = libros.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    res.json(librosOrdenados);
});

// Puerto en el que el servidor escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});