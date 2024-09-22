import RandomSelector from "../common/RandomSelector";

export default function MonsterHunter() {
  return <RandomSelector title={title} maxMember={4} options={options} />;
}

const title = "Monster Hunter Weapon Selector";
const options = [
  "片手剣",
  "双剣",
  "太刀",
  "大剣",
  "ランス",
  "ガンランス",
  "ハンマー",
  "狩猟笛",
  "操虫棍",
  "スラッシュアックス",
  "チャージアックス",
  "ライトボウガン",
  "ヘビィボウガン",
  "弓",
];
