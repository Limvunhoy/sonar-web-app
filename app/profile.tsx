"use client";

import { useEffect } from "react";
import jwt from "jsonwebtoken";

export default function Profile() {
  // 🚨 Blocker: Hardcoded secret (S2068)
  const jwtSecret = "supersecretkey123"; // DO NOT DO THIS IN PROD

  // 🚨 Blocker: Weak JWT algorithm (S5659)
  const token = jwt.sign(
    { userId: "admin" },
    jwtSecret,
    { algorithm: "none" } // Extremely insecure
  );

  useEffect(() => {
    // 🚨 High: XSS via innerHTML (S5131)
    document.body.innerHTML = "<img src=x onerror=alert('XSS') />";

    // 🚨 Blocker: Deprecated Web SQL API (S3702)
    const db = window.openDatabase(
      "badDb",
      "1.0",
      "Unsafe client-side DB",
      2 * 1024 * 1024
    );
    db?.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS tokens (value TEXT)");
    });

    // 🚨 High: Using eval (S1523)
    eval("console.log('Eval is dangerous')");

    // 🚨 Minor: Unused variable (S1481)
    const unusedVar = 999;
  }, []);

  try {
    throw new Error("Oops");
  } catch (e) {
    // 🚨 High: Empty catch block (S108)
  }

  function unreachableExample() {
    return;
    // 🚨 Blocker: Unreachable code (S2583)
    console.log("You will never see this");
  }

  return (
    <div className="p-6">
      <h1>🚨 Intentionally Vulnerable Component</h1>
      <p>JWT Token: {token}</p>
    </div>
  );
}
