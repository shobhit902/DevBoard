import React from "react";
import Widget from "../Components/Widget";

const Home = () => {
 const handleRemove = () => {
    alert("Widget removed!");
  };
  return (
    <>
      <Widget title="Quote of the Day" onRemove={handleRemove}>
        <p>"The best way to get started is to quit talking and begin doing."</p>
      </Widget>{" "}
      <section className="bg-gray-200 ">
        <h1 className="p-10">Shobhit rawat</h1>

        <p className="p-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          sapiente quam voluptate consequatur, sequi in! Minima molestiae
          voluptate reiciendis harum. Nostrum qui soluta adipisci! Incidunt odit
          accusamus rerum labore aliquam!
        </p>
        <p className="p-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          sapiente quam voluptate consequatur, sequi in! Minima molestiae
          voluptate reiciendis harum. Nostrum qui soluta adipisci! Incidunt odit
          accusamus rerum labore aliquam!
        </p>
        <p className="p-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          sapiente quam voluptate consequatur, sequi in! Minima molestiae
          voluptate reiciendis harum. Nostrum qui soluta adipisci! Incidunt odit
          accusamus rerum labore aliquam!
        </p>
      </section>
    </>
  );
};

export default Home;
