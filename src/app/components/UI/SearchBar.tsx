import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <div className="mt-1 flex items-center justify-center px-4 sm:px-6 gap-8">
      <input
        value={query}
        type="text"
        onChange={handleChange}
        placeholder="¿A dónde quieres ir?"
        className="w-full max-w-md p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
      <input
        value={query}
        type="text"
        onChange={handleChange}
        placeholder="Selecciona tus fechas"
        className="w-full max-w-md p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
    </div>
  );
}