import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import InfoCard from "../Components/InfoCard";
import TextButton from "../Components/TextButton";

function HomePage() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <section>
        <InfoCard
          title={"Cut down on meat with our tailored meal plan"}
          text={
            "Why not start your journey today? Tell us more about your meal time preferences to create a plan that suits you."
          }
          button={
            <Link to={"/createplan"}>
              <TextButton text={"Customise my plan"} />
            </Link>
          }
        />
      </section>
    </div>
  );
}

export default HomePage;
