export interface IInput {
  sampleTextProp: string;
}
type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  error: any;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  placeholder,
  value,
  error,
  onValueChange,
}: InputProps) {
  return (
    <div className=" w-4/5 h-14 ">
      <input
        className={`border rounded p-2 w-full h-full text-lg font-normal ${
          error ? 'border-red-500' : 'outline outline-1'
        }`}
        placeholder={placeholder}
        type="text"
        id={name}
        name={name}
        value={value}
        required
        onChange={onValueChange}
      />
      {error && (
        <div className="font-inter text-red-500 text-sm p-2">{error}</div>
      )}
    </div>
  );
}
