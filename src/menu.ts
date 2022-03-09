type MenuItem = [label: string, desc: string];
type MenuGroup = [label: string, children: MenuItem[]];

const menuGroups: MenuGroup[] = [
  [
    "Generators",
    [
      ["QR Code", "Generate QR code based on the input."],
      [
        "Crypto",
        "Provides a series of cryptographic functions that I don't know if they are useful.",
      ],
    ],
  ],
  ["Parsers", [["URL", "Parse the URL to what you want it to look like."]]],
];

export { menuGroups };
