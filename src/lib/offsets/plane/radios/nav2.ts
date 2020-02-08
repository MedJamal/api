import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const NAV2: OffsetList = {
  vor2DMEDistance: new Offset({
    value: 0x306,
    name: 'vor2DMEDistance',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME distance - nm',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor2DMESpeed: new Offset({
    value: 0x308,
    name: 'vor2DMESpeed',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME speed - kt',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor2DMETimeToStation: new Offset({
    value: 0x30A,
    name: 'vor2DMETimeToStation',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME time to station - sec',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  nav2Freq: new Offset({
    value: 0x352,
    name: 'nav2Freq',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 frequency',
    type: Type.UInt16,
    convert: 'parseInt(`1` + ({VAL}).toString(16))',
    permission: 'rw',
  }),
  hasNav2: new Offset({
    value: 0x7A4,
    name: 'hasNav2',
    category: OffsetCategory.RADIOS,
    description: 'has NAV2',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r',
  }),
  vor2DmeLatitude: new Offset({
    value: 0x834,
    name: 'vor2DmeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2DmeLongitude: new Offset({
    value: 0x838,
    name: 'vor2DmeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2DmeElevation: new Offset({
    value: 0x83C,
    name: 'vor2DmeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor2ILSLocHeadingTrue: new Offset({
    value: 0x844,
    name: 'vor2ILSLocHeadingTrue',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 ILS Localiser inverse runway heading if VOR 2 is ILS - TRUE - FS2002+ - 180 different to aircraft direction to follow localiser',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor2ILSGlideSlopeAngle: new Offset({
    value: 0x846,
    name: 'vor2ILSGlideSlopeAngle',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 ILS GlideSlope Angle',
    type: Type.Int16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor2LocLatitude: new Offset({
    value: 0x84C,
    name: 'vor2LocLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2LocLongitude: new Offset({
    value: 0x850,
    name: 'vor2LocLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2LocElevation: new Offset({
    value: 0x854,
    name: 'vor2LocElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeLatitude: new Offset({
    value: 0x858,
    name: 'vor2OrILSGlideSlopeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 latitude or NAV2 ILS glideslope latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeLongitude: new Offset({
    value: 0x860,
    name: 'vor2OrILSGlideSlopeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV 2 ILS glideslope longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeElevation: new Offset({
    value: 0x868,
    name: 'vor2OrILSGlideSlopeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS glideslope elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  dme2Distance: new Offset({
    value: 0xC33,
    name: 'dme2Distance',
    category: OffsetCategory.RADIOS,
    description: 'DME2 distance - nm',
    convert: '+{VAL}',
    type: Type.String,
    length: 5,
    permission: 'r',
  }),
  dme2Speed: new Offset({
    value: 0xC38,
    name: 'dme2Speed',
    category: OffsetCategory.RADIOS,
    description: 'DME2 speed - kt',
    convert: '+{VAL}',
    type: Type.String,
    length: 5,
    permission: 'r',
  }),
  nav2MagVar: new Offset({
    value: 0xC42,
    name: 'nav2MagVar',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 mag var',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r',
  }),
  nav2LocNeedlePosition: new Offset({
    value: 0xC59,
    name: 'nav2LocNeedlePosition',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 loc needle position - percent - -ve left +ve right',
    convert: 'Math.round({VAL} / 127 * 100)',
    type: Type.SByte,
    permission: 'r',
  }),
  nav2BackCourseFlags: new Offset({
    value: 0xC5A,
    name: 'nav2BackCourseFlags',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 glideslope flags',
    convert: 'navBackCourseFlags',
    mapping: true,
    type: Type.ByteArray,
    length: 8,
    permission: 'r',
  }),
  nav2ToFrom: new Offset({
    value: 0xC5B,
    name: 'nav2ToFrom',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 TO/FROM flag - values: off/to/from',
    convert: 'vorToFrom',
    mapping: true,
    type: Type.Byte,
    permission: 'r',
  }),
  nav2BearingToVOR: new Offset({
    value: 0xC5C,
    name: 'nav2BearingToVOR',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 relative bearing to VOR - degrees',
    type: Type.UInt16,
    permission: 'r',
  }),
  nav2Obs: new Offset({
    value: 0xC5E,
    name: 'nav2Obs',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 obs setting - degrees',
    type: Type.Int16,
    permission: 'rw',
  }),
  nav2Radial: new Offset({
    value: 0xC60,
    name: 'nav2Radial',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 radial - degrees - MAG for VOR, TRUE for ILS LOC',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.UInt16,
    permission: 'r',
  }),
  nav2SignalStrength: new Offset({
    value: 0xC62,
    name: 'nav2SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 signal strength',
    type: Type.UInt32,
    permission: 'r',
  }),
  nav2GlideslopeNeedlePosition: new Offset({
    value: 0xC6E,
    name: 'nav2GlideslopeNeedlePosition',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 glideslope needle position - percent - -ve up +ve down',
    convert: 'Math.round({VAL} / 127 * 100)',
    type: Type.SByte,
    permission: 'r',
  }),
  nav2GlideslopeActive: new Offset({
    value: 0xC6F,
    name: 'nav2GlideslopeActive',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 glideslope flag',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r',
  }),
  nav2Capabilities: new Offset({
    value: 0xC70,
    name: 'nav2Capabilities',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 capabilities',
    convert: 'navCapabilities',
    mapping: true,
    type: Type.ByteArray,
    length: 8,
    permission: 'r',
  }),
  nav2CDI: new Offset({
    value: 0x2AB4,
    name: 'nav2CDI',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 course deviation needle - percent - -ve left +ve right',
    convert: 'Math.round({VAL} * 100 / 127)',
    type: Type.Single,
    permission: 'r',
  }),
  nav2GSI: new Offset({
    value: 0x2AB8,
    name: 'nav2GSI',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 glideslope indicator - percent - -ve left +ve right',
    convert: 'Math.round({VAL} * 100 / 127)',
    type: Type.Single,
    permission: 'r',
  }),
};