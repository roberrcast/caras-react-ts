import { useState, useRef } from "react";

type useVideoPlayerReturn = {
    isPlaying: boolean;
    videoRef: React.RefObject<HTMLVideoElement>;
    togglePlay: () => void;
};
