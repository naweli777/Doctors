import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  TextField,
  MenuItem,
  Chip,
} from "@material-ui/core";
import Doctors from "../../index.json";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  btn: {
    height: 52,
  },
}));

const Specialties = [
  { label: "Select Specialties", value: "All" },
  { label: "Dentist", value: "Dentist" },
  { label: "General Physician", value: "General Physician" },
  { label: "Pediatrician", value: "Pediatrician" },
  { label: "Ayurveda", value: "Ayurveda" },
  { label: "Orthopedist", value: "Orthopedist" },
  {
    label: "Gynecologist/obstetrician",
    value: "Gynecologist/obstetrician",
  },
  { label: "Gynecologist", value: "Gynecologist" },
  { label: "Homeopath", value: "Homeopath" },
  { label: "Cardiologist", value: "Cardiologist" },
  { label: "General Surgeon", value: "General Surgeon" },
  { label: "Ophthalmologist", value: "Ophthalmologist" },
  {
    label: "Ophthalmologist/ Eye Surgeon",
    value: "Ophthalmologist/ Eye Surgeon",
  },
  {
    label: "Dermatologist/cosmetologist",
    value: "Dermatologist/cosmetologist",
  },
  { label: "Spa", value: "Spa" },
  { label: "Dermatologist", value: "Dermatologist" },
  { label: "Oral Surgeon", value: "Oral Surgeon" },
  { label: "Physiotherapist", value: "Physiotherapist" },
  { label: "Dental Surgeon", value: "Dental Surgeon" },
  { label: "Urologist", value: "Urologist" },
  {
    label: "Ear-nose-throat (ent) Specialist",
    value: "Ear-nose-throat (ent) Specialist",
  },
  { label: "Orthodontist", value: "Orthodontist" },
  { label: "Diabetologist", value: "Diabetologist" },
  { label: "Psychiatrist", value: "Psychiatrist" },
  { label: "Endodontist", value: "Endodontist" },
];

const DoctorSearch = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [specialties, setSpecialties] = useState("All");
  const [data, setData] = useState(Doctors || []);
  const handleSpecialties = (event) => {
    const value = event.target.value;
    if (Boolean(value) && value !== "All") {
      const result = Doctors?.filter(
        (doctor) => value && doctor.specialisation.includes(value)
      );
      setData(result);
      setSpecialties(value);
    } else {
      setData(Doctors);
      setSpecialties(value);
    }
  };

  const handleSearch = (text) => {
    const formattedQuery = text;
    let filteredData;
    filteredData = Doctors?.filter((val) => contains(val, formattedQuery));
    setData(filteredData);
    setName(text);
  };

  const contains = ({ doctor_name }, query) =>
    !!doctor_name.toLowerCase().includes(query.toLowerCase());

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4} md={4} sm={12}>
                  <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    value={specialties}
                    onChange={handleSpecialties}
                    label="Select"
                    helperText="Specialties"
                    variant="outlined"
                  >
                    {Specialties.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={8} sm={12} md={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Search doctors by name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data?.map((doctor, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={doctor?.doctor_profile_url}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {doctor?.doctor_name}
                    </Typography>
                    {doctor?.specialisation.map((item, index) => (
                      <Chip
                        key={index}
                        style={{ margin: 2 }}
                        color="secondary"
                        label={item}
                        onClick={() => null}
                      />
                    ))}
                    <Typography>{doctor?.summary}</Typography>
                    {Object.keys(doctor?.availability).map((item) => (
                      <Chip
                        variant="outlined"
                        size="small"
                        disabled={!doctor?.availability[item]}
                        style={{ margin: 1 }}
                        color={
                          doctor?.availability[item] ? "primary" : "secondary"
                        }
                        label={item.toUpperCase()}
                        onClick={() => null}
                      />
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {"View"}
                    </Button>
                    <Button size="small" color="primary">
                      {"Appointment"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {!data.length && (
              <Typography align="center">{"No Doctors Available"}</Typography>
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default DoctorSearch;
