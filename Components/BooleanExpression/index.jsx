import {  useState } from "react";
import Arguments from "./Arguments";
import Operations from "./Operations";

const BooleanExp = () => {
  const [args, setArgs] = useState([]);
  const [op, setOp] = useState({ type: "constant", value: "false" });

  const performLogic = (operation)=>{
    switch (operation.type) {
      case "constant":
        return operation.value === "true";
      case "argument":
        const res = args.filter((arg) => operation.value === arg.name);
        return res[0] ? res[0].value === "true" : false;
      case "or":
        return performLogic(operation.left) || performLogic(operation.right);
      case "and":
        return performLogic(operation.left) && performLogic(operation.right);
      default:
        return false;
    }
  }

  
  return (
    <div>
      <Arguments args={args} setArgs={setArgs} />
      <h2>Operation</h2>
      <Operations op={op} setOp={setOp} args={args}/>
      {/* <button onClick={()=>{performLogic(op)}}>Perform logic</button> */}
      <h2>Result : {performLogic(op).toString()}</h2>
    </div>
  );
};

export default BooleanExp;



/*

1. Constant
{ type: "constant", value: "false" }

2. Argument
{ type: "argument", value: "argName" }

3. OR
{ type: "or", 
    left: { type: "constant", value: "false" },
    right: { type: "argument", value: "argName" }
}

4. AND
{ type: "and", 
    left: { type: "constant", value: "false" },
    right: { type: "constant", value: "false" }
}

*/
