import { useEffect, useRef, useState } from "react"

export default function TypingPlayground({ index, setIndex, paragraph, textInput, addLetter, onStart, onFinish }: { index: number, setIndex: any, paragraph: string, textInput: string, addLetter: (letter: string) => void, onStart: () => void, onFinish: () => void }) {

  const overlay = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // Focus on <textarea> on page load
    overlay.current?.focus()
  }, [])

  const [isLastInputWrong, setIsLastInputWrong] = useState(false)

  return (
    <div className="relative whitespace-pre-wrap">
      <div className={`absolute -top-16 -left-4 w-full h-[350px] ${isLastInputWrong ? 'bg-red-300' : 'bg-green-300'} rounded-full mix-blend-hue filter blur-3xl opacity-30 animate-blob transition-colors duration-1000`}></div>
      <div className="tabular-nums font-monospace text-2xl text-slate-600 leading-[50px] tracking-wide">
        {paragraph}
      </div>
      <textarea ref={overlay}
        className={`transition-colors duration-1000 w-full h-full resize-none bg-transparent focus:outline-none caret-green-400 font-monospace z-1000 absolute top-0 left-0 text-2xl leading-[50px] tracking-wide 
                ${isLastInputWrong ? 'text-red-400' : 'text-green-400'}`}
        onChange={(e) => {
          // last letter typed in
          const lastInput = e.target.value.slice(-1)

          // If first input
          if (e.target.value.length === 1) {
            onStart()
          }

          // Add letter if correct
          if (lastInput === paragraph[index]) {
            setIsLastInputWrong(false)
            addLetter(lastInput)
            setIndex(prev => prev + 1)
          } else {
            setIsLastInputWrong(true)
          }

          if (textInput.length === paragraph.length) {
            onFinish()
          }
        }}
        value={textInput}
        onKeyDown={(e) => {
          console.log(e)
        }}
      ></textarea>
    </div>
  )
}