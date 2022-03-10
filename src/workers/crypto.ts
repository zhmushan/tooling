import { crypto } from "@/vendor/crypto.js";

const encoder = new TextEncoder();

self.addEventListener("message", async (ev) => {
  const [data, algo] = ev.data;
  if (data.length) {
    const buf = encoder.encode(data);
    const ts = performance.now();
    const hashArray = Array.from(
      new Uint8Array(await crypto.subtle.digest(algo, buf))
    );
    const te = performance.now() - ts;
    self.postMessage({
      result: hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""),
      size: buf.length,
      time: te,
    });
  } else {
    self.postMessage({
      result: "",
      size: 0,
      time: 0,
    });
  }
});
