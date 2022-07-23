import IBuilder from "../Buiders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {
    constructor(private buider: IBuilder) {}

    constructSedanCar() {
        this.buider.setVehicleType(VehicleType.SEDAN);
        this.buider.setSeats(5);
        this.buider.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.buider.setEngine(new Engine(1800));
        this.buider.addWheel(new Wheel(15));
        this.buider.addWheel(new Wheel(15));
        this.buider.addWheel(new Wheel(15));
        this.buider.addWheel(new Wheel(15));
    }

    constructTruck() {
        this.buider.setVehicleType(VehicleType.TRUCK);
        this.buider.setSeats(3);
        this.buider.setTransmission(Transmission.MANUAL);
        this.buider.setEngine(new Engine(16000));
        this.buider.addWheel(new Wheel(22));
        this.buider.addWheel(new Wheel(22));
        this.buider.addWheel(new Wheel(22));
        this.buider.addWheel(new Wheel(22));
        this.buider.addWheel(new Wheel(22));
        this.buider.addWheel(new Wheel(22));
        
    }
}
