export const reducer = (states, actions) => {
  switch (actions.type) {
    case 'add':
      return { ...states, count: Number(states.num1) + Number(states.num2)};
    case 'sub':
      return { ...states, count: Number(states.num1) - Number(states.num2)};
      
    case 'mul':
      return { ...states, count: Number(states.num1) * Number(states.num2)};    
   case 'div':
          return { ...states, count: (Number(states.num1) / Number(states.num2)).toFixed(2)}; 
          
          
    case 'pow':
            return { ...states, count: Math.pow(Number(states.num1) , Number(states.num2))};    
    
    case 'reset':
      return { ...states, count: 0,num1:0,num2:0 };
    default:
      return states;
  }
};
