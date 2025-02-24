import React from 'react'

const ENGLISH_TESTS = ['TOEFL', 'IELTS', 'PTE', 'None']

const getScoreRange = (test) => {
  switch (test) {
    case 'TOEFL': return { min: 0, max: 120, step: 1, default: 60 }
    case 'IELTS': return { min: 0, max: 9, step: 0.5, default: 6 }
    case 'PTE': return { min: 10, max: 90, step: 1, default: 45 }
    default: return null
  }
}

export default function EnglishTestStep({ formData, setFormData }) {
  const scoreRange = formData.englishTest ? getScoreRange(formData.englishTest) : null

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {ENGLISH_TESTS.map((test) => (
          <button
            key={test}
            type="button"
            className={`p-4 rounded-lg border ${
              formData.englishTest === test
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, englishTest: test }))}
          >
            {test}
          </button>
        ))}
      </div>
      {formData.englishTest && formData.englishTest !== 'None' && scoreRange && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select your score
          </label>
          <input
            type="range"
            name="englishScore"
            min={scoreRange.min}
            max={scoreRange.max}
            step={scoreRange.step}
            className="w-full"
            value={formData.englishScore || scoreRange.default}
            onChange={(e) => setFormData(prev => ({ ...prev, englishScore: e.target.value }))}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{scoreRange.min}</span>
            <span>{scoreRange.max}</span>
          </div>
          <div className="text-center mt-2 text-lg font-semibold">
            {formData.englishScore || scoreRange.default}
          </div>
        </div>
      )}
    </>
  )
}