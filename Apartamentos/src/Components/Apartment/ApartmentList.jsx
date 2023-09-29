import Apartment from "./Apartment";
import { apartmentsData } from "../../Components/Apartment/apartments";

import "./Apartment.css";

function ApartmentsList() {
  return (
    <div className="apartment-list">
      {apartmentsData.map((apartment) => (
        <Apartment
          key={apartment.id}
          image={apartment.image}
          title={apartment.title}
          description={apartment.description}
          price={apartment.price}
          capacity={apartment.capacity}
          bedrooms={apartment.bedrooms}
          bathrooms={apartment.bathrooms}
        />
      ))}
    </div>
  );
}

export default ApartmentsList;
