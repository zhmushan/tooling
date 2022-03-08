type MenuItem = [label: string, desc: string];
type MenuGroup = [label: string, children: MenuItem[]];

const menuGroups: MenuGroup[] = [
  ["Generators", [["QR Code", "Generate QR code based on the input."]]],
  ["Parsers", [["URL", "Parse the URL to what I want it to look like."]]],
];

export { menuGroups };
