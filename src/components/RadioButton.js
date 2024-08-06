export default function RadioButton({value, currentSelected, onChange}) {
    return (
        <svg className={"radio-button"} width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg" onClick={() => {
            onChange(value)
        }}>
            <circle cx="8" cy="8" r="7.5" stroke="#383D38"/>
            {value === currentSelected ? <circle cx="8" cy="8" r="5" fill="#383D38"/>:null}

        </svg>
    );
}