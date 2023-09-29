function Sidebar() {
    
  const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    };
    
  return (
    <nav
      className="w3-sidebar w3-light-grey w3-collapse w3-top"
      style={{ zIndex: 3, width: "260px" }}
      id="mySidebar"
    >
      <div className="w3-container w3-display-container w3-padding-16">
        <i
          onClick={w3_close}
          className="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"
        ></i>
        <h3>Rental</h3>
        <h3>from $99</h3>
        <h6>per night</h6>
        <hr />
        <form action="/action_page.php" target="_blank">
          <p>
            <label>
              <i className="fa fa-calendar-check-o"></i> Check In
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
            name="CheckIn"
            required
          />
          <p>
            <label>
              <i className="fa fa-calendar-o"></i> Check Out
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
            name="CheckOut"
            required
          />
          <p>
            <label>
              <i className="fa fa-male"></i> Adults
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="number"
            value="1"
            name="Adults"
            min="1"
            max="6"
          />
          <p>
            <label>
              <i className="fa fa-child"></i> Kids
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="number"
            value="0"
            name="Kids"
            min="0"
            max="6"
          />
          <p>
            <button
              className="w3-button w3-block w3-green w3-left-align"
              type="submit"
            >
              <i className="fa fa-search w3-margin-right"></i> Search
              availability
            </button>
          </p>
        </form>
      </div>
      <div className="w3-bar-block">
        <a href="#apartment" className="w3-bar-item w3-button w3-padding-16">
          <i className="fa fa-building"></i> Apartment
        </a>
        <a
          href="javascript:void(0)"
          className="w3-bar-item w3-button w3-padding-16"
          onClick={() =>
            (document.getElementById("subscribe").style.display = "block")
          }
        >
          <i className="fa fa-rss"></i> Subscribe
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-16">
          <i className="fa fa-envelope"></i> Contact
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
