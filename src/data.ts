export const promptData = [
  {
    type: "全般",
    genre: "服装",
    image: "女子高生",
    content: "4",
    duplicate: 4,
    prompt: "wearing a high school girl's uniform",
    japanese: "女子高生の制服を着て"
  },
  {
    type: "S",
    genre: "服装",
    image: "王女様風",
    content: "4",
    duplicate: 4,
    prompt: "crinoline",
    japanese: "クリノリン"
  },
  {
    type: "S",
    genre: "表情",
    image: "にやりと笑う",
    content: "2",
    duplicate: 2,
    prompt: "smirk",
    japanese: "にやにや笑う"
  },
  {
    type: "全般",
    genre: "場所",
    image: "寝室",
    content: "1",
    duplicate: 1,
    prompt: "bedroom",
    japanese: "寝室"
  },
  {
    type: "S",
    genre: "女性のタイプ",
    image: "地雷系",
    content: "3",
    duplicate: 3,
    prompt: "jirai kei",
    japanese: "自来系"
  },
  {
    type: "S",
    genre: "女性のタイプ",
    image: "黒ギャル",
    content: "3",
    duplicate: 3,
    prompt: "kuro gyaru",
    japanese: "黒ギャル"
  },
  {
    type: "S",
    genre: "行為・行動",
    image: "ブラを投げる",
    content: "3",
    duplicate: 3,
    prompt: "throwing bra",
    japanese: "投げブラ"
  },
  {
    type: "S",
    genre: "行為・行動",
    image: "しゃがむ",
    content: "3",
    duplicate: 3,
    prompt: "squatting",
    japanese: "しゃがむ"
  },
  {
    type: "全般",
    genre: "カワイイベース単語",
    image: "ショートヘア_Pony",
    content: "1",
    duplicate: 1,
    prompt: "source_9,source_8_up,source_7_up,source_anime,1girl,\nBREAK\nwearing a high school girl's uniform,short hair,wearing clothes,\nBREAK",
    japanese: "source_9,source_8_up,source_7_up,source_anime,1girl,\n壊す\n女子高生の制服を着て、ショートヘアで、服を着て、\n壊す"
  },
  {
    type: "全般",
    genre: "エロくする",
    image: "乳首",
    content: "3",
    duplicate: 3,
    prompt: "nipples",
    japanese: "乳首"
  },
  {
    type: "S",
    genre: "【顔】目",
    image: "半分閉じた目",
    content: "1",
    duplicate: 1,
    prompt: "half closed eyes",
    japanese: "半分閉じた目"
  },
  {
    type: "全般",
    genre: "【プレイ中】特殊プロンプト",
    image: "動き出す線",
    content: "2",
    duplicate: 2,
    prompt: "motion lines",
    japanese: "動線"
  },
  {
    type: "全般",
    genre: "【プレイ中】特殊プロンプト",
    image: "動き出す線",
    content: "2",
    duplicate: 2,
    prompt: "motion blur",
    japanese: "モーションブラー"
  },
  {
    type: "M",
    genre: "服装",
    image: "ゴスロリ",
    content: "4",
    duplicate: 4,
    prompt: "gothic lolita style",
    japanese: "ゴシックロリータスタイル"
  },
  {
    type: "S",
    genre: "行為・行動",
    image: "ヨダレを垂らす",
    content: "3",
    duplicate: 3,
    prompt: "a large amount of drool is dripping from the mouth",
    japanese: "口からは大量のよだれが垂れている"
  },
  {
    type: "S",
    genre: "表情",
    image: "舌出し",
    content: "2",
    duplicate: 2,
    prompt: "((((sticking out my tongue and making out deeply:1.6))))",
    japanese: "((((舌を出して深くイチャイチャ:1.6))))"
  },
  {
    type: "全般",
    genre: "女性のタイプ",
    image: "幼い顔",
    content: "3",
    duplicate: 3,
    prompt: "idol face",
    japanese: "アイドルの顔"
  },
  {
    type: "全般",
    genre: "体型",
    image: "細いウエスト",
    content: "1",
    duplicate: 1,
    prompt: "small waist",
    japanese: "小さなウエスト"
  },
  {
    type: "S",
    genre: "服装",
    image: "バタフライビキニ",
    content: "4",
    duplicate: 4,
    prompt: "butterfly bikini",
    japanese: ""
  },
  {
    type: "S",
    genre: "エロくする",
    image: "カップレス（エロい水着）",
    content: "3",
    duplicate: 3,
    prompt: "cupless",
    japanese: ""
  },
  {
    type: "M",
    genre: "エロくする",
    image: "顔が紅くなる",
    content: "3",
    duplicate: 3,
    prompt: "light blush",
    japanese: ""
  },
  {
    type: "M",
    genre: "LoRA",
    image: "スマホで撮影される（ハメ撮り）",
    content: "1",
    duplicate: 1,
    prompt: "<lora:Hypno_App_POV:1>",
    japanese: ""
  }
];

export const genres = [...new Set(promptData.map(item => item.genre))];
export const types = [...new Set(promptData.map(item => item.type))];