import {useEffect, useState} from "react";

export default function ScreenVariant(){

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.outerWidth);
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