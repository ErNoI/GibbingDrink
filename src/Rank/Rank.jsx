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
  0: "NEWB",
  100: "GOLD",
  200: "DIAMOND",
  300: "MASTER",
  500: "GRAND MASTER",
  700: "GIBBING MASTER",
};

const RANKBADGE = {
  0: greenBadge,
  100: goldBadge,
  200: blueBadge,
  300: purpleBadge,
  500: redBadge,
  700: rainbowBadge,
};

function getRankTitle(rank) {
  console.log(rank);
  if (rank < 1) {
    return RANKTITLE[0];
  }
  for (const key of Object.keys(RANKTITLE).reverse()) {
    if (rank >= key) {
      return RANKTITLE[key];
    }
  }
}

function getRankBadge(rank) {
  if (rank < 1) {
    return RANKBADGE[0];
  }
  for (const key of Object.keys(RANKBADGE).reverse()) {
    if (rank >= key) {
      return RANKBADGE[key];
    }
  }
  return RANKBADGE[100];
}

function getCurrentRankScoreNeeded(rank) {
  for (const key of Object.keys(RANKTITLE).reverse()) {
    if (rank >= key) {
      return key;
    }
  }
  return 0;
}

function getNextRankScoreNeeded(rank) {
  for (const key of Object.keys(RANKTITLE)) {
    if (rank < key) {
      return key;
    }
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

  const currentRankScore = getCurrentRankScoreNeeded(rank);
  const NextRankScore = getNextRankScoreNeeded(rank);

  const progressPercentage = Math.round(
    ((rank - currentRankScore) / (NextRankScore - currentRankScore)) * 100
  );

  return (
    <div className={`rank-container  ${isVisible ? "visible" : ""}`}>
      <div className="rank-box ">
        <h3>{getRankTitle(rank)}</h3>
        <img src={getRankBadge(rank)} alt={`Rank ${rank}`} />
      </div>
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
export default Rank;
