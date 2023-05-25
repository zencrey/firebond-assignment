
const Arguments = ({ args, setArgs }) => {
    const addArgument = () => {
      let newArgs = [...args];
      newArgs.push({ name: "", value: "false" });
      setArgs(newArgs);
    };
  
    const changeArgName = (e, index) => {
      let newArg = [...args];
      newArg[index].name = e.target.value;
      setArgs(newArg);
    };
  
    const changeArgValue = (e, index) => {
      let newArg = [...args];
      newArg[index].value = e.target.value;
      setArgs(newArg);
    };
  
    const deleteArg = (e, index) => {
      setArgs(args.filter((arg, ind) => ind !== index));
    };
  
    return (
      <div>
        
       
        {args.map((arg, index) => {
          return (
            <div key={`${index}`}>
              <input
                type="text"
                placeholder="Enter argument name"
                value={arg.name}
                onChange={(e) => changeArgName(e, index)}
              />
              <select
                value={arg.value}
                onChange={(e) => changeArgValue(e, index)}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <button onClick={(e) => deleteArg(e, index)}>X</button>
            </div>
          );
        })}
        <button onClick={addArgument}>Add Argument</button>
      </div>
    );
  };
  
  export default Arguments;
  