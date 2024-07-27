const RadioButton = ({
  value,
  checked,
  onChange,
  label,
  labelProps = {},
  inputProps = {},
  containerProps = {},
}) => {
  return (
    <div className="flex items-center" {...containerProps}>
      <label className="custom-radio-input transition-all">
        <input
          type="radio"
          name="paymentMethod"
          value={value}
          checked={checked}
          onChange={onChange}
          {...inputProps}
        />
        <span className="checkmark transition-all"></span>
      </label>
      {label?.length > 0 && (
        <div
          className="mr-4 ml-2 text-[14px] font-medium text-black/60 cursor-pointer"
          {...labelProps}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default RadioButton;
