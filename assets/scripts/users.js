//create adminUser
use admin;
let exists = db.getUser("adminUser");
if (!exists) {
    db.createUser(
    {
        user: "adminUser",
        pwd: "AdminPassw0rd",
        roles: [
          { role: "userAdminAnyDatabase", db: "admin" },
          { role: "readWriteAnyDatabase", db: "admin" }
        ]
    });
}

//create factureroUser 
use facturero;
exists = db.getUser("factureroUser");
if (!exists) {
    db.createUser(
    {
        user: "factureroUser",
        pwd: "Facturer0Passw0rd", 
        roles: ["readWrite", "dbAdmin"]
    });
}

//exit mongosh
exit;
