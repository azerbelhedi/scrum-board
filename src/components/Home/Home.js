import React from "react";
import ProjectBox from "./ProjectBox";
import { Container, Row, Col } from "react-bootstrap";
import Colors from "../Chart/Chart";
import SearchBar from "./SearchBar";

const Home = ({ match }) => {
  let [projects, setProjects] = React.useState([]);
  let [searchString, setSearchString] = React.useState("");
  let [filtredProjects, setFiltredProjects] = React.useState([]);

  React.useEffect(() => {
    setProjects([
      ...projects,
      {
        name: "Mysterio",
        sprint: 3,
        totalSprints: 7,
        progress: 15,
        color: Colors.color1
      },
      {
        name: "Pepper Academy",
        sprint: 1,
        totalSprints: 8,
        progress: 9,
        color: Colors.color2
      }
    ]);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <SearchBar setSearchString = {setSearchString} searchString = {searchString} />
        </Row>
        <Row>
          {projects.map((project, i) => {
            return (
              <Col lg={3} md={4} sm={6} xs={12}>
                <ProjectBox {...project}   />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
