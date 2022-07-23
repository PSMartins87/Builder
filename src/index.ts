import VehicleBuilder from "./Buiders/VehicleBuilder";
import Director from "./Directors/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
let sedan: Vehicle = builder.getVehicle();
console.log("criando um veiculo ");
console.log("tipo: " + sedan.vehicleType);
console.log("rodas " + sedan.wheelsTotal);
