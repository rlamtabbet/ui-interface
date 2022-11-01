import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import {
  AccountCircleOutlined,
  Close,
  HelpOutline,
  NotificationsOutlined,
  Search
} from "@mui/icons-material";
import CredoLogoIcon from "../components/credo-logo";

export default function UseCases() {
  // Begin Use Cases
  const useCases = [
    {
      name: "AI Recruiting Software",
      id: "BFK7yrJc35ChJZ9qXMAUuS",
      description:
        "Predict whether a recent college grad will be a good fit for a job based on their performance and specialization in school, including their class percentile rank, degree specialization, and years of prior work experience."
    },
    {
      name: "Credit Default Prediction",
      id: "JPu9N2HtTiBK2an2Q7vTBS",
      description:
        "Predicts credit card default in the following month using previous payment history, along with other factors. While this is useful to us in and of itself, the main model is also input to mitigation strategies, as one of the inputs to other financial models."
    },
    {
      name: "Facial Recognition",
      id: "Z9eqmpsrxSVX68rMpHQEtZ",
      description:
        "Provide us with intelligence on the demographic make-up of our customers in our retail stores."
    },
    {
      name: "HR Chatbot",
      id: "VS83DBp6ihQ65BzhmXYFV8",
      description:
        "Visitors coming to our HR can ask basic sales questions to our Sales Support Chatbot, which will search through a predefined set of documentation and sales collateral to provide answers"
    },
    {
      name: "Retail Traffic Analyzer",
      id: "kNvKphx2U9gZ8xUcvVkVbX",
      description:
        "Provide us with intelligence on the demographic make-up of our customers in our retail stores. Analyze video footage (more specifically, still images taken periodically from CCTV footage from inside our stores)"
    },
    {
      name: "Speech Recognition",
      id: "KkDnJAFE7yAoZHkFBLroFi",
      description:
        "Communicate by voice with other users who speak different languages. Speech translation enables voice-to-voice communication across multiple languages."
    }
  ];
  // End Use Cases

  return (
    <Box
      bgcolor="background.paper"
      zIndex="1200"
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
    >
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Stack flexGrow={1} spacing={1} direction="row" alignItems="center">
          <Item>
            <IconButton size="small" component={RouterLink} to="/">
              <Close />
            </IconButton>
          </Item>
          <Item>
            <CredoLogoIcon
              id="icon-logo"
              width="616"
              height="105"
              viewBox="0 0 616 105"
              sx={{ width: 120, height: 30 }}
            />
          </Item>
          <Item flexGrow={1}></Item>

          <Item>
            <IconButton>
              <NotificationsOutlined />
            </IconButton>
          </Item>
          <Item>
            <IconButton>
              <HelpOutline />
            </IconButton>
          </Item>
          <Item>
            <IconButton>
              <AccountCircleOutlined />
            </IconButton>
          </Item>
        </Stack>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          height: "calc(100vh - 50px)",
          paddingBottom: 50,
          position: "relative",
          bgcolor: "divider"
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "calc(100vh - 50px)",
            paddingBottom: 5,
            paddingTop: 5,
            overflow: "auto"
          }}
        >
          <Container maxWidth="md">
            <Box display="flex" justifyContent="center">
              <TextField
                sx={{ width: "96%" }}
                placeholder="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                size="small"
              />
            </Box>
            <Grid container p={2} spacing={2}>
              {useCases.map((useCase, index) => (
                <Grid item xs={4} sm={4} md={4}>
                  <Card elevation={3} sx={{ maxWidth: 345 }}>
                    <CardActionArea component={RouterLink} to="/">
                      <Box
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          p: 2,
                          backgroundImage: `url(/mesh/mesh-${index + 1}.png)`
                        }}
                      >
                        {useCase.name}
                      </Box>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="caption"
                          component="div"
                        >
                          {useCase.id}
                        </Typography>
                        <Typography
                          gutterBottom
                          sx={{ height: 100, overflow: "auto" }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {useCase.description}
                        </Typography>
                        <Typography variant="button" color="secondary.main">
                          View More
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
