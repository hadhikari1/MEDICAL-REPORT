import Errors from "../interface/Error";

interface Iprops {
  onChange: any;
  name: string;
  type?: string;
  placeholder: string;
  className: string;
  value: string;
  errors?: Errors;
}
export default function InputComponent(props: Iprops) {
  const { type='', name = "", placeholder = "", className = "", value = "", onChange, errors} = props;
  return (
    <>
    {errors && errors[name] && <p>{errors[name]}</p>}
    <div className="text_area">
      <input
        type={type ?? "text"}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
    </>
  );
}
