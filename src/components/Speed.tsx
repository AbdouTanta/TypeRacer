export default function Speed({ typingState, speed, onReset }: { typingState: string, speed: number, onReset: () => void }) {

  return <div className="flex justify-center gap-12 items-center">
    <div className={`px-4 py-2 bg-orange-300 rounded font-bold ${(typingState !== 'finished') && 'opacity-50'}`}>
      {(typingState === 'finished') ? (<div>Your typing speed is: {speed} words per minute.</div>) : (<div>Finish the paragraph to get your speed...</div>)}
    </div>
    <div className="flex gap-4 items-center">
      <div className={`px-4 py-2 bg-gray-400 rounded font-bold`}>
        {typingState}
      </div>
      <button className={`px-4 py-2 bg-sky-400 rounded font-bold`} onClick={onReset}>
        Reset
      </button>
    </div>
  </div>
}