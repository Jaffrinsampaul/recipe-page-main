import { INGREDIENTS, INGREDIENTS_HEADING } from "../../util/content";

const Ingredients = () => {
  return (
    <div>
      <h3 className="capitalize text-[#764a43] font-young-serif text-[18px]">{INGREDIENTS_HEADING}</h3>
      <ul className="list-disc ml-[17px]">
        {INGREDIENTS.map((elm, index) => {
          return (
            <li key={`${index}-${elm}`} className="mt-[10px] text-[13px] marker:text-[#764a43] font-outfit-thin">
              {elm}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
