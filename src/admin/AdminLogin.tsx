import { useState } from "react";

// ⚠️ DEMO ONLY — replace with real server-side auth for production
const ADMIN_USER = "admin@2026";
const ADMIN_PASSWORD = "admin@123";

export function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === ADMIN_USER && password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setErr("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-xl font-bold text-navy">Admin Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">Rajashri College of Nursing</p>

        <label className="mt-5 block text-sm font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setErr(""); }}
          placeholder="admin@2026"
          autoComplete="username"
          className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-navy"
        />

        <label className="mt-3 block text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setErr(""); }}
          placeholder="••••••••"
          autoComplete="current-password"
          className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-navy"
        />

        {err && <p className="mt-2 text-sm text-red-500">{err}</p>}

        <button className="mt-5 w-full rounded-lg bg-navy py-2 text-sm font-semibold text-white hover:opacity-90">
          Sign In
        </button>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Demo → <code>admin@2026</code> / <code>admin@123</code>
        </p>
      </form>
    </div>
  );
}