import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import {useNavigate} from 'react-router-dom'

function UserCard({ item }) {
  const navigate = useNavigate()

  const card = (
    <>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography  component="div">
          {item.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.website}
        </Typography>
      </CardContent>
    </>
  );
  return (
    <>
      <Card
      onClick={() => navigate(`userDetails/${item.id}`)}
        variant="elevation"
        sx={{
          bgcolor: "whitesmoke",
          borderRadius: "5px",
          cursor: "pointer",
          "&:hover": {
            background: "#ffff",
          },
        }}
      >
        {card}
      </Card>
    </>
  );
}

export default UserCard;
