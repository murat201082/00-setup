export default function MapComponent() {
  const names = ["HTML", "CSS", "JavaScript", "Ajax"];
  return (
    <ul>
      <h1>Eşlem</h1>
      {names.map((name, index) => (
        <li key={index} style = {{textAlign:'left', fontWeight:'bold', color:'crimson'}}>{name}</li>
      ))}
    </ul>
  );
};
