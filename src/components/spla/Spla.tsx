import "../common/common.css";
import RandomSelector from "../common/RandomSelector";

export default function Spla() {
  return (
    <RandomSelector
      title={title}
      maxMember={MAX_MEMBER}
      options={WEAPON_OPTIONS}
      description={description}
    />
  );
}
const title = "Splatoon Random Weapon Selector";
const description =
  "抽選されるブキにはオーダーなどのブキが含まれますが、所持していない場合はオリジナルのブキに読み替えてください";
const MAX_MEMBER = 8;
const WEAPON_OPTIONS = [
  "わかばシューター",
  "スプラシューター",
  "プロモデラーMG",
  "N-ZAP85",
  "もみじシューター",
  "ボールドマーカー",
  "スペースシューター",
  "プライムシューター",
  "52ガロン",
  "N-ZAP89",
  "スペースシューターコラボ",
  "L3リールガン",
  "ボールドマーカーネオ",
  "ジェットスイーパー",
  "シャープマーカー",
  "96ガロン",
  "プロモデラーRG",
  "L3リールガンD",
  "ボトルガイザー",
  "ジェットスイーパーカスタム",
  "プライムシューターコラボ",
  "シャープマーカーネオ",
  "96ガロンデコ",
  "H3リールガン",
  "H3リールガンD",
  "ヒーローシューターレプリカ",
  "スプラローラー",
  "カーボンローラー",
  "スプラローラーコラボ",
  "ダイナモローラー",
  "ワイドローラー",
  "ワイドローラーコラボ",
  "ヴァリアブルローラー",
  "カーボンローラーデコ",
  "スプラチャージャー",
  "スクイックリンα",
  "スプラチャージャーコラボ",
  "スプラスコープ",
  "R-PEN/5H",
  "リッター4K",
  "スプラスコープコラボ",
  "14式竹筒銃・甲",
  "ソイチューバー",
  "4Kスコープ",
  "バケットスロッシャー",
  "ヒッセン",
  "バケットスロッシャーデコ",
  "スクリュースロッシャー",
  "ヒッセンヒュー",
  "オーバーフロッシャー",
  "エクスプロッシャー",
  "バレルスピナー",
  "スプラスピナー",
  "バレルスピナーデコ",
  "ハイドラント",
  "スプラスピナーコラボ",
  "ノーチラス47",
  "クーゲルシュライバー",
  "スプラマニューバー",
  "デュアルスイーパー",
  "スパッタリー",
  "デュアルスイーパーカスタム",
  "クアッドホッパーブラック",
  "ケルビン525",
  "クアッドホッパーホワイト",
  "スパッタリーヒュー",
  "パラシェルター",
  "キャンピングシェルター",
  "スパイガジェット",
  "キャンピングシェルターソレーラ",
  "ホットブラスター",
  "ラピッドブラスター",
  "ラピッドブラスターデコ",
  "ロングブラスター",
  "ノヴァブラスター",
  "S-BLAST92",
  "クラッシュブラスター",
  "ノヴァブラスターネオ",
  "クラッシュブラスターネオ",
  "Rブラスターエリート",
  "Rブラスターエリートデコ",
  "ホクサイ",
  "パブロ",
  "フィンセント",
  "パブロヒュー",
  "トライストリンガー",
  "LACT-450",
  "ドライブワイパー",
  "ドライブワイパーデコ",
  "ジムワイパー",
  "モップリン",
  "イグザミナー",
  "ダイナモローラーテスラ",
  "ホクサイ・ヒュー",
  "ソイチューバーカスタム",
  "スクリュースロッシャー",
  "オーバーフロッシャーデコ",
  "クーゲルシュライバー・ヒュー",
  "パラシェルターソレーラ",
  "トライストリンガーコラボ",
  "R-PEN/5B",
  "フィンセント・ヒュー",
  "ボトルガイザーフォイル",
  "スパイガジェットソレーラ",
  "LACT-450デコ",
  "S-BLAST91",
  "ジムワイバー・ヒュー",
  "スプラマニューバーコラボ",
  "ホットブラスターカスタム",
  "24式張替傘・甲",
  "ガエンFF",
  ".52ガロンデコ",
  "ケルビン525デコ",
  "スクイックリンβ",
  "モップリンD",
  "ヴァリアブルローラーフォイル",
  "ノーチラス79",
  "リッター4Kカスタム",
  "4Kスコープカスタム",
  "エクスプロッシャーカスタム",
  "オーダーマニューバーレプリカ",
  "オーダーシェルターレプリカ",
  "オーダーシューターレプリカ",
  "オーダーローラーレプリカ",
  "オーダーチャージャーレプリカ",
  "オーダーストリンガーレプリカ",
  "オーダーワイパーレプリカ",
  "オーダースロッシャーレプリカ",
  "オーダーブラスターレプリカ",
  "オーダーブラシレプリカ",
  "オーダースピナーレプリカ",
  "オクタシューターレプリカ",
  "ロングブラスターカスタム",
  "14式竹筒・乙",
  "ハイドラントカスタム",
  "イグザミナー・ヒュー",
  "ガエンFFカスタム",
  "24式張替傘・乙",
  "フルイドV",
  "フルイドVカスタム",
  "デンタルワイパーミント",
  "デンタルワイパースミ",
];
