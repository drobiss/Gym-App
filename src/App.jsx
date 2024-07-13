import { useState, useEffect } from "react"
import allExercises from "./data"
import SearchBar from "./components/SearchBar"
import ExerciseList from "./components/ExerciseList"

const App = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredExercises, setFilteredExercises] = useState([])

  //FETCHING DATA FROM LOCAL STORAGE/ PARSING JSON DATA
  const [weights, setWeights] = useState(() => {
    const savedWeights = localStorage.getItem("savedWeights")
    return savedWeights ? JSON.parse(savedWeights) : {}
  });


  // EXERCISE FILTER
  useEffect(() => {
    const exercisesAfterFilter = allExercises.filter((oneExercise) => {
      return oneExercise.exercise.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredExercises(exercisesAfterFilter)
  }, [searchingText])


  // STORING IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("savedWeights", JSON.stringify(weights))
  }, [weights])


  // WEIGHT SUBMIT HANDLE
  const handleWeightSubmit = (id, value) => {
    if (value && value.trim() !== "") {
      setWeights((prevWeights) => ({
        ...prevWeights,
        [id]: {
          current: value.trim(),
          previous: prevWeights[id]?.current || "Nezadáno"
        }
      }))
    }
  }


  // APP
  return (
    <div className="exercises-box">
      <SearchBar setSearchingText={setSearchingText} />
      <ExerciseList 
        exercises={filteredExercises} 
        weights={weights} 
        onWeightSubmit={handleWeightSubmit} 
      />
    </div>
  )
}

export default App