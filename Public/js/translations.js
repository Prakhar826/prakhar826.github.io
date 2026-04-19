const translations = {
    // English (Default)
    en: {
        loading: "Loading...",
        howToPlay: "How to Play",
        objective: "Objective",
        objectiveText: "Survive the endless waves of alien invaders! Destroy enemies to increase your score, collect coins for upgrades, and grab power-ups to unleash your true potential.",
        powerups: "Power-Ups",
        enemies: "Enemies",
        boltDesc: "Bolt: Massively increases your rate of fire.",
        shieldDesc: "Shield: Protects you from a single enemy hit.",
        magnetDesc: "Magnet: Automatically pulls all nearby coins towards you.",
        boosterDesc: "Booster: Grants all power-ups at once for a short time!",
        scoutDesc: "Scout: Weak but appears in large numbers.",
        fighterDesc: "Fighter: A tougher foe that fires back at you.",
        cruiserDesc: "Cruiser: Slow and heavily armored. Takes many hits to destroy.",
        hunterDesc: "Hunter: Will actively track and chase your ship.",
        hiveMotherDesc: "Hive Mother: The first boss! Spawns minions and is very durable.",
        crusherDesc: "The Crusher: The ultimate threat. Fast, powerful, and very dangerous.",
        yourScore: "Your Score",
        highScore: "High score:",
        doubleCoin: "2x Your Coin",
        loadingAd: "Loading Ad...",
        coinsDoubled: "Coins Doubled!",
        bonusLives: "BONUS LIVES!",
        sec: "sec",
        highScoreBadgeImg: "Ui/High_score_panel.png",
        selectButtonImg: "Ui/select_button.png",
        selectedButtonImg: "Ui/selected.png",
        buyButtonImg: "Ui/buy_button.png"
    },

    // Russian
    ru: {
        loading: "Загрузка...",
        howToPlay: "Как играть",
        objective: "Цель",
        objectiveText: "Выживайте в бесконечных волнах пришельцев! Уничтожайте врагов, чтобы увеличить счет, собирайте монеты для улучшений и хватайте бонусы.",
        powerups: "Бонусы",
        enemies: "Враги",
        boltDesc: "Болт: Значительно увеличивает вашу скорострельность.",
        shieldDesc: "Щит: Защищает вас от одного удара врага.",
        magnetDesc: "Магнит: Автоматически притягивает все ближайшие монеты.",
        boosterDesc: "Усилитель: Дает все бонусы одновременно на короткое время!",
        scoutDesc: "Разведчик: Слаб, но появляется в больших количествах.",
        fighterDesc: "Истребитель: Более сильный враг, который стреляет в ответ.",
        cruiserDesc: "Крейсер: Медленный и тяжело бронированный. Требует много попаданий.",
        hunterDesc: "Охотник: Будет активно преследовать ваш корабль.",
        hiveMotherDesc: "Королева улья: Первый босс! Создает миньонов и очень прочная.",
        crusherDesc: "Крушитель: Главная угроза. Быстрый, мощный и очень опасный.",
        yourScore: "Ваш счет",
        highScore: "Рекорд:",
        doubleCoin: "2x монет",
        loadingAd: "Загрузка...",
        coinsDoubled: "Монеты удвоены!",
        bonusLives: "БОНУС ЖИЗНИ!",
        sec: "сек",
        selectButtonImg: "Ui/select_ru.png",
        selectedButtonImg: "Ui/selected_ru.png",
        buyButtonImg: "Ui/buy_ru.png",
        highScoreBadgeImg: "Ui/High_score_ru.png"
    },
    // Chinese
    zh: {
        loading: "加载中...",
        howToPlay: "游戏玩法",
        objective: "目标",
        objectiveText: "在无尽的外星入侵者浪潮中生存下来！消灭敌人以增加分数，收集金币进行升级，并获取强化道具以释放你的真正潜力。",
        powerups: "强化道具",
        enemies: "敌人",
        boltDesc: "闪电：大幅提高你的射速。",
        shieldDesc: "护盾：保护你免受一次敌人攻击。",
        magnetDesc: "磁铁：自动将附近的所有金币吸向你。",
        boosterDesc: "助推器：短时间内同时获得所有强化效果！",
        scoutDesc: "侦察兵：很弱，但数量众多。",
        fighterDesc: "战斗机：一个更强悍的敌人，会向你还击。",
        cruiserDesc: "巡洋舰：速度缓慢且装甲厚重。需要多次攻击才能摧毁。",
        hunterDesc: "猎人：会主动追踪并追赶你的飞船。",
        hiveMotherDesc: "蜂巢之母：第一个首领！会产生小兵并且非常耐打。",
        crusherDesc: "粉碎者：终极威胁。速度快，力量强，非常危险。",
        yourScore: "你的分数",
        highScore: "最高分:",
        doubleCoin: "2倍金币",
        loadingAd: "加载广告...",
        coinsDoubled: "金币已加倍！",
        bonusLives: "额外生命！",
        sec: "秒",
        selectButtonImg: "Ui/select_zh.png",
        selectedButtonImg:"Ui/selected_zh.png",
        buyButtonImg: "Ui/buy_zh.png",
        highScoreBadgeImg: "Ui/High_score_zh.png"
    }
};


function applyTranslations(lang) {
    // Fallback to English
    const default_data = translations.en;
    const lang_data = translations[lang] || default_data;

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translationValue = lang_data[key] || default_data[key];

        if (translationValue) {
            // Check the type of element or key to apply the correct translation
            if (element.tagName === 'IMG') {
                element.src = translationValue;
            } else if (key.endsWith('Img') || key.endsWith('Bg')) {
                // If the key ends with 'Img' or 'Bg', treat it as a background image
                element.style.backgroundImage = `url('${translationValue}')`;
            } else {
                // Otherwise, treat it as a standard text element
                element.textContent = translationValue;
            }
        }
    });
}