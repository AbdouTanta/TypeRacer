export default function Header() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="text-3xl text-slate-300">Welcome to Type Racer</div>
        <button disabled className="px-4 py-2 rounded bg-slate-700 text-gray-500 border border-slate-600 font-semibold">Challenge a friend (Coming soon)</button>
      </div>
      <div className="text-lg font-light text-slate-500">Practice your typing by writing the paragraph below. Get your typing WPM when you finish the paragraph.</div>
    </div>
  )
}