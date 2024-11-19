import React from "react";
import OptionCard from "../Components/OptionCard";
import { Link } from "react-router-dom";

function Option() {
  return (
    <>
      <div>
        <h1 className="text-5xl mt-20 ml-32 mb-20 font-extrabold tracking-widest text-primary">
          Are You a ?
        </h1>
      </div>

      <div className="flex justify-around ml-60 mr-60">
        <Link to="/PLogin">
          <div>
            <OptionCard name="PRINCIPLE" />
          </div>
        </Link>

        <Link to="/TLogin">
          <div>
            <OptionCard name="TEACHER" />
          </div>
        </Link>

        <Link to="/">
          <div>
            <OptionCard name="STUDENT" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Option;
