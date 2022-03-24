export async function getModuleDefaultExport<
  Module extends { default: Default },
  Default
>(mod: Promise<Module | { default: Default }>): Promise<Default> {
  return mod.then((m) => m.default);
}
