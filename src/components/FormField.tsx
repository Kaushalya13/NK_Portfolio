// src/components/FormField.tsx
import React from "react";

interface FormFieldProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  className?: string;
}

export default function FormField({
  icon,
  type,
  placeholder,
  name,
  className = "",
}: FormFieldProps) {
  const commonClasses = "w-full p-4 pl-12 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] placeholder-gray-400";
  
  // Conditionally adjust icon alignment for the textarea
  const iconContainerClasses = `absolute inset-y-0 left-0 flex pl-4 pointer-events-none ${
    type === "textarea" ? "items-start pt-4" : "items-center"
  }`;

  return (
    <div className={`relative ${className}`}>
      <div className={iconContainerClasses}>
        {icon}
      </div>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          name={name}
          rows={5}
          className={`${commonClasses} resize-none`}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={commonClasses}
        />
      )}
    </div>
  );
}