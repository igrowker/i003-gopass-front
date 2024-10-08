import { useState } from "react"
import { useTranslation } from "react-i18next"

type SearchBarProps = {
  onSearch: (query: string) => void
  className?: string
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useTranslation()
  const [query, setQuery] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setQuery(newValue)
    onSearch(newValue)
  }

  return (
    <div className="mt-1 flex items-center justify-center gap-8 pb-4 sm:px-6">
      <input
        value={query}
        type="text"
        onChange={handleChange}
        placeholder={t("searchNameTeam")}
        className="w-full max-w-md rounded-3xl border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
