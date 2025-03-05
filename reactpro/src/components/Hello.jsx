// 新增 props 當作參數
function Hello({ person }) { // destructuring
  return (
    <h1>
      {person.message} {person.name} {person.emoji} {person.seatNumbers}
    </h1>
  );
}

export default Hello;