import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import * as React from 'react';
import { lazy } from 'react';
import { DateRange, DefinedRange } from '../../@types/datePicker';
// components

const DateRangePicker = lazy(() => import('./DateRangePicker'));
export interface DateRangePickerWrapperProps {
  open: boolean;
  toggle?: () => void;
  initialDateRange?: DateRange;
  position?: any;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  onChange: (dateRange: DateRange) => void;
  closeOnClickOutside?: boolean;
  wrapperClassName?: string;
}

const DateRangePickerWrapper: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps
) => {
  const { closeOnClickOutside, toggle, open, wrapperClassName, position = 'relative' } = props;

  const useStyles = makeStyles(() => ({
    dateRangePickerContainer: {
      position: position
    },
    dateRangePicker: {
      position: 'relative',
      zIndex: 1
    },
    dateRangeBackdrop: {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      bottom: 0,
      zIndex: 0,
      right: 0,
      left: 0,
      top: 0
    }
  }));

  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }
    if (toggle) toggle();
  };

  const classes = useStyles();

  const wrapperClasses = classNames(classes.dateRangePicker, wrapperClassName);

  const handleKeyPress = (event: any) => event?.key === 'Escape' && handleToggle();

  return (
    <div className={classes.dateRangePickerContainer}>
      {closeOnClickOutside && open && (
        <div
          role="button"
          tabIndex={0}
          className={classes.dateRangeBackdrop}
          onKeyPress={(e: any) => handleKeyPress(e)}
          onClick={() => handleToggle()}
        />
      )}

      <div className={wrapperClasses}>
        <DateRangePicker {...props} />
      </div>
    </div>
  );
};

export default DateRangePickerWrapper;
