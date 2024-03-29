import FoodImage from "../../assets/images/image-omelette.jpeg";
import { RECEIPE_DESCRIPTION, RECEIPE_NAME } from "../../util/content";
import Ingredients from "../ingredients";
import Instructions from "../instructions";
import Nutrition from "../nutrition";
import Preparation from "../preparation";

const Card = () => {
  return (
    <div
      className="w-[100%] md:w-[40%] h-[90%] bg-white 
        rounded-[15px] "
    >
      <div className="rounded-[15px] w-full h-[300px] overflow-hidden md:p-[20px]">
        <img
          src={FoodImage}
          alt="food image"
          className="object-fill w-full h-full rounded-[15px]"
        />
      </div>
      <div className="p-[20px]">
        <div className="mt-[20px]">
          <h1
            className="text-[27px] font-semibold capitalize font-young-serif"
            style={{ letterSpacing: "2px", wordSpacing: "4px" }}
          >
            {RECEIPE_NAME}
          </h1>
          <p className="text-[13px] mt-[10px] font-outfit-thin">{RECEIPE_DESCRIPTION}</p>
        </div>
        <div className="mt-[20px]">
          <Preparation />
        </div>
        <div className="mt-[14px] mb-[15px]">
          <Ingredients />
        </div>
        <hr />
        <div className="mt-[14px] mb-[15px]">
          <Instructions />
        </div>
        <hr />
        <div className="mt-[14px] mb-[15px]">
          <Nutrition />
        </div>
      </div>
    </div>
  );
};

export default Card;
