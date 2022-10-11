import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is purpose of react router</Accordion.Header>
          <Accordion.Body>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>how does context api works</Accordion.Header>
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>what is href hook in react</Accordion.Header>
          <Accordion.Body>
            You can extract stateful logic from a component so it can be tested
            independently and reused. Hooks are a new addition in React 16.8.
            They let you use state and other React features without writing a
            class. Refs are a function provided by React to access the DOM
            element and the React element that you might have created on your
            own. They are used in cases where we want to change the value of a
            child component, without making use of props and all.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
