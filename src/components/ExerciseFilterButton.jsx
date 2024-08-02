import data from "../data"

const ExerciseFilterButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default ExerciseFilterButton