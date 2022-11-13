import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () =>{

  const {data, loading, error,} = useFetch("/hostel/countByCity?cities=CBD,Ngara,Nairobi West");


  
  return (
<div className="featured">
  {loading ? (
    "Loading please wait") : (
    <>
    
    <div className="featuredItem">
    <img src="https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg" alt="" className="featuredImg"/>
    <div className="featuredTitles">
      <h1>CBD</h1>
      <h2>{data[0]} properties</h2>
    </div>
  </div>

  <div className="featuredItem">
    <img src="https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg" alt="" className="featuredImg"/>
    <div className="featuredTitles">
      <h1>Ngara</h1>
      <h2>{data[1]} properties</h2>
    </div>
  </div>

  <div className="featuredItem">
    <img src="https://i.pinimg.com/originals/73/1e/94/731e945958ba0e0d96881937f9671d19.jpg" alt="" className="featuredImg"/>
    <div className="featuredTitles">
      <h1>Nairobi West</h1>
      <h2>{data[2]} properties</h2>
    </div>
  </div></>)}
</div>
  );
};

export default Featured