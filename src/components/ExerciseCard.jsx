import WeightInput from "./WeightInput"
import WeightInfo from "./WeightInfo"

const ExerciseCard = ({ exercise, weight, onWeightSubmit }) => {
  return (
    <div className="exercise-card">
      <h2>{exercise.exercise}</h2>
      <a href={exercise.exerciseLink} target="_blank" rel="noopener noreferrer">
        Odkaz na cvik
      </a>
      <WeightInput 
        id={exercise.id} 
        onWeightSubmit={onWeightSubmit} 
      />
      <WeightInfo weight={weight} />
    </div>
  )
}

export default ExerciseCard