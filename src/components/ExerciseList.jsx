import ExerciseCard from "./ExerciseCard"

const ExerciseList = ({ exercises, weights, onWeightSubmit }) => {
  
  return (
    <div className="cards-container">
      {exercises.map((exercise) => (
        <ExerciseCard 
          key={exercise.id}
          exercise={exercise}
          weight={weights[exercise.id]}
          onWeightSubmit={onWeightSubmit}
        />
      ))}
    </div>
  )
}

export default ExerciseList