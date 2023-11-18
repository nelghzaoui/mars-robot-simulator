import { Location } from '../models/location.class';
import { Direction } from '../robot/models/direction.type';

export class Robot extends Location {
  constructor(x: number, y: number, public direction: Direction) {
    super(x, y);
  }

  override toString() {
    return `The robot is at ${this.x},${this.y} facing ${this.direction}`;
  }
}
