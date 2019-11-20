const include = (template, args = {}) => ({ template, arguments: args });

export const contentGrid = (args) => include('./grids/content-grid/content-grid.twig', args);
export const italic = (args) => include('./atoms/inline/italic/italic.twig', args);
export const link = (args) => include('./atoms/inline/link/link.twig', args);
