/**
 * Check if the Module if already loaded
 * @param parentModule Parent Module
 * @param moduleName Module name
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
