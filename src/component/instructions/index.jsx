import { INSTRUCTIONS, INSTRUCTIONS_HEADING } from "../../util/content";

const Instructions = () => {
  return (
    <div>
      <h3 className="capitalize text-[#764a43] text-[17px] font-semibold">
        {INSTRUCTIONS_HEADING}
      </h3>
      <ul className="list-decimal ml-[17px] marker:text-[#764a43]">
        {INSTRUCTIONS.map((obj, index) => {
          return (
            <li
              key={`${index}-${obj.key}`}
              className="mt-[10px] text-[13px] pl-[30p]"
            >
              <span className="font-medium ">{obj.key}</span>
              <span className="ml-2">{obj.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Instructions;
