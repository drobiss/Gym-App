import { useState } from "react"

const WeightInput = ({ id, onWeightSubmit }) => {
  const [inputWeight, setInputWeight] = useState("")

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onWeightSubmit(id, inputWeight)
      setInputWeight("")
    }
  }

  return (
    <input
      type="text"
      placeholder="Zadej váhu"
      value={inputWeight}
      onChange={(e) => setInputWeight(e.target.value)}
      onKeyPress={handleSubmit}
    />
  )
}

export default WeightInput