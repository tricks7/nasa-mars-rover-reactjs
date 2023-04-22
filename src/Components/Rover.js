import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

//import { Link } from "react-router-dom";
//import { Route, Routes } from 'react-router-dom';

const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=43Rvq8zxGF3BHgW6N1fGWlYJVKzorfTlbhfxKGlQ";

const Rover = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 400, m: 1 }}>
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image="https://images.unsplash.com/photo-1639782792143-d8ce97e5d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
            title="Curiosity"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.rovers[0].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography>
                Landing Date: {data.rovers[0].landing_date}
              </Typography>
              <Typography>Launch Date: {data.rovers[0].launch_date}</Typography>
              <Typography>
                Total Photos: {data.rovers[0].total_photos}
              </Typography>
              <Typography>
                Camera Names:{" "}
                {data.rovers[0].cameras.map((name) => (
                  <li key={name.full_name}>{name.full_name}</li>
                ))}
              </Typography>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              component={RouterLink}
              to="/RoverDetail"
              variant="contained"
              color="primary"
            >
              View Photos
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400, m: 1 }}>
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image="https://d2pn8kiwq2w21t.cloudfront.net/original_images/missionswebmer.jpg"
            title="Spirit"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.rovers[1].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography>
                Landing Date: {data.rovers[1].landing_date}
              </Typography>
              <Typography>Launch Date: {data.rovers[1].launch_date}</Typography>
              <Typography>
                Total Photos: {data.rovers[1].total_photos}
              </Typography>
              <Typography>
                Camera Names:{" "}
                {data.rovers[1].cameras.map((name) => (
                  <li key={name.full_name}>{name.full_name}</li>
                ))}
              </Typography>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              component={RouterLink}
              to="/RoverDetail"
              variant="contained"
              color="primary"
            >
              View Photos
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400, m: 1 }}>
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image="https://i0.wp.com/spacenews.com/wp-content/uploads/2015/03/opportunity-illus.jpg?fit=1500%2C988&ssl=1"
            title="Opportunity"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.rovers[2].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography>
                Landing Date: {data.rovers[2].landing_date}
              </Typography>
              <Typography>Launch Date: {data.rovers[2].launch_date}</Typography>
              <Typography>
                Total Photos: {data.rovers[2].total_photos}
              </Typography>
              <Typography>
                Camera Names:{" "}
                {data.rovers[2].cameras.map((name) => (
                  <li key={name.full_name}>{name.full_name}</li>
                ))}
              </Typography>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              component={RouterLink}
              to="/RoverDetail"
              variant="contained"
              color="primary"
            >
              View Photos
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400, m: 1 }}>
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image="https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"
            title="Perseverance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.rovers[3].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography>
                Landing Date: {data.rovers[3].landing_date}
              </Typography>
              <Typography>Launch Date: {data.rovers[3].launch_date}</Typography>
              <Typography>
                Total Photos: {data.rovers[3].total_photos}
              </Typography>
              <Typography>
                Camera Names:{" "}
                {data.rovers[0].cameras.map((name) => (
                  <li key={name.full_name}>{name.full_name}</li>
                ))}
              </Typography>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              component={RouterLink}
              to="/RoverDetail"
              variant="contained"
              color="primary"
            >
              View Photos
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Rover;
