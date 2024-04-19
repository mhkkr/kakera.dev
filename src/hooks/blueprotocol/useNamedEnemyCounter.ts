import { useState, useEffect } from 'react';

// ローカルストレージのキー
const STORAGE_KEY = 'BlueProtocolNamedEnemyCounter';

// ローカルストレージに保存されたデータの型
interface AppData {
  [id: string]: number;
}

const useNamedEnemyCounter = (): [AppData, (id: string, value: number) => void, (id: string) => void, () => void] => {
  // ステートの初期化
  const [storedData, setStoredData] = useState<AppData>({});

  // ローカルストレージからデータを取得する関数
  const getStoredData = (): AppData => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue ? JSON.parse(storedValue) : {};
  };

  // ローカルストレージにデータを設定する関数
  const setLocalStorageData = (data: AppData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // ローカルストレージからデータを削除する関数
  const clearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  // コンポーネントがマウントされた時にローカルストレージからデータを取得
  useEffect(() => {
    const initialData = getStoredData();
    if (initialData) {
      setStoredData(initialData);
    }
  }, []);

  // ローカルストレージにデータを追加する関数
  const addData = (id: string, value: number) => {
    setStoredData((prevData) => {
      const newData = { ...prevData, [id]: value };
      setLocalStorageData(newData);
      return newData;
    });
  };

  // ローカルストレージから指定したIDのデータを削除する関数
  const removeData = (id: string) => {
    setStoredData((prevData) => {
      const newData = { ...prevData };
      delete newData[id];
      setLocalStorageData(newData);
      return newData;
    });
  };

  return [storedData, addData, removeData, clearLocalStorage];
};

export default useNamedEnemyCounter;
