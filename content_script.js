setInterval(function () {
  const claimBonusButton = document.querySelector("[aria-label='Claim Bonus']");

  if (claimBonusButton == null) return;
  claimBonusButton.click();
}, 2000);
