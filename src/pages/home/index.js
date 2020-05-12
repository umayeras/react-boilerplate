import React, { Fragment } from "react";
import Button from "../../components/shared/Button";

const Home = () => {
  return (
    <Fragment>
      <h1 data-testid="page-title">Home</h1>
      <Button className="btn btn-primary" text="Pirmary Button" />
    </Fragment>
  );
};

export default Home;
