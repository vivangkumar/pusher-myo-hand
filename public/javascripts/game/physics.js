function jump(p, input) {
  if (input.y < 0 && p.y == 225) {
    p.vy = 6
  }
  return p;
}

function gravity(p, delta) {
  if (p.y < 225) {
    p.vy = p.vy + (delta /10)
  }
  return p;
}

function physics(p, delta) {
  p.x = p.x + delta * p.vx;
  p.y = Math.min(225, p.y + delta * p.vy);
  return p;
}

function walk(p, input) {
  p.vx = input.x;
  return p;
}
