import "./Search.css"
interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
    className="search-input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by mission name..."
    />
  );
};

export default Search;
