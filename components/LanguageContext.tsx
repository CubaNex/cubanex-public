const switchLanguage = (currentLang: "esp" | "eng") => {
  const pathname = window.location.pathname;
  let newPath = pathname;

  if (currentLang === "esp") {
    // Spanish → English
    if (!pathname.startsWith("/en")) newPath = "/en" + pathname;
  } else {
    // English → Spanish
    if (pathname.startsWith("/en")) newPath = pathname.replace(/^\/en/, "");
  }

  window.location.href = newPath; // redirect
};
