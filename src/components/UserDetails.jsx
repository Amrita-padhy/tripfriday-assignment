import { Margin } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../context/userContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function UserDetails() {
  const { userId } = useParams();
  const { usersData } = useDataContext();
  const navigate = useNavigate();

  const user = usersData.find((item) => item.id == userId);

  const card = (
    <>
      <Typography
        variant="h6"
        color={"gray"}
        gutterBottom
        textAlign={"center"}
        sx={{ textDecoration: "underline", margin: "10px" }}
      >
        User Details
      </Typography>
      <CardContent>
        {/* users persnal info */}
        <Box>
          <Typography variant="h6" gutterBottom>
            {user.name}
          </Typography>
          <Typography component="div" color="text.secondary">
            Uername: {user.username}
          </Typography>
          <Typography component="div" color="text.secondary">
            Email:{user.email}
          </Typography>
          <Typography color="text.secondary">Website:{user.website}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phone: {user.phone}
          </Typography>
        </Box>

        {/* users adress */}
        <Box>
          <Typography color="text.primary" variant="h6" gutterBottom>
            Users Adress
          </Typography>
          <Typography color="text.secondary">
            City :{user.address.city}
          </Typography>
          <Typography color="text.secondary">
            Street: {user.address.street}
          </Typography>
          <Typography color="text.secondary">
            Suite: {user.address.suite}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Zipcode: {user.address.zipcode}
          </Typography>
        </Box>
        {/* company information */}
        <Box>
          <Typography color="text.primary" variant="h6" gutterBottom>
            Company information
          </Typography>
          <Typography color="text.secondary">
            Name :{user.company.name}
          </Typography>

          <Typography color="text.secondary">
            Address :{user.company.catchPhrase}
          </Typography>
          <Typography color="text.secondary">
            About : {user.company.bs}
          </Typography>
        </Box>
      </CardContent>
    </>
  );
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Card
          variant="outlined"
          sx={{
            bgcolor: "whitesmoke",
            width: "400px",
            borderRadius: "5px",
            margin: "10px",
            height: "auto",
          }}
        >
          {card}
          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", margin: "15px" }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default UserDetails;
