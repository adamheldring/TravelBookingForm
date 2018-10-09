import React from "react"

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="header-left-container">
            <nav>
              <div className="hamburger-container">
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
              </div>
            </nav>
            <p>Meny</p>
          </div>
          <div className="header-right-container">
            <p>Sök</p>
            <p>Inloggning</p>
            <div className="blue-stripe" />
            <div className="logo-container">
              <img src="./images/ident.svg" alt="Norwegian-logo" />
            </div>
          </div>
        </header>

        <img className="hero" src="./images/mallorca_1480x500.jpg" alt="Mallorca" />
        <div className="main-wrapper">
          <div className="booking-tabs-container">
            <ul className="booking-options-list">
              <li className="booking-tab-active">Flyg</li>
              <li className="booking-tab">Flyg + Hotell</li>
              <li className="booking-tab">Hyrbil</li>
              <li className="booking-tab">Hotell</li>
              <li className="booking-tab">Reward</li>
            </ul>
          </div>
          <div className="booking-container">
            <div className="flight-search-container">
              <h3>Flyg från</h3>
              <input type="text" />
            </div>
            <div className="flight-search-container">
              <h3>Flyg till</h3>
              <input type="text" />
            </div>
            <div className="flight-suggestion">
              <p>Stockholm-Arlanda</p>
            </div>
            <div className="button-container">
              <button>Sök och beställ</button>
            </div>

          </div>
          <section className="lower-section-container">
            <div className="promotion-container">
              <h1>Erbjudanden just nu</h1>
              <p>Från/enkel resa inkl. skatter. <span>Visa alla destinationer</span></p>
              <img src="./images/bigcity.jpg" />
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default App
