import { useState } from "react";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";


const spotifyTracks = [
  //bruno
  "https://open.spotify.com/embed/track/02VBYrHfVwfEWXk5DXyf0T?utm_source=generator",
  //piano
  "https://open.spotify.com/embed/track/6ENvqECRj6usbnhoemJFav?utm_source=generator",
  //mico
  "https://open.spotify.com/embed/track/0Yos7Ql3MvIXE56swDiInZ?utm_source=generator",
];

export function SpotifyTracks() {
  const [hidden, setHidden] = useState(true);

  const step = 7;
  const total = (spotifyTracks.length - 1) * step;
  const height = 20;

  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  console.log(`${1 - total / 100 + (0 * step) / 100}`);

  const itemVariants = {
    hidden: (i: number): TargetAndTransition => ({
      top: `${i * step}px`,
      scale: 0.9 - total / 100 + (i * step) / 100,
      opacity: (100 - total + i * step) / 100,
      transition: {
        duration: 0.4,
        damping: 15,
        type: "spring",
      },
    }),
    visible: (i: number): TargetAndTransition => ({
      top: `${(-i + (spotifyTracks.length - 1)) * height * 4.3}px`,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        damping: 15,
        type: "spring",
      },
    }),
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative h-32"
    >
      {spotifyTracks.map((track, i) => (
        <motion.iframe
          key={i}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          data-testid="embed-iframe"
          src={track}
          className={`absolute left-0 h-22 w-4/5 z-5 pb-1`}
          animate={hidden ? "hidden" : "visible"}
          variants={itemVariants}
          custom={i}
        />
      ))}
    </div>
  );
}
