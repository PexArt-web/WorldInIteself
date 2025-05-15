import { Input } from "@/components/ui/input";
const SharedInput = ({
  placeholder,
  type,
  name,
  value,
  className,
  autoComplete,
  required,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      className={className}
      autoComplete={autoComplete}
      required={required}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SharedInput;
