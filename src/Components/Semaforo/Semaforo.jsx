const Semaforo = () => {
  const rojo = () => {
    console.log("Rojo");
  };
  const ambar = () => {
    console.log("Ambar!");
  };
  const verde = () => {
    console.log("Verde!");
  };
  return (
    <div id="divSemaforo">
      <button className="semaforo" id="rojo" onClick={rojo}></button>
      <button className="semaforo" id="ambar" onClick={ambar}></button>
      <button className="semaforo" id="verde" onClick={verde}></button>
    </div>
  );
};
export default Semaforo;
