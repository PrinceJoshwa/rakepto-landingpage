import React from 'react'
import InitialStep from './steps/InitialStep'
import EnglishTestStep from './steps/EnglishTestStep'
import EducationStep from './steps/EducationStep'
import ExperienceStep from './steps/ExperienceStep'
import AptitudeStep from './steps/AptitudeStep'
import IntakeStep from './steps/IntakeStep'
import { countries, studyAreas, degrees } from '../course-finder/constants/options'

export default function StepContent({ step, formData, setFormData, onNext }) {
  const renderFields = () => {
    switch (step.id) {
      case 'initial':
        return <InitialStep formData={formData} setFormData={setFormData} />

      case 'destination':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {countries.map((country) => (
              <button
                key={country.name}
                type="button"
                className={`p-4 rounded-lg border ${
                  formData.country === country.name
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200'
                }`}
                onClick={() => {
                  setFormData(prev => ({ ...prev, country: country.name }))
                  setTimeout(onNext, 500)
                }}
              >
                <span className="text-2xl mr-2">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        )

      case 'englishTest':
        return <EnglishTestStep formData={formData} setFormData={setFormData} />

      case 'degree':
        return (
          <div className="grid grid-cols-3 gap-4">
            {degrees.map((degree) => (
              <button
                key={degree}
                type="button"
                className={`p-4 rounded-lg border ${
                  formData.degree === degree
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200'
                }`}
                onClick={() => {
                  setFormData(prev => ({ ...prev, degree }))
                  setTimeout(onNext, 500)
                }}
              >
                {degree}
              </button>
            ))}
          </div>
        )

      case 'intake':
        return <IntakeStep formData={formData} setFormData={setFormData} onNext={onNext} />

      case 'studyArea':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {studyAreas.map((area) => (
              <button
                key={area.name}
                type="button"
                className={`p-4 rounded-lg border ${
                  formData.studyArea === area.name
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200'
                }`}
                onClick={() => {
                  setFormData(prev => ({ ...prev, studyArea: area.name }))
                  setTimeout(onNext, 500)
                }}
              >
                <area.icon className="w-6 h-6 mb-2 text-orange-500" />
                <span>{area.name}</span>
              </button>
            ))}
          </div>
        )

      case 'education':
        return <EducationStep formData={formData} setFormData={setFormData} />

      case 'experience':
        return <ExperienceStep formData={formData} setFormData={setFormData} />

      case 'aptitude':
        return <AptitudeStep formData={formData} setFormData={setFormData} />

      default:
        return null
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onNext()
    }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {step.title}
      </h2>
      {renderFields()}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  )
}