const switchLanguage = (currentLang: "esp" | "eng") => {
  const pathname = window.location.pathname;
  let newPath = pathname;

  if (currentLang === "eng") {
    // Spanish → English
    if (!pathname.startsWith("/es")) newPath = "/es" + pathname;
  } else {
    // English → Spanish
    if (pathname.startsWith("/es")) newPath = pathname.replace(/^\/es/, "");
  }

  window.location.href = newPath; // redirect
};
