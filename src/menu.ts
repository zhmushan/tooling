import type { RouteComponent } from "vue-router";

type Label = `label.${keyof typeof import("./locales/en.json").label}`;
type Desc = `desc.${keyof typeof import("./locales/en.json").desc}`;

type MenuItem = {
  label: Label;
  desc: Desc;
  path: `/${string}`;
  component: () => Promise<RouteComponent>;
};
type MenuGroup = [label: Label, path: `/${string}`, children: MenuItem[]];

export const MenuRoot: Omit<MenuItem, "desc"> = {
  label: "label.all_tools",
  path: "/all",
  component: () => import("@/views/AllTools.vue"),
};

export const MenuGroups: MenuGroup[] = [
  [
    "label.generators",
    "/generators",
    [
      {
        label: "label.qrcode",
        desc: "desc.qrcode",
        path: "/qrcode",
        component: () => import("@/views/generators/QrCode.vue"),
      },
      {
        label: "label.crypto",
        desc: "desc.crypto",
        path: "/crypto",
        component: () => import("@/views/generators/Crypto.vue"),
      },
    ],
  ],
  [
    "label.converters",
    "/converters",
    [
      {
        label: "label.data_formats",
        desc: "desc.data_formats",
        path: "/data-formats",
        component: () => import("@/views/converters/DataFormats.vue"),
      },
    ],
  ],
  [
    "label.parsers",
    "/parsers",
    [
      {
        label: "label.url",
        desc: "desc.url",
        path: "/url",
        component: () => import("@/views/parsers/Url.vue"),
      },
    ],
  ],
  [
    "label.encoders_and_decoders",
    "/encoders-decoders",
    [
      {
        label: "label.base64",
        desc: "desc.base64",
        path: "/base64",
        component: () => import("@/views/encoders-decoders/Base64.vue"),
      },
      {
        label: "label.gzip",
        desc: "desc.gzip",
        path: "/gzip",
        component: () => import("@/views/encoders-decoders/GZip.vue"),
      },
    ],
  ],
];

export const MenuOption_Key_Info = new Map<
  string,
  [label: string, desc?: string]
>([[MenuRoot.path, [MenuRoot.label]]]);

for (const [, path, children] of MenuGroups) {
  for (const ch of children) {
    MenuOption_Key_Info.set(`${path}${ch.path}`, [ch.label, ch.desc]);
  }
}
