const encoder = new TextEncoder();
const decoder = new TextDecoder();

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("compress & decompress", async () => {
    const cases = [
      ["木杉", "H4sIAAAAAAAAE3s2Z8WzuZ0ABsESEAYAAAA="],
      ["👋🀄️", "H4sIAAAAAAAAE/swf2L3h/kNLe939AMAOOhtqQsAAAA="],
    ];
    for (const [input] of cases) {
      expect(await decompress(await compress(input))).toEqual(input);
    }
  });
}

export async function compress(s: string) {
  const buf = encoder.encode(s);
  if (!window.CompressionStream) {
    window.CompressionStream = (
      await import("@stardazed/streams-compression")
    ).CompressionStream;
  }
  const cs = new window.CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(buf);
  writer.close();
  return new Response(cs.readable).arrayBuffer().then(arrayBufferToBase64);
}

export async function decompress(s: string): Promise<string> {
  const buf = Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  if (!window.DecompressionStream) {
    window.DecompressionStream = (
      await import("@stardazed/streams-compression")
    ).DecompressionStream;
  }
  const ds = new window.DecompressionStream("gzip");
  const writer = ds.writable.getWriter();
  writer.write(buf);
  writer.close();
  return new Response(ds.readable)
    .arrayBuffer()
    .then((buf) => decoder.decode(buf));
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; ++i) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
