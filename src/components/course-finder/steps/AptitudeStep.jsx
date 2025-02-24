import React from 'react'

const APTITUDE_TESTS = ['GRE', 'GMAT', 'None']

const getScoreRange = (test) => {
  switch (test) {
    case 'GRE': return { min: 260, max: 340, step: 1, default: 300 }
    case 'GMAT': return { min: 200, max: 800, step: 10, default: 550 }
    default: return null
  }
}

export default function AptitudeStep({ formData, setFormData }) {
  const scoreRange = formData.aptitudeTest ? getScoreRange(formData.aptitudeTest) : null

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {APTITUDE_TESTS.map((test) => (
          <button
            key={test}
            type="button"
            className={`p-4 rounded-lg border ${
              formData.aptitudeTest === test
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, aptitudeTest: test }))}
          >
            {test}
          </button>
        ))}
      </div>
      {formData.aptitudeTest && formData.aptitudeTest !== 'None' && scoreRange && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            What is your score?
          </label>
          <input
            type="range"
            name="aptitudeScore"
            min={scoreRange.min}
            max={scoreRange.max}
            step={scoreRange.step}
            className="w-full"
            value={formData.aptitudeScore || scoreRange.default}
            onChange={(e) => setFormData(prev => ({ ...prev, aptitudeScore: e.target.value }))}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{scoreRange.min}</span>
            <span>{scoreRange.max}</span>
          </div>
          <div className="text-center mt-2 text-lg font-semibold">
            {formData.aptitudeScore || scoreRange.default}
          </div>
        </div>
      )}
    </>
  )
}