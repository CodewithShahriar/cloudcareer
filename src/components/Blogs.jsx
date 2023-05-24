import React from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Blogs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <>
      {/* header section */}
      <section className="bg-blue-50 relative drop-shadow-xl pb-32">
        <h1 className="text-4xl font-bold text-center">Blogs</h1>
        <img
          className="absolute w-72 bottom-0"
          src="https://i.postimg.cc/fyYqcPsw/vector.png"
          alt=""
        />
      </section>

      {/* Blog page body */}
      <div className="mt-20 my-container drop-shadow-xl">
        <h1 className="text-5xl font-bold text-gray-900 p-5 rounded-lg mb-8 border-2 text-center bg-gradient-to-r from-blue-500 to-purple-400 hover:from-purple-400 hover:to-blue-500 duration-700 ">
          Some Questions
        </h1>

        {/* differences between props and states */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            1. When should you use context API?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#Context API: </span>
              State is Context provides a way to share values between components
              without having to explicitly pass a prop through every level of
              tree. To avoid prop drilling we can use context API
            </h5>
          </div>
        </div>

        {/* How does useState work in react? */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            2. What is custom hook?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#Custom Hook: </span>A
              custom hook is a special JavaScript function whose name starts
              with 'use' and can be used to call other hooks. To create a custom
              hook, we can simply define a function that uses built-in hooks and
              returns some state or behavior that can be used by other
              components. Custom hooks can be used in the same way as built-in
              hooks, by calling them inside a functional component. The custom
              hook can return any data or functionality that we need to use in
              our component.
            </h5>
          </div>
        </div>

        {/* useEffect hook */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            3. What is useRef?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#useRef: </span>The
              useRef hook is a built-in hook in React that allows you to create
              a mutable reference that persists across re-renders of a
              component. It returns a mutable ref object that you can attach to
              a DOM element or a component instance, and access its current
              value.
            </h5>
          </div>
        </div>

        {/* How does react work */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            4. What is useMemo?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#useMemo: </span>useMemo
              is a built-in hook that allows us to memoize expensive
              calculations and avoid unnecessary re-renders of our components.
              It takes a function and a list of dependencies, and returns a
              memoized value that only recalculates when the dependencies
              change.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
