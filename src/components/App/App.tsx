import css from "./App.module.css";
import Cafeinfo from "../Cafeinfo/Cafeinfo";
// import { useState } from "react";
// import type { VoteType } from "../../types/votes";

export default function App() {

    // const [votes, setVotes] = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // });

    // const handleVote = (type: VoteType) => {
    //     setVotes

    // };









    return <div className={css.app}>
      <Cafeinfo/>
  </div>;
}


