import React from 'react'

const EDUCATION_LEVELS = ['12th', 'Bachelors', 'Masters']
const BACKLOG_OPTIONS = ['Yes', 'No']

export default function EducationStep({ formData, setFormData }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {EDUCATION_LEVELS.map((education) => (
          <button
            key={education}
            type="button"
            className={`p-4 rounded-lg border ${
              formData.education === education
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, education }))}
          >
            {education}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your marks in %
        </label>
        <input
          type="range"
          name="marks"
          min="0"
          max="100"
          step="1"
          className="w-full"
          value={formData.marks || 50}
          onChange={(e) => setFormData(prev => ({ ...prev, marks: e.target.value }))}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>0</span>
          <span>100</span>
        </div>
        <div className="text-center mt-2 text-lg font-semibold">
          {formData.marks || 50}%
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Do you have any backlogs?
        </label>
        <div className="grid grid-cols-2 gap-4">
          {BACKLOG_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className={`p-4 rounded-lg border ${
                formData.hasBacklogs === option
                  ? 'border-orange-600 bg-orange-50'
                  : 'border-gray-200'
              }`}
              onClick={() => setFormData(prev => ({ ...prev, hasBacklogs: option }))}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {formData.hasBacklogs === 'Yes' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many backlogs do you have?
          </label>
          <input
            type="range"
            name="backlogs"
            min="0"
            max="5"
            step="1"
            className="w-full"
            value={formData.backlogs || 0}
            onChange={(e) => setFormData(prev => ({ ...prev, backlogs: e.target.value }))}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>5+</span>
          </div>
          <div className="text-center mt-2 text-lg font-semibold">
            {formData.backlogs || 0}
          </div>
        </div>
      )}
    </>
  )
}