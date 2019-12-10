import React, { useState }  from 'react';

interface HelloProps  {
    who : string,
    i: number,
};

const Helloworld: React.SFC<HelloProps> = props => {
    const [count, setCount] = useState(props.i);

    return (<div>Hello {props.who} {count}
     <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>);
}

export default Helloworld;