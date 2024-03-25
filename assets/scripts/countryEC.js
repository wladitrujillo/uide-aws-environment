use facturero;

let exists = db.getCollectionNames().includes('countries');
if (!exists) {
    db.createCollection('countries');
    db.createIndex('countries', { name: 1 }, { unique: true });
}

exists = db.getCollectionNames().includes('states');
if (!exists) {
    db.createCollection('states');
    db.createIndex('states', { name: 1 }, { unique: true });
}

exists = db.getCollectionNames().includes('cities');
if (!exists) {
    db.createCollection('cities');
    db.createIndex('cities', { name: 1 }, { unique: true });
}

// Description: This script will populate the states collection with the data of Ecuador.

db.countries.deleteMany({ name: "Ecuador" });
db.countries.insertOne({ name: "Ecuador", code: "EC", active: true });


let country = db.countries.findOne({ name: "Ecuador" });
db.states.deleteMany({ country: country._id});
db.states.insertMany([
    { name: "Azuay", country: country._id.valueOf() },
    { name: "Bolivar", country: country._id },
    { name: "Carchi", country: country._id },
    { name: "Cañar", country: country._id },
    { name: "Chimborazo", country: country._id },
    { name: "Cotopaxi", country: country._id },
    { name: "Santo Domingo", country: country._id },
    { name: "El Oro", country: country._id },
    { name: "Esmeraldas", country: country._id },
    { name: "Galapagos", country: country._id },
    { name: "Guayas", country: country._id },
    { name: "Imbabura", country: country._id },
    { name: "Loja", country: country._id },
    { name: "Los Rios", country: country._id },
    { name: "Manabi", country: country._id },
    { name: "Morona Santiago", country: country._id },
    { name: "Napo", country: country._id },
    { name: "Orellana", country: country._id },
    { name: "Pastaza", country: country._id },
    { name: "Pichincha", country: country._id },
    { name: "Santa Elena", country: country._id },
    { name: "Sucumbios", country: country._id },
    { name: "Tungurahua", country: country._id },
    { name: "Zamora Chinchipe", country: country._id }

]);

let state = db.states.findOne({ name: "Azuay" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Cuenca' }, 
        { state: state._id, name: 'Girón' },
        { state: state._id, name: 'Gualaceo' },
        { state: state._id, name: 'Nabón' },
        { state: state._id, name: 'Paute' },
        { state: state._id, name: 'Pucará' }, 
        { state: state._id, name: 'San Fernando' }, 
        { state: state._id, name: 'Santa Isabel' },
        { state: state._id, name: 'Sigsig' }
]);

state = db.states.findOne({ name: "Bolivar" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Guaranda' }, 
        { state: state._id, name: 'Chillanes' },
        { state: state._id, name: 'Chimbo' },
        { state: state._id, name: 'Echeandía' },
        { state: state._id, name: 'San Miguel' },
        { state: state._id, name: 'Caluma' }, 
        { state: state._id, name: 'Las Naves' }
]);

state = db.states.findOne({ name: "Carchi" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Tulcán' }, 
        { state: state._id, name: 'Bolívar' },
        { state: state._id, name: 'Espejo' },
        { state: state._id, name: 'Mira' },
        { state: state._id, name: 'Montúfar' }
]);

state = db.states.findOne({ name: "Cañar" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Azogues' }, 
        { state: state._id, name: 'Biblián' },
        { state: state._id, name: 'Cañar' },
        { state: state._id, name: 'La Troncal' },
        { state: state._id, name: 'El Tambo' }
]);

state = db.states.findOne({ name: "Chimborazo" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Riobamba' }, 
        { state: state._id, name: 'Alausí' },
        { state: state._id, name: 'Colta' },
        { state: state._id, name: 'Chambo' },
        { state: state._id, name: 'Chunchi' },
        { state: state._id, name: 'Guamote' }, 
        { state: state._id, name: 'Guano' }, 
        { state: state._id, name: 'Pallatanga' },
        { state: state._id, name: 'Penipe' }
]);

state = db.states.findOne({ name: "Cotopaxi" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Latacunga' }, 
        { state: state._id, name: 'La Maná' },
        { state: state._id, name: 'Pangua' },
        { state: state._id, name: 'Pujilí' },
        { state: state._id, name: 'Salcedo' },
        { state: state._id, name: 'Saquisilí' }, 
        { state: state._id, name: 'Sigchos' }
]);

state = db.states.findOne({ name: "Santo Domingo" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Santo Domingo' }, 
        { state: state._id, name: 'La Concordia' }
]);

state = db.states.findOne({ name: "El Oro" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Machala' }, 
        { state: state._id, name: 'Arenillas' },
        { state: state._id, name: 'Atahualpa' },
        { state: state._id, name: 'Balsas' },
        { state: state._id, name: 'Chilla' },
        { state: state._id, name: 'El Guabo' }, 
        { state: state._id, name: 'Huaquillas' }, 
        { state: state._id, name: 'Marcabelí' },
        { state: state._id, name: 'Pasaje' },
        { state: state._id, name: 'Piñas' },
        { state: state._id, name: 'Portovelo' },
        { state: state._id, name: 'Santa Rosa' },
        { state: state._id, name: 'Zaruma' }
]);

state = db.states.findOne({ name: "Esmeraldas" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Esmeraldas' }, 
        { state: state._id, name: 'Eloy Alfaro' },
        { state: state._id, name: 'Muisne' },
        { state: state._id, name: 'Quinindé' },
        { state: state._id, name: 'San Lorenzo' }
]);

state = db.states.findOne({ name: "Galapagos" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'San Cristóbal' }, 
        { state: state._id, name: 'Isabela' },
        { state: state._id, name: 'Santa Cruz' }
]);

state = db.states.findOne({ name: "Guayas" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Balao' }, 
        { state: state._id, name: 'Balzar' }, 
        { state: state._id, name: 'Colimes' },
        { state: state._id, name: 'Daule' },
        { state: state._id, name: 'Durán' }, 
        { state: state._id, name: 'El Empalme' }, 
        { state: state._id, name: 'El Triunfo' },
        { state: state._id, name: 'Guayaquil' },
        { state: state._id, name: 'Milagro' },
        { state: state._id, name: 'Naranjal' }, 
        { state: state._id, name: 'Naranjito' }, 
        { state: state._id, name: 'Palestina' },
        { state: state._id, name: 'Pedro Carbo' }, 
        { state: state._id, name: 'Playas' }, 
        { state: state._id, name: 'Samborondón' },
        { state: state._id, name: 'San Jacinto de Yaguachi' },
        { state: state._id, name: 'Santa Lucía' }
]);

state = db.states.findOne({ name: "Imbabura" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Ibarra' }, 
        { state: state._id, name: 'Antonio Ante' },
        { state: state._id, name: 'Cotacachi' },
        { state: state._id, name: 'Otavalo' },
        { state: state._id, name: 'Pimampiro' },
        { state: state._id, name: 'San Miguel de Urcuquí' }
]);

state = db.states.findOne({ name: "Loja" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Loja' }, 
        { state: state._id, name: 'Calvas' },
        { state: state._id, name: 'Catamayo' },
        { state: state._id, name: 'Celica' },
        { state: state._id, name: 'Chaguarpamba' },
        { state: state._id, name: 'Espíndola' }, 
        { state: state._id, name: 'Gonzanamá' }, 
        { state: state._id, name: 'Macará' },
        { state: state._id, name: 'Paltas' },
        { state: state._id, name: 'Puyango' },
        { state: state._id, name: 'Saraguro' },
        { state: state._id, name: 'Sozoranga' },
        { state: state._id, name: 'Zapotillo' }
]);

state = db.states.findOne({ name: "Los Rios" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Babahoyo' }, 
        { state: state._id, name: 'Baba' },
        { state: state._id, name: 'Montalvo' },
        { state: state._id, name: 'Puebloviejo' },
        { state: state._id, name: 'Quevedo' },
        { state: state._id, name: 'Urdaneta' }, 
        { state: state._id, name: 'Ventanas' }, 
        { state: state._id, name: 'Vinces' }
]);

state = db.states.findOne({ name: "Manabi" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Atahualpa' }, 
        { state: state._id, name: 'Chone' },
        { state: state._id, name: 'El Carmen' },
        { state: state._id, name: 'Flavio Alfaro' },
        { state: state._id, name: 'Jipijapa' }, 
        { state: state._id, name: 'Junín' }, 
        { state: state._id, name: 'Manta' }, { state: state._id, name: 'Montecristi' },
        { state: state._id, name: 'Paján' }, 
        { state: state._id, name: 'Pedernales' },
        { state: state._id, name: 'Ciudad de Pichincha' }, 
        { state: state._id, name: 'Ciudad de Portoviejo' }
]);

state = db.states.findOne({ name: "Morona Santiago" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Macas' }, 
        { state: state._id, name: 'Gualaquiza' },
        { state: state._id, name: 'Huamboya' },
        { state: state._id, name: 'Palora' },
        { state: state._id, name: 'Santiago de Méndez' },
        { state: state._id, name: 'Sucúa' }, 
        { state: state._id, name: 'Logroño' }, 
        { state: state._id, name: 'Taisha' },
        { state: state._id, name: 'Tiwinza' },
        { state: state._id, name: 'Tiwintza' }
]);

state = db.states.findOne({ name: "Napo" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Tena' }, 
        { state: state._id, name: 'Archidona' },
        { state: state._id, name: 'Carlos Julio Arosemena Tola' },
        { state: state._id, name: 'El Chaco' },
        { state: state._id, name: 'Quijos' }
]);

state = db.states.findOne({ name: "Orellana" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Orellana' }, 
        { state: state._id, name: 'Aguarico' },
        { state: state._id, name: 'La Joya de los Sachas' },
        { state: state._id, name: 'Loreto' }
]);

state = db.states.findOne({ name: "Pastaza" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Puyo' }, 
        { state: state._id, name: 'Arajuno' }
]);

state = db.states.findOne({ name: "Pichincha" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Quito' }, 
        { state: state._id, name: 'Cayambe' },
        { state: state._id, name: 'Mejía' },
        { state: state._id, name: 'Pedro Moncayo' },
        { state: state._id, name: 'Rumiñahui' },
        { state: state._id, name: 'San Miguel de los Bancos' }, 
        { state: state._id, name: 'Pedro Vicente Maldonado' }, 
        { state: state._id, name: 'Puerto Quito' }
]);

state = db.states.findOne({ name: "Santa Elena" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Santa Elena' }, 
        { state: state._id, name: 'La Libertad' },
        { state: state._id, name: 'Salinas' }
]);

state = db.states.findOne({ name: "Sucumbios" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Nueva Loja' }, 
        { state: state._id, name: 'Cascales' },
        { state: state._id, name: 'Cuyabeno' },
        { state: state._id, name: 'Gonzalo Pizarro' },
        { state: state._id, name: 'Putumayo' },
        { state: state._id, name: 'Shushufindi' }, 
        { state: state._id, name: 'Sucumbíos' }
]);

state = db.states.findOne({ name: "Tungurahua" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Ambato' }, 
        { state: state._id, name: 'Baños de Agua Santa' },
        { state: state._id, name: 'Cevallos' },
        { state: state._id, name: 'Mocha' },
        { state: state._id, name: 'Patate' },
        { state: state._id, name: 'Quero' }, 
        { state: state._id, name: 'San Pedro de Pelileo' }, 
        { state: state._id, name: 'Santiago de Píllaro' },
        { state: state._id, name: 'Tisaleo' }
]);


state = db.states.findOne({ name: "Zamora Chinchipe" });
db.cities.deleteMany({ state: state._id });
db.cities.insertMany([
        { state: state._id, name: 'Zamora' }, 
        { state: state._id, name: 'Chinchipe' },
        { state: state._id, name: 'Nangaritza' },
        { state: state._id, name: 'Yacuambi' },
        { state: state._id, name: 'Yantzaza' },
        { state: state._id, name: 'El Pangui' }, 
        { state: state._id, name: 'Paquisha' }
]);

exit;
