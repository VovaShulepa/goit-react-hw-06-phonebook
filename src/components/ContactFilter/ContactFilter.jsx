import css from "./ContactFilter.module.css";

import { useDispatch } from "react-redux";
import { filterContact } from "redux/filterSlice/filterSlice";
// import { selectVisibleContacts } from "redux/selectors";

export const ContactFilter = () => {
  // const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Contacts 📑</h2>
        <label className={css.filterLabel}>Find contact by name </label>
        <input
          className={css.filterName}
          type="text"
          name="filter"
          onChange={(e) => {
            const action = filterContact(e.target.value);
            dispatch(action);
          }}
        />
      </div>
    </>
  );
};
