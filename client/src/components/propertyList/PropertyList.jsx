import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () =>{

  const {data, loading, error,} = useFetch("/hostel/countByType");

  const images = [
    "https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg",
"http://www.dorm-room-biz.com/wp-content/uploads/2018/03/dorm-room-2-beds-1024x597.jpg",
"https://vanillaskyboutiquehostel.com/wp-content/uploads/2021/04/222207807.jpg",
"https://q-xx.bstatic.com/xdata/images/hotel/840x460/145445759.jpg?k=1196999d03ee08e78cb521f286f5edc60c10a188036ba74946fca70bdd798050&o="

  ];

  return (
    <div className="pList">
    { loading ? ("Loading please wait") : (
      <>

    {data &&
    images.map((img, i) =>(

    <div className="pListItem">
        <img className="pListImg" 
        src={img} alt="" />
        <div className="pListTitles">
          <h1>{data[i].type}</h1>
          <h2>{data[i].count} rooms</h2>
        </div>
      </div>
      ))}

      </>
      )}

    </div>
  )
} 

export default PropertyList
