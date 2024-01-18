import React, { useEffect, useState, useRef } from "react";
import "./Rank.css";
import blueBadge from "../assets/Ranks/BlueBadge.png";
import goldBadge from "../assets/Ranks/GoldBadge.png";
import greenBadge from "../assets/Ranks/GreenBadge.png";
import redBadge from "../assets/Ranks/RedBadge.png";
import rainbowBadge from "../assets/Ranks/RainbowBadge.png";
import purpleBadge from "../assets/Ranks/PurpleBadge.png";
import useScroll from "../Hooks/useScroll";

const RANKTITLE = {
  100: "NEWB",
  200: "GOLD",
  300: "DIAMOND",
  400: "MASTER",
  600: "GRANDMASTER",
  800: "GRANDMASTER",
};

const RANKBADGE = {
  100: greenBadge,
  200: goldBadge,
  300: blueBadge,
  400: purpleBadge,
  600: redBadge,
  800: rainbowBadge,
};

function getRankTitle(rank) {
  if (rank < 100) {
    return "NEWB";
  } else if (rank < 200) {
    return "GOLD";
  } else if (rank < 300) {
    return "DIAMOND";
  } else if (rank < 400) {
    return "MASTER";
  } else if (rank < 600) {
    return "GRANDMASTER";
  } else if (rank < 800) {
    return "GRANDMASTER";
  } else {
    return "NEWB";
  }
}

function getRankBadge(rank) {
  if (rank < 100) {
    return greenBadge;
  } else if (rank < 200) {
    return goldBadge;
  } else if (rank < 300) {
    return blueBadge;
  } else if (rank < 400) {
    return purpleBadge;
  } else if (rank < 600) {
    return redBadge;
  } else if (rank < 800) {
    return rainbowBadge;
  } else {
    return greenBadge;
  }
}

function Rank() {
  const [rank, setRank] = useState(0);
  const oldRankRef = useRef(0);
  const isVisible = useScroll();

  useEffect(() => {
    const updateRank = () => {
      const newRank = localStorage.getItem("rank");
      oldRankRef.current = rank;
      setRank(Number(newRank));
    };

    updateRank();
    window.addEventListener("storage", updateRank);

    return () => {
      window.removeEventListener("storage", updateRank);
    };
  }, [rank]);

  return (
    <div className={`rank-container  ${isVisible ? "visible" : ""}`}>
      <div className="rank-box ">
        <h3>{getRankTitle(rank)}</h3>
        <img src={getRankBadge(rank)} alt={`Rank ${rank}`} />
      </div>
    </div>
  );
}
export default Rank;
