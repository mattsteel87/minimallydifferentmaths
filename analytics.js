(function initGoogleAnalytics() {
  var measurementId = window.GA_MEASUREMENT_ID;

  if (!measurementId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  var tagScript = document.createElement("script");
  tagScript.async = true;
  tagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(tagScript);
})();
