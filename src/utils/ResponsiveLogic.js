import {useEffect, useState} from "react";

export default function ScreenVariant(){

    console.log(window.screen.width)
    const width = window.screen.width;
    console.log("3e")
    const [screenWidth, setScreenWidth] = useState(width);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(width);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isDesktop = screenWidth >= 1200;
    const isTablet = !isDesktop && screenWidth >= 640;
    const isPhone = !isDesktop && !isTablet;

    return {
        isDesktop,
        isTablet,
        isPhone
    }
}
