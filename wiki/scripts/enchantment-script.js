function enchantSuffix(index) {
  if (index < 0) {
    index *= -1;
    index -= 1;
  }

  let suffix = "";
  let colour = "FFFFFF";

  if (index == 0) {
    suffix = "I";
    colour = "#AAAAAA";
  } else if (index == 1) {
    suffix = "II";
    colour = "#55FFFF";
  } else if (index == 2) {
    suffix = "III";
    colour = "#FFFF55";
  } else if (index == 3) {
    suffix = "IV";
    colour = "#FFAA00";
  } else if (index == 4) {
    suffix = "V";
    colour = "#FF55FF";
  } else {
    return "ENCHANT COLOUR FAILED!!!";
  }

  return '<span style="color:' + colour + '";>' + suffix + ' </span>';
}

function initEnchants() {
  document.querySelectorAll(".enchant").forEach(el => {
    if (el.dataset.bound) return;
    el.dataset.bound = "1";

    const key = el.dataset.enchant;
    const levels = ENCHANTS[key];

    if (!levels) return;

    let index = 0;

    el.style.cursor = "pointer";
    el.style.userSelect = "none";
    el.title = "Click to cycle enchant";

    el.addEventListener("click", () => {
      el.innerHTML = `${key}`.split('_').join(" ") + " " + enchantSuffix(index) + `  - ${levels[index]}`;
      index = (index + 1) % levels.length;
    });
  });
}

const obs = new MutationObserver(initEnchants);
obs.observe(document.body, { childList: true, subtree: true });

initEnchants();
