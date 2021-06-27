import React from "react";
import Section from "../../components/Section/Section";
import jellies from "../../assets/images/jellies-2.png";

export default function Home() {
  return (
    <>
      <Section>
        <img src={jellies} alt="jellies" />
        <p>fullstack engineer // graphic designer</p>
      </Section>
    </>
  );
}
