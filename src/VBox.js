export default function VBox(props) {
    return (
        <div className="vbox">
            Вертикальный список
            {props.children}
        </div>
    );
}

