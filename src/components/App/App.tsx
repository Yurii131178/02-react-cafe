import css from "./App.module.css";
import CafeInfo from "../Cafeinfo/Cafeinfo";
import { useState } from "react";
import { type Votes, type VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  console.log(votes); // допоки не використовую votes :)

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
}
