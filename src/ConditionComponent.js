export default function ConditionComponent() {
  const value = 8;
  // if(value < 5){
  //  return(
  //         <div>

  //         <h1>Doğru</h1>
  //         </div>
  //     )
  // }else {
  // return (
  // <div>
  //     <h1> yanlış</h1>
  // </div>
  // )}

  return value < 6 ? (
    <div>
      <h1>Doğru</h1>
    </div>
  ) : (
    <div>
      <h1>Yanlış</h1>

      {value > 7 && <h2> Alttaki Doğru</h2>
      
      
      }
    </div>
  );
};
