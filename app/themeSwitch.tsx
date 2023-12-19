import { useTheme } from 'next-themes'

const ThemeSwitch = ({ spacingOnly }: any) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
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