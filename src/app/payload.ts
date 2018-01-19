import { deserialize } from 'cerialize';

export class Payload {
  @deserialize ErrorCode:string;
  @deserialize AdditionalErrorText:string;
  @deserialize AirBagLocCurtain:string;
  @deserialize AirBagLocFront:string;
  @deserialize AirBagLocSide:string;
  @deserialize BodyClass:string;
  @deserialize DisplacementCC:number;
  @deserialize DisplacementCI:number;
  @deserialize DisplacementL:number;
  @deserialize EngineCylinders:number;
  @deserialize EngineModel:string;
  @deserialize FuelInjectionType:string;
  @deserialize FuelTypePrimary:string;
  @deserialize FuelTypeSecondary:string;
  @deserialize GVWR:string;
  @deserialize Make:string;
  @deserialize Manufacturer:string;
  @deserialize ManufacturerId:number;
  @deserialize Model:string;
  @deserialize ModelYear:number;
  @deserialize PlantCity:string;
  @deserialize PlantCompanyName:string;
  @deserialize PlantState:string;
  @deserialize PlantCountry:string;
  @deserialize SeatBeltsAll:string;
  @deserialize Series:string;
  @deserialize Trim:string;
  @deserialize VIN:string;
  @deserialize VehicleType:string;
}
