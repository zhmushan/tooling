import { crypto } from "@/vendor/crypto.js";

const encoder = new TextEncoder();

self.addEventListener("message", async (ev) => {
  const [data, algo] = ev.data;
  if (typeof data === "string") {
    const hashArray = Array.from(
      new Uint8Array(await crypto.subtle.digest(algo, encoder.encode(ev.data)))
    );
    self.postMessage(
      hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
    );
  }
});
