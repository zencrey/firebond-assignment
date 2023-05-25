import {  useState } from "react";
import Arguments from "./Arguments";
import Operations from "./Operations";

const BooleanExp = () => {
  const [args, setArgs] = useState([]);
  const [op, setOp] = useState({ type: "select", value: "" });

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
      <br></br>
      <Operations op={op} setOp={setOp} args={args}/>
      <h2>Result : {performLogic(op).toString()}</h2>
    </div>
  );
};

export default BooleanExp;