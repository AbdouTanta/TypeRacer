import { useState } from "react"
import Header from "./components/Header"
import Speed from "./components/Speed"
import TypingPlayground from "./components/TypingPlayground"

function App() {

  const [paragraph,] = useState("If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.")
  const [textInput, setTextInput] = useState("")
  const [index, setIndex] = useState(0)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [typingState, setTypingState] = useState<"ready" | "started" | "finished">("ready")
  const [speed, setSpeed] = useState(0)

  const onStart = () => {
    setStartDate(new Date())
    setTypingState("started")
  }

  const onFinish = () => {
    // Calculate speed
    const paragraphWordCount = paragraph.trim().split(/\s+/).length
    const now = new Date()
    const minutesTaken = Math.round(((+now - +startDate) / 1000) / 60)
    setSpeed(() => Math.round(paragraphWordCount / minutesTaken))
    setTypingState("finished")
  }

  const onReset = () => {
    setTextInput("")
    setTypingState("ready")
    setStartDate(null)
  }

  const addLetter = (letter: string) => {
    setTextInput(prev => prev + letter)
  }

  return (
    <div className="bg-gray-800 text-white h-screen px-96 py-12 flex flex-col gap-24">

      <Header />
      <Speed speed={speed} typingState={typingState} onReset={onReset} />
      <TypingPlayground index={index} setIndex={setIndex} addLetter={addLetter} onStart={onStart} onFinish={onFinish} paragraph={paragraph} textInput={textInput} />

    </div>
  )
}

export default App
