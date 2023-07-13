let baseApiURL: string;
if (process.env.NODE_ENV === "production") {
  baseApiURL = `/api`;
} else {
  baseApiURL = "http://127.0.0.1:5000/api";
}

export const proxyApiURL = `${baseApiURL}/proxy/download`;
export const tiktokApiURL = `${baseApiURL}/tiktok/info`;
