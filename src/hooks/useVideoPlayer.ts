import { useState, useRef } from "react";

type UseVideoPlayerReturn = {
    isPlaying: boolean;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    togglePlay: () => void;
};

export const useVideoPlayer = (): UseVideoPlayerReturn => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            // Revisa la propiedad para pausa del video para hacer toggle
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return { isPlaying, videoRef, togglePlay };
};
