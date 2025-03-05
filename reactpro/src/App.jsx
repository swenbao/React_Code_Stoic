import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Rob",
    message: "Suck My Dick",
    emoji: "🍆",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      {/* <Hello message="Lick my Pussy" name="John" seatNumbers={seatNumbers} /> */}
      <Hello person={person} />
      {/* <Hello message="Make me wet" name="Chris" /> */}
    </div>
  );
}

export default App;
