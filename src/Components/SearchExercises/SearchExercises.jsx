import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="49px"
          textAlign="center"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
       
      </Stack>
    </>
  );
};

export default SearchExercises;
