export default function GeneratorComponent(props) {
  const generatorContent = ( input) => {
    return (
      <h2>
        <em>{input}</em>
      </h2>
    );
  };
  return (
    <div>
      Burası bileşen <br />
      {generatorContent("Deger Atama")} <br />
      {props.company} <br />
      {props.department}
    </div>
  );
}
