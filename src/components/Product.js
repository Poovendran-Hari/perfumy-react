import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
function Products() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt="Villian"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={two} alt="Villian"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={three} alt="Villian"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
      </div>
    )
  }

  export default Products