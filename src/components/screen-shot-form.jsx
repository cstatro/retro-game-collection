import React from "react";
import { postConfig } from "../helpers/configs";
import { postScreenShot } from "../helpers/postGame";
import { toast } from "react-toastify";
const serialize = require("form-serialize");

const ScreenShotForm = props => {
  const handleChange = e => {};

  const handleSubmit = e => {
    e.preventDefault();
    const obj = serialize(e.target, { hash: true });
    const config = postConfig(obj);
    postScreenShot(config);
    props.addNewScreenShot(obj);
    e.target.reset();
    toast("Screen Shot Submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="screen-shot-form">
      <label>add a screenshot here</label>
      <input
        type="text"
        onChange={handleChange}
        name="url"
        placeholder="Enter Url"
      />
      <input type="submit" value="Submit" />
      <input type="hidden" name="game_id" value={props.id} />
    </form>
  );
};

export default ScreenShotForm;
