function xdwidth(box_up) {
  if (box_up == null) {
    switch (box) {
      case 31:
        a = 3;
        b = 1;
        c = 0;
        d = 0;
        break;
      case 32:
        a = 3;
        b = 0;
        c = 0;
        d = 1;
        break;
      case 35:
        a = 3;
        b = 0;
        c = 1;
        d = 0;
        break;
      case 4:
        a = 3;
        b = 1;
        c = 1;
        d = 0;
        break;
      case 3:
        a = 3;
        b = 0;
        c = 1;
        d = 1;
        break;
      case 41:
        a = 2;
        b = 2;
        c = 2;
        break;
      case 22:
        a = 2;
        b = 2;
        c = 2;
        break;
      case 23:
        a = 2;
        b = 2;
        c = 1;
        break;
      case 45:
        a = 2;
        b = 2;
        c = 1;
        break;
      case 42:
        a = 2;
        b = 2;
        c = 0;
        break;
      case 21:
        a = 2;
        b = 0;
        c = 2;
        break;
      case 24:
        a = 2;
        b = 1;
        c = 2;
        break;
      case 25:
        a = 2;
        b = 2;
        c = 1;
        break;
      case 26:
        a = 1;
        b = 3;
        break;
      case 6:
        a = 4;
        b = 0;
        c = 0;
        d = 0;
        e = 0;
        break;
      case 7:
        a = 2;
        b = 1;
        c = 1;
        break;
      default:
        a = 3;
        b = 1;
        c = 1;
        d = 1;
    }
  } else {
    switch (box_up) {
      case 31:
        a_box_up = 3;
        b_box_up = 1;
        c_box_up = 0;
        d_box_up = 0;
        break;
      case 32:
        a_box_up = 3;
        b_box_up = 0;
        c_box_up = 0;
        d_box_up = 1;
        break;
      case 35:
        a_box_up = 3;
        b_box_up = 0;
        c_box_up = 1;
        d_box_up = 0;
        break;
      case 4:
        a_box_up = 3;
        b_box_up = 1;
        c_box_up = 1;
        d_box_up = 0;
        break;
      case 3:
        a_box_up = 3;
        b_box_up = 0;
        c_box_up = 1;
        d_box_up = 1;
        break;
      case 41:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 2;
        break;
      case 22:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 2;
        break;
      case 23:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 1;
        break;
      case 45:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 1;
        break;
      case 42:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 0;
        break;
      case 21:
        a_box_up = 2;
        b_box_up = 0;
        c_box_up = 2;
        break;
      case 24:
        a_box_up = 2;
        b_box_up = 1;
        c_box_up = 2;
        break;
      case 25:
        a_box_up = 2;
        b_box_up = 2;
        c_box_up = 1;
        break;
      case 26:
        a_box_up = 1;
        b_box_up = 3;
        break;
      case 6:
        a_box_up = 4;
        b_box_up = 0;
        c_box_up = 0;
        d_box_up = 0;
        e = 0;
        break;
      case 7:
        a_box_up = 2;
        b_box_up = 1;
        c_box_up = 1;
        break;
      default:
        a_box_up = 3;
        b_box_up = 1;
        c_box_up = 1;
        d_box_up = 1;
    }
  }
}
/////////////////////////////////

/////////////////////////////////
function check(x, yy, box_xoay) {
  if (box_xoay == null) {
    if (a == 1 && color[yy + 4 + 3][x] == gr) return true;
    if (
      a == 3 &&
      color[yy + 4 + b][x] == gr &&
      color[yy + 4 + c][x + 1] == gr &&
      color[yy + 4 + d][x + 2] == gr
    )
      return true;
    if (a == 2 && color[yy + 4 + b][x] == gr && color[yy + 4 + c][x + 1] == gr)
      return true;
    if (
      a == 4 &&
      color[yy + 4][x] == gr &&
      color[yy + 4][x + 1] == gr &&
      color[yy + 4][x + 2] == gr &&
      color[yy + 4][x + 3] == gr
    )
      return true;
    return false;
  } else {
    xdwidth(box_xoay);
    if ((a_box_up = 1 && color[yy + 4 + 3][x] == gr)) return true;
    if (
      (a_box_up =
        3 &&
        color[yy + 4 + b_box_up][x] == gr &&
        color[yy + 4 + c_box_up][x + 1] == gr &&
        color[yy + 4 + d_box_up][x + 2] == gr)
    )
      return true;
    if (
      (a_box_up =
        2 &&
        color[yy + 4 + b_box_up][x] == gr &&
        color[yy + 4 + c_box_up][x + 1] == gr)
    )
      return true;
    if (
      (a_box_up =
        4 &&
        color[yy + 4][x] == gr &&
        color[yy + 4][x + 1] == gr &&
        color[yy + 4][x + 2] == gr &&
        color[yy + 4][x + 3] == gr)
    )
      return true;
    return false;
  }
}
