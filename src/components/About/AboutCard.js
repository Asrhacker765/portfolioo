import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong className="blue">Ayush Sisodiya </strong>
            from <strong className="blue"> Bengaluru, India.</strong>
            <br></br>
            I  am currently doing a Bachelor's in Computer Science and Engineering from PES University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              --->  Exploring New Place
            </li>
            <li className="about-activity">
              --->  Swimming
            </li>
            <li className="about-activity">
              --->  Gymming
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
