import { FC, useCallback } from "react";
import classNames from "classnames";
import styles from "./DateField.module.scss";

interface DateFieldProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  onBlur?: () => void | Promise<void>;
}

/**
 * A date picker component.
 */
const DateField: FC<DateFieldProps> = ({ value, onChange, className, onBlur }) => {
  //--------------------------------------------------------------------------------------------------------------------
  //                                                     CALLBACKS
  //--------------------------------------------------------------------------------------------------------------------
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  //--------------------------------------------------------------------------------------------------------------------
  //                                                   DOM STRUCTURE
  //--------------------------------------------------------------------------------------------------------------------
  return (
    <input
      className={classNames(styles.DateField, className)}
      type="date"
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};

export default DateField;