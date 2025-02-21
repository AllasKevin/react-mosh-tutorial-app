import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  //console.log(register("name"));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="MyName" className="form-label">
          Name
        </label>
        <input
          {...register("Name")}
          id="MyName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="MyAge" className="form-label">
          Age
        </label>
        <input
          {...register("Age")}
          id="MyAge"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
