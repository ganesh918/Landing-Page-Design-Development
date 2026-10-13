# Downloads section images from Pexels. Re-run if any file is under 5KB.
$ErrorActionPreference = 'Stop'
$out = Join-Path $PSScriptRoot '..\public\images'
New-Item -ItemType Directory -Force -Path $out | Out-Null

$urls = @{
  'hero-main.jpg'       = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1280&fit=crop'
  'hero-plate.jpg'      = 'https://images.pexels.com/photos/6752315/pexels-photo-6752315.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
  'about-kitchen.jpg'   = 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop'
  'features-meals.jpg'  = 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop'
  'step-pick.jpg'       = 'https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop'
  'step-customize.jpg'  = 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop'
  'step-deliver.jpg'    = 'https://images.pexels.com/photos/4391475/pexels-photo-4391475.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop'
  'pricing-banner.jpg'  = 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1600&h=640&fit=crop'
  'avatar-sarah.jpg'    = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  'avatar-james.jpg'    = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  'avatar-mia.jpg'      = 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
}

foreach ($name in $urls.Keys) {
  $path = Join-Path $out $name
  curl.exe -L -A 'Mozilla/5.0' $urls[$name] -o $path
  $size = (Get-Item $path).Length
  if ($size -lt 5000) {
    throw "Image $name too small ($size bytes). Download failed."
  }
  Write-Host "OK $name size=$size"
}
