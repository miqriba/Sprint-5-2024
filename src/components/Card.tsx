import React from "react";
import { useState } from "react";
import Indicator from "./Indicator";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  items: {}[];
  nextStep: (a: number) => number;
  prevStep: (a: number) => number;
}

function Card1({ items, nextStep, prevStep }: Props) {
  const [step, setStep] = useState(0);
  const canviarStepCard = (a) => {
    setStep(a);
  };
  return (
    <>
      <Card
        id="card"
        className="rounded-5 shadow border-0 height"
        style={{ width: "18rem" }}
      >
        <div
          className="rounded-top-5 top d-flex flex-column justify-content-center"
          id="contenidorImatge"
          style={{ background: `${items[step].bgColor}` }}
        >
          <Card.Img variant="top" src={items[step].image} />
        </div>

        <Card.Body className="d-flex flex-column h-25">
          <Card.Title className="fs-6 fw-bold">{items[step].title}</Card.Title>
          <Card.Text className="text">{items[step].description}</Card.Text>
          <div
            id="botonsIndicator"
            className="d-flex flex-row justify-content-between align-items-center"
          >
            <div className="d-flex">
              <Indicator
                className="justify-self-start"
                items={items}
                pas={step}
                thisFunction={canviarStepCard}
              />
            </div>
            <div className="d-flex">
              {step === 0 ? null : (
                <Button
                  className="justify-self-end m-1 anterior rounded-circle border-dark"
                  onClick={() => setStep(prevStep(step))}
                  variant="outline-light"
                >
                  <img
                    className="anterior"
                    src="src/assets/arrow-left.svg"
                    alt=""
                  />
                </Button>
              )}
              {step === 2 ? null : (
                <Button
                  className="justify-self-end m-1 seguent rounded-circle"
                  onClick={() => setStep(nextStep(step))}
                  variant="dark"
                >
                  <img src="src/assets/arrow-right.svg" alt="" />
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Card1;
