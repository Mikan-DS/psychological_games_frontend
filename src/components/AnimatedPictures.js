import React, {useEffect, useState} from "react";

import coverDesk0 from "../img/animated-frames/cover_pic_desktop_default.webp";
import coverDesk1 from "../img/animated-frames/cover_pic_desktop_1.webp";
import coverDesk2 from "../img/animated-frames/cover_pic_desktop_2.webp";
import coverDesk3 from "../img/animated-frames/cover_pic_desktop_3.webp";
import coverDesk4 from "../img/animated-frames/cover_pic_desktop_4.webp";
import coverDesk5 from "../img/animated-frames/cover_pic_desktop_5.webp";

import coverMobile0 from "../img/animated-frames/cover_pic_mob_default.webp";
import coverMobile1 from "../img/animated-frames/cover_pic_mob_1.webp";
import coverMobile2 from "../img/animated-frames/cover_pic_mob_2.webp";
import coverMobile3 from "../img/animated-frames/cover_pic_mob_3.webp";

const coverDeskImages = [
    coverDesk0,
    coverDesk1,
    coverDesk2,
    coverDesk3,
    coverDesk4,
    coverDesk5
];

const coverMobileImages = [
    coverMobile0,
    coverMobile1,
    coverMobile2,
    coverMobile3
];

export default function AnimatedPictures({ screenVariant }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = screenVariant.isDesktop ? coverDeskImages : coverMobileImages;

    const handleMouseOver = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleMouseOver, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <button className={"content-box animated-frame"} onMouseOver={handleMouseOver}>
            <img
                className={"content-box"}
                src={images[currentIndex % images.length] || ""}
                alt="Фоны игры"
            />
        </button>
    );
}
