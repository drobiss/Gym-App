import { useState, useEffect } from "react"
import allExercises from "./data"

const App = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredExercises, setFilteredExercises] = useState([])
  const [weights, setWeights] = useState(() => {
    const savedWeights = localStorage.getItem("savedWeights")
    return savedWeights ? JSON.parse(savedWeights) : {}
  });
  const [inputWeights, setInputWeights] = useState({})

  useEffect(() => {
    const exercisesAfterFilter = allExercises.filter((oneExercise) => {
      return oneExercise.exercise.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredExercises(exercisesAfterFilter)
  }, [searchingText])

  useEffect(() => {
    localStorage.setItem("savedWeights", JSON.stringify(weights))
  }, [weights])

  const handleWeightChange = (id, value) => {
    setInputWeights((prevInputWeights) => ({
      ...prevInputWeights,
      [id]: value
    }))
  }

  const handleWeightSubmit = (id) => {
    const value = inputWeights[id]
    if (value && value.trim() !== "") {
      setWeights((prevWeights) => ({
        ...prevWeights,
        [id]: {
          current: value.trim(),
          previous: prevWeights[id]?.current || "Nezadáno"
        }
      }))
      setInputWeights((prevInputWeights) => ({
        ...prevInputWeights,
        [id]: ""
      }))
    }
  }

  return (
    <div className="exercises-box">
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Vyhledat cvik..."
          onChange={(e) => setSearchingText(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {filteredExercises.map((oneExercise) => {
          const { id, exercise, exerciseLink } = oneExercise
          return (
            <div className="exercise-card" key={id}>
              <h2>{exercise}</h2>
              <a href={exerciseLink} target="_blank" rel="noopener noreferrer">
                Odkaz na cvik
              </a>
              <input
                type="text"
                placeholder="Zadej váhu"
                value={inputWeights[id] || ""}
                onChange={(e) => handleWeightChange(id, e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleWeightSubmit(id)
                  }
                }}
              />
              <div className="weight-info">
                <p>Aktuální váha: {weights[id]?.current || "Nezadáno"}</p>
                <p>Předchozí váha: {weights[id]?.previous || "Nezadáno"}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App