import { Type } from 'fsuipc';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const engine4: OffsetList = {
  engine4ThrottleLever: new Offset({
    value: 0xA54,
    name: 'engine4ThrottleLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 throttle lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r',
  }),
  engine4PropLever: new Offset({
    value: 0xA56,
    name: 'engine4PropLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 prop lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  engine4MixtureLever: new Offset({
    value: 0xA58,
    name: 'engine4MixtureLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 prop lever - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt16,
    permission: 'rw',
  }),
  engine4StarterSwitchPosition: new Offset({
    value: 0xA5A,
    name: 'engine4StarterSwitchPosition',
    category: OffsetCategory.ENGINE,
    description: 'engine4 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
    type: Type.UInt16,
    permission: 'rw',
  }),
  engine4Firing: new Offset({
    value: 0xA5C,
    name: 'engine4Firing',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 combustion',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4N2: new Offset({
    value: 0xA5E,
    name: 'engine4N2',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 N2 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt16,
    permission: 'rw',
  }),
  engine4N1: new Offset({
    value: 0xA60,
    name: 'engine4N1',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 N1 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw',
  }),
  engine4PropRPM: new Offset({
    value: 0xA60,
    name: 'engine4PropRPM',
    category: OffsetCategory.ENGINE,
    description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
    convert: '{VAL} / 16384 / 65536',
    type: Type.Int16,
    permission: 'rw',
  }),
  engine4ThrottleLeverControl: new Offset({
    value: 0xA62,
    name: 'engine4ThrottleLeverControl',
    category: OffsetCategory.ENGINE,
    description: 'engine4 throttle lever control - -4096 to +16384',
    type: Type.Int16,
    permission: 'rw',
  }),
  engine4FuelFlowLbHourSSL: new Offset({
    value: 0xA68,
    name: 'engine4FuelFlowLbHourSSL',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel flow (lb per hour, sea level)',
    convert: '{VAL} / 128',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4AntiIce: new Offset({
    value: 0xA7A,
    name: 'engine4AntiIce',
    category: OffsetCategory.ENGINE,
    description: 'engine4 anti-ice/carb heat active',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4OilTemp: new Offset({
    value: 0xA80,
    name: 'engine4OilTemp',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil temp - celsius',
    convert: 'Math.round({VAL} * 140 / 16384)',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4OilPres: new Offset({
    value: 0xA82,
    name: 'engine4OilPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil pressure - PSI',
    convert: 'Math.round({VAL} * 55 / 16384)',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4PressureRatio: new Offset({
    value: 0xA84,
    name: 'engine4PressureRatio',
    category: OffsetCategory.ENGINE,
    description: 'engine4 pressure ratio',
    convert: '{VAL} * 1.6 / 16384',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4EGT: new Offset({
    value: 0xA86,
    name: 'engine4EGT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 exhaust gas temperature - Trust only on jet engine - celsius',
    convert: 'Math.round({VAL} * 860 / 16384)',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4MP: new Offset({
    value: 0xA88,
    name: 'engine4MP',
    category: OffsetCategory.ENGINE,
    description: 'engine4 manifold pressure - inHg',
    convert: '{VAL} / 1024',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4RPMScaler: new Offset({
    value: 0xA90,
    name: 'engine4RPMScaler',
    category: OffsetCategory.ENGINE,
    description: 'engine4 RPM Scaler - props: used to calculate RPM',
    type: Type.UInt16,
    permission: 'r',
  }),
  engine4OilQuantity: new Offset({
    value: 0xA98,
    name: 'engine4OilQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil quantity - percent',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4Vibration: new Offset({
    value: 0xA9C,
    name: 'engine4Vibration',
    category: OffsetCategory.ENGINE,
    description: 'engine4 vibration',
    convert: 'Math.round({VAL} * 5 / 16384)',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4HydPres: new Offset({
    value: 0xAA0,
    name: 'engine4HydPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 hydraulic pressure - PSI',
    convert: '{VAL} / 4',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4HydQuantity: new Offset({
    value: 0xAA4,
    name: 'engine4HydQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine4 hydraulic quantity - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4CHT: new Offset({
    value: 0xAB0,
    name: 'engine4CHT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 cylinder head temperature - F',
    type: Type.Double,
    permission: 'r',
  }),
  engine4ITT: new Offset({
    value: 0xAB8,
    name: 'engine4ITT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 turbine temperature - C',
    convert: '{VAL} / 16384',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4Torque: new Offset({
    value: 0xABC,
    name: 'engine4Torque',
    category: OffsetCategory.ENGINE,
    description: 'engine4 torque - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4FuelPres: new Offset({
    value: 0xAC0,
    name: 'engine4FuelPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel pressure - PSI',
    convert: '{VAL} / 144',
    type: Type.UInt32,
    permission: 'r',
  }),
  engine4FuelUsedSinceStart: new Offset({
    value: 0xAD4,
    name: 'engine4FuelUsedSinceStart',
    category: OffsetCategory.ENGINE,
    description: 'engine4 used fuel since start - lb',
    type: Type.Single,
    permission: 'r',
  }),
  engine4FuelElapsedTime: new Offset({
    value: 0xAD8,
    name: 'engine4FuelElapsedTime',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - h',
    type: Type.Single,
    permission: 'r',
  }),
  engine4FuelFlowLbHour: new Offset({
    value: 0xAE0,
    name: 'engine4FuelFlowLbHour',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - lb/h',
    type: Type.Double,
    permission: 'r',
  }),
  engine4TorqueFtLb: new Offset({
    value: 0xAE8,
    name: 'engine4TorqueFtLb',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - ft lb',
    type: Type.Single,
    permission: 'r',
  }),
};