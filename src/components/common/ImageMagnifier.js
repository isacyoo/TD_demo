"use client";   

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function ImageMagnifier({ src, magnifierSize = 80, zoomLevel = 2.0, enabled = true, width = 70 }) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [[imgX, imgY], setImgXY] = useState([0, 0]);
    const [[scrollX, scrollY], setScrollXY] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const imgRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
        const img = imgRef.current;
        if (img) {
            const { width, height, top, left } = img.getBoundingClientRect();
            setSize([width, height]);
            setImgXY([left, top]);
            setShowMagnifier(true);
            setScrollXY([window.scrollX, window.scrollY]);
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setXY([x, y]);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setShowMagnifier(false);
    }, []);

    const magnifierStyle = {
        position: 'absolute',
        left: Math.max(0, Math.min(x - magnifierSize / 2, imgWidth - magnifierSize) + imgX + scrollX),
        top: Math.max(0, Math.min(y - magnifierSize / 2, imgHeight - magnifierSize) + imgY + scrollY),
        width: `${magnifierSize}px`,
        height: `${magnifierSize}px`,
        opacity: 1,
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + magnifierSize / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierSize / 2}px`,
        pointerEvents: 'none',
        zIndex: 1
    };

    return (
        <>
            <Image
                src={src}
                ref={imgRef}
                alt="Architecture"
                width={0}
                height={0}
                className="rounded-lg"
                style={{ width: `${width}%`, height: 'auto' }}
                onMouseEnter={enabled ? handleMouseEnter : undefined}
                onMouseMove={enabled ? handleMouseMove : undefined}
                onMouseLeave={enabled ? handleMouseLeave : undefined}/>
            {enabled && showMagnifier && <div style={magnifierStyle} />}
        </>
    )
};