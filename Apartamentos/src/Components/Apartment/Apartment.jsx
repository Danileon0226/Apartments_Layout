// Apartment.js
import "./Apartment.css"; 

function Apartment({
  image,
  title,
  description,
  price,
  capacity,
  bedrooms,
  bathrooms,
}) {
  return (
    <div className="apartment">
      <img src={image} alt={title} className="apartment-image" />
      <h2 className="apartment-title">{title}</h2>
      <p className="apartment-description">{description}</p>
      <p className="apartment-price">${price} per night</p>
      <div className="apartment-info">
        <p>
          <i className="fa fa-fw fa-male"></i> Max people: {capacity}
        </p>
        <p>
          <i className="fa fa-fw fa-bath"></i> Bathrooms: {bathrooms}
        </p>
        <p>
          <i className="fa fa-fw fa-bed"></i> Bedrooms: {bedrooms}
        </p>
      </div>
    </div>
  );
}

export default Apartment;
