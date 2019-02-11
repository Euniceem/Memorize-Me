module.exports = {
  memorizeId: memoizeId(),
  memorizeQuery: memoizeQuery()
};


function memoizeId(id) {
  let cache = {};

  return function (id) {
    if (id in cache) {
      return cache[id];
    } else {
      return cache[id] = document.getElementById(id);
    }
  }
};

function memoizeQuery(el) {
  let cache = {};

  return function (el) {
    if (el in cache) {
      return cache[el];
    } else {
      return cache[el] = document.querySelectorAll(el);
    }
  }
}




