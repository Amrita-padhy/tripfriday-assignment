import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import UserCard from "./UserCard";
import { useDataContext } from "../context/userContext";

function Users() {
  const { usersData } = useDataContext();

  return (
    <>
      <Box sx={{ margin: "10px" }}>
        <Typography variant="h4" textAlign={"center"} color={"grey"} sx={{textDecoration:"underline"}}>
          Users
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            maxWidth="sm"
            borderRadius={"5px"}
            spacing={"10px"}
            padding={"10px"}
          >
            {usersData?.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <UserCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Users;
