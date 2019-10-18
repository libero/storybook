const include = (template, args = {}) => ({ template, arguments: args });

export const italic = (args) => include('./atoms/inline/italic/italic.twig', args);
export const link = (args) => include('./atoms/inline/link/link.twig', args);
