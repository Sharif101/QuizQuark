import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  let { name, logo } = quiz;
  return (
    <div>
      {/* <h3>{name}</h3> */}

      <CardGroup>
        <Card className="p-2">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <div className="quiz-btn d-flex justify-content-between">
              <Card.Title>{name}</Card.Title>
              <button>
                practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </div>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Quiz;
