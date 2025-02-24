import React from 'react'

const EXPERIENCE_OPTIONS = ['Yes', 'No']

export default function ExperienceStep({ formData, setFormData }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {EXPERIENCE_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            className={`p-4 rounded-lg border ${
              formData.hasWorkExperience === option
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, hasWorkExperience: option }))}
          >
            {option}
          </button>
        ))}
      </div>
      {formData.hasWorkExperience === 'Yes' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            How many years of work experience do you have?
          </label>
          <input
            type="range"
            name="workExperienceYears"
            min="0"
            max="20"
            step="1"
            className="w-full"
            value={formData.workExperienceYears || 0}
            onChange={(e) => setFormData(prev => ({ ...prev, workExperienceYears: e.target.value }))}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>20+</span>
          </div>
          <div className="text-center mt-2 text-lg font-semibold">
            {formData.workExperienceYears || 0} years
          </div>
        </div>
      )}
    </>
  )
}