export default function LandingPage() {
  return (
    <main style={{ padding: "4rem", textAlign: "center" }}>
      <h1>JockeyFinder</h1>
      <p>Connecting trainers and jockeys.</p>

      <div style={{ marginTop: "2rem" }}>
        <a href="/login">Log in</a>{" | "}
        <a href="/signup">Sign up</a>
      </div>
    </main>
  );
}
