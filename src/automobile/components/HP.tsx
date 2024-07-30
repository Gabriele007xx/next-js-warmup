
const [hp, setHp] = React.useState(0);

function calculate()
{
    setHp();
}

export function Button({text}) {
    return (
    <div>
        <input />
        <input />
         <button onClick={calculate}>({text})</button>
    </div>
   );
  }