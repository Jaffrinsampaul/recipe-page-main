import {
  NUTRITION,
  NUTRITION_DESCRIPTION,
  NUTRITION_HEADER,
} from "../../util/content";

const Nutrition = () => {
  return (
    <div>
      <h3 className="capitalize text-[#764a43] font-semibold text-[17px]">
        {NUTRITION_HEADER}
      </h3>
      <p className="text-[14px] capitalize mt-[15px]">
        {NUTRITION_DESCRIPTION}
      </p>
      <div className="mt-[20px]">
        {NUTRITION.map((obj, index) => {
          return (
            <>
              <div key={`${index}-${obj.key}`} className="flex justify-between h-[30px] pl-[20px] mt-[10px]">
                <div className="w-[50%]  ">
                  <p className="capitalize text-[15px] opacity-70">{obj.key}</p>
                </div>
                <div className="w-[50%] ">
                  <p className="font-semibold text-[#764a43]">{obj.description}</p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Nutrition;
