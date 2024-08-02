import { useState, useEffect } from "react"
import allExercises from "./data"
import ExerciseList from "./components/ExerciseList"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ExerciseFilterButton from "./components/ExerciseFilterButton"

const App = () => {
  
  const [searchingText, setSearchingText] = useState("")
  const [filteredExercises, setFilteredExercises] = useState([])
  const [currentBodyPartFilter, setCurrentBodyPartFilter] = useState("All")

  //FETCHING DATA FROM LOCAL STORAGE/ PARSING JSON DATA
  const [weights, setWeights] = useState(() => {
    const savedWeights = localStorage.getItem("savedWeights")
    return savedWeights ? JSON.parse(savedWeights) : {}
  });


  // EXERCISE FILTER
  useEffect(() => {
    const exercisesAfterFilter = allExercises.filter((oneExercise) => {
      const matchesSearch = oneExercise.exercise.toLowerCase().includes(searchingText.toLowerCase())
      const matchesBodyPart = currentBodyPartFilter === "All" || oneExercise.bodyPart === currentBodyPartFilter
      return matchesSearch && matchesBodyPart
    })
    setFilteredExercises(exercisesAfterFilter)
  }, [searchingText, currentBodyPartFilter])

  const handleBodyPartFilter = (bodyPart) => {
    setCurrentBodyPartFilter(bodyPart)
  }


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
  return <>
  <div className="container">
    <Navbar  setSearchingText={setSearchingText}/>
    <div className="exercises-box">
      <div className="buttons-container">
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("All")}>Vše</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Biceps")}>Biceps</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Triceps")}>Triceps</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Shoulders")}>Ramena</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Chest")}>Hrudník</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Back")}>Záda</ExerciseFilterButton>
        <ExerciseFilterButton onClick={() => handleBodyPartFilter("Legs")}>Nohy</ExerciseFilterButton>
      </div>
      <ExerciseList 
        exercises={filteredExercises} 
        weights={weights} 
        onWeightSubmit={handleWeightSubmit} 
      />
    </div>
    <Footer />
  </div> 
  </>
}

export default App