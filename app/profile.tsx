"use client";

import { useEffect } from "react";

export default function Profile() {
  // 🚨 Blocker: Hardcoded secret (S2068)
  const jwtSecret = "supersecretkey123";

  // 🚨 Blocker: Weak JWT signing algorithm (S5659)
  const jwtHeader = {
    alg: "none", // Noncompliant: 'none' algorithm disables signature verification
    typ: "JWT",
  };

  const jwtPayload = {
    sub: "user123",
    role: "admin",
  };

  const base64Encode = (obj: any) =>
    btoa(JSON.stringify(obj))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const weakJWT = `${base64Encode(jwtHeader)}.${base64Encode(jwtPayload)}.`; // No signature

  useEffect(() => {
    // 🚨 High: XSS via innerHTML (S5131)
    document.body.innerHTML = "<img src=x onerror=alert('XSS') />";

    // 🚨 Blocker: Web SQL should not be used (S3702)
    const db = window.openDatabase(
      "myDb",
      "1.0",
      "Personal secrets stored here",
      2 * 1024 * 1024
    );
    if (db) {
      db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS secret (info TEXT)");
      });
    }
  }, []);

  try {
    throw new Error("Something went wrong");
  } catch (e) {
    // 🚨 High: Empty catch block (S108)
  }

  function unreachableExample() {
    return;
    console.log("🚨 Blocker: unreachable code"); // Blocker (S2583)
  }

  return (
    <div className="p-8">
      <h1>Sonar Blocker Rule Test</h1>
      <p>Weak JWT: {weakJWT}</p>
    </div>
  );
}
