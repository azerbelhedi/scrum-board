import React from "react";
import ProjectBox from "./ProjectBox";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import database from "../../Database/Database";
import products from "../../Database/components/Products";

const Home = ({ match }) => {
  let [projects, setProjects] = React.useState([]);
  let [searchString, setSearchString] = React.useState("");
  let [filtredProjects, setFiltredProjects] = React.useState([]);

  const useStyles = makeStyles(theme => ({
    button: {
      // margin: theme.spacing(1),
      width: "100%",
      height: "100%"
    },
    input: {
      display: "none"
    }
  }));

  const classes = useStyles();

  React.useEffect(() => {
    products.getProducts(data => {
      // console.log(data);
      setProjects([...projects, ...data]);
      setFiltredProjects([...projects, ...data]);
    });
  }, []);

  const filterSearch = localSearchString => {
    let goodProjects = [];
    projects.map(project => {
      let match = false;
      if (
        project.name
          .trim()
          .toLowerCase()
          .includes(localSearchString.trim().toLowerCase()) ||
        localSearchString === ""
      ) {
        match = true;
      }
      if (match) {
        goodProjects.push(project);
      }
    });
    setFiltredProjects(goodProjects);
  };

  const handleStringSearchChange = e => {
    setSearchString(e.target.value);
    filterSearch(e.target.value);
  };

  const createNewProject = name => {
    let newProjectsList = [
      ...projects,
      {
        name: name,
        sprint: 0,
        totalSprints: 0,
        progress: 0
      }
    ];
    setProjects(newProjectsList);
    setFiltredProjects(newProjectsList);
    setSearchString("");
    // console.log(database.store)
    // database.db
    //   .collection("projects")
    //   .doc(name)
    //   .set({
    //     name: name,
    //     sprint: 0,
    //     totalSprints: 0,
    //     progress: 0
    //   });
    products.addProduct(name);
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={8}>
            <SearchBar
              handleStringSearchChange={handleStringSearchChange}
              searchString={searchString}
            />
          </Col>
          <Col xs={4}>
            <Button
              variant="contained"
              color="primary"
              disabled={filtredProjects.length !== 0}
              className={classes.button}
              onClick={() => {
                createNewProject(searchString);
              }}
            >
              Create
            </Button>
          </Col>
        </Row>
        <Row>
          {filtredProjects.map((project, i) => {
            return (
              <Col lg={3} md={4} sm={6} xs={12}>
                <ProjectBox {...project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
