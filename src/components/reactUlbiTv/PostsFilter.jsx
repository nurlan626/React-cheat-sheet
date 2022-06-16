import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostsFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.searchQuery}
        onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}
        placeholder="Поиск"
      />
      <MySelect
        value={setFilter.selectetSort}
        onChange={selectedSort => setFilter({...filter, selectedSort: selectedSort})}
        options={[
          { name: "по названию", value: "title" },
          { name: "по описанию", value: "body" },
        ]}
        defaultValue="сортировка по"
      />
    </div>
  );
};

export default PostsFilter;
