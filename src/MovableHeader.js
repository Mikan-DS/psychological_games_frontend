import Cover from './img/cover_desktop.png';

export default function MovableHeader() {

    const movable_header_style = {
    }


    return (
        <div className="movable_header" style={movable_header_style}>
            <img src={Cover} alt="Пример изображения"/>
            Эта часть будет двигаться!
            <button>Играть!</button>
        </div>
    );
}

