import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import "antd/dist/antd.css";

import "./form.css";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 18,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
};

const AddFood = () => {
  const url = "http://localhost:4000/addFood";
  const [foodItem, setFoodItem] = useState({
    name: "",
    description: "",
  });

  const onFinish = (values) => {
    console.log(values);
  };
  const handle = (e) => {
    const newFoodItem = { ...foodItem };
    newFoodItem[e.target.id] = e.target.value;
    setFoodItem(newFoodItem);
    console.log(newFoodItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: foodItem.name,
        description: foodItem.description,
      })
      .then((res) => {
        console.log(res.foodItem);
        alert("New item added");
        window.location = "/";
      });
  };

  return (
    <div className="form">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        onSubmitCapture={(e) => handleSubmit(e)}
      >
        <Form.Item
          name={["food", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => handle(e)} id="name" value={foodItem.name} />
        </Form.Item>

        <Form.Item name={["food", "description"]} label="Description">
          <Input.TextArea
            onChange={(e) => handle(e)}
            id="description"
            value={foodItem.description}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddFood;
