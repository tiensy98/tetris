function key() {
  switch (box_up) {
    case 1:
      if ((check(bx - 1, Math.ceil(by) + 1), box_up)) {
        bx--;
        by++;
        box = box_up;
      } else return 0;
      break;
    case 21:
      if ((check(bx, Math.ceil(by) + 1), box_up)) {
        by--;
        box = box_up;
      } else return 0;
      break;
    case 31:
      if ((check(bx, Math.ceil(by) + 1), box_up)) {
        by++;
        box = box_up;
      } else return 0;
      break;
    case 41:
      if ((check(bx + 1, Math.ceil(by) - 1), box_up)) {
        bx++;
        by--;
        box = box_up;
      } else return 0;
      break;
    case 2:
      break;
    case 22:
      break;
    case 32:
      break;
    case 42:
      break;
    case 3:
      break;
    case 23:
      break;
    case 4:
      break;
    case 24:
      break;
    case 5:
      break;
    case 25:
      break;
    case 35:
      break;
    case 45:
      break;
    case 6:
      break;
  }
  if (left) {
    bx--;
    left = false;
  }
  if (right) {
    bx++;
    right = false;
  }
}
