const removeKFromList = (l, k) => {
  if (l.value === k) {
    l = l.next;
  }

  let curr = l;

  while (curr && curr.next) {
    if (curr.next.value === k) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return l;
};

module.exports = {
  removeKFromList,
};
