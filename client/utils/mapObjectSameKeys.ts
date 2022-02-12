/**
 * Создает новый объект с теми же ключами с помощью callback
 * С правильной типизацией!
 * */
export default function mapObjectSameKeys<
  O extends Record<string, OValue>,
  N extends Record<keyof O, NValue>,
  OValue = unknown,
  NValue = unknown
>(original: O, callback: (key: keyof O) => NValue): N {
  return Object.keys(original).reduce((clone, key) => {
    return { [key]: callback(key), ...clone };
  }, {} as N);
}
