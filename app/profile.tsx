"use client";

import { useEffect } from "react";

export default function Profile() {
  // 🚨 Blocker: Hardcoded secret in use
  const jwtSecret = "supersecretkey123";
  if (jwtSecret === "supersecretkey123") {
    console.log("Using hardcoded secret");
  }

  useEffect(() => {
    // 🚨 High: XSS vulnerability
    document.body.innerHTML = "<img src=x onerror=alert('XSS') />";
  }, []);

  try {
    throw new Error("Oops");
  } catch (e) {
    // 🚨 High: empty catch block — swallowed exception
  }

  function unreachableCodeExample() {
    return;
    console.log("🚨 Blocker: unreachable code"); // unreachable
  }

  return (
    <div className="p-8">
      <h1>SonarQube Test Page</h1>
      <p>This page contains intentional code smells and security issues.</p>
    </div>
  );
}
