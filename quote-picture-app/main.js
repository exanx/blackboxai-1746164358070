document.addEventListener('DOMContentLoaded', () => {
  const quoteInput = document.getElementById('quoteInput');
  const textColorInput = document.getElementById('textColor');
  const bgColorInput = document.getElementById('bgColor');
  const fontSelect = document.getElementById('fontSelect');
  const aspectRatioSelect = document.getElementById('aspectRatio');
  const quotePreview = document.getElementById('quotePreview');
  const quoteText = document.getElementById('quoteText');
  const bgImageInput = document.getElementById('bgImageInput');
  const bgImage = document.getElementById('bgImage');
…  // Update preview on window resize to keep it fitting screen
  window.addEventListener('resize', updatePreview);
});
