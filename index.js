module.exports = {
  memorizeId: memorizeId(),
  memorizeQuery: memorizeQuery()
};


function memorizeId(id) {
  let cache = {};

  return function (id) {
    if (id in cache) {
      return cache[id];
    } else {
      return cache[id] = document.getElementById(id);
    }
  }
};

function memorizeQuery(el) {
  let cache = {};

  return function (el) {
    if (el in cache) {
      return cache[el];
    } else {
      return cache[el] = document.querySelectorAll(el);
    }
  }
}




