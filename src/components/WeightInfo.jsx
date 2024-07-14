import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const WeightInfo = ({ weight }) => {
  return (
    <div className="weight-info">
      <p><FontAwesomeIcon icon={faArrowRight} className='currentW-icon'/> Aktuální váha: {weight?.current || "Nezadáno"}</p>
      <p><FontAwesomeIcon icon={faArrowRight} className='lastW-icon'/> Předchozí váha: {weight?.previous || "Nezadáno"}</p>
    </div>
  )
}

export default WeightInfo