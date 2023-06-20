type Props = {
  name: string;
  labelText: string;
  valid: boolean;
  errorText: string;
};

const Label = ({ name, labelText, valid, errorText }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <label htmlFor={name}>{labelText}</label>
      <span style={{ color: "hsl(354, 84%, 57%)", fontSize: "12px" }}>
        {valid ? "" : errorText}
      </span>
    </div>
  );
};
export default Label;
