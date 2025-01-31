const messagePool = {
    _line1: [`Purify your Qi`, `Refine the mastery of your art`, `Learn a new technique`, `Break through to the next realm`, `Consolidate your Qi`, `Fortify your foundations`, `Absorb spiritual energy from the surroundings`, `Refine your inner core`,  
        `Temper your soul with heavenly fire`,  `Meditate in secluded cultivation`,  `Withstand a heavenly tribulation`,  `Harmonize with the Dao`,  `Channel Qi into your meridians`,  `Strengthen your dantian`,  `Engage in a soul-severing ritual`,  
        `Commune with the spirit of an ancient artifact`,  `Unlock your spiritual potential`,  `Form a Nascent Soul`,  `Absorb the essence of a rare herb`,  `Cultivate under the light of a full moon`,  `Comprehend the mysteries of the sword`,  
        `Study an ancient scroll of forbidden techniques`,  `Temper your body in the flames of a dragon's breath`,  `Awaken dormant bloodline powers`,  `Attune to the cosmic energies`,  `Infuse Qi into a spirit talisman`,  `Hone your spiritual awareness`,  
        `Fuse with an elemental spirit`,  `Engrave protective formations`,  `Cleanse impurities from your body`,  `Absorb a spirit beast's essence`,  `Practice a forbidden cultivation technique`,  `Prepare for ascension to the immortal realm`,  
        `Fuse your soul with an ancient artifact`,  `Refine a heaven-tier pill`,  `Unleash your inner dragon bloodline`,  `Channel the power of the stars into your dantian`,  `Break the barriers of your meridians`,  `Invoke a celestial beast’s blessing`,  
        `Merge your soul with the Dao of time`,  `Temper your body in the icy waters of the Northern Abyss`,  `Meditate atop the mountain of ten thousand swords`,  `Absorb the Qi from an immortal-grade spirit herb`],
    _line2: [`Demonic Path`, `Sword Path`, `Daoist Path`, `Buddhist Path`, `Gu Path (poison and insects)`, `Alchemy Path`, `Beast Taming Path`, `Elemental Path`, `Soul Path`, `Body Refinement Path`, `Formation Path`, `Heavenly Lightning Path`, `Illusion Path`, 
        `Darkness Path`, `Celestial Path`, `Spirit Summoning Path`, `Array Mastery Path`, `Warrior’s Path`, `Fire Dao Path`, `Ice and Snow Path`, `Thunderous Fist Path`, `Phoenix Rebirth Path`, `Mystic Arts Path`, `Mind Cultivation Path`, `Dual Cultivation Path`, 
        `Void Path`, `Path of Heavenly Tribulation`, `Blood Demon Path`, `Celestial Sword Path`, `Lightning Element Path`, `Yin-Yang Harmony Path`, `Phoenix Flame Path`, `Earth Element Path`, `Divine Beast Path`, `Starseeker Path`],
    _line3: [`but risk invoking the wrath of the heavens`, `though it may shatter the spirit if unsuccessful`, `and face the danger of an inner demon awakening`, `but beware the curse of eternal shadow`, `though it could drain your life essence permanently`, 
        `and risk severing the karmic threads of destiny`, `but it may attract the attention of vengeful spirits`, `though it could lead to soul fragmentation`, `and face the peril of a celestial calamity`, 
        `but with a warning: it could call forth a heavenly tribulation`, `yet know it may awaken ancient grudges from past lives`, `but beware of a lurking demonic presence within`, `though it may strain the balance of Yin and Yang in the soul`, 
        `but know that failure could lead to complete soul annihilation`, `though it could taint the cultivator’s Dao forever`, `and risk unleashing forbidden powers beyond control`, `yet beware, for the price may be an endless descent into madness`, 
        `though it may sever ties to the mortal realm eternally`, `but know that the path may lead to confrontation with ancient deities`, `though it could awaken the wrath of a primordial beast`, `and face an inescapable fate of karmic retribution`, 
        `yet be warned: it may attract rival cultivators to claim your fate`, `though it risks calling forth the Heavenly Flames of Judgment`, `but beware, for it could entangle you in eternal samsara`, `and face the chance of losing control over your own Dao`, 
        `but know that failure could turn you into a soulless husk`, `though it may summon a great calamity from the heavens`, `but it may doom you to wander the endless void`, `yet be warned, for it could unravel the threads of your very existence`, 
        `but beware, for it may lead to a confrontation with a Daoist ancestor`, `though it could set you on a collision course with fate itself`, `and face the possibility of being consumed by your own Qi`, `but it might draw the attention of celestial guardians`, 
        `though it risks turning your body into a vessel for ancient evils`, `and be cautious, for it could tear your soul asunder`],
    get part1() {
        return this._line1[Math.floor(Math.random()*this._line1.length)];
    },
    get part2() {
        return this._line2[Math.floor(Math.random()*this._line2.length)];
    },
    get part3() {
        return this._line3[Math.floor(Math.random()*this._line3.length)];
    },
    get fullMessage() {
        return `${messagePool.part1}, walk the ${messagePool.part2} ${messagePool.part3}`
    }
}

console.log(messagePool.fullMessage);