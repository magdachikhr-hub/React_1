import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="bg-[url('/Desktop.jpg')] h-screen bg-no-repeat bg-cover">
        <Header></Header>

        <div>
          <Card></Card>
        </div>
      </main>
    </>
  );
}

export default App;
