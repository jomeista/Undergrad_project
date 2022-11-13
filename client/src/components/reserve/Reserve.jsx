import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";

const Reserve = ({setOpen, hostelId}) => {

  const { data, loading, error } = useFetch (`/rooms`)
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} 
        className="rClose" 
        onClick={() => setOpen(false)}

        />
        <span>Select your rooms:</span>
        {data.map(item =>(
          <div className="rItem">
          <div className="rIteminfo">
          <div className="rTitle">{item.title}</div>
          <div className="rDesc">{item.desc}</div>
          <div className="rMax">
          max people: <b>{item.maxPeople}</b>
          </div>

          </div>
     
      </div>
      ))}
    </div>
    </div>
  )
}

export default Reserve