// 新增 props 當作參數
function Hello(props) {
  console.log(props);
  const {message, name} = props;
  return (
    <h1>
      {message} {name}
    </h1>
  );
}

export default Hello;
