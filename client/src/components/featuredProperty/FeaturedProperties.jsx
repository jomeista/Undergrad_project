import "./featuredProperties.css";

const fProperty_1 = require('../img/fProperty1.jpg');

const FeaturedProperties = () =>{
  return (
    <div className="fp">
    <div className="fpItem">
      <img className="fpImg" src={fProperty_1} alt=""/>
      <span className="fpName">Aparthostel Stare Miasto</span>
      <span className="fpCity">Nairobi West</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img className="fpImg" src={fProperty_1} alt=""/>
      <span className="fpName">Aparthostel Stare Miasto</span>
      <span className="fpCity">Nairobi West</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img className="fpImg" src={fProperty_1} alt=""/>
      <span className="fpName">Aparthostel Stare Miasto</span>
      <span className="fpCity">Nairobi West</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img className="fpImg" src={fProperty_1} alt=""/>
      <span className="fpName">Aparthostel Stare Miasto</span>
      <span className="fpCity">Nairobi West</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProperties