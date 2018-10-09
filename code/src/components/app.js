import React from "react"

class App extends React.Component {

  render() {
    return (
      <div>
        <nav>Meny</nav>
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
          </div>
        </div>
      </div>
    )
  }

}

export default App
