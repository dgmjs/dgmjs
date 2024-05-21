/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import {
  slate,
  gray,
  red,
  pink,
  purple,
  blue,
  cyan,
  green,
  brown,
  orange,
  yellow,
  lime,
  mint,
  slateDark,
  grayDark,
  redDark,
  pinkDark,
  purpleDark,
  blueDark,
  cyanDark,
  greenDark,
  brownDark,
  orangeDark,
  yellowDark,
  limeDark,
  mintDark,
} from "@radix-ui/colors";

export type Colors = Record<string, string>;

export const themeColors: Record<string, Colors> = {
  light: {
    transparent: "#ffffff00",
    foreground: "#000000",
    background: "#ffffff",
    ...slate,
    ...gray,
    ...red,
    ...pink,
    ...purple,
    ...blue,
    ...cyan,
    ...green,
    ...brown,
    ...orange,
    ...yellow,
    ...lime,
    ...mint,
  },
  dark: {
    transparent: "#00000000",
    foreground: "#ffffff",
    background: "#000000",
    ...slateDark,
    ...grayDark,
    ...redDark,
    ...pinkDark,
    ...purpleDark,
    ...blueDark,
    ...cyanDark,
    ...greenDark,
    ...brownDark,
    ...orangeDark,
    ...yellowDark,
    ...limeDark,
    ...mintDark,
  },
};
