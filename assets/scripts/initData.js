use facturero;

exists = db.getCollectionNames().includes('catalogs');
if (!exists) {
    db.createCollection("catalogs");
    db.catalogs.createIndex( { name: 1 }, { unique: true } );
}

exists = db.getCollectionNames().includes('menu');
if (!exists) {
    db.createCollection("menus");
    db.menus.createIndex( { path: 1 }, { unique: true } );
}

exists = db.getCollectionNames().includes('roles');
if (!exists) {
    db.createCollection("roles");
    db.roles.createIndex( { name: 1 }, { unique: true } );
}


db.catalogs.deleteMany({});
db.catalogs.insertMany(
   [
     { name: "payment_method", active: true, items: [
	     { code: "01", value: "SIN UTILIZACION DEL SISTEMA FINANCIERO" },
	     { code: "15", value: "COMPENSACION DE DEUDAS" },
	     { code: "16", value: "TARJETA DE DEBITO" },
	     { code: "17", value: "DINERO ELECTRONICO" },
	     { code: "18", value: "TARJETA PREPAGO" },
	     { code: "19", value: "TARJETA DE CREDITO" },
	     { code: "20", value: "OTROS CON UTILIZACION DEL SISTEMA FINANCIERO" },
	     { code: "21", value: "ENDOSO DE TITULOS" }
     ] } ,
     { name: "identification_type", active: true, items: [
	      { code: "C", value: "CEDULA" },
	      { code: "R", value: "RUC" },
	      { code: "P", value: "PASAPORTE" },
	      { code: "I", value: "IDENTIFICACION DEL EXTERIOR" },
	      { code: "L", value: "PLACA" }
     ] },
     { name: "customer_type", active: true, items: [
	     { code: "C", value: "CLIENTE" },
	     { code: "R", value: "SUJETO RETENIDO" },
	     { code: "D", value: "DESTINATARIO" }
     ] },
     { name: "product_type", active: true, items: [
	     { code: "B", value: "BIEN" },
	     { code: "S", value: "SERVICIO" }
     ] },
     { name: "taxt_type", active: true, items: [
		 { code: "IVA", value: "IVA" },
		 { code: "ICE", value: "ICE" },
	     { code: "IRBPNR", value: "IRBPNR" }
     ] }    
   ]
);


db.menus.deleteMany({});
db.menus.insertMany(
    [
        {
            path: '/invoicing',
            title: 'Facturacion',
            type: 'sub',
            icontype: 'store',
            collapse: 'invoicing',
            roles: ['SUPERADMIN', 'ADMIN', 'USER']
        },
        {
            path: '/dashboard',
            title: 'Dashboard',
            type: 'link',
            icontype: 'dashboard',
            roles: ['SUPERADMIN', 'ADMIN', 'USER']
        }
    ]
);

let parentId = db.menus.findOne({title: 'Facturacion'})._id;

db.menus.insertMany([
{ 
    parent: parentId, path: 'product', title: 'Productos', ab: 'PR', 
    roles: ['SUPERADMIN', 'ADMIN'] 
},
{ 
    parent: parentId, path: 'customer', title: 'Clientes', ab: 'CL', 
    roles: ['SUPERADMIN', 'ADMIN'] 
},
{ 
    parent: parentId, path: 'establishment', title: 'Establecimientos', ab: 'ES', 
    roles: ['SUPERADMIN', 'ADMIN'] 
},
{ 
    parent: parentId, path: 'invoice', title: 'Facturas', ab: 'FA', 
    roles: ['SUPERADMIN', 'ADMIN', 'USER'] 
},
{ 
    parent: parentId, path: 'user', title: 'Usuarios', ab: 'US', 
    roles: ['SUPERADMIN', 'ADMIN'] 
},
{ 
    parent: parentId, path: 'query-invoice', title: 'Consulta Facturas', ab: 'CF', 
    roles: ['SUPERADMIN', 'ADMIN'] 
},
{ 
    parent: parentId, path: 'tax-value', title: 'Impuestos', ab: 'IM', 
     roles: ['SUPERADMIN', 'ADMIN'] 
}]);

db.roles.deleteMany({});
db.roles.insertMany([
    { _id: "SUPERADMIN", name: 'SUPERADMIN', description: 'Rol Super Administrador', active: true },
    { _id: "ADMIN", name: 'ADMIN', description: 'Rol Administrador', active: true },
    { _id: "USER", name: 'USER', description: 'Rol SalesMan', active: true }
]);

exit;
