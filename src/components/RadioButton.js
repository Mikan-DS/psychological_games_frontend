export default function RadioButton({value, currentSelected, onChange}) {

    if (value === currentSelected) {
        return (
            <svg className="radioButton" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7.5" stroke="#383D38"/>
                <circle cx="8" cy="8" r="5" fill="#383D38"/>
            </svg>
        );
    }
    return (
        <svg className="radioButton" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg" onClick={() => {
            onChange(value)
        }} style={{cursor: "pointer"}}>
            <circle cx="8" cy="8" r="7.5" stroke="#383D38"/>
        </svg>
    );
}