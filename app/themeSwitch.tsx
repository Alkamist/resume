import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return (
//     <select value={theme} onChange={e => setTheme(e.target.value)}>
//       <option value="dark">Dark</option>
//       <option value="light">Light</option>
//     </select>
//   )
// }

const ThemeSwitch = ({ spacingOnly }: any) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`flex flex-col items-center ${spacingOnly ? "invisible pointer-events-none" : ""}`}>
      <label className="flex relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          readOnly
        />
        <div
          onClick={() => {
            toggleTheme()
          }}
          className="flex items-center px-[2px] w-11 h-6 bg-slate-500 rounded-full after:content-[''] after:absolute after:bg-white after:rounded-full after:w-5 after:h-5 peer-checked:after:translate-x-[20px] after:transition-all"
        />
      </label>
    </div>
  )
}

export default ThemeSwitch