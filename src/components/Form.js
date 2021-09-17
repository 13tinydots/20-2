import PropTypes from "prop-types";
import React from "react";

function Form({ handler, currentNum }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handler((prev) => [...prev, event.target.todo.value]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo" className="sr-only">
        What needs to be done?
      </label>
      <input type="text" id="todo" />
      <button
        type="submit"
        className="p-4 rounded-sm text-white bg-green-500 ml-2"
      >
        Add {currentNum}
      </button>
    </form>
  );
}

Form.propTypes = {
  handler: PropTypes.func.isRequired,
  currentNum: PropTypes.number.isRequired,
};

Form.defaultProps = {
  currentNum: 1,
};

export default Form;
