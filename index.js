module.exports = {
  memorizeId: memorizeId(),
  memorizeQuery: memorizeQuery()
};


function memorizeId(id) {
  let cache = {};

  return function (id) {
    if (id in cache) {
      console.log('id exists');
      return cache[id];
    } else {
      console.log('id does not exist, adding to cache!');
      return cache[id] = document.getElementById(id);
    }
  }
};

function memorizeQuery(el) {
  let cache = {};

  return function (id) {
    if (id in cache) {
      console.log('id exists');
      return cache[id];
    } else {
      console.log('id does not exist, adding to cache!');
      return cache[id] = document.querySelectorAll(id);
    }
  }
}

console.log()


