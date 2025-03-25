import React from "react";
import { useCurrentUser } from "../hooks/use-current-user.ts";

const HelloWorldAuthenticated = () => {
  const currentUser = useCurrentUser();
  return <div>Hello inertia from Phoenix and React! {currentUser.email}</div>;
};

export default HelloWorldAuthenticated;
