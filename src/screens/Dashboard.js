import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
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
      <Card style={{ paddingLeft: "6rem" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/notes" className="btn btn-primary w-100 mt-3">
            View Notes
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
