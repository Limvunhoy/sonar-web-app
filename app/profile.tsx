export default function Profile() {
  // 🚨 High/Blocker severity issues:
  const jwtSecret = "supersecretkey123";
  const isValid = jwtSecret === "supersecretkey123"; // Blocker: hardcoded secret in use

  try {
    throw new Error("Oops");
  } catch (e) {
    // High: Empty catch block
  }

  document.body.innerHTML = "<img src=x onerror=alert('XSS') />"; // High: XSS risk

  function unreachable() {
    return;
    console.log("This is unreachable"); // Blocker
  }

  return (
    <div>
      <h1>Sonar Test</h1>
    </div>
  );
}
