import React from "react";
import Vision_img from "../images/glass1.jpeg";
import { Card } from "react-bootstrap";
import "./Vision.css";

function Vision() {
  return (
    <div className="container m-5">
      <div className="row h2">
        <div className="col">
          <h2>Our Vision</h2>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-4">
          <Card.Img src={Vision_img} />
        </div>
        <div className="col-sm-8 text-left">
          <div className="text-left" style={{ color: "#ffffff" }}>
            To end hunger and poverty by pioneering sustainablility. Our
            Principles Through our work to end hunger, we have recognized these
            five principles as being fundamental to The Hunger Project. We
            challenge ourselves to ensure that each of our strategies builds on
            these principles.
            <ol>
              <li>
                Human Dignity.
                <ul>
                  All human beings are born free and equal in dignity and
                  rights, including the right to food, health, work and
                  education. The inherent nature of every person is creative,
                  resourceful, self-reliant, responsible and productive. We must
                  not treat people living in conditions of hunger as
                  beneficiaries, which can crush dignity, but rather as the key
                  resource for ending hunger.
                </ul>
              </li>
              <li>
                Interconnectedness.{" "}
                <ul>
                  Our actions are shaped by, and affect, all other people and
                  our natural environment. Hunger and poverty are not problems
                  of one country or another but are global issues. We must solve
                  them not as “donors and recipients” but as global citizens,
                  working as coequal partners in a common front to end hunger.
                </ul>
              </li>
              <li>
                Sustainability.{" "}
                <ul>
                  Solutions to ending hunger must be sustainable locally,
                  socially, economically and environmentally.
                </ul>
              </li>
              <li>
                Decentralization.{" "}
                <ul>
                  Individual and community ownership of local development is
                  critical. Actions are most successful if decisions are made
                  close to the people. This requires effective national and
                  local government working in partnership with the people.
                </ul>
              </li>
              <li>
                Transformative Leadership.{" "}
                <ul>
                  Ending hunger requires a new kind of leadership: not top-down,
                  authority-based leadership, but leadership that awakens people
                  to their own power — leadership “with” people rather than
                  leadership “over” people. In sum, world hunger can be ended,
                  but not by merely doing more of the same. Hunger is primarily
                  a human issue, and ending hunger requires principles that are
                  consistent with our shared humanity.
                </ul>
              </li>
            </ol>
            <li>DONATE TO FOOD FOR THE HUNGRY</li>
          </div>
          {/* <p className='text-left' style={{color: '#ffffff'}}>
                A world where every woman, man and child leads a healthy, fulfilling life of self-reliance and dignity.
Our Mission







                </p> */}
        </div>
      </div>
    </div>
  );
}

export default Vision;
