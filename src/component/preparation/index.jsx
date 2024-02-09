import { PREPARATION_HEADING, PREPARATION_TIME } from "../../util/content";

const Preparation = () => {
  return (
    <div
      className="bg-[#fff7fc] p-[30px] 
    rounded-[15px] "
    >
      <h3 className="capitalize text-[#7e4059] font-medium font-outfit-black">
        {PREPARATION_HEADING}
      </h3>
      <ul className="list-disc ml-[17px]">
        {PREPARATION_TIME.map((obj, index) => {
          return (
            <li key={`${index}-${obj.key}`} className="mt-[10px] marker:text-[#7e4059]">
              <p className="text-[13px] font-outfit-thin">
                <span className=" capitalize text-[15px] font-outfit-black">
                  {obj.key}
                </span>
                : {obj.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Preparation;
