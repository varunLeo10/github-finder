import React, { useEffect, useRef } from "react";

function About() {
  const text = useRef(`<div class="version">
  <p style={{ alignItems: "flex-start" }}>
    Version:<strong> 1.0.0</strong>
  </p>
  <p>Developed by: <a href="https://github.com/varunLeo10/github-finder-app">Varun Varier</p>
</div>`);
  useEffect(() => {
    document
      .querySelector(".app__footer")
      .insertAdjacentHTML("beforeend", text.current);
    return () => {
      document.querySelector(".version").remove();
    };
  }, []);
  return (
    <div className="about" style={style}>
      <h1>Github Finder</h1>
      <p>A React app to search for GitHub profiles and see profile details.</p>
    </div>
  );
}
const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export default About;
