export const isPromise = (obj: unknown) => !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function"
