import { PREPARATION_HEADING, PREPARATION_TIME } from "../../util/content";

const Preparation = () => {
  return (
    <div
      className="bg-[#fff7fc] p-[30px] 
    rounded-[15px] mt-[20px]"
    >
      <h3 className="capitalize text-[#7e4059]  font-medium">
        {PREPARATION_HEADING}
      </h3>
      <ul className="list-disc ml-[17px]">
        {PREPARATION_TIME.map((obj, index) => {
          return (
            <li key={`${index}-${obj.key}`} className="mt-[10px] marker:text-[#7e4059]">
              <p className="text-[13px]">
                <span className=" capitalize text-[15px] font-medium">
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
