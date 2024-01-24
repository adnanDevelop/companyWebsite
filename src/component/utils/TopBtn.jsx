import React, { useEffect, useState } from 'react'

const TopBtn = () => {
    const [iconAnimation, setIconAnimation] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setIconAnimation(true) : setIconAnimation(false);
    });

    const topBar = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const windowHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`top-btn ${iconAnimation ? "animateIcon" : ""}  `} style={{ background: `conic-gradient(#ffa633 ${scrollPercentage}%, #ededed ${scrollPercentage}%)` }} >
            <div
                className={`top-icon position-relative`}
                onClick={topBar}
            >
                <span className="icon-animation">
                    <i className="fa-solid fa-arrow-up"></i>
                </span>
            </div>
        </div>
    )
}

export default TopBtn