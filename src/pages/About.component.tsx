import React, { useEffect } from "react";
import axios from "../../middleware/axios.middleware.tsx";
function About() {
  useEffect(() => {
    let data = JSON.stringify({ correo: "fer@correo.com" });

    let config = {
      method: "post",
      url: "/finduser", // Ya no necesitas toda la URL si usaste baseURL
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    // Usas 'api' en lugar de 'axios'
    axios
      .request(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div id="about">About</div>;
}

export default About;
