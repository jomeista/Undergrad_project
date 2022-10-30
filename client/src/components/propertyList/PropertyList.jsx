import "./propertyList.css";

const PropertyList = () =>{
  return (
    <div className="pList">
      <div className="pListItem">
        <img className="pListImg" 
        src="https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg" alt="" />
        <div className="pListTitles">
          <h1>Single bed</h1>
          <h2>10 rooms</h2>
        </div>
      </div>

      <div className="pListItem">
        <img className="pListImg" 
        src="http://www.dorm-room-biz.com/wp-content/uploads/2018/03/dorm-room-2-beds-1024x597.jpg" alt="" />
        <div className="pListTitles">
          <h1>Double bed</h1>
          <h2>15 rooms</h2>
        </div>
      </div>

      <div className="pListItem">
        <img className="pListImg"
         src="https://vanillaskyboutiquehostel.com/wp-content/uploads/2021/04/222207807.jpg" alt="" />
        <div className="pListTitles">
          <h1>Double decker</h1>
          <h2>10 rooms</h2>
        </div>
      </div>

      <div className="pListItem">
        <img className="pListImg"
         src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/145445759.jpg?k=1196999d03ee08e78cb521f286f5edc60c10a188036ba74946fca70bdd798050&o=" alt="" />
        <div className="pListTitles">
          <h1>3 Double decker</h1>
          <h2>10 rooms</h2>
        </div>
      </div>
    </div>
  )
} 

export default PropertyList
