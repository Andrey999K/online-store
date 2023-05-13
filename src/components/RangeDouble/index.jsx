import React, {useEffect, useState} from "react";
import { Range, getTrackBackground } from "react-range";
import PropTypes from "prop-types";

const RangeDouble = ({ MIN, MAX, STEP, currentValues, rtl, onChange, onFinalChange }) => {
  const values = currentValues;
  return (
    <div>
      <Range
        values={currentValues}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(currentValue) => onChange(currentValue)}
        onFinalChange={() => onFinalChange("price", { min: values[0], max: values[1] })}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#5EB3FF", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "100%",
              backgroundColor: "#5EB3FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              outline: "none"
            }}
          >
          </div>
        )}
      />
    </div>
  );
};

RangeDouble.propTypes = {
  MIN: PropTypes.number,
  MAX: PropTypes.number,
  STEP: PropTypes.number,
  currentValues: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  rtl: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onFinalChange: PropTypes.func.isRequired
};

RangeDouble.defaultProps = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
  currentValues: [0, 100],
  rtl: false
};

export default RangeDouble;
