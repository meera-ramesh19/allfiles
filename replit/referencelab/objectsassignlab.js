/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
     stores.push(store)
   
    return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
     stores.splice(index,1)
     return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  // let copiedStore = JSON.parse(JSON.stringify(store));
  //  return copiedStore
  let obj={}
  for(let key in store){
    if(Array.isArray(store[key])){
      obj[key]=[].concat(store[key])
    }else{
      obj[key]=store[key]
    }
  }
  console.log(obj)
  return obj
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};

//Antonio

     // easy way \\
     const duplicate = {...store}
     // another way \\
 // const duplicate = Object.assign({}, store)

     // easy way \\
 const newArr = [...store.boardGames]
     // longer way \\
 // const newArr = duplicate.boardGames.splice(store.boardGames)

 duplicate.boardGames = newArr
 const newAdd = {...store.address}
 duplicate.address = newAdd
 
 return duplicate

 //edwinmethod
 let newStore={};
  newStore.name = store.name;
  newStore.boardGames = [];
  newStore.address= {};
  for(let i=0; i< store.boardGames.length; i++){
    newStore.boardGames[i]= store.boardGames[i];
  }
  newStore.address.street= store.address.street;
  newStore.address.city= store.address.city;
  newStore.address.state= store.address.state;
  newStore.address.zip= store.address.zip;
  return newStore;

  // pratima
  let newObj = {};
  Object.assign(newObj, store);
  newObj.boardGames = store.boardGames.slice();
  let addressObj = {}
  Object.assign(addressObj, newObj.address)
  newObj.address = addressObj
  return newObj