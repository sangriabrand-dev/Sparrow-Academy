import React from "react";

/**
 * Reusable FormField Component
 * Supports text, email, tel, select, and textarea with inline error messages.
 */
export default function FormField({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options = [],
  rows = 4,
  className = "",
  helperText,
  disabled = false,
  ...props
}) {
  const fieldId = id || name;

  return (
    <div className={`form-field-group ${error ? "has-error" : ""} ${className}`.trim()}>
      {label && (
        <label htmlFor={fieldId} className="form-field-label">
          {label} {required && <span className="field-required-star">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`form-field-control form-field-textarea ${error ? "field-error-border" : ""}`}
          {...props}
        />
      ) : type === "select" ? (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`form-field-control form-field-select ${error ? "field-error-border" : ""}`}
          {...props}
        >
          {options.map((opt, i) => {
            const val = typeof opt === "string" ? opt : opt.value;
            const lbl = typeof opt === "string" ? opt : opt.label;
            const isOptDisabled = typeof opt === "object" ? opt.disabled : false;
            return (
              <option key={i} value={val} disabled={isOptDisabled}>
                {lbl}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`form-field-control form-field-input ${error ? "field-error-border" : ""}`}
          {...props}
        />
      )}

      {error && <div className="field-error-msg">{error}</div>}
      {helperText && !error && <div className="field-helper-msg">{helperText}</div>}
    </div>
  );
}
