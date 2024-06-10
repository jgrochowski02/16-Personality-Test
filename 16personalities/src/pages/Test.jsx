import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import PersonalitiesHeader from "../components/PersonalitiesHeader/PersonalitiesHeader";
import UpperMenu from "../components/UpperMenu/UpperMenu";
import InfoTest from "../components/InfoTest/InfoTest";
import PersonalityForm from "../components/PersonalityForm/PersonalityForm";

const Test = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    navigate("/login"); // Przekierowanie niezalogowanych użytkowników na stronę logowania
    return null; // Można zwrócić null, aby nic nie renderować przed przekierowaniem
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white" }}>
      <PersonalitiesHeader />
      <UpperMenu />
      <InfoTest />
      {user && (
        <>
          <PersonalityForm />
        </>
      )}
    </div>
  );
};

export default Test;
