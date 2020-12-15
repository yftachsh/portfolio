import React, { useState, useEffect } from 'react';

import MoonImage from '../../assets/moon.png';

import './moon.scss';

const audioSource = `${window.location.origin}/audio/spaceman.mp3`
const audio = new Audio(audioSource);
audio.volume = 0.5;

const Moon = () => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(50);

    useEffect(() => {
        if (playing) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playing]);

    useEffect(() => {
        if (volume > 100) {
            audio.volume = 1;
        } else if (volume < 0) {
            audio.volume = 0;
        } else {
            audio.volume = volume / 100;
        }
    }, [volume]);

    const moonClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.type === 'click') {
            setPlaying(previous => !previous);
        } else if(e.type === 'contextmenu') {
            e.preventDefault();
            console.log('Context menu');
        }
    }

    const volumeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = target.value;
        if (newVolume) {
            setVolume(parseInt(newVolume));
        } else if (newVolume === '') {
            setVolume(0);
        }
    }

    return (
        <>
            <ul className="moon-context-menu">
                <li className="moon-context-item">
                    <a href="https://youtu.be/lETmskoqh30" className="moon-link">
                        Hardwell - Spaceman
                    </a>
                </li>
                <li className="moon-context-item">
                    <input  type="number"
                            className="moon-volume"
                            onChange={volumeChange}
                            value={volume === 0 ? '' : volume} />
                </li>
                <li className="moon-context-item">

                </li>
            </ul>
            <img    src={MoonImage}
                    alt=""
                    className={`moon ${playing ? 'active': ''}`}
                    id="moon"
                    onClick={moonClick}
                    onContextMenu={moonClick} />
        </>
    )
}

export default Moon;
