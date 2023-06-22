import Carousel from "../../../common/Carousel";

const SingleRoom = ({ cards }) => {
  console.log("cards", cards);
  return (
    <div
      style={{
        background: " bisque",
        margin: "auto",
        padding: "10px",
        color: "black",
      }}
    >
      <Carousel cards={cards} />
    </div>
  );
};

export default SingleRoom;
