import { Link } from 'react-router-dom';
import './searchItem.css';



const SearchItem = ({item}) =>{
  return (
    <div className='searchItem'>
      <img 
      src={item.photos[0]}
       alt=''
       className='siImg' 
       />
       <div className='siDesc'>
       <h1 className='siTitle'>{item.name}</h1>
       <span className='siDistance'>{item.distance}</span>
       <span className='siTaxiOp'>Free hostel bus</span>
       <span className='siSubtitle'>
        Single bed room with Magnificient view
       </span>
       <span className='siFeatures'>{item.desc}</span>
       <span className='siCancelOp'>Free cancellation</span>
       <span className='siCancelOpSubtitle'>
        You can cancel later, so lock in this great price today!
       </span>

       </div>
       <div className='siDetails'>
       { item.rating &&  <div className='siRating'>
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className='siDetailsTexts'>
          <span className='siPrice'>KSH {item.CheapestPrice}</span>
          <span className='siTaxOp'>includes taxes and fees</span>

          <Link to={`/hostel/${item._id}`}>
          <button className='siCheckButton'>See availability</button>

          </Link>
          
        </div>
       </div>
    </div>

    
  )
}

export default SearchItem