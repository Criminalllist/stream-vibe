import pixToRem from "@/utils/pixToRem.js";

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pixToRem(767)}rem)`),
}

export default MatchMedia