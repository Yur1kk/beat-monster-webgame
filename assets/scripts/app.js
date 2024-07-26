const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

const endRound = () => {
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('Congrats, you won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost :(, try again!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

const attackMonster = (mode) => {
    let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = attackValue;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = strongAttackValue;
  }
  const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
   endRound();
}


const attackHandler = () => {
    attackMonster('ATTACK');
}

const strongAttackHandler = () => {
    attackMonster('STRONG_ATTACK');
}

const healPlayerHandler = () => {
    let healValuee;
    if (currentPlayerHealth >= chosenMaxLife - healValue) {
        alert("You can't heal to more than your max initial healt");
        healValuee = chosenMaxLife - currentPlayerHealth;
    } else {
        healValuee = healValue;
    }
  increasePlayerHealth(healValuee);
  currentPlayerHealth += healValuee;
  endRound();
}


attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
