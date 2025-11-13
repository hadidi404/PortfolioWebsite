"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchHello() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/hello");
      const data = await res.json();
      setBackendMessage(data.message + " (" + new Date(data.now).toLocaleString() + ")");
    } catch (err) {
      setBackendMessage('Error fetching backend: ' + String(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Optionally fetch once on mount. Comment out if not desired.
    // fetchHello();
  }, []);

  return (
    <main style={{ textAlign: "left", padding: "40px" }}>
      <h1>Delicious Recipes</h1>
      <p>Discover easy and tasty dishes from around the world!</p>

      <h2>Popular Recipes</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🍝 Spaghetti Carbonara</li>
        <li>🥗 Greek Salad</li>
        <li>🍣 Sushi Rolls</li>
        <li>🍰 c Cake</li>
      </ul>

      <section style={{ marginTop: 24 }}>
        <h3>Sample backend</h3>
        <p>Click the button to call the sample backend running on <code>http://localhost:4000</code>.</p>
        <button onClick={fetchHello} disabled={loading} style={{ padding: '8px 12px', cursor: 'pointer' }}>
          {loading ? 'Loading…' : 'Call backend'}
        </button>
        {backendMessage && (
          <div style={{ marginTop: 12, padding: 12, background: '#f6f6f6', borderRadius: 6 }}>
            <strong>Backend:</strong> {backendMessage}
          </div>
        )}
      </section>
    </main>
  );

}
