export default function CodeInput({codes, setCodes}) {

    const handleInput = (e, index) => {
        const {value} = e.target;
        let newCodes = [...codes];

        if (value.length === codes.length) {
            // Если пользователь вставляет строку длиной 4 символа, распределяем её по всем полям
            newCodes = value.split('');
            setCodes(newCodes);
        } else {
            // Если вводится один символ
            newCodes[index] = value.charAt(value.length - 1);
            setCodes(newCodes);
            if (index < codes.length - 1 && value) {
                document.getElementById(`code-input-${index + 1}`).focus();
            }
        }
    };

    return (
        <div className="code-input-container" style={{display: 'flex', gap: '10px'}}>
            {codes.map((code, index) => (
                <input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength="4"
                    className="code-input"
                    value={code}
                    onChange={(e) => handleInput(e, index)}
                />
            ))}
        </div>
    );
};