type MenuItem = [label: string, desc: string];
type MenuGroup = [label: string, children: MenuItem[]];

const menuGroups: MenuGroup[] = [
  ["Generators", [["QR Code", "Generate QR code based on the input."]]],
];

export { menuGroups };
