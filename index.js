/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const uniqueArray = [];
  for (let i = 0; i < items.length; i += 1) {
    if (uniqueArray.indexOf(items[i]) === -1) {
      uniqueArray.push(items[i]);
    }
  }
  return uniqueArray;
};

module.exports = removeDuplicateItems;
