export class Resource {
  id: number;
  parentId?: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
