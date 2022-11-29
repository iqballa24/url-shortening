import { useCallback } from "react";
import { ItemsProps } from "../types/RootState";

export default function useLocalStorage(key: string) {
  const storedItems = localStorage.getItem(key);

  if (!storedItems) {
    const data = JSON.stringify([]);
    localStorage.setItem(key, data);
  }

  const dataParse = JSON.parse(storedItems ? storedItems : "[]");
  const initialData = dataParse;

  const saveToLocalStorage = useCallback((data: ItemsProps[]) => {
    data.length > 3 && data.shift();
    const itemsParse = JSON.stringify(data);
    localStorage.setItem(key, itemsParse);
  }, []);

  return { initialData, saveToLocalStorage };
}
