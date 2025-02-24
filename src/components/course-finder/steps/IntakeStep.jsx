// import React from 'react'

// const INTAKE_PERIODS = [
//   'Jan - Mar 2025',
//   'Apr - Jun 2025',
//   'Jul - Sep 2025',
//   'Oct - Dec 2025',
//   'Jan - Mar 2026',
//   'Not Decided'
// ]

// export default function IntakeStep({ formData, setFormData }) {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {INTAKE_PERIODS.map((intake) => (
//         <button
//           key={intake}
//           type="button"
//           className={`p-4 rounded-lg border ${
//             formData.intake === intake
//               ? 'border-orange-600 bg-orange-50'
//               : 'border-gray-200'
//           }`}
//           onClick={() => {
//             setFormData(prev => ({ ...prev, intake }))
//             setTimeout(onNext, 500)
//           }}
//         >
//           {intake}
//         </button>
//       ))}
//     </div>
//   )
// }


import React from 'react'

const INTAKE_PERIODS = [
  'Jan - Mar 2025',
  'Apr - Jun 2025',
  'Jul - Sep 2025',
  'Oct - Dec 2025',
  'Jan - Mar 2026',
  'Not Decided'
]

export default function IntakeStep({ formData, setFormData, onNext }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {INTAKE_PERIODS.map((intake) => (
        <button
          key={intake}
          type="button"
          className={`p-4 rounded-lg border ${
            formData.intake === intake
              ? 'border-orange-600 bg-orange-50'
              : 'border-gray-200'
          }`}
          onClick={() => {
            setFormData(prev => ({ ...prev, intake }))
            onNext()
          }}
        >
          {intake}
        </button>
      ))}
    </div>
  )
}

