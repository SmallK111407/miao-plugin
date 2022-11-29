export const details = [{
  title: '刻九万妲E后重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '刻九万妲Q单段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['连斩伤害2'][0], 'q')
}, {
  title: '刻九万妲Q总伤害',
  params: { q: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['连斩伤害'] + talent.q['最后一击伤害'], 'q')
}, {
  title: '刻九万妲Q激化总伤',
  params: { q: 1 },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q', '超激化')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q', '超激化')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q', '超激化')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}]

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '刻晴被动：释放Q获得15%暴击率',
  data: {
    qCpct: 15
  }
}, {
  title: '刻晴4命：触发雷元素相关反应提升攻击力25%',
  cons: 4,
  data: {
    atkPct: 25
  }
}, {
  title: '刻晴6命：4层获得24%雷伤加成',
  cons: 6,
  data: {
    dmg: 24
  }
},{
    title: '精5苍古万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
    data: {
      aDmg:32,
      a2Dmg:32,
      a3Dmg:32,
      dmg: 48,
      atkPct:40,
      kx:40,
      mastery:200
   }
  }, {
    title: '宗室天空九条：增加[atkPlus]点攻击力与[cdmg]%爆伤,攻击[atkPct]%',
    data: {
      atkPlus: 794.2,
      cdmg:60,
      atkPct:20
   }
  }, {
    title: '精5千夜纳西妲：增加精通[mastery],减防[enemyDef]%',
    data: {
      mastery: 298,
      enemyDef: 30
   }
  }]
