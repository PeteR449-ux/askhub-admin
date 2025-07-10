

export default App;
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Welcome to AskHub</h1>
      <p>This is your smart information site. Ask anything.</p>

      <input
        type="text"
        placeholder="Type your question..."
        style={{ padding: '0.5rem', width: '300px', marginTop: '1rem' }}
      />
      <button style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>Search</button>
    </div>
  );
}
