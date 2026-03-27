"use client";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// We import the Font Awesome CSS globally in `app/layout.tsx`,
// so we disable the runtime CSS injection.
config.autoAddCss = false;

// Register only arrows/chevrons (and nothing else).
// This matches your "arrow OR chevron, nothing more" requirement.
library.add(
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
);

export function FontAwesomeSetup() {
  return null;
}

