import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
  Avatar,
  Link,
} from "@material-ui/core";

const JobCard = ({ job }) => {
  const {
    companyName,
    jobRole,
    location,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
    logoUrl,
    jdLink,
    minExp,
    maxExp,
  } = job;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <Avatar alt={companyName} src={logoUrl} className={classes.avatar} />
        <div className={classes.titleContainer}>
          <Typography variant="h6" component="h2" className={classes.title}>
            {jobRole}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.subtitle}
          >
            {companyName} - {location}
          </Typography>
        </div>
      </div>
      <CardContent>
        <Typography variant="body1" className={classes.salary}>
        Estimated Salary : {minJdSalary? `${minJdSalary} - ` : ""} {maxJdSalary} {salaryCurrencyCode}
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Experience Required:</strong> {minExp} - {maxExp} years
        </Typography>
        <Typography variant="body2" paragraph>
          {jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          href={jdLink}
          target="_blank"
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    borderRadius: "8px",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontStyle: "italic",
  },
  salary: {
    color: "#3f51b5",
    marginBottom: theme.spacing(1),
  },
}));

export default JobCard;
