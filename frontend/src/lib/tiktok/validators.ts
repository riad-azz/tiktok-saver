import { ClientException } from "@/lib/exceptions";

export const isValidTiktokUrl = (url: string) => {
  const allowed_tiktok_urls = [
    "https://m.tiktok.com/",
    "https://www.tiktok.com/",
    "https://tiktok.com/",
    "https://vm.tiktok.com/",
  ];
  for (let x of allowed_tiktok_urls) {
    if (url.startsWith(x) && url.length > x.length) return true;
  }
  return false;
};

export const isValidTiktokPost = (url: string) => {
  // TODO : Add correct regex for all possible posts URL's
  const mobileRegex =
    /(?:http:\/\/)?(?:www\.)?(?:m\.)?(?:tiktok\.com|vm\.tiktok\.com)\/(?:@[\w\.\-]+\/)?video\/(?<id>[\dA-Za-z]+)/;
  const isMobileUrl = mobileRegex.test(url);
  if (isMobileUrl) return true;

  const desktopRegex =
    /(?:http:\/\/)?(?:www\.)?(?:tiktok\.com)\/(?:@[\w\.\-]+\/)?video\/(?<id>\d+)/;
  const isDesktopUrl = desktopRegex.test(url);
  if (isDesktopUrl) return true;

  return false;
};

export const validateTiktokUrl = (url: string) => {
  if (!isValidTiktokUrl(url)) {
    throw new ClientException("Please enter a valid Tiktok URL");
  }

  // if (!isValidTiktokPost(url)) {
  //   throw new ClientException("Please enter a valid Tiktok Post URL");
  // }
};
