import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const imgStyle = {
    width: "50%",
    border: "5px solid black",
  };

  return (
    <div className="bg-danger text-primary text-center mt-2">
      <h1>Hallo</h1>
      <p className="par">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, sequi.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/05/07/09/59/mountains-7976041_1280.jpg"
        alt=""
      />

      <button className="button">SEND</button>

      <p style={{ backgroundColor: "gray" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptatibus accusantium ratione debitis distinctio, rem laboriosam quas
        qui, fugiat sapiente quaerat ipsum natus, omnis itaque voluptatem
        officiis nemo repudiandae beatae.
      </p>
    </div>
  );
};

export default Main;
