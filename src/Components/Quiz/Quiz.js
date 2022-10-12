import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Quiz = ({ quiz }) => {
  let { name, logo, total, id } = quiz;

  let navigate = useNavigate();
  let handlenavigate = () => {
    navigate(`quiz/${id}`);
  };
  return (
    <div>
      {/* <h3>{name}</h3> */}

      <CardGroup>
        <Card className="p-2 quiz-card mb-5">
          <Card.Img className="quiz-img" variant="top" src={logo} />
          <Card.Body>
            <div className="quiz-btn d-flex justify-content-between">
              <Card.Title className="quiz-title">{name}</Card.Title>
              <button onClick={handlenavigate}>
                practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </div>
            <Card.Text>
              <p className="quiz-para">Total Question here: {total}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Quiz;
