import { Factory } from './factory';

describe('Factory', () => {
  it('should create an instance', () => {
    expect(new Factory()).toBeTruthy();
  });

  it('should accept values in the constructor and return correct OEE == 1', () => {
    const factory = new Factory({
      id: 1,
      title: 'Steel Factory',
      availability: 1,
      performance: 1,
      quality: 1});
      expect(factory.getOveralEquipmentEffectiveness()).toEqual(1);
  });

  it('should accept values in the constructor and return correct OEE = 0.3', () => {
    const factory = new Factory({
      id: 1,
      title: 'Steel Factory',
      availability: 1,
      performance: 1,
      quality: 0.3});
      expect(factory.getOveralEquipmentEffectiveness()).toEqual(0.3);
  });

  it('should accept values in the constructor and return correct OEE = 0.09', () => {
    const factory = new Factory({
      id: 1,
      title: 'Steel Factory',
      availability: 1,
      performance: 0.3,
      quality: 0.3});
      expect(factory.getOveralEquipmentEffectiveness()).toEqual(0.09);
  });

});
