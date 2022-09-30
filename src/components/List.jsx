import React from "react";

const List = ({ listItems, filterBy, value }) => {
  return (
    <div className="sm:w-1/2 md:w-1/2 xl:w-1/6 pr-2" style={{ minWidth: "8em", maxWidth: "12em" }}>
      <select
        onChange={(e) => filterBy(e.target.value)}
        defaultValue={value}
        className=" font-bold w-full rounded-full px-6 border-0 py-2.5  cursor-pointer text-gray-500 bg-white shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option>All</option>
        {listItems?.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default List;
