import React from "react";
import { nanoid } from "nanoid";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getFilter } from "redux/contactsSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  let inputFilterId = nanoid();
  const filterChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor={inputFilterId}>
        Find contacts by name
      </label>
      <input
        id={inputFilterId}
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={filterChange}
      />
    </div>
  );
}
