import type { RouteComponent } from "vue-router";

type MenuItem = {
  label: string;
  desc: string;
  path: `/${string}`;
  component: () => Promise<RouteComponent>;
};
type MenuGroup = [label: string, path: `/${string}`, children: MenuItem[]];

export const MenuRoot: Omit<MenuItem, "desc"> = {
  label: "All Tools",
  path: "/all",
  component: () => import("@/views/AllTools.vue"),
};

export const MenuGroups: MenuGroup[] = [
  [
    "Generators",
    "/generators",
    [
      {
        label: "QR Code",
        desc: "Generate QR code based on the input.",
        path: "/qrcode",
        component: () => import("@/views/generators/QrCode.vue"),
      },
      {
        label: "Crypto",
        desc: "Provides a series of cryptographic functions that I don't know if they are useful.",
        path: "/crypto",
        component: () => import("@/views/generators/Crypto.vue"),
      },
    ],
  ],
  [
    "Parsers",
    "/parsers",
    [
      {
        label: "URL",
        desc: "Parse the URL to what you want it to look like.",
        path: "/url",
        component: () => import("@/views/parsers/Url.vue"),
      },
    ],
  ],
  [
    "Encoders / Decoders",
    "/encoders-decoders",
    [
      {
        label: "Base64",
        desc: "Encode and decode Base64 data.",
        path: "/base64",
        component: () => import("@/views/encoders-decoders/Base64.vue"),
      },
      {
        label: "GZip",
        desc: "Compress or decompress text.",
        path: "/gzip",
        component: () => import("@/views/encoders-decoders/GZip.vue"),
      },
    ],
  ],
];
