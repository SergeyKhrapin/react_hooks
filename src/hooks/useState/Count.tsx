import { useState, FC } from "react";
import { HookName } from "../../types/types";
import Country from "./FetchThenRender/Country"

// Key points:

// 1. useState can take a callback to set an initial value. *

// 2. useState can take an object as initial value.
// In this case when state is updated - all fields should be passed in to updater (setCount).
// Otherwise, field will be removed from the state object.
// But it is recommended to use useState() multiple times instead of passing in an object to it as an initial value !

// 3. Good practice = pass in a callback rather than a new state value to updater (setCount). **
// First of all, this makes us sure we really deal with a current state.
// Moreover, using a callback we do not need access to a state variable in the current component.

// 4. As mentioned above - multiple states are allowed, i.e. useState can be called multiple times in one component.

const Count: FC<HookName> = () => {
  console.log("Count");
  
  //   const [count, setCount] = useState<number>(initState()); // Bad practice
  const [count, setCount] = useState<number>(() => initState()); // * Good practice

  function initState() {
    console.log("Some expensive calculation");
    return 0;
  }

  return (
    <div className="row">
      <div className="col-3">
        <span>Count {count}</span>
      </div>
      <div className="col-3">
        <button className="btn btn-success me-2" onClick={() => setCount(count => ++count)}>
          +
        </button>
      </div>
      {/*
          ! A tricky usage of key prop !
          Every time when key changes, state of Country component updates to the initial value (empty array) ***
       */}
      <Country key={count}>
        <OtherComponent />
      </Country>
    </div>
  );
};

// When Country updates OtherComponent won't be rerendered because it is passed as children prop to parent component
const OtherComponent = () => {
  // console.log('OtherComponent');
  
  return (
    <p>Some Other Component</p>
  );
};

export default Count;
