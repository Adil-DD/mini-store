
interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className="flex items-center">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск"
        className="border rounded-lg px-2 py-1"
      />
    </div>
  );
}

