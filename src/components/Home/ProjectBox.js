import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Colors from "../Chart/Chart";
import "./ProjectBox.css";
import { Link } from "react-router-dom";

export default function ProjectBox(props) {

  const useStyles = makeStyles({
    card: {
      width: "95%",
      backgroundColor: props.color,
      margin: "10px"
    }
  });
  const classes = useStyles();

  return (
    <Link className="no-link-ui" to={`/backlog/${props.name}`}>
      <Card className={classes.card + " project-box"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" component="p">
            sprint : {props.sprint}/{props.totalSprints} ({props.progress}%)
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
