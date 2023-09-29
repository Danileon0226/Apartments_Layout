
import ApartmentList from "../Apartment/ApartmentList"

function PageContent() {
  // Función para abrir el sidebar
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  };

  // Función para cerrar el sidebar
  const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  };

  // Funciones para el slideshow de imágenes
  let slideIndex = 1;

  const plusDivs = (n) => {
    showDivs((slideIndex += n));
  };

  const currentDiv = (n) => {
    showDivs((slideIndex = n));
  };

  const showDivs = (n) => {
    let i;
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
  };

  return (
    <div className="w3-main w3-white" style={{ marginLeft: "260px" }}>
      {/* Push down content on small screens */}
      <div className="w3-hide-large" style={{ marginTop: "80px" }}></div>

      {/* Slideshow Header */}
      <div className="w3-container" id="apartment">
        <h2 className="w3-text-green">The Apartment</h2>
        <ApartmentList/>
        {/* Aquí van los controles y los puntos del slideshow */}
      </div>

      <div className="w3-row-padding w3-section">
        <div className="w3-col s3">
          <img
            className="demo w3-opacity w3-hover-opacity-off"
            src="/w3images/livingroom.jpg"
            style={{ width: "100%", cursor: "pointer" }}
            alt="Living room"
            onClick={() => currentDiv(1)}
            title="Living room"
          />
        </div>
        <div className="w3-col s3">
          <img
            className="demo w3-opacity w3-hover-opacity-off"
            src="/w3images/diningroom.jpg"
            style={{ width: "100%", cursor: "pointer" }}
            alt="Dining room"
            onClick={() => currentDiv(2)}
            title="Dining room"
          />
        </div>
        <div className="w3-col s3">
          <img
            className="demo w3-opacity w3-hover-opacity-off"
            src="/w3images/bedroom.jpg"
            style={{ width: "100%", cursor: "pointer" }}
            alt="Bedroom"
            onClick={() => currentDiv(3)}
            title="Bedroom"
          />
        </div>
        <div className="w3-col s3">
          <img
            className="demo w3-opacity w3-hover-opacity-off"
            src="/w3images/livingroom2.jpg"
            style={{ width: "100%", cursor: "pointer" }}
            alt="Second Living Room"
            onClick={() => currentDiv(4)}
            title="Second Living Room"
          />
        </div>
      </div>

      <div className="w3-container">
        <h4>
          <strong>The space</strong>
        </h4>
        <div className="w3-row w3-large">
          <div className="w3-col s6">
            <p>
              <i className="fa fa-fw fa-male"></i> Max people: 4
            </p>
            <p>
              <i className="fa fa-fw fa-bath"></i> Bathrooms: 2
            </p>
            <p>
              <i className="fa fa-fw fa-bed"></i> Bedrooms: 1
            </p>
          </div>
          <div className="w3-col s6">
            <p>
              <i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM
            </p>
            <p>
              <i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM
            </p>
          </div>
        </div>
        <hr />

        <h4>
          <strong>Amenities</strong>
        </h4>
        <div className="w3-row w3-large">
          <div className="w3-col s6">
            <p>
              <i className="fa fa-fw fa-shower"></i> Shower
            </p>
            <p>
              <i className="fa fa-fw fa-wifi"></i> WiFi
            </p>
            <p>
              <i className="fa fa-fw fa-tv"></i> TV
            </p>
          </div>
          <div className="w3-col s6">
            <p>
              <i className="fa fa-fw fa-cutlery"></i> Kitchen
            </p>
            <p>
              <i className="fa fa-fw fa-thermometer"></i> Heating
            </p>
            <p>
              <i className="fa fa-fw fa-wheelchair"></i> Accessible
            </p>
          </div>
        </div>
        <hr />

        <h4>
          <strong>Extra Info</strong>
        </h4>
        <p>
          Our apartment is really clean and we like to keep it that way. Enjoy
          the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          We accept: <i className="fa fa-credit-card w3-large"></i>{" "}
          <i className="fa fa-cc-mastercard w3-large"></i>{" "}
          <i className="fa fa-cc-amex w3-large"></i>{" "}
          <i className="fa fa-cc-cc-visa w3-large"></i>
          <i className="fa fa-cc-paypal w3-large"></i>
        </p>
        <hr />

        <h4>
          <strong>Rules</strong>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Subscribe to receive updates on available dates and special offers.
        </p>
        <p>
          <button
            className="w3-button w3-green w3-third"
            onClick={() =>
              (document.getElementById("subscribe").style.display = "block")
            }
          >
            Subscribe
          </button>
        </p>
      </div>
      <hr />

      {/* Contact */}
      <div className="w3-container" id="contact">
        <h2>Contact</h2>
        <i className="fa fa-map-marker" style={{ width: "30px" }}></i> Chicago,
        US
        <br />
        <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone: +00
        151515
        <br />
        <i className="fa fa-envelope" style={{ width: "30px" }}>
          {" "}
        </i>{" "}
        Email: mail@mail.com
        <br />
        <p>Questions? Go ahead, ask them:</p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
          </p>
          <button type="submit" className="w3-button w3-green w3-third">
            Send a Message
          </button>
        </form>
      </div>

      <footer
        className="w3-container w3-padding-16"
        style={{ marginTop: "32px" }}
      >
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="w3-hover-text-green"
        >
          w3.css
        </a>
      </footer>

      {/* Subscribe Modal */}
      <div id="subscribe" className="w3-modal">
        <div className="w3-modal-content w3-animate-zoom w3-padding-large">
          <div className="w3-container w3-white w3-center">
            <i
              onClick={() =>
                (document.getElementById("subscribe").style.display = "none")
              }
              className="fa fa-remove w3-button w3-xlarge w3-right w3-transparent"
            ></i>
            <h2 className="w3-wide">SUBSCRIBE</h2>
            <p>
              Join our mailing list to receive updates on available dates and
              special offers.
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
              />
            </p>
            <button
              type="button"
              className="w3-button w3-padding-large w3-green w3-margin-bottom"
              onClick={() =>
                (document.getElementById("subscribe").style.display = "none")
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
