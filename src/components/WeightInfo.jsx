const WeightInfo = ({ weight }) => {
  return (
    <div className="weight-info">
      <p>Aktuální váha: {weight?.current || "Nezadáno"}</p>
      <p>Předchozí váha: {weight?.previous || "Nezadáno"}</p>
    </div>
  )
}

export default WeightInfo