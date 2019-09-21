import React from "react";
import ProjectBox from "./ProjectBox";
import { Container, Row, Col } from "react-bootstrap";

const Home = ({ match }) => {
  let [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    setProjects([
      ...projects,
      {
        name: "Mysterio",
        sprint: 3,
        totalSprints: 7,
        progress: 15
      },
      {
        name: "Pepper Academy",
        sprint: 1,
        totalSprints: 8,
        progress: 9
      }
    ]);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          {projects.map((project, i) => {
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
