import { useCallback, useState } from "react";
import "./common.css";

interface RandomSelectorProps {
  title: string;
  maxMember: number;
  options: string[];
  description?: string;
}

interface SelecteWeapon {
  member: string;
  weapon: string;
}

export default function RandomSelector(props: RandomSelectorProps) {
  const { title, maxMember, options, description } = props;
  const [members, setMembers] = useState<string[]>([]);
  const [newMember, setNewMember] = useState<string>();
  const [error, setError] = useState<string>();

  /**
   * ユーザーを追加する
   */
  const addMember = useCallback(() => {
    // 未記入の場合は何もしない
    if (!newMember) {
      setError("ユーザー名が記入されていません");
      return;
    }

    // 最大人数入力されているか
    if (members.length === maxMember) {
      setError(`ユーザーは${maxMember}人までです`);
      return;
    }

    setMembers([...members, newMember]);
    setError("");
    setNewMember("");
  }, [members, newMember, setMembers, maxMember]);

  /**
   * ユーザーを削除する
   */
  const deleteMember = useCallback(
    (index: number) => {
      const newMembers = members.filter((_, i) => {
        return i !== index;
      });
      setMembers(newMembers);
    },
    [members, setMembers]
  );
  const [selectWeapons, setSelectWeapons] = useState<SelecteWeapon[]>([]);

  /**
   * ランダムに抽選する関数
   */
  const randomSelect = useCallback(() => {
    if (members.length === 0) {
      setError("ユーザーが入力されていません");
      return;
    }
    const lottery = members.map((m) => {
      const random = Math.floor(Math.random() * options.length);
      return { member: m, weapon: options[random] };
    });
    setSelectWeapons(lottery);
  }, [members, options, setSelectWeapons, setError]);

  /**
   * クリック処理の関数
   */
  const handelEnterClick = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        addMember();
      }
    },
    [addMember]
  );

  return (
    <div className="root__container">
      <h1 className="title">{title}</h1>
      <div>
        <ul>
          <li>抽選は最大で{maxMember}人までです</li>
          {description && <li>{description}</li>}
        </ul>
      </div>
      <section>
        <div className="error__box">{error && <span>{error}</span>}</div>
        <div className="member__input__area">
          <label className="member__name margin__right--10">ユーザー名</label>
          <input
            className="member__name__textarea"
            type="text"
            value={newMember}
            onChange={(e) => {
              setNewMember(e.target.value);
            }}
            onKeyDown={(e) => handelEnterClick(e)}
          />
        </div>
        <div className="buttons">
          <button className="button" onClick={addMember}>
            追加する
          </button>
          <button className="button" onClick={randomSelect}>
            抽選する
          </button>
        </div>
      </section>
      <section>
        <ol>
          {members &&
            members.map((member, index) => {
              return (
                <li>
                  <span className="margin__right--10">{member}</span>
                  <button
                    className="button"
                    onClick={() => deleteMember(index)}
                  >
                    削除
                  </button>
                </li>
              );
            })}
        </ol>
      </section>
      <section>
        <ul>
          {members &&
            selectWeapons.map((e) => {
              return (
                <li>
                  {e.member} : {e.weapon}
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}
