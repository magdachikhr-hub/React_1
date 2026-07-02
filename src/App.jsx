import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="bg-[url('/Desktop.jpg')] h-screen bg-no-repeat bg-cover">
        <Header></Header>

        <div className="flex">
          <Card
            info={{
              plan: "Basic",
              sum: "19.99",
              storage: "500 GB",
              users: "2",
              send: "3",
            }}
          ></Card>
          <Card
            info={{
              plan: "Professional",
              sum: "29.99",
              storage: "1 TB",
              users: "5",
              send: "10",
            }}
          ></Card>
          <Card
            info={{
              plan: "Master",
              sum: "39.99",
              storage: "2 TB",
              users: "10",
              send: "20",
            }}
          ></Card>
        </div>
      </main>
    </>
  );
}

export default App;
