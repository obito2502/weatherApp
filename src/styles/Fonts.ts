interface FontFamily {
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
}

export interface FontsType {
  roboto: FontFamily;
}

const Fonts = {
  roboto: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    semibold: 'Roboto-Semibold',
    bold: 'Roboto-Bold',
  },
} as const satisfies Record<string, Record<'regular' | 'medium' | 'semibold' | 'bold', string>>;

export const FontsList = ['roboto'];
export type FontName = (typeof FontsList)[number];
export type FontWeight = keyof typeof Fonts.roboto;

export default Fonts;
