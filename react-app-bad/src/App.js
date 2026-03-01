export default function App() {
  return (
    <div>
      <h1>React container is running</h1>
      <button onClick={async () => await fetch("http://localhost:3000/api1")}>
        Trigger the /api1 request
      </button>
      <button onClick={async () => await fetch("http://localhost:3000/api2")}>
        Trigger the /api2 request
      </button>
    </div>
  );
}
