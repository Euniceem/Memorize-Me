window.memoize = (() => {
  let cache = {};

  function memoizeId(id) {

    return function (id) {
      if (id in cache) {
        return cache[id];
      } else {
        return cache[id] = document.getElementById(id);
      }
    }
  };

  function memoizeQuery(el) {

    return function (el) {
      if (el in cache) {
        return cache[el];
      } else {
        return cache[el] = document.querySelector(el);
      }
    }
  }

  return {
    memoizeId: memoizeId(),
    memoizeQuery: memoizeQuery()
  };
})();