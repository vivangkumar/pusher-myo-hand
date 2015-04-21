function jump(p, input) {
  if (input.y > 0 && p.y == 0) {
    p.y = 5
  }
  return p;
}

function gravity(p, delta) {
  if (p.y > 0) {
    p.y = p.y - delta
  }
  return p;
}

function physics(p, delta) {
  p.x = p.x + delta * p.vx;
  p.y = Math.max(0, p.y + delta * p.vy);
  return p;
}

function walk(p, input) {
  p.vx = input.x;
  return p;
}
