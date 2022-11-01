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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  InputAdornment,
  TextField,
  Tooltip
} from "@mui/material";
import {
  BalanceTwoTone,
  CalendarTodayTwoTone,
  ExpandMore,
  GppGoodTwoTone,
  IntegrationInstructionsTwoTone,
  Search,
  StoreMallDirectoryTwoTone
} from "@mui/icons-material";

export default function Alignments() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Alignment Responses</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="secondary">
            Share Responses
          </Button>
        </Box>
        <Box mr={1}>
          <Button
            component={RouterLink}
            to="/align/request"
            size="small"
            variant="contained"
            color="secondary"
          >
            Request Alignment
          </Button>
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          height: "calc(100vh - 50px)",
          position: "relative"
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "calc(100vh - 50px)",
            overflow: "auto"
          }}
        >
          <Item>
            <Grid container p={1} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Box p={1}>
                  <Stack
                    mb={2}
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 1, md: 2 }}
                  >
                    <Card sx={{ width: 1 / 3 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            Risk Alignment
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Align on fairness, transparency, security, esg, and
                            other risks
                          </Typography>
                          <Box fontSize="52px" lineHeight={1}>
                            <BalanceTwoTone
                              color="secondary"
                              fontSize="inherit"
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ width: 1 / 3 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            Policy Alignment
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Align on process requirements for regulations,
                            standards and best practices.
                          </Typography>
                          <Box fontSize="52px" lineHeight={1}>
                            <GppGoodTwoTone color="info" fontSize="inherit" />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ width: 1 / 3 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            Technical Alignment
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Align on tech requirements, metrics, thresholds, and
                            specifications for assessments.
                          </Typography>
                          <Box fontSize="52px" lineHeight={1}>
                            <IntegrationInstructionsTwoTone
                              color="warning"
                              fontSize="inherit"
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
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
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom variant="subtitle2">
                          Risk Alignment - Fairness
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                            }
                            label="Fei Simmons"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/6.jpg" />
                            }
                            label={
                              <>
                                <Box display="flex" alignItems="center">
                                  <Box mr={1}>Peter Johnson</Box>
                                  <Box>
                                    <Tooltip title="Vendor">
                                      <StoreMallDirectoryTwoTone fontSize="small" />
                                    </Tooltip>
                                  </Box>
                                </Box>
                              </>
                            }
                            variant="outlined"
                            color="warning"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/7.jpg" />
                            }
                            label={
                              <>
                                <Box display="flex" alignItems="center">
                                  <Box mr={1}>Julie Chin</Box>
                                  <Box>
                                    <Tooltip title="Vendor">
                                      <StoreMallDirectoryTwoTone fontSize="small" />
                                    </Tooltip>
                                  </Box>
                                </Box>
                              </>
                            }
                            variant="outlined"
                            color="warning"
                          />
                          <Chip
                            size="small"
                            icon={<CalendarTodayTwoTone />}
                            label="01/03/2022"
                            variant="outlined"
                            color="default"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Which types of features will this product use?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  HR, Chat
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  HR, NLP
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  HR, Chat, NLP
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Will this product interact with employees?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Will this product access company data?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Will this product access employee data with *PII?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  No
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              How important is diversity in training data for
                              bias?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Very important
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Moderately important
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Very important
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Is understanding the inner workings of the product
                              required?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  No
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  No
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  No
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Select packs for specific regulatory, policy,
                              standards and requirements
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Vendor Risk Policies
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Vendor Risk Policies, NYC 1894-A
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Vendor Risk Policies
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Select specific assessments needed
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Fairness
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Fairness, Performance
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Fairness, Transparency
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Is an employee disclosure required?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom variant="subtitle2">
                          Risk Alignment - Transparency
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                            }
                            label="Tyler Lee"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                            }
                            label="Fei Simmons"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
                            }
                            label="Sam Mavis"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            icon={<CalendarTodayTwoTone />}
                            label="01/02/2022"
                            variant="outlined"
                            color="default"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              What worldview are you adopting with regards to
                              the fairness of this system?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  What You See Is What You Get (WYSIWYG)
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  What You See Is What You Get (WYSIWYG)
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  We Are All Equal (WAE)
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              In regards to harms: Among which groups are you
                              most concerned with ensuring predictive equity?
                              This question is focused on who may be harmed
                              (e.g., denied bail)
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Harm without justification
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Harm without justification
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Harm without justification
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              In regards to benefits: Among which groups are you
                              most concerned with ensuring predictive equity?
                              This question is focused on who may be benefited
                              (e.g., approved loan).
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  People who didn't receive benefit
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  People who should receive benefit
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  People who should receive benefit
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom variant="subtitle2">
                          Policy Alignment
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                            }
                            label="Fei Simmons"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
                            }
                            label="Sabrina Smith"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            icon={<CalendarTodayTwoTone />}
                            label="01/01/2022"
                            variant="outlined"
                            color="default"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Are there any regulatory / legal policies we must
                              adhere to?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  NYC 1894-A (HR Vendors), CorpCo Best Practices
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  NYC 1894-A (HR Vendors), IEEE Standards
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              For compliance standardization, which metrics must
                              be used?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Disparate Impact
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Disparate Impact
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom variant="subtitle2">
                          Technical Alignment
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                            }
                            label="Fei Simmons"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            avatar={
                              <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                            }
                            label="George Johnson"
                            variant="outlined"
                          />
                          <Chip
                            size="small"
                            icon={<CalendarTodayTwoTone />}
                            label="12/22/2021"
                            variant="outlined"
                            color="default"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Which security policies must be used?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Evaluate the model for adversarial robustness,
                                  Model shall be protected against data
                                  poisoning attacks
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Evaluate the model for adversarial robustness
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Is dataset security a concern for this use case?
                            </Typography>
                            <Stack spacing={1}>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  No
                                </Box>
                              </Card>
                              <Card variant="outlined">
                                <Box p={1} color="text.secondary">
                                  Yes
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
