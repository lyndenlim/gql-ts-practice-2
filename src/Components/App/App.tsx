import "./App.css"
import Characters from "../../Components/Characters/Characters"
import Character from "../../Components/Character/Character"
import { Route, Routes } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/:id" element={<Character />} />
    </Routes>
  )
}

export default App;
