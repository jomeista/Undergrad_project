import './searchItem.css';



const SearchItem = () =>{
  return (
    <div className='searchItem'>
      <img 
      src="https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg"
       alt=''
       className='siImg' 
       />
       <div className='siDesc'>
       <h1 className='siTitle'>Aparthostel stare Miasto</h1>
       <span className='siDistance'>500m from centre</span>
       <span className='siTaxiOp'>Free hostel bus</span>
       <span className='siSubtitle'>
        Single bed room with Magnificient view
       </span>
       <span className='siFeatures'>
        Entire studio • reading desk • 1 full bed
       </span>
       <span className='siCancelOp'>Free cancellation</span>
       <span className='siCancelOpSubtitle'>
        You can cancel later, so lock in this great price today!
       </span>

       </div>
       <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='siDetailsTexts'>
          <span className='siPrice'>KSH 10,000</span>
          <span className='siTaxOp'>includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
       </div>
    </div>

    
  )
}

export default SearchItem