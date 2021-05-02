import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { TextareaAutosize } from "@material-ui/core";
import { useAuth } from "../AuthContext";
import SidebarComponentDashboard from "../sidebar/sidebarDashboard";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";

export default function Dashboard() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <SidebarComponentDashboard />
      <Card
        style={{
          paddingLeft: "6rem",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <h1
            style={{
              fontFamily: "Nunito",
              alignItems: "center",
              fontSize: 24,
              padding: 10,
            }}
          >
            Profile
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <p
            style={{
              fontFamily: "Nunito",
              alignItems: "center",
              fontSize: 18,
              padding: 10,
            }}
          >
            <strong>Email:</strong> {currentUser.email}
          </p>
          <div>
            <Button
              // className="w-100"
              type="submit"
              style={{
                fontFamily: "Nunito",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#D2D2D2",
                // color: "#FFFFFF",
                fontSize: 18,
                borderRadius: 10,
              }}
            >
              <Link to="/update-profile" style={{ textDecoration: "none" }}>
                Update Profile
              </Link>
            </Button>
          </div>

          <div>
            <Button
              // className="w-100"
              type="submit"
              style={{
                fontFamily: "Nunito",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#D2D2D2",
                // color: "#FFFFFF",
                fontSize: 18,
                borderRadius: 10,
              }}
            >
              <Link to="/notes" style={{ textDecoration: "none" }}>
                View Notes
              </Link>
            </Button>
          </div>

          <div>
            <Button
              variant="link"
              onClick={handleLogout}
              type="submit"
              style={{
                fontFamily: "Nunito",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#D2D2D2",
                // color: "#FFFFFF",
                fontSize: 18,
                borderRadius: 10,
              }}
            >
              Log Out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
