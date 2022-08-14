const clean = (s) => {
  return s.replace(/\/\*$/, "");
};

export const urlBuilder = (base) => {
  return {
    get: (target, prop) => {
      if (prop === "MAIN") return `${base}/`;
      if (typeof target[prop] === "string") {
        return `${base}${target[prop]}`;
      }
      return new Proxy(
        target[prop],
        urlBuilder(`${base}${clean(target[prop].MAIN)}`)
      );
    },
  };
};

export const urlParams = (url, params = {}) => {
  const urlSplitted = url.split("/");
  const urlResult = urlSplitted
    .map((x) => {
      if (x.startsWith(":")) {
        return params[x.replace(/:/g, "")];
      }
      return x;
    })
    .join("/");
  return urlResult;
};
