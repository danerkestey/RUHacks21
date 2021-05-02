import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.js";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      {/* <Card> */}
      <Card style={{ fontFamily: "Nunito" }}>
        <Card.Body>
          <h1
            style={{
              fontFamily: "Nunito",
              textAlign: "center",
              fontSize: 24,
              padding: 10,
            }}
          >
            Log In
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group
              id="email"
              style={{
                fontFamily: "Nunito",
                textAlign: "center",
                fontSize: 18,
                padding: 10,
              }}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group
              id="password"
              style={{
                fontFamily: "Nunito",
                textAlign: "center",
                fontSize: 18,
                padding: 10,
              }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div
              style={{
                fontFamily: "Nunito",
                textAlign: "center",
                fontSize: 18,
                padding: 10,
              }}
            >
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div
        style={{
          fontFamily: "Nunito",
          textAlign: "center",
          fontSize: 18,
          padding: 10,
        }}
      >
        <Link to="/forgot">Forgot Password?</Link>
      </div>
      <div
        style={{
          fontFamily: "Nunito",
          textAlign: "center",
          fontSize: 18,
          padding: 10,
        }}
      >
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
