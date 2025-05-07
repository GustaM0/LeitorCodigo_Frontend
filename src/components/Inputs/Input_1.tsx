import './input_1.css'

type InputProps = {
    value?: string;
    defaultValue?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    readOnly?: boolean;
};

const Input_1 = ({ value, defaultValue, name, onChange, placeholder, readOnly }: InputProps) => {
    return (
        <div className='input1-container'>
            <input
                placeholder={placeholder}
                type="text"
                name={name}
                className="input"
                {...(value !== undefined && onChange
                    ? { value, onChange }
                    : { defaultValue })}
                readOnly={readOnly}
            />
        </div>
    );
};

export default Input_1;
