const ENCHANTS = {
  // Armour
  Cold_Steel: [
    "5% chance to apply Mining Fatigue " + enchantSuffix(-1) + " for 5s on attacker",
    "10% chance to apply Mining Fatigue " + enchantSuffix(-1) + " for 6s on attacker",
    "15% chance to apply Mining Fatigue " + enchantSuffix(-1) + " for 7s on attacker",
  ],
  Darkness_Cloak: [
    "14% chance to apply Darkness " + enchantSuffix(-1) + " for 4s on attacker",
    "17% chance to apply Darkness " + enchantSuffix(-2) + " for 5s on attacker",
    "20% chance to apply Darkness " + enchantSuffix(-3) + " for 6s on attacker",
  ],
  Dragon_Heart: [
    "Grants permanent Health Boost " + enchantSuffix(-1),
    "Grants permanent Health Boost " + enchantSuffix(-2),
    "Grants permanent Health Boost " + enchantSuffix(-3),
    "Grants permanent Health Boost " + enchantSuffix(-4),
    "Grants permanent Health Boost " + enchantSuffix(-5),
  ],
  Elemental_Protection: [
    "Reduces potion and elemental damage by 5%",
    "Reduces potion and elemental damage by 10%",
    "Reduces potion and elemental damage by 15%",
    "Reduces potion and elemental damage by 20%",
  ],
  Fire_Shield: [
    "6% chance to ignite attackers for 5s",
    "8% chance to ignite attackers for 6s",
    "10% chance to ignite attackers for 7s",
    "12% chance to ignite attackers for 8s",
  ],
  Flame_Walker: [
    "2 block radius circle area to walk on",
    "3 block radius circle area to walk on",
  ],
  Hardened: [
    "6% chance to get Resistance " + enchantSuffix(-1) + " for 4s when damaged",
    "8% chance to get Resistance " + enchantSuffix(-2) + " for 5s when damaged",
  ],
  Ice_Shield: [
    "10% chance to freeze and apply Slowness " + enchantSuffix(-1) + " for 4s on attacker",
    "15% chance to freeze and apply Slowness " + enchantSuffix(-2) + " for 5s on attacker",
    "20% chance to freeze and apply Slowness " + enchantSuffix(-3) + " for 6s on attacker",
  ],
  Jumping: [
    "Grants permanent Jump Boost " + enchantSuffix(-1),
    "Grants permanent Jump Boost " + enchantSuffix(-2),
  ],
  Kamikadze: [
    "15% chance to explode at a power of 5 on death",
    "20% chance to explode at a power of 7 on death",
    "25% chance to explode at a power of 9 on death",
  ],
  Regrowth: [
    "Restores 0.2❤ every 30 seconds",
    "Restores 0.3❤ every 30 seconds",
    "Restores 0.4❤ every 30 seconds",
    "Restores 0.5❤ every 30 seconds",
  ],
  Saturation: [
    "Restores 1 food point every 30 seconds",
    "Restores 2 food point every 30 seconds",
  ],
  Speed: [
    "Grants permanent Speed " + enchantSuffix(-1),
    "Grants permanent Speed " + enchantSuffix(-2),
  ],
  Stopping_Force: [
    "100% chance to reduce knockback by 50%",
    "100% chance to reduce knockback by 70%",
    "100% chance to reduce knockback by 90%",
  ],

  // Bow
  Confusing_Arrows: [
    "20% chance for an arrow to apply Nausea " + enchantSuffix(-1) + " for 7s",
    "25% chance for an arrow to apply Nausea " + enchantSuffix(-2) + " for 8s",
    "30% chance for an arrow to apply Nausea " + enchantSuffix(-3) + " for 9s",
  ],
  Darkness_Arrows: [
    "15% chance for an arrow to apply Darkness " + enchantSuffix(-1) + " for 3.5s",
    "20% chance for an arrow to apply Darkness " + enchantSuffix(-2) + " for 4s",
    "25% chance for an arrow to apply Darkness " + enchantSuffix(-3) + " for 4.5s",
  ],
  Explosive_Arrows: [
    "5% chance to shoot an explosive arrow at a power level of 2",
    "7% chance to shoot an explosive arrow at a power level of 3",
    "9% chance to shoot an explosive arrow at a power level of 4",
  ],
  Lingering: [
    "10% chance for a tipped arrow to generate a lingering effect",
    "15% chance for a tipped arrow to generate a lingering effect",
    "20% chance for a tipped arrow to generate a lingering effect",
  ],
  Poisoned_Arrows: [
    "11% for an arrow to apply Poison " + enchantSuffix(-1) + " for 4s",
    "14% for an arrow to apply Poison " + enchantSuffix(-2) + " for 5s",
    "17% for an arrow to apply Poison " + enchantSuffix(-3) + " for 6s",
  ],
  Sniper: [
    "Increases projectile speed by 125%",
    "Increases projectile speed by 150%",
    "Increases projectile speed by 175%",
    "Increases projectile speed by 200%",
  ],
  Vampiric_Arrows: [
    "15% chance to restore 1.5❤ on arrow hit",
    "20% chance to restore 2❤ on arrow hit",
    "25% chance to restore 2.5❤ on arrow hit",
  ],
  Withered_Arrows: [
    "8% chance for an arrow to apply Wither " + enchantSuffix(-1) + " for 4s",
    "11% chance for an arrow to apply Wither " + enchantSuffix(-2) + " for 5s",
    "14% chance for an arrow to apply Wither " + enchantSuffix(-3) + " for 6s",
  ],

  // Tool
  Haste: [
    "Grants Haste " + enchantSuffix(-1) + " for 6s when mining blocks",
    "Grants Haste " + enchantSuffix(-2) + " for 7s when mining blocks",
  ],
  Lucky_Miner: [
    "30% chance to gain 10% more XP from ores",
    "40% chance to gain 20% more XP from ores",
    "50% chance to gain 30% more XP from ores",
  ],
  Replanter: [
    "Replants Wheat, Beetroot, Melon, Pumpkin, Potato, Carrot, Nether Wart",
  ],
  Smelter: [
    "60% chance to smelt blocks mined",
    "70% chance to smelt blocks mined",
    "80% chance to smelt blocks mined",
    "90% chance to smelt blocks mined",
    "100% chance to smelt blocks mined",
  ],
  Tunnel: [
    "Mines a 2x1 vertical hole",
    "Mines a plus shaped hole (1 block extra on each side)",
    "Mines a 3x3 hole",
  ],
  Veinminer: [
    "Mines up to 6 blocks of an ore vein at once",
    "Mines up to 7 blocks of an ore vein at once",
    "Mines up to 8 blocks of an ore vein at once",
  ],

  // Fishing
  Curse_Of_Drowned: [
    "10% chance to fish up a Drowned Zombie",
    "15% chance to fish up a Drowned Zombie",
    "20% chance to fish up a Drowned Zombie",
  ],
  Double_Catch: [
    "6% chance to double the caught item",
    "8% chance to double the caught item",
    "10% chance to double the caught item",
  ],
  River_Master: [
    "Increases casting distance by 1.25x",
    "Increases casting distance by 1.5x",
    "Increases casting distance by 1.75x",
    "Increases casting distance by 2x",
    "Increases casting distance by 2.25x",
  ],
  Seasoned_Angler: [
    "Increases amount of XP gained from fishing by 25%",
    "Increases amount of XP gained from fishing by 50%",
    "Increases amount of XP gained from fishing by 75%",
  ],

  // Weapon
  Bane_Of_Netherspawn: [
    "Inflicts 1❤ more damage to nether mobs",
    "Inflicts 1.25❤ more damage to nether mobs",
    "Inflicts 1.5❤ more damage to nether mobs",
    "Inflicts 1.75❤ more damage to nether mobs",
    "Inflicts 2❤ more damage to nether mobs",
  ],
  Blindness: [
    "3% chance to apply Blindness " + enchantSuffix(-1) + " for 5s on hit",
    "6% chance to apply Blindness " + enchantSuffix(-1) + " for 7s on hit",
  ],
  Confusion: [
    "8% chance to apply Nausea " + enchantSuffix(-1) + " for 8s on hit",
    "16% chance to apply Nausea " + enchantSuffix(-1) + " for 13s on hit",
  ],
  Curse_Of_Death: [
    "When killing players, you have a 1% chance to die as well",
    "When killing players, you have a 1.5% chance to die as well",
    "When killing players, you have a 2% chance to die as well",
  ],
  Decapitator: [
    "3% chance to obtain a player's or mob's head",
    "5% chance to obtain a player's or mob's head",
  ],
  Double_Strike: [
    "3% chance to inflict double damage",
    "5% chance to inflict double damage",
  ],
  Exhaust: [
    "5% chance to apply Hunger " + enchantSuffix(-1) + " for 15s",
    "10% chance to apply Hunger " + enchantSuffix(-2) + " for 20s",
    "15% chance to apply Hunger " + enchantSuffix(-3) + " for 25s",
    "20% chance to apply Hunger " + enchantSuffix(-4) + " for 30s",
  ],
  Ice_Aspect: [
    "Freezes and applies Slowness " + enchantSuffix(-1) + " for 4s",
    "Freezes and applies Slowness " + enchantSuffix(-2) + " for 5s",
    "Freezes and applies Slowness " + enchantSuffix(-3) + " for 6s",
  ],
  Infernus: [
    "Launched tridents will ignite the enemy on fire for 4s",
    "Launched tridents will ignite the enemy on fire for 5s",
    "Launched tridents will ignite the enemy on fire for 6s",
  ],
  Paralyze: [
    "3% chance to apply Mining Fatigue " + enchantSuffix(-1) + " for 4s",
    "6% chance to apply Mining Fatigue " + enchantSuffix(-2) + " for 6s",
    "9% chance to apply Mining Fatigue " + enchantSuffix(-3) + " for 8s",
    "12% chance to apply Mining Fatigue " + enchantSuffix(-4) + " for 10s",
    "15% chance to apply Mining Fatigue " + enchantSuffix(-5) + " for 12s",
  ],
  Rage: [
    "8% chance to get Strength " + enchantSuffix(-1) + " for 4s",
    "10% chance to get Strength " + enchantSuffix(-2) + " for 5s",
  ],
  Rocket: [
    "2% chance to launch your enemy at 1.25x firework power",
    "4% chance to launch your enemy at 1.5x firework power",
    "6% chance to launch your enemy at 1.75x firework power",
  ],
  Temper: [
    "Inflicts 0.5% more damage for each 0.5❤ missing",
    "Inflicts 1% more damage  for each 0.5❤ missing",
    "Inflicts 1.5% more damage for each 0.5❤ missing",
    "Inflicts 2% more damage  for each 0.5❤ missing",
    "Inflicts 2.5% more damage for each 0.5❤ missing",
  ],
  Vampire: [
    "10% chance to heal 1❤ on hit",
    "15% chance to heal 1.5❤ on hit",
    "20% chance to heal 2❤ on hit",
  ],
  Venom: [
    "10% chance to apply Poison " + enchantSuffix(-1) + " for 3s on hit",
    "15% chance to apply Poison " + enchantSuffix(-2) + " for 4s on hit",
  ],
  Villager_Defender: [
    "Inflicts 1❤ more damage to all pillagers",
    "Inflicts 1.5❤ more damage to all pillagers",
    "Inflicts 2❤ more damage to all pillagers",
    "Inflicts 2.5❤ more damage to all pillagers",
    "Inflicts 3❤ more damage to all pillagers",
  ],
  Wisdom: [
    "Mobs drops 1.5x XP",
    "Mobs drops 2x XP",
    "Mobs drops 2.5x XP",
    "Mobs drops 3x XP",
  ],
  Wither: [
    "7% chance to apply Wither " + enchantSuffix(-1) + " for 5s on hit",
    "10% chance to apply Wither " + enchantSuffix(-2) + " for 7s on hit",
  ],

  // Universal
  Curse_Of_Breaking: [
    "10% chance to consume an extra durability point",
    "20% chance to consume an extra 2 durability points",
    "30% chance to consume an extra 3 durability point",
  ],
  Curse_Of_Mediocrity: [
    "15% chance to disenchant item drops",
    "30% chance to disenchant item drops",
    "45% chance to disenchant item drops",
  ],
  Curse_Of_Misfortune: [
    "7% chance to have no drops or XP from blocks or mobs",
    "14% chance to have no drops or XP from blocks or mobs",
    "21% chance to have no drops or XP from blocks or mobs",
  ],
  Restore: [
    "40% chance to repair item to 40% durability",
    "45% chance to repair item to 45% durability",
    "50% chance to repair item to 50% durability",
  ],
};
