import { fontWeight } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const storedData = JSON.parse(localStorage.getItem("userData"));
let damm = false; //user does not exists
if (storedData && storedData.token) {
  damm = storedData.who;
}

function Login() {
  let login_button;
  const [whoLogged, setWhoLogged] = useState(damm); //NUll means no is looged in
  // if (!whoLogged && damm) {
  //   setWhoLogged(damm);
  // }
  console.log("Stored data", storedData);
  // if (storedData && storedData.token) {
  //   setWhoLogged(storedData.who);
  // }

  if (whoLogged) {
    login_button = storedData.name;
  } else {
    login_button = "Login";
  }
  return (
    <div>
      <Container fluid>
        {whoLogged ? (
          <label className="name-text" style={{padding: '1px 20px'}}>
            {login_button}
          </label>
          // <button>
          // </button>
          // <Button variant="primary" size="bg" active>
          // </Button>
        ) : (
          <Link to={"/api/auth"}>
            <Button variant="primary" size="bg" active>
              {login_button}
            </Button>
          </Link>
        )}{" "}
        {whoLogged?(<Link to={"/"}>

        <Button
          variant="primary"
          size="bg"
          active
          onClick={() => {
            // console.log("reached here")
            localStorage.removeItem("userData");
            setWhoLogged(false);
            damm = false;
          }}
          >
          Logout
        </Button>
          </Link>):(null)}{" "}
          {(storedData && storedData.who=='hotel')?
          (<Link to={"/provider"}>
            <Button>
              Send Food
            </Button>
          </Link>):(null)
          }{" "}
          {(storedData && storedData.who=='user')?
          (<Link to={"/consumer"}>
            <Button>
              Get Food
            </Button>
          </Link>):(null)
          }
      </Container>
    </div>
  );
}

export default Login;
