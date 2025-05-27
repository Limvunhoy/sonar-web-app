export default function Profile() {
  // 🧨 BLOCKER / HIGH Severity code

  const jwtSecret = "supersecretkey123"; // Hardcoded secret
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bypass: any = "bypass";
  function process(input: any) {
    return input;
  }

  try {
    throw new Error("Oops");
  } catch (e) {
    // intentionally empty
  }

  function checkUnreachable() {
    return;
    console.log("This is unreachable");
  }

  document.body.innerHTML = "<img src=x onerror=alert('XSS') />"; // XSS

  return <div>Testing sonar</div>;
}
