$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distPath = Join-Path $projectRoot "dist"

if (-not (Test-Path $distPath)) {
  New-Item -ItemType Directory -Path $distPath | Out-Null
}

$filesToPublish = @(
  "index.html",
  "assessment.html",
  "starter.html",
  "crossword.html",
  "number-game.html",
  "analytics-config.js",
  "analytics.js",
  "script.js",
  "assessment.js",
  "starter.js",
  "crossword.js",
  "number-game.js",
  "topics-data.js",
  "styles.css",
  "favicon.svg"
)

foreach ($relativePath in $filesToPublish) {
  $sourcePath = Join-Path $projectRoot $relativePath
  $destinationPath = Join-Path $distPath $relativePath

  if (-not (Test-Path $sourcePath)) {
    throw "Missing publish file: $relativePath"
  }

  Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force
}

@"
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
"@ | Set-Content -LiteralPath (Join-Path $distPath "_headers")

Write-Host "Static site prepared in $distPath"
