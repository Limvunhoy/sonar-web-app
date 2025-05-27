export default function Profile() {
  // 👇 Violating code
  const password = "123456";
  const msg1 = "Hello Sonar!";
  const msg2 = "Hello Sonar!";

  try {
    throw new Error("oops");
  } catch (e) {
    // Empty block
  }

  return <div>Sonar Test</div>;
}
