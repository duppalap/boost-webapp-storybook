import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

const useClasses = (stylesElement: any) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses: any =
      typeof stylesElement === 'function' ? stylesElement(theme) : stylesElement;
    const prepared = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value as CSSInterpolation);
    });

    return prepared;
  }, [stylesElement, theme]);
};

export default useClasses;
