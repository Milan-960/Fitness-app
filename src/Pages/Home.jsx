import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "Components/HeroBanner/HeroBanner";
import SearchExercises from "Components/SearchExercises/SearchExercises";
import Exercises from "Components/Exercises/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </Box>
    </>
  );
};

export default Home;
